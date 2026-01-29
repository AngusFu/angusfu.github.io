import{_ as t}from"./Bm2Oy-cY.js";import{c as p,w as r,o as c,a as s,b as l}from"./YobvFIQM.js";const u={__name:"screen-shot-upload",setup(o){const n={title:"Chrome和Firefox下的网页截图",description:"Chrome和Firefox下的网页截图",keywords:"原创,JavaScript,Angular.js,网页截图",pathname:"screen-shot-upload",translation:null,create_time:"2016-03-11",prev:{title:"近来在Firefox上遇到的一些坑",pathname:"problems-with-firefox"},next:{title:"异步场景下的 js 编程",pathname:"js-promise-slides"}};return(i,a)=>{const e=t;return c(),p(e,{data:n},{default:r(()=>[...a[0]||(a[0]=[s("p",null,"最近在实现一个功能，需求如下：",-1),s("ul",null,[s("li",null,"前提：当前页面无弹窗"),s("li",null,"页面任意位置执行粘贴"),s("li",null,"读取剪切板中的截屏数据"),s("li",null,"上传截图")],-1),s("p",null,"首先还是从网上找相关的例子。",-1),s("p",null,[l("找到了SF上的专栏文章《"),s("a",{href:"https://segmentfault.com/a/1190000004288686",target:"_blank",rel:"noopener"},"js获取剪切板内容，js控制图片粘贴"),l("》。")],-1),s("p",null,"于是基于这个，做出了第一版的截图上传功能。",-1),s("p",null,[l("由于项目使用的是angularjs，事先已经封装好一套上传图片的办法，只需要调用 "),s("code",null,"$scope.image = blob"),l("，自动就会发送、上传该文件。")],-1),s("p",null,[l("我是半路介入项目的。原来为数不多的几个js文件实在太大，一个 "),s("code",null,"apiService.js"),l("就累积了三四千行，各种服务都在这个文件里，主视图就一个mainController，也是三四千行。")],-1),s("p",null,"说实话，我真的惊呆了。",-1),s("p",null,"所以还是尽量避免修改原来的代码。",-1),s("p",null,[l("按照我自己习惯，把功能封装成 "),s("code",null,"directive"),l("，独立建一个文件。")],-1),s("p",null,[s("strong",null,"代码如下"),l("：（特别鸣谢"),s("a",{href:"https://segmentfault.com/u/weil",target:"_blank",rel:"noopener"},"本期节目"),l("的文章）")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},[l(`/**
 * `),s("span",{class:"hljs-doctag"},"@description"),l(`: 截屏上传
 * `),s("span",{class:"hljs-doctag"},"@author"),l(":      angusfu1126"),s("span",{class:"hljs-doctag"},"@qq"),l(`.com
 * `),s("span",{class:"hljs-doctag"},"@date"),l(`:        2016-03-03 20:59:09
 */`)]),l(`
app.`),s("span",{class:"hljs-title function_"},"directive"),l("("),s("span",{class:"hljs-string"},"'screenshotOrDragUpload'"),l(", "),s("span",{class:"hljs-comment"},"/*ngInject*/"),l(),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"$filter"),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(` {
        `),s("span",{class:"hljs-attr"},"restrict"),l(": "),s("span",{class:"hljs-string"},"'A'"),l(`
        `),s("span",{class:"hljs-attr"},"link"),l(": "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"$scope, iElm, iAttrs, controller"),l(`) {

            `),s("span",{class:"hljs-keyword"},"var"),l(" imageRegex = "),s("span",{class:"hljs-regexp"},"/^image\\//i"),l(`;

            `),s("span",{class:"hljs-comment"},"// 粘贴截图事件"),l(`
            `),s("span",{class:"hljs-variable language_"},"document"),l("."),s("span",{class:"hljs-title function_"},"addEventListener"),l("("),s("span",{class:"hljs-string"},"'paste'"),l(", onPasteHandler, "),s("span",{class:"hljs-literal"},"false"),l(`);

            `),s("span",{class:"hljs-comment"},"// 作用域销毁的时候解除事件绑定"),l(`
            $scope.$on(`),s("span",{class:"hljs-string"},"'$destroy'"),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`) {
                `),s("span",{class:"hljs-variable language_"},"document"),l("."),s("span",{class:"hljs-title function_"},"removeEventListener"),l("("),s("span",{class:"hljs-string"},"'paste'"),l(`, onPasteHandler);
            });

            `),s("span",{class:"hljs-comment"},`/**
             * 全局蒙版显示的时候
             * 不执行粘贴或者拖拽功能
             * 避免和各种弹层ng-show条件太耦合
             * 此处使用DOM方法判断
             */`),l(`
            `),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"isMaskShown"),l("("),s("span",{class:"hljs-params"}),l(`) {
                `),s("span",{class:"hljs-comment"},"// 项目依赖于jquery"),l(`
                `),s("span",{class:"hljs-keyword"},"return"),l(" angular."),s("span",{class:"hljs-title function_"},"element"),l("("),s("span",{class:"hljs-string"},"'.global-mask'"),l(")."),s("span",{class:"hljs-title function_"},"is"),l("("),s("span",{class:"hljs-string"},"':visible'"),l(`);
            }

            `),s("span",{class:"hljs-comment"},`/**
             * 根据时间戳命名
             */`),l(`
            `),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"generateFileName"),l("("),s("span",{class:"hljs-params"},"user"),l(`) {
                `),s("span",{class:"hljs-keyword"},"return"),l(" $filter("),s("span",{class:"hljs-string"},"'date'"),l(")("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Date"),l("(), "),s("span",{class:"hljs-string"},"'yyyyMMdd_HH:MM:ss'"),l(`);
            }

            `),s("span",{class:"hljs-comment"},"/**\n             * 处理 `ctrl + v` 截图粘贴事件\n             */"),l(`
            `),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"onPasteHandler"),l("("),s("span",{class:"hljs-params"},"e"),l(`) {
                `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-title function_"},"isMaskShown"),l("()) "),s("span",{class:"hljs-keyword"},"return"),l(`;

                `),s("span",{class:"hljs-keyword"},"var"),l(" clipboardData = e."),s("span",{class:"hljs-property"},"clipboardData"),l(`;
                `),s("span",{class:"hljs-keyword"},"var"),l(" ua = "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"navigator"),l("."),s("span",{class:"hljs-property"},"userAgent"),l(`;

                `),s("span",{class:"hljs-comment"},"// 如果无法获取剪贴板则返回"),l(`
                `),s("span",{class:"hljs-keyword"},"if"),l(" (!clipboardData || !clipboardData."),s("span",{class:"hljs-property"},"items"),l(`) {
                    `),s("span",{class:"hljs-keyword"},"return"),l(`;
                }

                `),s("span",{class:"hljs-comment"},"// Mac平台下Chrome49版本以下"),l(`
                `),s("span",{class:"hljs-comment"},"// 复制Finder中的文件的Bug Hack掉"),l(`
                `),s("span",{class:"hljs-comment"},"// see: https://segmentfault.com/a/1190000004288686"),l(`
                `),s("span",{class:"hljs-keyword"},"if"),l(" (clipboardData."),s("span",{class:"hljs-property"},"items"),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"items"),l("."),s("span",{class:"hljs-property"},"length"),l(" === "),s("span",{class:"hljs-number"},"2"),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"items"),l("["),s("span",{class:"hljs-number"},"0"),l("]."),s("span",{class:"hljs-property"},"kind"),l(" === "),s("span",{class:"hljs-string"},'"string"'),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"items"),l("["),s("span",{class:"hljs-number"},"1"),l("]."),s("span",{class:"hljs-property"},"kind"),l(" === "),s("span",{class:"hljs-string"},'"file"'),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"types"),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"types"),l("."),s("span",{class:"hljs-property"},"length"),l(" === "),s("span",{class:"hljs-number"},"2"),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"types"),l("["),s("span",{class:"hljs-number"},"0"),l("] === "),s("span",{class:"hljs-string"},'"text/plain"'),l(`
                        && clipboardData.`),s("span",{class:"hljs-property"},"types"),l("["),s("span",{class:"hljs-number"},"1"),l("] === "),s("span",{class:"hljs-string"},'"Files"'),l(`
                        && ua.`),s("span",{class:"hljs-title function_"},"match"),l("("),s("span",{class:"hljs-regexp"},"/Macintosh/i"),l(`)
                        && `),s("span",{class:"hljs-title class_"},"Number"),l("(ua."),s("span",{class:"hljs-title function_"},"match"),l("("),s("span",{class:"hljs-regexp"},"/Chrome\\/(\\d{2})/i"),l(")["),s("span",{class:"hljs-number"},"1"),l("]) < "),s("span",{class:"hljs-number"},"49"),l(`
                 ) {
                    `),s("span",{class:"hljs-keyword"},"return"),l(`;
                }

                `),s("span",{class:"hljs-keyword"},"var"),l(" len = clipboardData."),s("span",{class:"hljs-property"},"items"),l("."),s("span",{class:"hljs-property"},"length"),l(`,
                    item = `),s("span",{class:"hljs-literal"},"null"),l(`,
                    blob = `),s("span",{class:"hljs-literal"},"null"),l(`;

                `),s("span",{class:"hljs-keyword"},"while"),l(` (len--) {

                    item = clipboardData.`),s("span",{class:"hljs-property"},"items"),l(`[len];

                    `),s("span",{class:"hljs-keyword"},"if"),l(" (item."),s("span",{class:"hljs-property"},"kind"),l(" == "),s("span",{class:"hljs-string"},'"file"'),l(`) {

                        blob = item.`),s("span",{class:"hljs-title function_"},"getAsFile"),l(`();

                        `),s("span",{class:"hljs-keyword"},"if"),l(" (imageRegex."),s("span",{class:"hljs-title function_"},"test"),l("(blob."),s("span",{class:"hljs-property"},"type"),l(") && blob."),s("span",{class:"hljs-property"},"size"),l(" > "),s("span",{class:"hljs-number"},"0"),l(`) {
                            blob.`),s("span",{class:"hljs-property"},"name"),l(" = "),s("span",{class:"hljs-title function_"},"generateFileName"),l(`();

                            `),s("span",{class:"hljs-comment"},"// 调用上传"),l(`
                            $scope.`),s("span",{class:"hljs-property"},"image"),l(` = blob;
                            `),s("span",{class:"hljs-keyword"},"break"),l(`;
                        }
                    }
                }
            }


        }
    };
});
`)])],-1),s("p",null,"当然，文章不可能就此结束。。。",-1),s("p",null,"分割线休息片刻",-1),s("p",null,"==============================================================",-1),s("p",null,"上述功能只有在 Chrome 和 Safari 中有效，但到火狐上面就挂掉了啊。。。",-1),s("p",null,"测试一下，给 document 绑定 paste 事件，粘贴的时候压根就读不到数据。",-1),s("p",null,[l("火狐下面，并没有 "),s("code",null,"clipboardData.items"),l(" 这一项。")],-1),s("p",null,"o(╯□╰)o",-1),s("p",null,"那怎么办呢？",-1),s("p",null,"只能退而求其次。放弃，或者寻求降级的办法。",-1),s("p",null,"就在我觉得无路可走的时候，火狐的一个特点让我眼前一亮。。。",-1),s("p",null,[l("分别用 chrome 和 firefox 打开这个 "),s("a",{href:"http://sandbox.runjs.cn/show/xjhkfcr2",target:"_blank",rel:"noopener"},"demo"),l("试试看，试着用 qq 截个图或者在文件夹中复制一张图片，粘贴在红色框框里。")],-1),s("p",null,"有没有发现，只有在火狐下能把图粘贴进来？",-1),s("p",null,"嗯，解决办法就在这里了。",-1),s("p",null,[l("其实，demo 中的红色框框是一个有 "),s("code",null,"contenteditable"),l(" 属性的 "),s("code",null,"div"),l("。")],-1),s("p",null,[l("关于 "),s("code",null,"contenteditable"),l("，此处有张鑫旭大神的博文两篇，且记在此处备忘：")],-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/",target:"_blank",rel:"noopener"},"小tip: 如何让contenteditable元素只能输入纯文本")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.zhangxinxu.com/wordpress/2010/12/div-textarea-height-auto/",target:"_blank",rel:"noopener"},"div模拟textarea文本域轻松实现高度自适应")])])],-1),s("p",null,"firefox 下面，是可以把剪切板中的图片数据粘贴进去的，而 chrome 下面则不行了。",-1),s("p",null,[l("而项目的输入框，正好是一个 "),s("code",null,"pre"),l(" 标签加上 "),s("code",null,"contenteditable"),l(" 属性模拟出来的。完美~~~（此处应有金星老师表情包）")],-1),s("p",null,"好了，在火狐中粘贴截图之后，右键查看一下，是不是像下图酱紫的？",-1),s("p",null,[s("img",{loading:"lazy",src:"https://segmentfault.com/img/bVtoBY",alt:"图片描述"})],-1),s("p",null,[l("有木有看到醒目的 "),s("code",null,"img"),l(" 标签？")],-1),s("p",null,[l("有木有看到醒目的 "),s("code",null,"data:image/png;base64,"),l("？")],-1),s("p",null,"办法有了。解决方案如下：",-1),s("ul",null,[s("li",null,[s("p",null,[l("监听 "),s("code",null,"keydown"),l(" 事件")])]),s("li",null,[s("p",null,"检测输入框是否为空"),s("ul",null,[s("li",null,"非空：不允许粘贴图片（但我们不能事先判断数据类型，只能迅速remove掉img元素）"),s("li",null,"空的：获取img元素及其src数据，然后迅速移除元素")])])],-1),s("p",null,"当然，此处是有坑的。。。",-1),s("p",null,"具体坑在哪里呢？看代码吧。其实我觉得我可能没完全解决。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-regexp"},"/firefox/i"),l("."),s("span",{class:"hljs-title function_"},"test"),l("(navigator."),s("span",{class:"hljs-property"},"userAgent"),l(`)) {
    `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-variable constant_"},"URL"),l(" = ("),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"URL"),l(" || "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"mozURL"),l(`),

        supportTransform = `),s("span",{class:"hljs-variable constant_"},"URL"),l(" && "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"Blob"),l(" && "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"atob"),l(" && "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"ArrayBuffer"),l(" && "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-property"},"Uint8Array"),l(`,

        `),s("span",{class:"hljs-comment"},"// see http://jsperf.com/blob-base64-conversion"),l(`
        convertBase64UrlToBlob = `),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"urlData"),l(`) {
            `),s("span",{class:"hljs-comment"},"//去掉url的头，并转换为byte"),l(`
            `),s("span",{class:"hljs-keyword"},"var"),l(" bytes = "),s("span",{class:"hljs-variable language_"},"window"),l("."),s("span",{class:"hljs-title function_"},"atob"),l("(urlData."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"','"),l(")["),s("span",{class:"hljs-number"},"1"),l(`]);

            `),s("span",{class:"hljs-comment"},"//处理异常,将ascii码小于0的转换为大于0"),l(`
            `),s("span",{class:"hljs-keyword"},"var"),l(" ab = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"ArrayBuffer"),l("(bytes."),s("span",{class:"hljs-property"},"length"),l(`);
            `),s("span",{class:"hljs-keyword"},"var"),l(" ia = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Uint8Array"),l(`(ab);
            `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"var"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < bytes."),s("span",{class:"hljs-property"},"length"),l(`; i++) {
                ia[i] = bytes.`),s("span",{class:"hljs-title function_"},"charCodeAt"),l(`(i);
            }
            `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Blob"),l(`([ab], {
                `),s("span",{class:"hljs-attr"},"type"),l(": "),s("span",{class:"hljs-string"},"'image/png'"),l(`
            });
        };

    $(`),s("span",{class:"hljs-string"},"'pre'"),l(")."),s("span",{class:"hljs-title function_"},"on"),l("("),s("span",{class:"hljs-string"},"'keydown'"),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"e"),l(`) {

        `),s("span",{class:"hljs-keyword"},"var"),l(" isCtrlV = (e."),s("span",{class:"hljs-property"},"ctrlKey"),l(" && e."),s("span",{class:"hljs-property"},"keyCode"),l(" == "),s("span",{class:"hljs-string"},"'86'"),l(`);

        `),s("span",{class:"hljs-keyword"},"if"),l(" (!supportTransform || !isCtrlV) "),s("span",{class:"hljs-keyword"},"return"),l(`;

        `),s("span",{class:"hljs-keyword"},"var"),l(" $this = $("),s("span",{class:"hljs-variable language_"},"this"),l(`),
            html = $this.`),s("span",{class:"hljs-title function_"},"html"),l(`(),
            canPasteImage = `),s("span",{class:"hljs-literal"},"false"),l(`;

        `),s("span",{class:"hljs-comment"},"// Notice"),l(`
        `),s("span",{class:"hljs-comment"},"// 火狐的坑在这里啊啊啊啊"),l(`
        `),s("span",{class:"hljs-comment"},"// 只有空的时候才能粘贴图片"),l(`
        `),s("span",{class:"hljs-keyword"},"if"),l(" (!html || html === "),s("span",{class:"hljs-string"},"'<br>'"),l(`) {
            canPasteImage = `),s("span",{class:"hljs-literal"},"true"),l(`;
        }

        `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`) {
            `),s("span",{class:"hljs-keyword"},"var"),l(" $imgs = $this."),s("span",{class:"hljs-title function_"},"find"),l("("),s("span",{class:"hljs-string"},"'img'"),l(")."),s("span",{class:"hljs-title function_"},"remove"),l(`(),
                data = $imgs.`),s("span",{class:"hljs-title function_"},"eq"),l("("),s("span",{class:"hljs-number"},"0"),l(")."),s("span",{class:"hljs-title function_"},"attr"),l("("),s("span",{class:"hljs-string"},"'src'"),l(`);

            `),s("span",{class:"hljs-keyword"},"if"),l(` (canPasteImage && data) {
                `),s("span",{class:"hljs-keyword"},"var"),l(" blob = "),s("span",{class:"hljs-title function_"},"convertBase64UrlToBlob"),l(`(data);
                blob.`),s("span",{class:"hljs-property"},"name"),l(" = "),s("span",{class:"hljs-title function_"},"generateFileName"),l(`();
                `),s("span",{class:"hljs-comment"},"// 调用上传"),l(`
                $scope.`),s("span",{class:"hljs-property"},"image"),l(` = blob;
            }
        }, `),s("span",{class:"hljs-number"},"0"),l(`);

    });
}
`)])],-1),s("p",null,[l("做个笔记： Blob对象和base64字符串的转换, "),s("a",{href:"http://jsperf.com/blob-base64-conversion",target:"_blank",rel:"noopener"},"http://jsperf.com/blob-base64-conversion")],-1),s("p",null,"目前还没在IE上测试过，不知道结果如何。 ",-1)])]),_:1})}}};export{u as default};
