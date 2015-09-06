/*
 * @desc    1px border
 * @author  fj10854
 * @email   angusfu1126@qq.com
 * @date    2015-09-06 11:03:34
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
        global.slimBorder = mod.exports;
    }
})(this, function (exports, module) {
    
    var cvs  = document.createElement('canvas'),
        ctx  = cvs.getContext('2d'),
        head = document.documentElement.firstElementChild,
        cssText = '',
        cssTmpl = "\
    .__klass__ {\r\n\
        border-width: __border__;\r\n\
        border-style: solid;\r\n\
        border-color: __color__;\r\n\
    }\r\n\
    @media screen and (-webkit-min-device-pixel-ratio: 1.5) {\r\n\
        .__klass__ {\r\n\
            -webkit-border-image:url(__imgsrc__) 2 2 stretch;\r\n\
                    border-image:url(__imgsrc__) 2 2 stretch;\r\n\
        }\r\n\
    }\
    ";

    var _id = 0,

        guid = function () {
            return ++_id;
        },

        getStyle = function(ele, prop) {
            return prop ? getComputedStyle(ele, '').getPropertyValue(prop) : getComputedStyle(ele, '');
        };

    function slimBorder(ele){
        var style    = document.createElement('style'),
            curStyle = getStyle(ele),
            color    = curStyle['borderColor'] || '#dcdcdc';

        ctx.fillStyle = color;
        ctx.clearRect(0, 0, 5, 5);
        ctx.fillRect(0, 0, 1, 5);
        ctx.fillRect(4, 0, 5, 5);
        ctx.fillRect(0, 0, 5, 1);
        ctx.fillRect(0, 4, 5, 5);

        var tempObj = {
            imgsrc : cvs.toDataURL("image/png"),
            color  : color,
            klass  : 'sbd_' + guid(),
            border : [  curStyle['borderTopWidth']   , curStyle['borderRightWidth'],
                        curStyle['borderBottomWidth'], curStyle['borderLeftWidth']
                     ].join(' ').replace(/0px/g, '0')
        };
        
        cssText += cssTmpl.replace(/__([a-zA-Z0-9]+)__/g, function(match, g1) {
            return tempObj[g1];
        });
        
        if ('classList' in ele){
            ele.classList.add(tempObj.klass)
        } else {
            (ele.className = !klass ? tempObj.klass : klass + ' ' + tempObj.klass);
        }

    }

    function slimBorderAll(selector) {
        var elems = null,
            style = document.createElement('style');

        if (typeof selector !== 'string') {
            throw new Error('The selector must be a string!');
        }
        
        cvs.width  = 5;
        cvs.height = 5;

        elems = [].slice.call(document.querySelectorAll(selector));

        elems.forEach(function(ele, idx){
            slimBorder(ele);
        });

        if (style.styleSheet) {
            if (!dstyle.styleSheet.disabled) {
                style.styleSheet.cssText = cssText;
            }
        } else {
            try {
                style.innerHTML = cssText;
            } catch (f) {
                style.innerText = cssText;
            }
        }

        head.appendChild(style);
    }

    module.exports = slimBorderAll;
});
