import{_ as e}from"./CaNb7KN_.js";import{c,w as p,o as r,a as s,b as a}from"./Du-K4N_a.js";const u={__name:"ie-filter",setup(i){const n={title:"笔记：IE 下透明度问题",description:"IE 下透明度问题记录",keywords:"原创,CSS",pathname:"ie-filter",translation:null,create_time:"2016-11-14",prev:{title:"[译] 手把手教你写一个 Javascript 框架：数据绑定",pathname:"data-bind-dirty-checking"},next:{title:"快来上钩哈哈哈",pathname:"fishing-for-spider"}};return(h,l)=>{const t=e;return r(),c(t,{data:n},{default:p(()=>[...l[0]||(l[0]=[s("p",null,"IE8 下面遇到奇怪的问题。本来半透明的 png 图片，竟然一片黑。",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p1.ssl.qhimg.com/t01685a11ad71082aa5.png",alt:""})],-1),s("p",null,[a("然而，我明明按照习惯使用了 "),s("code",null,"opacity + filter"),a(" 的方式。")],-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-selector-tag"},"img"),a(` {
  `),s("span",{class:"hljs-attribute"},"opacity"),a(": "),s("span",{class:"hljs-number"},"1"),a(`;
  `),s("span",{class:"hljs-attribute"},"filter"),a(": "),s("span",{class:"hljs-built_in"},"alpha"),a("(opacity="),s("span",{class:"hljs-number"},"100"),a(`);
}
`)])],-1),s("p",null,[a("结果发现，IE8 完全不是这么解析的。于是想起之前看过不少地方提到为 IE8 准备的 "),s("code",null,"-ms-filter"),a("（主要是滤镜什么的）。然后产生了下面这个方法：")],-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-selector-tag"},"img"),a(` {
  `),s("span",{class:"hljs-attribute"},"opacity"),a(": "),s("span",{class:"hljs-number"},"1"),a(`;
  -ms-`),s("span",{class:"hljs-attribute"},"filter"),a(": "),s("span",{class:"hljs-string"},'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"'),a(`;
  _filter: `),s("span",{class:"hljs-built_in"},"alpha"),a("(opacity="),s("span",{class:"hljs-number"},"100"),a(`);
}
`)])],-1),s("p",null,[a("要么是我以前真的没好好拿 IE8 测试过；要么一定是这次情况比较特殊，真的，之前还真没遇到过 "),s("code",null,"filter: alpha(opacity=100)"),a(" 失败过的。")],-1),s("h2",null,"另外一点",-1),s("p",null,"里面是一个 flash，功能和图片差不多。要求点击 flash，跳转到另外一个页面。如何实现？",-1),s("p",null,[a("首先想到的，自然是 "),s("code",null,"a>object"),a(" 呗。上 IE 测试下，失败。")],-1),s("p",null,[a("然后，那就用 "),s("code",null,"div>(a+object)"),a(" 吧， "),s("code",null,"a"),a(" 绝对定位。好像还挺好，测试，还是不行。")],-1),s("p",null,[a("可是 "),s("code",null,"a"),a(" 明明就在那里啊。随便加个背景色试试看？好像可以了。那试试 transparent 吧，又不行了。那就给加一个透明的背景图吧哈哈哈。")],-1),s("pre",null,[s("code",{class:"hljs lang-html"},[a(),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"wrap"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"a"),a(),s("span",{class:"hljs-attr"},"href"),a("="),s("span",{class:"hljs-string"},'"#"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"a"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"object"),a(">")]),a(`
    ....
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"object"),a(">")]),a(`
 `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`)])],-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-selector-class"},".wrap"),a(` {
  `),s("span",{class:"hljs-attribute"},"position"),a(`: relative;
}

`),s("span",{class:"hljs-selector-class"},".wrap"),a(" > "),s("span",{class:"hljs-selector-tag"},"a"),a(` {
  `),s("span",{class:"hljs-attribute"},"position"),a(`: absolute;
  `),s("span",{class:"hljs-attribute"},"left"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"top"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"z-index"),a(": "),s("span",{class:"hljs-number"},"999"),a(`;
  `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="),a(`);
}
`)])],-1)])]),_:1})}}};export{u as default};
