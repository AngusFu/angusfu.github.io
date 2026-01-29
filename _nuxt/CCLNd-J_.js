import{_ as c}from"./Bm2Oy-cY.js";import{c as e,w as p,o as h,a as s,b as a}from"./YobvFIQM.js";const m={__name:"xease-campus-2014-note",setup(r){const n={title:"某易 2014 校招面试总结",keywords:"原创,面试",pathname:"xease-campus-2014-note",translation:null,create_time:"2014-09-24",prev:{title:"记一种水平垂直居中的办法",pathname:"vh-center-layout"},next:{title:"某度 2014 年秋招前端笔试",pathname:"xdu-campus-recruitment-2014"}};return(j,l)=>{const t=c;return h(),e(t,{data:n},{default:p(()=>[...l[0]||(l[0]=[s("p",null,"今天参加了某易的前端开发工程师一面。",-1),s("p",null,"算是离“前端”这两个字又近了一步吧——好吧，虽然我一面就跪了。",-1),s("p",null,"其实只是压根儿就没做面试的准备，因为对博主这种“技术爱好者”来说，某易的前端笔试题比某度变态 N 倍（仔细想想其实还是某度的笔试比较有质量），前 22 道选择基本靠蒙，最后居然接到面试通知了。",-1),s("p",null,"面试问了很多基本的问题。直到面试结束，博主才发现自己为自己挖了无数的坑。唉，都是泪。",-1),s("p",null,"初次面试的压力之下，面试有一些基本的问题没有被我解决或者答错了。下面依次来说说看。",-1),s("p",null,"第一题，10个 div，点击任意一个后打印出点击的的index。",-1),s("p",null,[a("so easy，果断用了 "),s("code",null,"aLi[i].index = i"),a(" 的方法。面试官复又问道闭包如何实现。")],-1),s("p",null,"压力之下，博主竟然木有答粗来！！！现在再想想，真是自杀的心都有了！！！",-1),s("p",null,"回来之后想到的两种方法如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),a(" oUl = "),s("span",{class:"hljs-variable language_"},"document"),a("."),s("span",{class:"hljs-title function_"},"getElementsByTagName"),a("("),s("span",{class:"hljs-string"},'"ul"'),a(")["),s("span",{class:"hljs-number"},"0"),a(`];
`),s("span",{class:"hljs-keyword"},"var"),a(" aLi = oUl."),s("span",{class:"hljs-property"},"children"),a(`;

`),s("span",{class:"hljs-comment"},"//常规方法"),a(`
`),s("span",{class:"hljs-keyword"},"for"),a("("),s("span",{class:"hljs-keyword"},"var"),a(" i="),s("span",{class:"hljs-number"},"0"),a("; i<aLi."),s("span",{class:"hljs-property"},"length"),a(`; i++){
    aLi[i].`),s("span",{class:"hljs-property"},"index"),a(` = i;
    aLi[i].`),s("span",{class:"hljs-property"},"onclick"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"}),a(`){
        `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-property"},"index"),a(`);
    };
}

`),s("span",{class:"hljs-comment"},"//方法1"),a(`
`),s("span",{class:"hljs-keyword"},"for"),a("("),s("span",{class:"hljs-keyword"},"var"),a(" i="),s("span",{class:"hljs-number"},"0"),a("; i<aLi."),s("span",{class:"hljs-property"},"length"),a(`; i++){
    (`),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"idx"),a(`){
        aLi[idx].`),s("span",{class:"hljs-property"},"onclick"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"}),a(`){
            `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(idx);
        };
    })(i);
}

`),s("span",{class:"hljs-comment"},"//方法2"),a(`
`),s("span",{class:"hljs-keyword"},"for"),a("("),s("span",{class:"hljs-keyword"},"var"),a(" i="),s("span",{class:"hljs-number"},"0"),a("; i<aLi."),s("span",{class:"hljs-property"},"length"),a(`; i++){
    aLi[i].`),s("span",{class:"hljs-property"},"onclick"),a(" = "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"}),a(`){
        `),s("span",{class:"hljs-keyword"},"var"),a(` j = i;
        `),s("span",{class:"hljs-keyword"},"return"),a("  "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"}),a(`){
            `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(j);
        };
    }();
}
`)])],-1),s("p",null,"第二个问题， CSS 实现首尾高度固定、中间高度自适应的 DIV 布局，没回答清楚。",-1),s("p",null,[a("最后百度了一番，看到"),s("a",{href:"http://www.cnblogs.com/ckmouse/archive/2012/02/14/2351043.html",target:"_blank",rel:"noopener"},"一篇文章"),a(" 。问题基本被解决了。只能怪自己基础不牢。")],-1),s("p",null,"码基本参考前引文章，感谢作者解惑。",-1),s("pre",null,[s("code",{class:"hljs lang-html"},[s("span",{class:"hljs-meta"},[a("<!doctype "),s("span",{class:"hljs-keyword"},"html"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"html"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"zh-CN"'),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"head"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"meta"),a(),s("span",{class:"hljs-attr"},"charset"),a("="),s("span",{class:"hljs-string"},'"utf-8"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"title"),a(">")]),a("Document"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"title"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"head"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"body"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"con"'),a(">")]),a(`
        `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"top"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
        `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"md"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
        `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bottom"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
    
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"language-css"},[a(`
        *{`),s("span",{class:"hljs-attribute"},"margin"),a(":"),s("span",{class:"hljs-number"},"0"),a("; "),s("span",{class:"hljs-attribute"},"padding"),a(":"),s("span",{class:"hljs-number"},"0"),a(`;}
        `),s("span",{class:"hljs-selector-tag"},"html"),a(","),s("span",{class:"hljs-selector-tag"},"body"),a(","),s("span",{class:"hljs-selector-class"},".con"),a("{"),s("span",{class:"hljs-attribute"},"height"),a(":"),s("span",{class:"hljs-number"},"100%"),a(";"),s("span",{class:"hljs-attribute"},"width"),a(":"),s("span",{class:"hljs-number"},"100%"),a(";"),s("span",{class:"hljs-attribute"},"height"),a(":"),s("span",{class:"hljs-number"},"100%"),a(";"),s("span",{class:"hljs-attribute"},"width"),a(":"),s("span",{class:"hljs-number"},"100%"),a(`;}            
        `),s("span",{class:"hljs-selector-tag"},"div"),a("{"),s("span",{class:"hljs-attribute"},"position"),a(`:absolute;}
        `),s("span",{class:"hljs-selector-class"},".top"),a(","),s("span",{class:"hljs-selector-class"},".bottom"),a("{"),s("span",{class:"hljs-attribute"},"width"),a(":"),s("span",{class:"hljs-number"},"100%"),a(";"),s("span",{class:"hljs-attribute"},"height"),a(":"),s("span",{class:"hljs-number"},"100px"),a(";"),s("span",{class:"hljs-attribute"},"z-index"),a(":"),s("span",{class:"hljs-number"},"5"),a(`;}
        `),s("span",{class:"hljs-selector-class"},".top"),a("{"),s("span",{class:"hljs-attribute"},"background"),a(":red;"),s("span",{class:"hljs-attribute"},"top"),a(":"),s("span",{class:"hljs-number"},"0"),a(`;}
        `),s("span",{class:"hljs-selector-class"},".bottom"),a("{"),s("span",{class:"hljs-attribute"},"background"),a(":black;"),s("span",{class:"hljs-attribute"},"bottom"),a(":"),s("span",{class:"hljs-number"},"0"),a(`;}
        `),s("span",{class:"hljs-selector-class"},".md"),a(`{
            `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
            `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-number"},"#a7fad7"),a(`;
            `),s("span",{class:"hljs-attribute"},"overflow"),a(`: auto;
            `),s("span",{class:"hljs-attribute"},"top"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
            `),s("span",{class:"hljs-attribute"},"bottom"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
            `),s("span",{class:"hljs-attribute"},"position"),a(`: absolute;
            _height: `),s("span",{class:"hljs-number"},"100%"),a(`;
            _border-`),s("span",{class:"hljs-attribute"},"top"),a(": -"),s("span",{class:"hljs-number"},"100px"),a(" solid "),s("span",{class:"hljs-number"},"#eee"),a(`;
            _border-`),s("span",{class:"hljs-attribute"},"bottom"),a(": -"),s("span",{class:"hljs-number"},"100px"),a(" solid "),s("span",{class:"hljs-number"},"#eee"),a(`;
            _top: `),s("span",{class:"hljs-number"},"0"),a(";"),s("span",{class:"hljs-comment"},"/*http://www.cnblogs.com/ckmouse/archive/2012/02/14/2351043.html*/"),a(`
        }
    `)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"body"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"html"),a(">")]),a(` 
`)])],-1),s("p",null,"重点有二。",-1),s("p",null,"其一是 absolute 定位的 div 的宽高可以由设置 top、right、bottom、left 等属性来控制，如此一来自适应的问题得到解决；",-1),s("p",null,"其二是 IE6 特殊的盒模型（width、height 将 border 包含在内），所以用一个 css hack 将其上下 border 设置为负数，高度设为百分之百）：",-1),s("p",null,"最后，还有一个基础问题。且mark之。  ",-1),s("pre",null,[s("code",{class:"hljs lang-html"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"font:100px/200px Microsoft Yahei;width:660px;height:200px;text-overflow:ellipsis;"'),a(">")]),a(`
    天地玄黄宇,宙洪荒日月。
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"language-css"},[a(`
    `),s("span",{class:"hljs-selector-tag"},"div"),a(` {
        `),s("span",{class:"hljs-comment"},"/*超出宽度的不可见*/"),a(`
        `),s("span",{class:"hljs-attribute"},"overflow"),a(`: hidden;
        `),s("span",{class:"hljs-comment"},'/*不换行（除非遇到"<br>"）*/'),a(`
        `),s("span",{class:"hljs-attribute"},"white-space"),a(`: nowrap;
        `),s("span",{class:"hljs-comment"},"/*以“...”方式表示文本隐藏。*/"),a(`
        `),s("span",{class:"hljs-comment"},"/*博主当时很肯定地说用这就够了，完全把上面两行忘得干干净净*/"),a(`
        `),s("span",{class:"hljs-attribute"},"text-overflow"),a(`: ellipsis;
    } 
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(` 
`)])],-1),s("p",null,"最后，以一句诗结束博主失败的面试：我本将心向明月，奈何明月照沟渠。",-1)])]),_:1})}}};export{m as default};
