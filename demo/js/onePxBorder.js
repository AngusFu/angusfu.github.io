
/*
 * @desc    1px border with borderRadius
 * @author  fj10854
 * @email   angusfu1126@qq.com
 * @date    2015-09-02 17:17:43
 *
 * @demo    http://output.jsbin.com/vemocehihu
 */

!(function (global, factory) {
   if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.roundSharpBorder = mod.exports;
    }
})(this, function (exports, module) {

    var _id = 0;

    var head = document.documentElement.firstElementChild,
        cssTmpl = ''
            + '.__klass__:before {'
                + 'content: "";'
                + 'position: absolute;'
                + 'left: 0;'
                + 'top: 0;'
                + '-webkit-box-sizing: border-box;'
                + 'box-sizing: border-box;'
                + 'width: 100%;'
                + 'height: 100%;'
                + 'border: __border__;'
                + 'border-radius: __radius__;'
            + '}'
             
            + '@media screen and (-webkit-min-device-pixel-ratio: 2) {'
                + '.__klass__:before {'
                    + 'width: 200%;'
                    + 'height: 200%;'
                    + 'border: __border__;'
                    + 'border-radius: __radiusx2__;'
                    + '-webkit-transform-origin: 0 0;'
                    + 'transform-origin: 0 0;'
                    + '-webkit-transform: scale(.5);'
                    + 'transform: scale(.5);'
                + '}'
            + '}';

    var addCSSText = function (cssText) {
        var style = document.createElement('style');

        head.appendChild(style);

        if (style.styleSheet) {
            if (!style.styleSheet.disabled) {
                style.styleSheet.cssText = cssText;
            }
        } else {
            try {
                style.innerHTML = cssText;
            } catch (f) {
                style.innerText = cssText;
            }
        }

        style = null;
    }

    var slice = [].slice,

        guid = function () {
            return ++_id;
        },

        getStyle = function(ele, prop) {
            return prop ?　getComputedStyle(ele, '').getPropertyValue(prop) : getComputedStyle(ele, '');
        },

        toInt = function(expr) {
            var num = parseInt(expr, 10);
            return isNaN(num) ? 0 : num;
        },

        trim = function (str) {
            return str.trim && str.trim() || str.replace(/^\s+|\s+$/g, '');
        };

    function sharpBorder(ele) {

        if (!(typeof ele === 'object' && ele.nodeType && +ele.nodeType === 1)) {
            throw new Error('Element needed!');
        }

        var curStyle = getStyle(ele),
            eleStyle = ele['style'],
            pos      = curStyle['position'],
            radius   = toInt(curStyle['borderRadius']) || 0,
            bWidth   = toInt(curStyle['borderWidth']) || 1,
            bColor   = curStyle['borderColor'] || '#000',
            bStyle   = curStyle['borderStyle'],
            tempObj  = null,
            eleCSS   = '',
            klass    = trim(ele.className);

        bStyle = (bStyle === 'none' || !!bStyle) ? 'solid' : bStyle;

        if (!~'relative absolute fixed'.indexOf(pos)) {
            eleStyle['position'] = 'relative';
        }        

        eleStyle['borderWidth'] = 0;

        tempObj = {
            border   : bWidth + 'px ' + bStyle + ' ' + bColor,
            radius   : radius ? radius + 'px' : 0,
            radiusx2 : radius ? radius * 2 + 'px' : 9,
            klass    : 'rsb_' + guid()
        };

        if ('classList' in ele){
            ele.classList.add(tempObj.klass)
        } else {
            (ele.className = !klass ? tempObj.klass : klass + ' ' + tempObj.klass);
        }

        eleCSS = cssTmpl.replace(/__([a-zA-Z0-9]+)__/g, function(match, g1) {
            return tempObj[g1];
        });

        addCSSText(eleCSS);

        curStyle = null;
        eleStyle = null;
        tempObj  = null;
    }

    function sharpBorderAll(selector) {

        var elems = null;

        if (typeof selector !== 'string') {
            throw new Error('The selector must be a string!');
        }
        
        elems = slice.call(document.querySelectorAll(selector));

        elems.forEach(function(ele, idx){
            sharpBorder(ele);
        });

        elems = null;
    }

    module.exports = sharpBorderAll;
});

