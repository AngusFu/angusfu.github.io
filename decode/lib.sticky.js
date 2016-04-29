/**
 * 本文件源自阿里压缩版
 */

!function(window, document, winLib) {
    // args: window, document, window.lib

    // 检查是否是纯对象
    function isPlainObject(obj) {
        return null != obj && "object" == typeof obj && Object.getPrototypeOf(obj) == Object.prototype
    }

    // 函数节流
    // 只有调用间隔超过一定的时间
    // 才会执行函数
    function throttle(func, time) {
        var self,
            args,
            returnVal,
            timer = null,
            lastTime = 0,

            func_2 = function() {
                lastTime = Date.now();
                timer = null;
                returnVal = func.apply(self, args)
            };

        return function() {
            var now = Date.now(),
                diff = time - (now - lastTime);
            
            self = this;
            args = arguments;

            if (diff <= 0) {
                clearTimeout(timer);
                timer = null;

                lastTime = now;

                returnVal = func.apply(self, args);
            } else {

                if (!timer) {
                    timer = setTimeout(func_2, diff)
                }
            }

            return returnVal;
        }
    }

    // 显然这是构造css字符串的
    // {a:22, b:333} ==> "a:22;b:333;"
    function makeCssString(obj) {
        var css = "";
        
        Object.keys(obj).forEach(function(key) {
            css += key + ":" + obj[key] + ";"
        });

        return css;
    }


    function sticky(elem, settings) {

        if (!settings && isPlainObject(elem)) {
            settings = elem;
            elem = settings.element;
        }

        settings = settings || {};

        // 字符串选择器的情况
        if (elem.nodeType != document.ELEMENT_NODE &&  typeof elem === "string") {
            elem = document.querySelector(elem);
        }

        var self = this;

        self.element = elem;
        self.top = settings.top || 0;
        self.withinParent = (settings.withinParent === undefined) ? false : settings.withinParent;

        self.init();
    }


    var toInt = window.parseInt,
        ua = navigator.userAgent,
        isFF = !!ua.match(/Firefox/i),
        isIE = !!ua.match(/IEMobile/i),

        // cssText prefix
        cssPrefix = isFF ? "-moz-" : isIE ? "-ms-" : "-webkit-",

        // css prefix in js
        jPrefix = isFF ? "Moz" : isIE ? "ms" : "webkit",

        supportCssSticky = (function() {
            var div = document.createElement("div"),
                style = div.style;

            style.cssText = "position:" + cssPrefix + "sticky; position:sticky;";

            return style.position.indexOf("sticky") > -1;
        })();

    sticky.prototype = {
        constructor: sticky,

        init: function() {
            var self = this,
                elem = self.element,
                style = elem.style;

            style[jPrefix + "Transform"] = "translateZ(0)";
            style.transform = "translateZ(0)";
            self._originCssText = style.cssText;

            if (supportCssSticky) {
                style.position = cssPrefix + "sticky";
                style.position = "sticky";
                style.top = self.top + "px";
            } else {
                self._simulateSticky();
                self._bindResize();
            }
        },

        // resize的时候 重新调整
        _bindResize: function() {
            var self = this,

                isAndroid = /android/gi.test(navigator.appVersion),

                event = self._resizeEvent = "onorientationchange" in window ? "orientationchange" : "resize",
                
                resizeHandler = self._resizeHandler = function() {
                    setTimeout(function() {
                        self.refresh();
                    }, isAndroid ? 200 : 0)
                };

            window.addEventListener(event, resizeHandler, false);
        },

        // 刷新
        refresh: function() {
            var self = this;

            if (!supportCssSticky) {
                self._detach();
                self._simulateSticky();
            }
        },

        // 添加占位元素
        _addPlaceholder: function(style) {
            var placeHolderDiv,
                self = this,
                elem = self.element,
                pos = style.position;

            if (["static", "relative"].indexOf(pos) > -1) {

                placeHolderDiv = self._placeholderElement = document.createElement("div");

                var width  = toInt(style.width) + toInt(style.marginLeft) + toInt(style.marginRight),
                    height = toInt(style.height);

                if ("border-box" != style.boxSizing) {
                    width += toInt(style.borderLeftWidth)
                            + toInt(style.borderRightWidth)
                            + toInt(style.paddingLeft)
                            + toInt(style.paddingRight);

                    height += toInt(style.borderTopWidth)
                            + toInt(style.borderBottomWidth) 
                            + toInt(style.paddingTop)
                            + toInt(style.paddingBottom);
                }

                placeHolderDiv.style.cssText = makeCssString({
                    display: "none",
                    visibility: "hidden",
                    width: width + "px",
                    height: height + "px",
                    margin: 0,
                    "margin-top": style.marginTop,
                    "margin-bottom": style.marginBottom,
                    border: 0,
                    padding: 0,
                    "float": style["float"] || style.cssFloat
                });

                elem.parentNode.insertBefore(placeHolderDiv, elem);
            }

            return placeHolderDiv;
        },

        _simulateSticky: function() {
            var self = this,

                elem = self.element,
                elemTop = self.top,

                elemStyle = elem.style,
                bbox = elem.getBoundingClientRect(),
                currentStyle = getComputedStyle(elem, ""),

                parentNode = elem.parentNode,
                parentCurrentStyle = getComputedStyle(parentNode, ""),

                placeHolder = self._addPlaceholder(currentStyle),

                withinParent = self.withinParent,

                originCssText = self._originCssText,

                // 本方法_simulateSticky调用时
                // 元素距离页面顶部的距离
                // 减去元素固定时离窗口顶部的高度
                elemTopOnFuncCall = bbox.top - elemTop + window.pageYOffset,

                absoluteTop = parentNode.getBoundingClientRect().bottom
                        - toInt(parentCurrentStyle.paddingBottom)
                        - toInt(parentCurrentStyle.borderBottomWidth)
                        - toInt(currentStyle.marginBottom)
                        - bbox.height
                        - elemTop
                        + window.pageYOffset,

                fixedCssText = originCssText + makeCssString({
                    position: "fixed",
                    top: elemTop + "px",
                    width: currentStyle.width,
                    "margin-top": 0
                }),

                absoluteCssText = originCssText + makeCssString({
                    position: "absolute",
                    top: absoluteTop + "px",
                    width: currentStyle.width
                }),

                S = 1,

                _ = self._scrollHandler = throttle(function() {
                    // 页面滚动时的即时滚上去的高度
                    var pageYOffset = window.pageYOffset;

                    // 元素不在指定的范围内了
                    if (elemTopOnFuncCall > pageYOffset) {
                        if (S != 1) {
                            elemStyle.cssText = originCssText;
                            placeHolder && (placeHolder.style.display = "none");
                            S = 1;
                        }
                    } else {
                        if (!withinParent && pageYOffset >= elemTopOnFuncCall
                                || withinParent && pageYOffset >= elemTopOnFuncCall
                                        && absoluteTop > pageYOffset
                        ) {
                            if (S != 2) {
                                elemStyle.cssText = fixedCssText;

                                if (placeHolder && S != 3) {
                                    placeHolder.style.display = "block";
                                }
                                
                                S = 2;
                            }
                        } else {
                            if (withinParent && S != 3) {
                                elemStyle.cssText = absoluteCssText;
                                
                                if (placeHolder && S != 2) {
                                    placeHolder.style.display = "block";
                                }
                                
                                S = 3;
                            }
                        }

                    }

                }, 100);

            window.addEventListener("scroll", _, false);

            if (window.pageYOffset >= elemTopOnFuncCall) {
                var event = document.createEvent("HTMLEvents");
                event.initEvent("scroll", true, true);
                window.dispatchEvent(event);
            }
        },

        // 恢复原有的css
        // 销毁占位元素
        // 解除绑定事件
        _detach: function() {
            var self = this,
                elem = self.element;

            elem.style.cssText = self._originCssText;

            if (!supportCssSticky) {
                var placeHolder = self._placeholderElement;

                placeHolder && elem.parentNode && elem.parentNode.removeChild(placeHolder);

                window.removeEventListener("scroll", t._scrollHandler, false);
            }

        },

        // 销毁的时候
        // 去掉添加的css相关属性
        // 对相关事件解绑
        destroy: function() {
            var self = this;
            var style = self.element.style;

            self._detach();

            style.removeProperty(cssPrefix + "transform");
            style.removeProperty("transform");

            if (!supportCssSticky) {
                window.removeEventListener(self._resizeEvent, self._resizeHandler,  false);
            }
        }
    };

    winLib.sticky = sticky;

}(window, document, window.lib || (window.lib = {}));
