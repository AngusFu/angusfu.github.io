/**
 * @desc    multiple file uploader
 * @author  fj10854
 * @email   angusfu1126@qq.com
 * @date    2016-01-11 14:34:41
 */
!(function ($) {

    // polyfill
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


    /**
     * 利用 $ 的 on和off
     * 完成订阅者模式
     */
    function createEventEmiter(obj) {
        var o = $({});

        obj.on = function() {
          o.on.apply(o, arguments);
        };

        obj.off = function() {
          o.off.apply(o, arguments);
        };

        obj.trigger = function() {
          o.trigger.apply(o, arguments);
        };
    }

    /**
     * 数组去重
     * @param  {Array} arr 待去重数组
     * @return {Array}
     */
    function uniqueArray(arr) {
        var result = [],
            helper = {},
            temp;

        for ( var i = 0, il = arr.length; i < il; i++ ) {
            temp = arr[i];

            if (!helper[temp]) {
                result.push(temp);
                helper[temp] = true;
            }
        }

        return result;
    }

    /**
     * 常见文件类名称兼容
     * 尤其是 MS Office 文档 如 doc 和 docx
     * 又如 jpg 与 jpeg
     * @param  {Array} types 文件类型数组
     */
    function fileTypeCompat(types) {
        var len = types.length,
            result = [],
            temp = null;

        var msOfficeFiles = ['doc', 'ppt', 'xls'];

        while (len--) {
            temp = types[len];

            if (!!~msOfficeFiles.indexOf(temp)) {
                result.push(temp + 'x');
            }

            result.push(temp);

            if (temp === 'jpg') {
                result.push('jpeg');
            } else if (temp === 'jepg') {
                result.push('jpg');
            } else if (temp === 'svg') {
                result.push('xml+svg');
            }
        }

        return uniqueArray(result);
    }


    /**
     * @constructor
     */
    function MultiUploader(config) {
        this.trigger = config.trigger;
        this.url = config.url;
        this.maxFileSize = config.maxSize || Number.MAX_SAFE_INTEGER;
        this.acceptTypes = fileTypeCompat(config.types || ['*']);
        this.maxNum  = config.maxNum || Number.MAX_SAFE_INTEGER;
        this.FILES_QUEUE = [];

        this.success = config.success;
        this.progress = config.progress;
        this.error = config.error;
        this.beforeQueue = config.beforeQueue;
        this.afterQueue = config.afterQueue;

        this.initialize();

        createEventEmiter(this);
    }

    /**
     * @alias
     */
    var proto = MultiUploader.prototype;

    /**
     * 浏览器是否支持 FormData 对象
     * @type {Boolean}
     */
    proto.isFormDataSupported = typeof FormData !== 'undefined';


    /**
     * 使用 FormData 的形式异步上传文件
     */
    proto.formDataUpload = function () {
        var self = this;

        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            len = this.FILES_QUEUE.length;

        if (len <= 0) {
            return;
        }

        while (len--) {
            formData.append("file_" + len, this.FILES_QUEUE[len]);
        }

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                self.success();
            } else {
                self.error.apply(null, arguments);
            }
        };

        xhr.onprogress = function () {
            self.progress.apply(null, arguments)
        };

        xhr.onerror = function () {
            self.error.apply(null, arguments)
        };

        xhr.open("POST", this.url);
        xhr.send(formData);
    };


    /**
     * 文件大小检验
     * @return  {Boolean}
     */
    proto.checkSize_ = function (file) {
        var fileSize = file.size; // KB

        // > 1M
        if (fileSize > 1024 * 1024) {
            fileSize = Math.round(fileSize * 100 / (1024 * 1024)) / 100 * 1024;
        } else {
            fileSize = Math.round(fileSize * 100 / 1024) / 100;
        }

        return fileSize < this.maxFileSize;
    };


    /**
     * 文件类型检验
     * @return  {Boolean}
     */
    proto.checkType_ = function (file) {
        var type = file.type,
            ext  = /\.([^\.]+)$/.exec(file.name),
            acceptTypes = this.acceptTypes,
            len = acceptTypes.length;

        if (!!~acceptTypes.indexOf('*')) {
            return true;
        }

        ext = !ext ? '' : ext[1];

        while (len--) {
            if (('image/' + acceptTypes[len]) === type) {
                return true;
            }
        }

        return !!~acceptTypes.indexOf(ext);
    };


    /**
     * 检验文件长度
     */
    proto.checkNum_ = function () {
        return this.FILES_QUEUE.length <  this.maxNum;
    };


    /**
     * 文件进队列接受验证
     * @return {Object}  返回状态对象
     *         obj.state => -1 数量超出限制
     *         obj.state => 0 文件类型不符合要求
     *         obj.state => 1 文件大小不符合要求
     *         obj.state => 2 文件大小和类型不符合要求
     *         obj.state => 3 符合要求 文件可进入队列
     */
    proto.enqueue = function (file) {
        var sizeState,
            typeState,
            state;

        // 文件数量达到上限
        if (!this.checkNum_()) {
            return {
                status: -1,
                msg: '文件数量达到上限'
            }
        }

        sizeState = +this.checkSize_(file);
        typeState = +this.checkType_(file);

        if (!sizeState || !typeState) {

            if (!typeState && sizeState) {
                state = 0;
            } else if (typeState && !sizeState) {
                state = 1;
            } else {
                state = 2;
            }

            return {
                state: state,
                msg: [
                    !sizeState ? '文件过大' : '',
                    !typeState ? '类型不符' : '',
                ].join('')
            };
        }

        if (this.beforeQueue(file) !== false) {
            this.FILES_QUEUE.push(file);

            return {
                state: 3,
                msg: '文件已进入队列'
            };
        } else {
            return {
                state: 4,
                msg: '文件不符合设置的入列条件'
            };
        }

    };


    /**
     * init
     */
    proto.initialize = function () {
        var isMulti = this.maxFileSize > 1,
            $trigger = $(this.trigger),
            $input = $('<input type="file" ' + (isMulti ? 'multiple' : '') + '>'),
            self = this;

        $input.css({
            position: 'absolute',
            left: '-999px', 
            top: '-999px',
            width: 0,
            height: 0,
            visibility: 'hidden'
        });

        $('body').after($input);

        $trigger.click(function () {
            $input[0].click();
        });

        $input.change(function () {
            var result = null;

            for (var i = 0; i < this.files.length; i++) {
                // 每个文件入队
                result = self.enqueue(this.files[i]);
                self.afterQueue.call(null, result);
            } 
        });
    };

    // 设置为 $ 插件
    $.fn.multiUpload = function (config) {

        var loader = new MultiUploader({
            trigger: this,
            url: config.url,
            maxSize: config.maxSize || 1024 * 5,
            types: config.types === '*' ? ['*'] : (config.types || ['*']),
            maxNum: config.maxNum || 5,
            success: config.success || $.noop || noop,
            progress: config.progress || $.noop || noop,
            error: config.error || $.noop || noop,
            beforeQueue: config.beforeQueue || $.noop || noop,
            afterQueue: config.afterQueue || $.noop || noop
        });

        // 返回提交事件的句柄
        return function () {
            loader.formDataUpload.apply(loader, arguments);
        };

        function noop() {}
    };

})(window.jQuery || window.Zepto); 