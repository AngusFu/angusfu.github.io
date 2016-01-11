/**
 * @desc    日期范围选择
 * @author  angusfu1126
 * @email   angusfu1126@qq.com
 * @date    2015-12-03 11:04:16
 */

if (typeof Array.prototype.indexOf != "function") {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var k = 0, length = this.length; k < length; k++) {
            if (k >= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

var Calendar = (function() {
   function parseDateString(str) {
       str = str.split(/[\/-]/);
       return new Date(str);
   }

   function getOneMonthInfo(str) {
       var year, month, info;

       str = str.split(/[\/-]/);

       year = +str[0];
       month = +str[1];

       info = {
           year: year,
           month: month,
           // 给上个月留多少空
           prevDays: (new Date(year, month - 1)).getDay(),
           // 本月多少天
           nowDays: (new Date(year, month, 0)).getDate(),
           // 下个月留多少空
           nextDays: 6 - (new Date(year, month, 0)).getDay()
       };

       return info;
   }

   function makeDateStr(y, m, i) {
       m = m > 9 ? m : '0' + m;
       i = i > 9 ? i : '0' + i;

       return [y, m, i].join('-');
   }

   function getDateStamp(y, m, d) {
       var regex = /^(\d{4})([01][0-9])([0-3][0-9])$/;
       var match = regex.exec(y);

       if (match) {
           match.shift();
           y = match.join('/');
       }

       return arguments.length > 1 ? +new Date(+y, +m - 1, +d) : +new Date(y.replace(/\-/g, '/'));
   }

   function stampToString(stamp) {
       var date = new Date(stamp),
           m = date.getMonth() + 1,
           d = date.getDate();
       m = m < 10 ? '0' + m : m;
       d = d < 10 ? '0' + d : d;
       return [date.getFullYear(), m, d].join('-');
   }

   // 将各个日期范围变成单个的日期集合
   function dateRangesTransform(arr) {
       var dateArr = [];
       var temp = null,
           oneDay = 24 * 60 * 60 * 1000,
           s1,
           s2;

       for (var i = 0, il = arr.length; i < il; i++) {
           temp = arr[i];
           s1 = getDateStamp(temp[0]);
           s2 = getDateStamp(temp[1]);
           while (s1 <= s2) {
               dateArr.push(stampToString(s1));
               s1 += oneDay;
           }
       }

       return dateArr;
   }

   function isDateValid(dateStr, dateArr) {
       return !!~dateArr.indexOf(dateStr);
   }

    function Calendar(cfg) {
        // add HTML
        this.addHTML();

        var now = cfg.openMonth ? parseDateString(cfg.openMonth) : new Date();
        this.now = now;
        this.makeYear();

        this.DATE_ARR = dateRangesTransform(cfg.availRange);
        this.callback = cfg.callback;

        var calendar = this;
        
        $('.next').click(function() {
            calendar.next();
        });

        $('.prev').click(function() {
            calendar.prev();
        });

        this.go(now.getFullYear(), now.getMonth() + 1, cfg.triggerElem || $({}));
    }

    Calendar.prototype.addHTML = function(str) {
        var html = "<div class=\"page-mask\"></div>\n<div class=\"my-calendar-wrap\">\n<a href=\"javascript:;\" class=\"close-pop\"></a>\n<div class=\"pop-head\">选择日期</div>\n<div class=\"my-calendar-con\">\n<div class=\"my-calendar\">\n<div class=\"my-time-change\">\n<a href=\"javascript:;\" class=\"prev\">上一月</a>\n<select id=\"myYearOne\"></select>\n<select id=\"myMonthOne\">\n<option value=\"1\">1月</option>\n<option value=\"2\">2月</option>\n<option value=\"3\">3月</option>\n<option value=\"4\">4月</option>\n<option value=\"5\">5月</option>\n<option value=\"6\">6月</option>\n<option value=\"7\">7月</option>\n<option value=\"8\">8月</option>\n<option value=\"9\">9月</option>\n<option value=\"10\">10月</option>\n<option value=\"11\">11月</option>\n<option value=\"12\">12月</option>\n</select>\n<a href=\"javascript:;\" class=\"next\">下一月</a>\n</div>\n<div class=\"my-calendar-1\"></div>\n</div>\n</div>\n</div>";
        
        $('.my-calendar-wrap, .page-mask').remove();

        $('body').append(html);

        $('.close-pop, .page-mask').click(function () {
            $('.my-calendar-wrap').fadeOut();
            $('.page-mask').fadeOut();
        });
    };

    Calendar.prototype.buildOneMonthString = function(str) {
        var info = getOneMonthInfo(str),
            html = '',
            y = info.year,
            m = info.month,
            i = 0,
            n = info.nowDays;

        html = '<b>' + '日一二三四五六'.split('').join('</b><b>') + '</b>'

        html += (new Array(info.prevDays + 1)).join('<p></p>');

        var dateStamp, dateStr;

        var dateArr = this.DATE_ARR;

        while (i++ < n) {
            dateStamp = getDateStamp(y, m, i);
            dateStr = makeDateStr(y, m, i);

            html += ('<p ' + (isDateValid(dateStr, dateArr) ? 'class="cvalid"' : '') + ' stamp="' + dateStamp + '" ymd="' + dateStr + '"><i>' + i + '</i></p>')
        }

        html += (new Array(info.nextDays + 1)).join('<p></p>');

        var emptyNum = 42 - (info.nowDays + info.prevDays + info.nextDays);
        while (emptyNum) {
            html += '<p></p>';
            emptyNum--;
        }

        return html;
    };

    Calendar.prototype.makeYear = function() {

        var that = this;

        var start = +this.now.getFullYear(),
            maxYear = +$('#my-max-year').val() || 2049,
            minYear = +$('#my-min-year').val() || (new Date()).getFullYear(),
            str = '';

        start = minYear;

        this.maxYear = maxYear;
        this.minYear = minYear;

        while (start <= maxYear) {
            str += '<option value="' + start + '">' + start + '年</option>';
            start++;
        }

        var $yearOne = $('#myYearOne'),
            $monthOne = $('#myMonthOne');

        $yearOne.append(str);

        $yearOne.on('change', changeOne);
        $monthOne.on('change', changeOne);

        function changeOne() {
            that.go(parseInt($yearOne.val()), parseInt($monthOne.val()));
        }
    };

    Calendar.prototype.init = function(triggerElem) {
        this.triggerElem = triggerElem;

        var now = this.now;
        var str1 = this.buildOneMonthString(getDateString(now));

        $('.my-calendar-1').empty().append(str1);
        $('#myYearOne').val(now.getFullYear());
        $('#myMonthOne').val(now.getMonth() + 1);

        this.addEvent();

        function getDateString(date) {
            var year = date.getFullYear(),
                month = date.getMonth();

            return [year, month + 1].join('/');
        }
    };

    Calendar.prototype.next = function() {
        var now = this.now;
        var year = now.getFullYear(),
            month = now.getMonth() + 1,
            maxYear = this.maxYear;

        if (year === maxYear && month === 11 || year > maxYear) {
            $('.next').hide();
            return;
        } else {
            $('.next').show();
        }
        $('.prev').show();

        this.go(now.getFullYear(), now.getMonth() + 2, this.triggerElem);
    };

    Calendar.prototype.prev = function() {
        var now = this.now;
        var year = now.getFullYear(),
            month = now.getMonth() + 1,
            minYear = this.minYear;

        if (year === minYear && month === 1 || year < minYear) {
            $('.prev').hide();
            return;
        } else {
            $('.prev').show();
        }
        $('.next').show();

        this.go(now.getFullYear(), now.getMonth(), this.triggerElem);
    };

    Calendar.prototype.go = function(year, month, triggerElem) {
        this.now = new Date(+year, +month - 1);
        this.init(triggerElem);
        $('.my-calendar-wrap').fadeIn();
        $('.page-mask').fadeIn();
    };

    Calendar.prototype.addEvent = function() {
        var calendar = this;
        $('.my-calendar-1').off('click').on('click', '.cvalid', function(e) {
            var ymd = $(this).attr('ymd');
            calendar.callback(ymd, calendar.triggerElem);
            $('.my-calendar-wrap').fadeOut();
            $('.page-mask').fadeOut();
        });
    };

    return Calendar;

})();


/**
 * 配置参数如下
 *     opt.dateRange
 *     opt.openMonth
 *     opt.callback
 */
$.fn.pickDate = function (opt) {
    this.each(function (idx, elem) {
        $(elem).click(function (e) {
            e.preventDefault();
            new Calendar({
                // 可用日期范围
                availRange: opt.dateRange,

                // 打开日历中的哪一年月
                // 可以不传 则打开今天所在月份
                openMonth: opt.openMonth || null,

                // 触发元素
                // 不传则为空
                triggerElem: elem,

                // 选择日期的回调
                // @param {String} date   'yyyy-mm-dd'
                // @param {DOM}    elem   触发日历的节点
                callback: function (date, elem) {
                    opt.callback.call(null, date, elem);
                }
            });
        });
    });
}

