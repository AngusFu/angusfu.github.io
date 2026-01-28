import{_ as t}from"./CaNb7KN_.js";import{c as r,w as c,o,a as s,b as a}from"./Du-K4N_a.js";const d={__name:"when-are-all-resources-all-loaded",setup(p){const n={title:"判断资源并行加载完成的三种办法：计数、Promise及 $.Deferred",description:"判断资源并行加载完成的三种办法：计数、Promise及 $.Deferred",keywords:"原创,开发心得,JavaScript,Promise",pathname:"when-are-all-resources-all-loaded",translation:null,create_time:"2016-07-04",prev:{title:"Node.js .sh scripts Manager",pathname:"Node.js-sh-scripts-Manager"},next:{title:"[译] 测试驱动开发：使用 Node.js 和 MongoDB 构建 Todo API",pathname:"todo-api-with-unit-test"}};return(i,l)=>{const e=t;return o(),r(e,{data:n},{default:c(()=>[...l[0]||(l[0]=[s("h2",null,"方法一：计数比较",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-params"},"url, cb"),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" img = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Image"),a(`();
    img.`),s("span",{class:"hljs-property"},"src"),a(` = url;
    img.`),s("span",{class:"hljs-property"},"onload"),a(` = cb;
}

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"loadImages"),a("("),s("span",{class:"hljs-params"},"urlArr, afterAllLoadedFunc"),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" count = urlArr."),s("span",{class:"hljs-property"},"length"),a(`;
    `),s("span",{class:"hljs-keyword"},"var"),a(" loadedCount = "),s("span",{class:"hljs-number"},"0"),a(`;

    `),s("span",{class:"hljs-keyword"},"for"),a(" ("),s("span",{class:"hljs-keyword"},"var"),a(" i = count - "),s("span",{class:"hljs-number"},"1"),a("; i >= "),s("span",{class:"hljs-number"},"0"),a(`; i--) {
        `),s("span",{class:"hljs-title function_"},"loadImg"),a("(urlArr[i], "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
            loadedCount += `),s("span",{class:"hljs-number"},"1"),a(`;
            `),s("span",{class:"hljs-keyword"},"if"),a(` (count === loadedCount) {
                `),s("span",{class:"hljs-title function_"},"afterAllLoadedFunc"),a(`();
            }
        });
    }
}

`),s("span",{class:"hljs-title function_"},"loadImages"),a("(["),s("span",{class:"hljs-string"},"'./xx.jpg'"),a(", "),s("span",{class:"hljs-string"},"'./yy.jpg'"),a(", "),s("span",{class:"hljs-string"},"'./zz.jpg'"),a("], "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-title function_"},"alert"),a("("),s("span",{class:"hljs-string"},"'all imgs have been loaded'"),a(`);
});
`)])],-1),s("h2",null,"方法二：Promise",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 使用 Promise"),a(`
`),s("span",{class:"hljs-comment"},"// 兼容的话需要引入 es6-promise 库"),a(`

`),s("span",{class:"hljs-keyword"},"var"),a(" loadImg = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"url"),a(`) {
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"resolve, reject"),a(`) {
        `),s("span",{class:"hljs-keyword"},"var"),a(" img = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Image"),a(`();
        img.`),s("span",{class:"hljs-property"},"src"),a(` = url;
        img.`),s("span",{class:"hljs-property"},"onload"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
            `),s("span",{class:"hljs-title function_"},"resolve"),a(`()  ;
        };
        img.`),s("span",{class:"hljs-property"},"onerror"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
            `),s("span",{class:"hljs-title function_"},"reject"),a(`()  ;
        };
    });
};

`),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"all"),a(`([
    `),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'xxx.jpg'"),a(`),
    `),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'yyy.jpg'"),a(`),
    `),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'zzz.jpg'"),a(`),
]).`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-title function_"},"alert"),a("("),s("span",{class:"hljs-string"},"'all images are loaded!'"),a(`)
});
`)])],-1),s("h2",null,"方法三：$.Deferred",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 如果有jquery"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" loadImg = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"url"),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" defer = $."),s("span",{class:"hljs-title class_"},"Deferred"),a(`();

    `),s("span",{class:"hljs-keyword"},"var"),a(" img = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Image"),a(`();
    img.`),s("span",{class:"hljs-property"},"src"),a(` = url;
    img.`),s("span",{class:"hljs-property"},"onload"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
        defer.`),s("span",{class:"hljs-title function_"},"resolve"),a(`()  ;
    };
    img.`),s("span",{class:"hljs-property"},"onerror"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
        defer.`),s("span",{class:"hljs-title function_"},"reject"),a(`()  ;
    };

    `),s("span",{class:"hljs-keyword"},"return"),a(" defer."),s("span",{class:"hljs-title function_"},"promise"),a(`();
};

$.`),s("span",{class:"hljs-title function_"},"when"),a("("),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'xx.jpg'"),a("), "),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'yy.jpg'"),a("), "),s("span",{class:"hljs-title function_"},"loadImg"),a("("),s("span",{class:"hljs-string"},"'zz.jpg'"),a("))."),s("span",{class:"hljs-title function_"},"done"),a("("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-title function_"},"alert"),a("("),s("span",{class:"hljs-string"},"'all images are loaded!'"),a(`)
});
`)])],-1),s("p",null,[a("更多请参考 "),s("a",{href:"http://angusfu.github.io/slides/promise/",target:"_blank",rel:"noopener"},"http://angusfu.github.io/slides/promise/")],-1)])]),_:1})}}};export{d as default};
