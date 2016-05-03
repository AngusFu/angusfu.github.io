## 异步场景下的 js 编程
<br>

文蔺



===================================================
## 异步操作 / 异步任务
### 非线性
<p class="fragment">ajax请求</p>
<p class="fragment">hybrid: bridge invoke</p>
<p class="fragment">资源加载(js css images etc.)</p>
<p class="fragment">浏览器端数据库操作: IndexDB、WebSQL</p>
<p class="fragment">js多线程: web worker</p>
<p class="fragment">nodejs: fs.readFile</p>
<p class="fragment">and so on............</p>

===================================================
### 场景一： 后台首页 ajax & iframe 
#### loading mask 何时消失?
> outer frame： async ajax => menu
>> iframe: load => dashborad


===================================================
### 场景二： 多模块异步获取的M站首页
#### loading何时消失? 何时进行下一步操作?
> body
<blockquote>
    <p>slides: json(p) + template</p>
</blockquote>
<blockquote>
    <p>themes: json(p) + template</p>
</blockquote>
<blockquote>
    <p>recomandation: json(p) + template</p>
</blockquote>


===================================================
### 场景三： 微信H5幻灯页 or H5游戏
#### 静态资源必须先加载完<br>
#### 显示加载进度
```javascript
    var resourceMap = {
        // 样式表
        'http://css.40017.cn/cn/min/??/path/to/file/name.css',
        // 脚本
        'http://js.40017.cn/cn/min/??/path/to/file/name.css',
        // 音视频
        'http://img.40017.cn/cn/min/??/path/to/file/name.mp3',
        // 背景图 精灵图
        'http://img.40017.cn/cn/min/??/path/to/file/name.png',
        // 字体 etc.
        'http://css.40017.cn/cn/min/??/path/to/file/name.woff'
    };
```

===================================================
### 场景四： 看谁加载得最快
> 功能相同的数据的几个接口同时加载<br>
  哪个接口响应最快就使用哪个返回的数据

```javascript

    var apis = ['path1/to/api', 'path2/to/api', 'path3/to/api'];
    // TODO
    // ...
    
```

===================================================
## 来看一版普通解决方案...


===================================================
### 场景一: 后台首页 ajax & iframe 
#### 嗯，蠢人有蠢办法
```javascript
    var menuLoaded = false,
        iframeLoaded = false;

    $('.iframe').on('load', function (){
        iframeLoaded = true;
        initAfterLoaded();
    });

    $.getJSON('path/to/api', function () {
        menuLoaded = true;
        buildMenu();
        initAfterLoaded();
    });
    
    function initAfterLoaded() {
        if (menuLoaded && iframeLoaded) {
            $('.loading').hide();
            doSomething();
        }
    }
```
===================================================
### 场景二: 多模块异步获取的M站首页
#### 嗯，蠢办法还是可以用的
```javascript
    $.getJSON('path/to/api/slides', function () {
        slidesLoaded = true;
        buildSlidesMarkup();
        callback();
    });

    // ...
    // 此处省略 xx 条类似代码

    function callback() {
        if (slidesLoaded && themesLoaded && /*....*/) {
            loading.hide();
            doSomething();
        }
    }
```


===================================================
## 辣么问题来了——
<h2 class="fragment">如果要加载的资源灰常多咋整...</h2>
<h2 class="fragment">只能呵呵了...壮士走好！</h2>


===================================================
### 场景三 微信H5幻灯页 or H5游戏
#### 坑主要在js的加载顺序上 
```javascript
    /**
     * 所有资源同时加载 不管上一个是否加载完毕
     */
    
    var resourceIndex = 0,
        len = resourceMap.length;

    resourceMap.forEach(function (url, index) {
        loadResource(url, myCallback);
    });
    
    function myCallback() {
        var percent = 0;

        resourceIndex += 1;

        percent = (100 * resourceIndex / len).toFixed(2);
        $('#progress').html(percent + '%');

        if (resourceIndex == len) {
            gameInit();
        }
    }

    function loadResource(url, callback) {
        var elem = null,
            // js 和 css 的特殊性
            append = false,
            head = document.getElementsByTagName('head')[0];

        // 获取 type
        type = url.match(/\.([a-zA-Z]+)$/)[1];
        
        switch (type) {
            case 'js':
                append = true;
                elem = document.createElement('script');
                elem.src = url;
                break;
            case 'css':
                append = true;
                elem = document.createElement('link');
                elem.href = url;
                break;
            case 'mp3':
                elem = new Audio();
                elem.src = url;
                break;
            default:
                elem = new Image();
                elem.src = url;
                break;
        }

        elem.onload = function () {
            // 回调成功
            callback && callback();
            elem = null;
        };

        append && head.appendChild(elem);
    }
```

===================================================
### 场景三 微信H5幻灯页 or H5游戏
#### 坑主要在js的加载顺序上 
```javascript
    /**
     * 永远只有一个资源在加载
     */
    
    var resourceIndex = 0,
        len = resourceMap.length;
    
    loadResource(url[resourceIndex], fn);

    function fn() {
        var percent = 0;
        resourceIndex += 1;
        percent = (100 * resourceIndex / len).toFixed(2);
        $('#progress').html(percent + '%');

        if (resourceIndex == len) {
            gameInit();
        } else {
            loadResource(url[resourceIndex], fn);
        }
    }

```


===================================================
### 场景四: 资源之间的race 或 超时处理
#### 好吧，蠢办法还是可以用的。。。
```javascript
    var api = ['path1/to/api', 'path2/to/api', 'path3/to/api'];
    var apiDataLoaded = false;

    api.forEach(function (url, index) {
        // !important
        if (apiDataLoaded) return;

        $.getJSON(url, function (data) {
            if (apiDataLoaded) return;

            apiDataLoaded = true;
            doSomething();
        });
    });
```


===================================================
### 终于都解决了...
#### 然而代码能不能写得更优雅看起来更爽一点呢?
```javascript
    /**
     * 某项目点评页面初始化代码
     */
    getAPPInfo(function (data) {
        // 如果没登录 则 redirect
        // 否则返回用户id
        var MEMBER_ID = logCheck(data);

        // 接着检查点评状态
        checkDPState(function () {
            // 状态ok 则进入点评
            commentFn(MEMBER_ID);
        });
    });
```


===================================================
# Yes, We Can
<img src="res/yeswecan.png" width="200" alt="">


===================================================
## Promise 编程
<br>
```javascript
    /**
     * 某项目点评页面初始化代码
     * 修改后
     */
    getAPPInfo()
        .then(function (data) {
            var MEMBER_ID = logCheck(data);
            return MEMBER_ID;
        }).catch(function (err) {
            location.href = 'path/to/redirect';
        }).then(function (MEMBER_ID) {
            return checkDPState(MEMBER_ID);
        }).then(function () {
            commentFn();
        });
```
===================================================
## promise模式
<br>
```javascript
    // 三种状态：
    //  Pending  Resolved  Rejected
    // promise对象上的then方法
    //      添加针对已完成和拒绝状态下的处理函数
    //      then方法会返回另一个promise对象形成promise管道
    //          ==> then(resolvedHandler, rejectedHandler)
    // resolvedHandler 在promise对象进入完成状态时触发，并传递结果
    // rejectedHandler 函数会在拒绝状态下调用
```

===================================================
## promise的写法
<br>
```javascript
    var promise = new Promise(function(resolve, reject) {
      // ... some code
      if (/* 异步操作成功 */){
        resolve(value);
      } else {
        reject(error);
      }
    });

    promise.then(function(value) {
      // success
    }, function(value) {
      // failure
    });
```

===================================================
### 回到场景一
#### 在使用了 jQuery 的页面中，可以这样做
```javascript
    function loadIframe() {
        var defer = $.Deferred();
        $('iframe').attr('src', src).on('load', function () {
            defer.resolve();
        });
        return defer.promise();
    }
    
    $.when($.getJSON('res/test.json'), loadIframe())
        .then(function (data) {
            buildMenu(data);
            $('.loading').hide();
        });
```

===================================================
## 那么，场景二也就解决了
<br>
```javascript
    var APIMap = ['api/slides', 'api/menu', 'api/list', ...];
    // map 方法返回一个 Promise 数组
    var requestArr = APIMap.map(function (url, index) {
        return $.getJSON(url);
    });

    $.when(requestArr)
        .then(function (slides, menu, list) {
            // ...
            $('.loading').hide();
        });
    
    // PS
    // 在 Chrome实现 的promise 模式中
    // 数个任务一起 使用 Promise.all
```


===================================================
### 场景三类似
#### ES6 版本下的正式写法
<br>
```javascript
    // 现在假设都是加载图片
    function loadImage(src) {
        return new Promise(function(resolve, reject) {
            var image = new Image;
            image.addEventListener('load',function listener() {
                resolve(image);
                // ...
                // 此处可以显示加载进度
                this.removeEventListener('load', listener);
            });
            image.src = src;
            image.addEventListener('error',reject);
        })
    }
    
    Promise.all([loadImage(url1), loadImage(url2), loadImage(url3)])
        .then(function () {
            // init()
        });
```

===================================================
### 场景四: 资源之间的race 或 超时处理
```javascript
    var handleTimeout = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('request timeout'));
        }, 5000);
    });

    var promise = Promise.race([
        fetch('/resource-that-may-take-a-while'), handleTimeout
    ]);

    promise.then(response => console.log(response))
           .catch(error => console.log(error));
```


===================================================
### 未来展望
```javascript
var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var asyncReadFile = async function (){
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

```
