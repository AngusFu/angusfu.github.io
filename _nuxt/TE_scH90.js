import{_ as t}from"./CaNb7KN_.js";import{c as p,w as c,o as r,a as s,b as n}from"./Du-K4N_a.js";const m={__name:"about-rem-layout",setup(i){const a={title:"关于移动端 rem 布局的一些总结",description:"关于移动端 rem 布局的一些总结",keywords:"原创,rem",pathname:"about-rem-layout",translation:null,create_time:"2015-08-31",prev:{title:"异步场景下的 js 编程",pathname:"js-promise-slides"},next:{title:"记一种水平垂直居中的办法",pathname:"vh-center-layout"}};return(h,l)=>{const e=t;return r(),p(e,{data:a},{default:c(()=>[...l[0]||(l[0]=[s("h2",null,"【资源一】基础知识恕不回顾",-1),s("p",null,"基础知识参考以下两篇博客：",-1),s("p",null,[s("a",{href:"http://isux.tencent.com/web-app-rem.html",target:"_blank",rel:"noopener"},"http://isux.tencent.com/web-app-rem.html")],-1),s("p",null,[s("a",{href:"http://www.w3cplus.com/css3/define-font-size-with-css3-rem",target:"_blank",rel:"noopener"},"http://www.w3cplus.com/css3/define-font-size-with-css3-rem")],-1),s("h2",null,"【资源二】淘宝m站首页的动态实现",-1),s("p",null,[n("学习"),s("a",{href:"http://m.taobao.com",target:"_blank",rel:"noopener"},"http://m.taobao.com"),n(" 首页的实现。")],-1),s("p",null,[s("strong",null,[n("最近读到"),s("a",{href:"http://www.w3cplus.com",target:"_blank",rel:"noopener"},"@大漠"),n("的新文章《"),s("a",{href:"http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html",target:"_blank",rel:"noopener"},"使用Flexible实现手淘H5页面的终端适配"),n("》，和本部分有点关系。暂且加上来以供参考。（updated 2015-11-24）")])],-1),s("p",null,[n("源码进行美化、解读之后，基本布局部分的代码已经被我还原出来了：（2016-01-13补充：后来才发现，早就开源在"),s("a",{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener"},"github"),n("上了）")],-1),s("pre",null,[s("code",{class:"hljs lang-js"},[n("!"),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"win, lib"),n(`) {
    `),s("span",{class:"hljs-keyword"},"var"),n(` timer,
        doc     = win.`),s("span",{class:"hljs-property"},"document"),n(`,
        docElem = doc.`),s("span",{class:"hljs-property"},"documentElement"),n(`,

        vpMeta   = doc.`),s("span",{class:"hljs-title function_"},"querySelector"),n("("),s("span",{class:"hljs-string"},`'meta[name="viewport"]'`),n(`),
        flexMeta = doc.`),s("span",{class:"hljs-title function_"},"querySelector"),n("("),s("span",{class:"hljs-string"},`'meta[name="flexible"]'`),n(`),
 
        dpr   = `),s("span",{class:"hljs-number"},"0"),n(`,
        scale = `),s("span",{class:"hljs-number"},"0"),n(`,
 
        flexible = lib.`),s("span",{class:"hljs-property"},"flexible"),n(" || (lib."),s("span",{class:"hljs-property"},"flexible"),n(` = {});
 
    `),s("span",{class:"hljs-comment"},"// 设置了 viewport meta"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(` (vpMeta) {
 
        `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"warn"),n("("),s("span",{class:"hljs-string"},'"将根据已有的meta标签来设置缩放比例"'),n(`);
        `),s("span",{class:"hljs-keyword"},"var"),n(" initial = vpMeta."),s("span",{class:"hljs-title function_"},"getAttribute"),n("("),s("span",{class:"hljs-string"},'"content"'),n(")."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/initial\\-scale=([\\d\\.]+)/"),n(`);
 
        `),s("span",{class:"hljs-keyword"},"if"),n(` (initial) {
            scale = `),s("span",{class:"hljs-built_in"},"parseFloat"),n("(initial["),s("span",{class:"hljs-number"},"1"),n("]); "),s("span",{class:"hljs-comment"},"// 已设置的 initialScale"),n(`
            dpr = `),s("span",{class:"hljs-built_in"},"parseInt"),n("("),s("span",{class:"hljs-number"},"1"),n(" / scale);      "),s("span",{class:"hljs-comment"},"// 设备像素比 devicePixelRatio"),n(`
        }
 
    }
    `),s("span",{class:"hljs-comment"},"// 设置了 flexible Meta"),n(`
    `),s("span",{class:"hljs-keyword"},"else"),n(),s("span",{class:"hljs-keyword"},"if"),n(` (flexMeta) {
        `),s("span",{class:"hljs-keyword"},"var"),n(" flexMetaContent = flexMeta."),s("span",{class:"hljs-title function_"},"getAttribute"),n("("),s("span",{class:"hljs-string"},'"content"'),n(`);
        `),s("span",{class:"hljs-keyword"},"if"),n(` (flexMetaContent) {
 
            `),s("span",{class:"hljs-keyword"},"var"),n(" initial = flexMetaContent."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/initial\\-dpr=([\\d\\.]+)/"),n(`),
                maximum = flexMetaContent.`),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/maximum\\-dpr=([\\d\\.]+)/"),n(`);
 
            `),s("span",{class:"hljs-keyword"},"if"),n(` (initial) {
                dpr = `),s("span",{class:"hljs-built_in"},"parseFloat"),n("(initial["),s("span",{class:"hljs-number"},"1"),n(`]);
                scale = `),s("span",{class:"hljs-built_in"},"parseFloat"),n("(("),s("span",{class:"hljs-number"},"1"),n(" / dpr)."),s("span",{class:"hljs-title function_"},"toFixed"),n("("),s("span",{class:"hljs-number"},"2"),n(`));
            }
 
            `),s("span",{class:"hljs-keyword"},"if"),n(` (maximum) {
                dpr = `),s("span",{class:"hljs-built_in"},"parseFloat"),n("(maximum["),s("span",{class:"hljs-number"},"1"),n(`]);
                scale = `),s("span",{class:"hljs-built_in"},"parseFloat"),n("(("),s("span",{class:"hljs-number"},"1"),n(" / dpr)."),s("span",{class:"hljs-title function_"},"toFixed"),n("("),s("span",{class:"hljs-number"},"2"),n(`));
            }
        }
    }
 
    `),s("span",{class:"hljs-comment"},"// viewport 或 flexible"),n(`
    `),s("span",{class:"hljs-comment"},"// meta 均未设置"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(` (!dpr && !scale) {
        `),s("span",{class:"hljs-comment"},"// QST"),n(`
        `),s("span",{class:"hljs-comment"},"// 这里的 第一句有什么用 ?"),n(`
        `),s("span",{class:"hljs-comment"},"// 和 Android 有毛关系 ?"),n(`
        `),s("span",{class:"hljs-keyword"},"var"),n(" u = (win."),s("span",{class:"hljs-property"},"navigator"),n("."),s("span",{class:"hljs-property"},"appVersion"),n("."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/android/gi"),n("), win."),s("span",{class:"hljs-property"},"navigator"),n("."),s("span",{class:"hljs-property"},"appVersion"),n("."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/iphone/gi"),n(`)),
            _dpr = win.`),s("span",{class:"hljs-property"},"devicePixelRatio"),n(`;
 
        `),s("span",{class:"hljs-comment"},"// 所以这里似乎是将所有 Android 设备都设置为 1 了"),n(`
        dpr = u ? ( (_dpr >= `),s("span",{class:"hljs-number"},"3"),n(" && (!dpr || dpr >= "),s("span",{class:"hljs-number"},"3"),n(`))
                        ? `),s("span",{class:"hljs-number"},"3"),n(`
                        : (_dpr >= `),s("span",{class:"hljs-number"},"2"),n(" && (!dpr || dpr >= "),s("span",{class:"hljs-number"},"2"),n(`))
                            ? `),s("span",{class:"hljs-number"},"2"),n(`
                            : `),s("span",{class:"hljs-number"},"1"),n(`
                  )
                : `),s("span",{class:"hljs-number"},"1"),n(`;
 
        scale = `),s("span",{class:"hljs-number"},"1"),n(` / dpr;
    }
 
    docElem.`),s("span",{class:"hljs-title function_"},"setAttribute"),n("("),s("span",{class:"hljs-string"},'"data-dpr"'),n(`, dpr);
 
    `),s("span",{class:"hljs-comment"},"// 插入 viewport meta"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(` (!vpMeta) {
        vpMeta = doc.`),s("span",{class:"hljs-title function_"},"createElement"),n("("),s("span",{class:"hljs-string"},'"meta"'),n(`);
         
        vpMeta.`),s("span",{class:"hljs-title function_"},"setAttribute"),n("("),s("span",{class:"hljs-string"},'"name"'),n(", "),s("span",{class:"hljs-string"},'"viewport"'),n(`);
        vpMeta.`),s("span",{class:"hljs-title function_"},"setAttribute"),n("("),s("span",{class:"hljs-string"},'"content"'),n(`,
            `),s("span",{class:"hljs-string"},'"initial-scale="'),n(" + scale + "),s("span",{class:"hljs-string"},'", maximum-scale="'),n(" + scale + "),s("span",{class:"hljs-string"},'", minimum-scale="'),n(" + scale + "),s("span",{class:"hljs-string"},'", user-scalable=no"'),n(`);
 
        `),s("span",{class:"hljs-keyword"},"if"),n(" (docElem."),s("span",{class:"hljs-property"},"firstElementChild"),n(`) {
            docElem.`),s("span",{class:"hljs-property"},"firstElementChild"),n("."),s("span",{class:"hljs-title function_"},"appendChild"),n(`(vpMeta)
        } `),s("span",{class:"hljs-keyword"},"else"),n(` {
            `),s("span",{class:"hljs-keyword"},"var"),n(" div = doc."),s("span",{class:"hljs-title function_"},"createElement"),n("("),s("span",{class:"hljs-string"},'"div"'),n(`);
            div.`),s("span",{class:"hljs-title function_"},"appendChild"),n(`(vpMeta);
            doc.`),s("span",{class:"hljs-title function_"},"write"),n("(div."),s("span",{class:"hljs-property"},"innerHTML"),n(`);
        }
    }
 
    `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"setFontSize"),n("("),s("span",{class:"hljs-params"}),n(`) {
        `),s("span",{class:"hljs-keyword"},"var"),n(" winWidth = docElem."),s("span",{class:"hljs-title function_"},"getBoundingClientRect"),n("()."),s("span",{class:"hljs-property"},"width"),n(`;
 
        `),s("span",{class:"hljs-keyword"},"if"),n(" (winWidth / dpr > "),s("span",{class:"hljs-number"},"540"),n(`) {
            (winWidth = `),s("span",{class:"hljs-number"},"540"),n(` * dpr);
        }
 
        `),s("span",{class:"hljs-comment"},"// 根节点 fontSize 根据宽度决定"),n(`
        `),s("span",{class:"hljs-keyword"},"var"),n(" baseSize = winWidth / "),s("span",{class:"hljs-number"},"10"),n(`;
 
        docElem.`),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"fontSize"),n(" = baseSize + "),s("span",{class:"hljs-string"},'"px"'),n(`;
        flexible.`),s("span",{class:"hljs-property"},"rem"),n(" = win."),s("span",{class:"hljs-property"},"rem"),n(` = baseSize;
    }
 
    `),s("span",{class:"hljs-comment"},"// 调整窗口时重置"),n(`
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"resize"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
        `),s("span",{class:"hljs-built_in"},"clearTimeout"),n(`(timer);
        timer = `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(setFontSize, "),s("span",{class:"hljs-number"},"300"),n(`);
    }, `),s("span",{class:"hljs-literal"},"false"),n(`);
 
     
    `),s("span",{class:"hljs-comment"},"// 这一段是我自己加的"),n(`
    `),s("span",{class:"hljs-comment"},"// orientationchange 时也需要重算下吧"),n(`
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"orientationchange"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
        `),s("span",{class:"hljs-built_in"},"clearTimeout"),n(`(timer);
        timer = `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(setFontSize, "),s("span",{class:"hljs-number"},"300"),n(`);
    }, `),s("span",{class:"hljs-literal"},"false"),n(`);
 
 
    `),s("span",{class:"hljs-comment"},"// pageshow"),n(`
    `),s("span",{class:"hljs-comment"},"// keyword: 倒退 缓存相关"),n(`
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"pageshow"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"e"),n(`) {
        `),s("span",{class:"hljs-keyword"},"if"),n(" (e."),s("span",{class:"hljs-property"},"persisted"),n(`) {
            `),s("span",{class:"hljs-built_in"},"clearTimeout"),n(`(timer);
            timer = `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(setFontSize, "),s("span",{class:"hljs-number"},"300"),n(`);
        }
    }, `),s("span",{class:"hljs-literal"},"false"),n(`);
 
    `),s("span",{class:"hljs-comment"},"// 设置基准字体"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-string"},'"complete"'),n(" === doc."),s("span",{class:"hljs-property"},"readyState"),n(`) {
        doc.`),s("span",{class:"hljs-property"},"body"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"fontSize"),n(" = "),s("span",{class:"hljs-number"},"12"),n(" * dpr + "),s("span",{class:"hljs-string"},'"px"'),n(`;
    } `),s("span",{class:"hljs-keyword"},"else"),n(` {
        doc.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"DOMContentLoaded"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
            doc.`),s("span",{class:"hljs-property"},"body"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"fontSize"),n(" = "),s("span",{class:"hljs-number"},"12"),n(" * dpr + "),s("span",{class:"hljs-string"},'"px"'),n(`;
        }, `),s("span",{class:"hljs-literal"},"false"),n(`);
    }
  
    `),s("span",{class:"hljs-title function_"},"setFontSize"),n(`();
 
    flexible.`),s("span",{class:"hljs-property"},"dpr"),n(" = win."),s("span",{class:"hljs-property"},"dpr"),n(` = dpr;
 
    flexible.`),s("span",{class:"hljs-property"},"refreshRem"),n(` = setFontSize;
 
    flexible.`),s("span",{class:"hljs-property"},"rem2px"),n(" = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"d"),n(`) {
        `),s("span",{class:"hljs-keyword"},"var"),n(" c = "),s("span",{class:"hljs-built_in"},"parseFloat"),n("(d) * "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"rem"),n(`;
        `),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-string"},'"string"'),n(" == "),s("span",{class:"hljs-keyword"},"typeof"),n(" d && d."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/rem$/"),n(`)) {
            c += `),s("span",{class:"hljs-string"},'"px"'),n(`;
        }
        `),s("span",{class:"hljs-keyword"},"return"),n(` c;
    };
 
    flexible.`),s("span",{class:"hljs-property"},"px2rem"),n(" = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"d"),n(`) {
        `),s("span",{class:"hljs-keyword"},"var"),n(" c = "),s("span",{class:"hljs-built_in"},"parseFloat"),n("(d) / "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"rem"),n(`;
         
        `),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-string"},'"string"'),n(" == "),s("span",{class:"hljs-keyword"},"typeof"),n(" d && d."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/px$/"),n(`)) {
            c += `),s("span",{class:"hljs-string"},'"rem"'),n(`;
        }
        `),s("span",{class:"hljs-keyword"},"return"),n(` c;
    }
}(`),s("span",{class:"hljs-variable language_"},"window"),n(", "),s("span",{class:"hljs-variable language_"},"window"),n("."),s("span",{class:"hljs-property"},"lib"),n(" || ("),s("span",{class:"hljs-variable language_"},"window"),n("."),s("span",{class:"hljs-property"},"lib"),n(` = {}));
`)])],-1),s("p",null,[s("strong",null,"注意："),n(" 淘宝首页在iPhone4上设置的initial-scale是0.5（其他尺寸类似）。")],-1),s("p",null,"因此，这句在iPhone4上得出的结果是640：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(" winWidth = docElem."),s("span",{class:"hljs-title function_"},"getBoundingClientRect"),n("()."),s("span",{class:"hljs-property"},"width"),n(`;  
`)])],-1),s("p",null,[n("正是因为淘宝这种独特的设置，使得 ios 上 1px边框的问题完美解决（1px变2px， 又被 "),s("code",null,"initial-scale=0.5"),n(" 缩小了一半）。")],-1),s("h2",null,"【资源三】常规情况下js根据屏幕宽度动态计算",-1),s("p",null,"使用js动态计算：",-1),s("pre",null,[s("code",{class:"hljs lang-js"},[n(`
!(`),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"doc, win"),n(`) {
    `),s("span",{class:"hljs-keyword"},"var"),n(" docEle = doc."),s("span",{class:"hljs-property"},"documentElement"),n(`,
        evt = `),s("span",{class:"hljs-string"},'"onorientationchange"'),n(),s("span",{class:"hljs-keyword"},"in"),n(),s("span",{class:"hljs-variable language_"},"window"),n(" ? "),s("span",{class:"hljs-string"},'"orientationchange"'),n(" : "),s("span",{class:"hljs-string"},'"resize"'),n(`,
        fn = `),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
            `),s("span",{class:"hljs-keyword"},"var"),n(" width = docEle."),s("span",{class:"hljs-property"},"clientWidth"),n(`;
            width && (docEle.`),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"fontSize"),n(" = "),s("span",{class:"hljs-number"},"20"),n(" * (width / "),s("span",{class:"hljs-number"},"320"),n(") + "),s("span",{class:"hljs-string"},'"px"'),n(`);
        };
     
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("(evt, fn, "),s("span",{class:"hljs-literal"},"false"),n(`);
    doc.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"DOMContentLoaded"'),n(", fn, "),s("span",{class:"hljs-literal"},"false"),n(`);
 
}(`),s("span",{class:"hljs-variable language_"},"document"),n(", "),s("span",{class:"hljs-variable language_"},"window"),n(`));
`)])],-1),s("h2",null,"【资源四】媒体查询较密集的断点",-1),s("p",null,"使用css3 media query 实现",-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"320px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"14px"),n(`;}
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"360px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"16px"),n(`;}
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"400px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"18px"),n(`;}
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"440px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"20px"),n(`;}
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"480px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"22px"),n(`;}
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"640px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"28px"),n(`;}
}
`)])],-1),s("h2",null,"【资源五】强大的单位——vw",-1),s("p",null,"使用单位 vw 实现动态计算。",-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-selector-tag"},"html"),n(` {
    `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"31.25vw"),n("; "),s("span",{class:"hljs-comment"},"/* 表达式：100*100vw/320 */"),n(`
}
`)])],-1),s("p",null,"不过考虑到国内兼容性的问题，还是结合媒体查询来使用比较好。（媒体查询的断点暂时是借用上面的例子）",-1),s("p",null,[s("img",{loading:"lazy",src:"https://segmentfault.com/img/bVpJlx",alt:"图片描述"})],-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"320px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"100px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"360px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"112.5px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"400px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"125px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"440px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"137.5px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"480px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"150px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"640px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"200px"),n(`;
    }
}
 
`),s("span",{class:"hljs-selector-tag"},"html"),n(` {
    `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"31.25vw"),n(`;
}
`)])],-1),s("hr",null,null,-1),s("h2",null,"【总结】",-1),s("p",null,"对以上种种方法的综合：",-1),s("p",null,"1、meta:viewport, 还是initial-scale为 1；",-1),s("p",null,"2、320px屏幕下，把页面根元素html的字体大小设置为50px；",-1),s("p",null,"3、鉴于我们拿到的设计图目前是640px宽的基准，这样我们就不用每次自己除以2了，直接在PS中量就好；",-1),s("p",null,"4、宽度什么的最好还是用百分比处理；涉及到高度、字体大小之类的则用rem。",-1),s("p",null,[n("eg： 设计稿上，div高度为40px；那么css就是 "),s("code",null,"div {height: 0.4rem;}")],-1),s("p",null,[n("结果就只剩下一步转换：设计稿上量的长度转化为小数。 "),s("code",null,"50% => 0.5"),n(" 这种计算，不要太简单。。。")],-1),s("p",null,"【方法一】纯粹css，支持calc函数的动态计算；不支持的用css媒体查询断点，优雅降级。",-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"320px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"50px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"360px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"56px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"400px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"63px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"440px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"69px"),n(`;
    }
}
 
`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"480px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"75px"),n(`;
    }
}

`),s("span",{class:"hljs-comment"},`/**
 * 2016-01-13 订正
 * 做适当限制
 * 大于640的屏幕 固定为100px
 * 同时需要对body或者最外层wrapper做max-width: 640px的限制
 */`),n(`
`),s("span",{class:"hljs-comment"},`/*
@media screen and (min-width: 640px) {
    html {
        font-size: 100px;
    }
}

html {
    font-size: 15.625vw;
}
*/`),n(`

`),s("span",{class:"hljs-selector-tag"},"html"),n(` {
    `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"15.625vw"),n(`;
}

`),s("span",{class:"hljs-keyword"},"@media"),n(" screen "),s("span",{class:"hljs-keyword"},"and"),n(" ("),s("span",{class:"hljs-attribute"},"min-width"),n(": "),s("span",{class:"hljs-number"},"640px"),n(`) {
    `),s("span",{class:"hljs-selector-tag"},"html"),n(` {
        `),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"100px"),n(`;
    }
}
`)])],-1),s("p",null,"【方法二】脚本动态计算",-1),s("p",null,[s("strong",null,"大前提：")],-1),s("p",null,"1、initial-scale 为 1；",-1),s("p",null,"2、在项目css中(注意不要被公共的base、common之类的影响了，资源加载顺序也是蛮重要的)，先把html的fontSize设置为 50px（或者加上媒体查询代码）, 避免加载未完成时候样式错乱; ",-1),s("pre",null,[s("code",{class:"hljs lang-css"},[n(`
`),s("span",{class:"hljs-comment"},"/* css */"),n(`
`),s("span",{class:"hljs-selector-tag"},"html"),n(" {"),s("span",{class:"hljs-attribute"},"font-size"),n(": "),s("span",{class:"hljs-number"},"50px"),n(`;}
`)])],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* javascript */"),n(`

!(`),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"win, doc"),n(`){
    `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"setFontSize"),n("("),s("span",{class:"hljs-params"}),n(`) {
        `),s("span",{class:"hljs-comment"},"// 获取window 宽度"),n(`
        `),s("span",{class:"hljs-comment"},"// zepto实现 $(window).width()就是这么干的"),n(`
        `),s("span",{class:"hljs-keyword"},"var"),n(" winWidth =  "),s("span",{class:"hljs-variable language_"},"window"),n("."),s("span",{class:"hljs-property"},"innerWidth"),n(`;
        `),s("span",{class:"hljs-comment"},"// doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;"),n(`
        
        `),s("span",{class:"hljs-comment"},"// 2016-01-13 订正"),n(`
        `),s("span",{class:"hljs-comment"},"// 640宽度以上进行限制 需要css进行配合"),n(`
        `),s("span",{class:"hljs-keyword"},"var"),n(" size = (winWidth / "),s("span",{class:"hljs-number"},"640"),n(") * "),s("span",{class:"hljs-number"},"100"),n(`;
        doc.`),s("span",{class:"hljs-property"},"documentElement"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"fontSize"),n(" = (size < "),s("span",{class:"hljs-number"},"100"),n(" ? size : "),s("span",{class:"hljs-number"},"100"),n(") + "),s("span",{class:"hljs-string"},"'px'"),n(` ;
    }
 
    `),s("span",{class:"hljs-keyword"},"var"),n(" evt = "),s("span",{class:"hljs-string"},"'onorientationchange'"),n(),s("span",{class:"hljs-keyword"},"in"),n(" win ? "),s("span",{class:"hljs-string"},"'orientationchange'"),n(" : "),s("span",{class:"hljs-string"},"'resize'"),n(`;
    
    `),s("span",{class:"hljs-keyword"},"var"),n(" timer = "),s("span",{class:"hljs-literal"},"null"),n(`;
 
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("(evt, "),s("span",{class:"hljs-keyword"},"function"),n(" ("),s("span",{class:"hljs-params"}),n(`) {
        `),s("span",{class:"hljs-built_in"},"clearTimeout"),n(`(timer);
 
        timer = `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(setFontSize, "),s("span",{class:"hljs-number"},"300"),n(`);
    }, `),s("span",{class:"hljs-literal"},"false"),n(`);
    
    win.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"pageshow"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"e"),n(`) {
        `),s("span",{class:"hljs-keyword"},"if"),n(" (e."),s("span",{class:"hljs-property"},"persisted"),n(`) {
            `),s("span",{class:"hljs-built_in"},"clearTimeout"),n(`(timer);
 
            timer = `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(setFontSize, "),s("span",{class:"hljs-number"},"300"),n(`);
        }
    }, `),s("span",{class:"hljs-literal"},"false"),n(`);
 
    `),s("span",{class:"hljs-comment"},"// 初始化"),n(`
    `),s("span",{class:"hljs-title function_"},"setFontSize"),n(`();
 
}(`),s("span",{class:"hljs-variable language_"},"window"),n(", "),s("span",{class:"hljs-variable language_"},"document"),n(`));
`)])],-1),s("p",null,"嗯。。。",-1),s("p",null,"就这么愉快地结束了。。。",-1),s("p",null,"不知道解读了某宝首页的一点点代码，然后发在这里，会不会有什么后果。。。",-1),s("p",null,"==================================================",-1),s("h2",null,"2016年1月13日补充",-1),s("p",null,"写过这篇博客之后，又陆续读过几篇关于布局的文章。",-1),s("p",null,"具体已经忘了，大约是大漠的文章，还有一篇应该是搜车前端的博文，另外应该还有关于手淘首页的分析的文章。",-1),s("p",null,"另外，自己也用rem布局实践过几个项目。",-1),s("p",null,[n("不得不说，个人觉得rem布局现在已经可以放弃了。"),s("code",null,"flex"),n("布局已经很好用了，早已有之的百分比布局等稍用点心思也并不难。")],-1),s("p",null,"这篇博客一直想改。但懒惰总是占据着我的身体。",-1),s("p",null,"最后再说下，字体大小自适应是错误的，字体大小自适应是错误的，字体大小自适应是错误的。",-1),s("p",null,"rem 布局，可以告别了。",-1),s("p",null,"迎接 flex 布局吧。",-1),s("p",null,"=========================================",-1),s("h3",null,"写在最后",-1),s("p",null,"这篇博客写于半年前，那时候还是个刚毕业的菜鸟。",-1),s("p",null,"偶尔有点想法，看了一些大牛的文章，有了这篇博客。",-1),s("p",null,"这也是半年来唯一一篇产出。",-1),s("p",null,"5k的浏览量，95收藏，13推荐，已经让我很惊讶了。",-1),s("p",null,"谢谢各路大神们的关注。",-1),s("p",null,"半年来感受到的前端大环境变化还是很大。虽然在公司没有太多变化，但眼睛总得看着世界吧。",-1),s("p",null,"接下来，还得继续学习。",-1),s("p",null,"由于手上没什么项目，一直想探索出一套自己的自动化流程，但到现在也只是积累了许多版的草稿。",-1),s("p",null,[s("code",null,"nodejs"),n("方面也得有所探索，"),s("code",null,"nodejs"),n(" 再加上 "),s("code",null,"shelljs"),n(" 和 "),s("code",null,"yargs"),n(" 用起来是真的很爽。（"),s("a",{href:"www.ruanyifeng.com/blog/2015/05/command-line-with-node.html"},"鸣谢阮大神的文章"),n("）")],-1),s("p",null,"算是年终总结了。在前端的路上继续走吧。",-1),s("p",null,"=========================================",-1),s("h3",null,"一点想法：评论区的回复",-1),s("p",null,"媒体查询和js动态计算是两种方式。",-1),s("p",null,[n("首先，支持 CSS3 "),s("code",null,"calc"),n("方法 和 "),s("code",null,"rem"),n("、"),s("code",null,"vw"),n("单位的浏览器下，只需要"),s("code",null,"html {font-size: 15.625vw;}"),n("这样一句就好，另外加个媒体查询限制下。")],-1),s("p",null,[n("之前的一大堆密集的断点只是为了hack不支持"),s("code",null,"calc"),n("或者"),s("code",null,"calc"),n("的情况。其次，js动态设置html的"),s("code",null,"font-size"),n("，只要浏览器支持rem单位即可。")],-1),s("p",null,"为什么会考虑到密集的mq断点呢，因为当时还在考虑文字大小的自适应问题。",-1),s("p",null,"实践证明，字体大小自适应是一种错误的想法。",-1),s("p",null,"移动开发在必要情况的下，可以适当使用mq来调整字体大小，但做成完全自适应则是一种存在问题的做法。",-1),s("p",null,[n("因此，这里提到的 "),s("code",null,"calc"),n("和"),s("code",null,"vh"),n(),s("code",null,"rem"),n("配合的做法，最好只用来做布局的工作。js动态计算也是类似，更适合做布局。")],-1)])]),_:1})}}};export{m as default};
