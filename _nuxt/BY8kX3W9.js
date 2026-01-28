import{_ as t}from"./CaNb7KN_.js";import{c,w as p,o as h,a as s,b as l}from"./Du-K4N_a.js";const u={__name:"better-keyboard-navigation-with-progressive-enhancement",setup(r){const n={title:"[译] 渐进增强的键盘导航",description:"better-keyboard-navigation-with-progressive-enhancement/",keywords:"翻译,用户体验,可用性",pathname:"better-keyboard-navigation-with-progressive-enhancement",translation:{author:"@codepo8",social:"https://twitter.com/codepo8",from:"https://www.christianheilmann.com/2016/08/15/better-keyboard-navigation-with-progressive-enhancement/"},create_time:"2016-08-30",prev:{title:"聊聊 JavaScript Date 对象",pathname:"date-in-javascript"},next:{title:"[译] Fetch 请求的本地缓存",pathname:"cache-fetched-ajax-requests"}};return(o,a)=>{const e=t;return h(),c(e,{data:n},{default:p(()=>[...a[0]||(a[0]=[s("p",null,"创建界面时很重要的一点是，要考虑到那些只依赖键盘来使用产品的用户。这对可访问性来说是基本要求，在多数情况下，通过键盘操作访问也并非难事。这意味着首先，也是最重要的，是使用键盘可访问元素进行交互。",-1),s("ul",null,[s("li",null,[s("p",null,"如果希望用户跳转到其他地方，使用带有有效的 href 属性的锚点连接")]),s("li",null,[s("p",null,"如果希望用户执行你自己的代码，并在当前文档中停留，使用按钮")])],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p2.ssl.qhimg.com/t01adc9f3ae9a586201.jpg",alt:"键盘"})],-1),s("p",null,[l("通过"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",target:"_blank",rel:"noopener"},"流动 tabIndex 技术"),l("几乎可以使所有内容都能通过键盘访问，不过，既然已经有 HTML 元素可以做同样的事情，又何必再麻烦呢。")],-1),s("h2",null,"效果可视化",-1),s("p",null,[l("不过，使用恰当的元素并不那么简单；用户键盘在元素集合中所处的位置，也要显眼一些。给激活的元素加上轮廓（outline），浏览器解决了这个问题。这虽然超有用，但却是一些人的眼中钉，他们希望由自己控制所有交互的视觉展现。在 CSS 中将 outline 属性设置为 none，就能移除这个视觉辅助功能；不过这会带来"),s("a",{href:"http://www.outlinenone.com/",target:"_blank",rel:"noopener"},"不小的可访问性问题"),l("，除非你提供一个别的替代。")],-1),s("p",null,[l("使用最显眼的 HTML 元素；加上一些 CSS，确保除 hover 之外 focus 状态同样也被定义。这样就可以使用户在列表中的一个个项目间，轻松地通过 tab 来切换了。Shift + Tab 允许回退。可以看下 "),s("a",{href:"http://jsbin.com/ronuzis",target:"_blank",rel:"noopener"},"demo"),l("，HTML 挺简单粗暴的。")],-1),s("pre",null,[s("code",{class:"hljs lang-html"},[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"ul"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"button"),l(">")]),l("1"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"button"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"button"),l(">")]),l("2"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"button"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"button"),l(">")]),l("3"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"button"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
  …
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"button"),l(">")]),l("20"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"button"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"ul"),l(">")]),l(` 
`)])],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t01f5cf80c24e3e5365.gif",alt:"在按钮列表中 tab 切换"})],-1),s("p",null,"使用列表，为我们的元素赋予了层次结构，以及普通浏览器所没有的可访问性技术的导航方式。它还带来很多 HTML 元素，我们可以自己添加样式。通过一点样式，我们可以将其转换为网格，占用更少的垂直空间，容纳更多内容。",-1),s("pre",null,[s("code",{class:"hljs lang-css"},[s("span",{class:"hljs-selector-tag"},"ul"),l(", "),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"margin"),l(": "),s("span",{class:"hljs-number"},"0"),l(`;
  `),s("span",{class:"hljs-attribute"},"padding"),l(": "),s("span",{class:"hljs-number"},"0"),l(`;
  `),s("span",{class:"hljs-attribute"},"list-style"),l(`: none;
}
`),s("span",{class:"hljs-selector-tag"},"button"),l(` {
  `),s("span",{class:"hljs-attribute"},"border"),l(`: none;
  `),s("span",{class:"hljs-attribute"},"display"),l(`: block;
  `),s("span",{class:"hljs-attribute"},"background"),l(`: goldenrod;
  `),s("span",{class:"hljs-attribute"},"color"),l(`: white;
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"90%"),l(`;
  `),s("span",{class:"hljs-attribute"},"height"),l(": "),s("span",{class:"hljs-number"},"30px"),l(`;  
  `),s("span",{class:"hljs-attribute"},"margin"),l(": "),s("span",{class:"hljs-number"},"5%"),l(`;
  `),s("span",{class:"hljs-attribute"},"transform"),l(": "),s("span",{class:"hljs-built_in"},"scale"),l("("),s("span",{class:"hljs-number"},"0.8"),l(`);
  `),s("span",{class:"hljs-attribute"},"transition"),l(": "),s("span",{class:"hljs-number"},"300ms"),l(`;
}
`),s("span",{class:"hljs-selector-tag"},"button"),s("span",{class:"hljs-selector-pseudo"},":hover"),l(", "),s("span",{class:"hljs-selector-tag"},"button"),s("span",{class:"hljs-selector-pseudo"},":focus"),l(` {
  `),s("span",{class:"hljs-attribute"},"transform"),l(": "),s("span",{class:"hljs-built_in"},"scale"),l("("),s("span",{class:"hljs-number"},"1"),l(`);
  `),s("span",{class:"hljs-attribute"},"outline"),l(`: none;
  `),s("span",{class:"hljs-attribute"},"background"),l(`: powderblue;
  `),s("span",{class:"hljs-attribute"},"color"),l(": "),s("span",{class:"hljs-number"},"#333"),l(`;
}

`),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"float"),l(`: left;
}

`),s("span",{class:"hljs-comment"},`/* 
  grid magic by @heydonworks 
  https://codepen.io/heydon/pen/bcdrl
*/`),l(`

`),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-built_in"},"calc"),l("("),s("span",{class:"hljs-number"},"100%"),l(" / "),s("span",{class:"hljs-number"},"4"),l(`);
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"1"),l(`) {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"100%"),l(`;
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"1"),l(") ~ "),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"100%"),l(`;
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"2"),l(`) {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"50%"),l(`;
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"2"),l(") ~ "),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"50%"),l(`;
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"3"),l(`) {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-built_in"},"calc"),l("("),s("span",{class:"hljs-number"},"100%"),l(" / "),s("span",{class:"hljs-number"},"4"),l(`);
}
`),s("span",{class:"hljs-selector-tag"},"li"),s("span",{class:"hljs-selector-pseudo"},":nth-child"),l("("),s("span",{class:"hljs-number"},"4"),l("n+"),s("span",{class:"hljs-number"},"1"),l(")"),s("span",{class:"hljs-selector-pseudo"},":nth-last-child"),l("("),s("span",{class:"hljs-number"},"3"),l(") ~ "),s("span",{class:"hljs-selector-tag"},"li"),l(` {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-built_in"},"calc"),l("("),s("span",{class:"hljs-number"},"100%"),l(" / "),s("span",{class:"hljs-number"},"4"),l(`);
}
`)])],-1),s("p",null,[l("结果"),s("a",{href:"http://output.jsbin.com/cujomeq/",target:"_blank",rel:"noopener"},"看起来非常棒"),l("，在查看列表的过程中，我们能清楚地看到自己所处的位置。")],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t0192466c1b3d4a0744.gif",alt:"网格中一格格地切换"})],-1),s("h2",null,"键盘访问的升级 —— 提供快捷方式",-1),s("p",null,"不过，在访问网格时，通过键盘进行两个方向的移动会不会更好呢？",-1),s("p",null,[l("使用一点 JavaScript 做渐进增强，"),s("a",{href:"http://jsbin.com/mafeko/",target:"_blank",rel:"noopener"},"我们做到了"),l("，可以使用鼠标或方向键访问网格。")],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t0108c1e3e1785dfe95.gif",alt:"使用鼠标控制方向切换网格访问"})],-1),s("p",null,[l("不过记着，这仅仅只是一个"),s("strong",null,"增强"),l("。假设 JavaScript 因为各种可能的原因执行失败，依然可以通过 tab 来访问列表，我们失去的只是便利，但至少还有可用的界面。")],-1),s("p",null,[l("我将这个打包成了一个小巧、无依赖的开源 JavaScript 项目 "),s("a",{href:"https://github.com/codepo8/gridnav",target:"_blank",rel:"noopener"},"gridnav"),l("，可以在 "),s("a",{href:"https://codepo8.github.io/gridnav",target:"_blank",rel:"noopener"},"GitHub"),l(" 上获取代码。你要做的就是调用脚本，传给它一个选择器以获取元素列表。")],-1),s("pre",null,[s("code",{class:"hljs lang-html"},[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"ul"),l(),s("span",{class:"hljs-attr"},"id"),l("="),s("span",{class:"hljs-string"},'"links"'),l(),s("span",{class:"hljs-attr"},"data-amount"),l("="),s("span",{class:"hljs-string"},'"5"'),l(),s("span",{class:"hljs-attr"},"data-element"),l("="),s("span",{class:"hljs-string"},'"a"'),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"a"),l(),s("span",{class:"hljs-attr"},"href"),l("="),s("span",{class:"hljs-string"},'"#"'),l(">")]),l("1"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"a"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"a"),l(),s("span",{class:"hljs-attr"},"href"),l("="),s("span",{class:"hljs-string"},'"#"'),l(">")]),l("2"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"a"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
  …
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"li"),l(">")]),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"a"),l(),s("span",{class:"hljs-attr"},"href"),l("="),s("span",{class:"hljs-string"},'"#"'),l(">")]),l("25"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"a"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"li"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"ul"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"src"),l("="),s("span",{class:"hljs-string"},'"gridnav.js"'),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(">")]),s("span",{class:"language-javascript"},[l(`
  `),s("span",{class:"hljs-keyword"},"var"),l(" linklist = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Gridnav"),l("("),s("span",{class:"hljs-string"},"'#links'"),l(`);
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(` 
`)])],-1),s("p",null,[l("通过列表元素的 data- 属性，可以自己定义每行元素的数量以及键盘可访问的元素。这些是可选的，但设置之后会让代码更快，出错可能性更小。"),s("a",{href:"https://github.com/codepo8/gridnav/blob/master/README.md",target:"_blank",rel:"noopener"},"README"),l(" 文件更详细地解释了如何使用。")],-1),s("h2",null,"工作原理",-1),s("p",null,[l("开始考虑如何做的时候，像任何开发者一样，抓到了最复杂的方式。我以为，需要对父节点、兄弟节点的大量定位比较，使用上 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener"},"getBoundingClientRect"),l("，进行大量的 DOM 访问。")],-1),s("p",null,"之后我往回走了一步，意识到如何展示列表并不重要。最终不过是一个列表，我们要访问它而已。甚至不需要访问 DOM，因为我们所做的不过是从一堆按钮或锚点连接中的一个切换到另一个。我们要做的就是：",-1),s("ol",null,[s("li",null,[s("p",null,[l("找到当前所在元素（"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/target",target:"_blank",rel:"noopener"},"event.target"),l("）。")])]),s("li",null,[s("p",null,"获取按下的键。")]),s("li",null,[s("p",null,"根据键向前向后移动，或跳过一些元素到下一行。")])],-1),s("p",null,[l("就像这样（"),s("a",{href:"https://codepo8.github.io/gridnav/tutorialfiles/demo-to-inline.html",target:"_blank",rel:"noopener"},"点击这里试试看"),l("）：")],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t01fd0f3a12ee84c71c.gif",alt:"网格中移动和在坐标系中移动一样"})],-1),s("p",null,"我们需要跳过的元素数量是由每行的元素数量决定的。向上等同于向前 n 个元素，向下相当于向后 n 个元素。",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t017ff0dbc0bb99bb24.png",alt:"网格移动图解"})],-1),s("p",null,"使用一些小技巧，完整代码非常简短：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("("),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`){
  `),s("span",{class:"hljs-keyword"},"var"),l(" list = "),s("span",{class:"hljs-variable language_"},"document"),l("."),s("span",{class:"hljs-title function_"},"querySelector"),l("("),s("span",{class:"hljs-string"},"'ul'"),l(`);
  `),s("span",{class:"hljs-keyword"},"var"),l(" items = list."),s("span",{class:"hljs-title function_"},"querySelectorAll"),l("("),s("span",{class:"hljs-string"},"'button'"),l(`);
  `),s("span",{class:"hljs-keyword"},"var"),l(" amount = "),s("span",{class:"hljs-title class_"},"Math"),l("."),s("span",{class:"hljs-title function_"},"floor"),l(`(
    list.`),s("span",{class:"hljs-property"},"offsetWidth"),l(" / list."),s("span",{class:"hljs-property"},"firstElementChild"),l("."),s("span",{class:"hljs-property"},"offsetWidth"),l(`
  );
  `),s("span",{class:"hljs-keyword"},"var"),l(` codes = {
    `),s("span",{class:"hljs-number"},"38"),l(`: -amount,
    `),s("span",{class:"hljs-number"},"40"),l(`: amount,
    `),s("span",{class:"hljs-number"},"39"),l(": "),s("span",{class:"hljs-number"},"1"),l(`,
    `),s("span",{class:"hljs-number"},"37"),l(": -"),s("span",{class:"hljs-number"},"1"),l(`
  };
  `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"var"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < items."),s("span",{class:"hljs-property"},"length"),l(`; i++) {
    items[i].`),s("span",{class:"hljs-property"},"index"),l(` = i;
  }
  `),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"handlekeys"),l("("),s("span",{class:"hljs-params"},"ev"),l(`) {
    `),s("span",{class:"hljs-keyword"},"var"),l(" keycode = ev."),s("span",{class:"hljs-property"},"keyCode"),l(`;
    `),s("span",{class:"hljs-keyword"},"if"),l(` (codes[keycode]) {
      `),s("span",{class:"hljs-keyword"},"var"),l(" t = ev."),s("span",{class:"hljs-property"},"target"),l(`;
      `),s("span",{class:"hljs-keyword"},"if"),l(" (t."),s("span",{class:"hljs-property"},"index"),l(" !== "),s("span",{class:"hljs-literal"},"undefined"),l(`) {
        `),s("span",{class:"hljs-keyword"},"if"),l(" (items[t."),s("span",{class:"hljs-property"},"index"),l(` + codes[keycode]]) {
          items[t.`),s("span",{class:"hljs-property"},"index"),l(" + codes[keycode]]."),s("span",{class:"hljs-title function_"},"focus"),l(`();
        }
      }
    }
  }
  list.`),s("span",{class:"hljs-title function_"},"addEventListener"),l("("),s("span",{class:"hljs-string"},"'keyup'"),l(`, handlekeys);
})();
`)])],-1),s("p",null,"这里发生了什么？",-1),s("p",null,"首先我们获取到了列表元素，并缓存所有可通过键盘访问的元素：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-keyword"},"var"),l(" list = "),s("span",{class:"hljs-variable language_"},"document"),l("."),s("span",{class:"hljs-title function_"},"querySelector"),l("("),s("span",{class:"hljs-string"},"'ul'"),l(`);
  `),s("span",{class:"hljs-keyword"},"var"),l(" items = list."),s("span",{class:"hljs-title function_"},"querySelectorAll"),l("("),s("span",{class:"hljs-string"},"'button'"),l(`);
`)])],-1),s("p",null,"计算每次上下移动需要跳过的元素数量，将列表的宽度除以列表第一个子元素（本例中是 LI）的宽度即可：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-keyword"},"var"),l(" amount = "),s("span",{class:"hljs-title class_"},"Math"),l("."),s("span",{class:"hljs-title function_"},"floor"),l(`(
    list.`),s("span",{class:"hljs-property"},"offsetWidth"),l(" / list."),s("span",{class:"hljs-property"},"firstElementChild"),l("."),s("span",{class:"hljs-property"},"offsetWidth"),l(`
  );
`)])],-1),s("p",null,"相较于 switch 语句或者大量的 if 判断，我更乐意使用查找表。在本例总共，查找表名字是 codes。向上键值为 38，向下 40，向左 37，向右 39。假如我们拿到了 codes[37]，值为 -1，也就是我们要在列表中移动的数量：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-keyword"},"var"),l(` codes = {
    `),s("span",{class:"hljs-number"},"38"),l(`: -amount,
    `),s("span",{class:"hljs-number"},"40"),l(`: amount,
    `),s("span",{class:"hljs-number"},"39"),l(": "),s("span",{class:"hljs-number"},"1"),l(`,
    `),s("span",{class:"hljs-number"},"37"),l(": -"),s("span",{class:"hljs-number"},"1"),l(`
  };
`)])],-1),s("p",null,"可以使用 event.target 获取按下键盘时列表中的选中元素，但我们不知道它在列表中的位置。为避免重复遍历列表，一次性遍历所有按钮，将它们在列表中的索引存储在按钮自身的 index 属性中。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"var"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < items."),s("span",{class:"hljs-property"},"length"),l(`; i++) {
    items[i].`),s("span",{class:"hljs-property"},"index"),l(` = i;
  }
`)])],-1),s("p",null,"handlekeys() 完成剩余工作。读取所按按键的键值，然后到 codes 中查找。所以，我们只针对方向键做出响应。接着获取当前的元素，检查其是否有 index 属性。如果有，则检查我们将要移到的位置是否有元素存在。如果元素存在，则获得焦点。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"handlekeys"),l("("),s("span",{class:"hljs-params"},"ev"),l(`) {
    `),s("span",{class:"hljs-keyword"},"var"),l(" keycode = ev."),s("span",{class:"hljs-property"},"keyCode"),l(`;
    `),s("span",{class:"hljs-keyword"},"if"),l(` (codes[keycode]) {
      `),s("span",{class:"hljs-keyword"},"var"),l(" t = ev."),s("span",{class:"hljs-property"},"target"),l(`;
      `),s("span",{class:"hljs-keyword"},"if"),l(" (t."),s("span",{class:"hljs-property"},"index"),l(" !== "),s("span",{class:"hljs-literal"},"undefined"),l(`) {
        `),s("span",{class:"hljs-keyword"},"if"),l(" (items[t."),s("span",{class:"hljs-property"},"index"),l(` + codes[keycode]]) {
          items[t.`),s("span",{class:"hljs-property"},"index"),l(" + codes[keycode]]."),s("span",{class:"hljs-title function_"},"focus"),l(`();
        }
      }
    }
  }
`)])],-1),s("p",null,"给列表绑定一个 keyup 事件监听器，搞定 :)",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  list."),s("span",{class:"hljs-title function_"},"addEventListener"),l("("),s("span",{class:"hljs-string"},"'keyup'"),l(`, handlekeys);
`)])],-1),s("p",null,[l("如果你想看真实效果，这有一个"),s("a",{href:"https://www.youtube.com/watch?v=zc420bXDqWk",target:"_blank",rel:"noopener"},"讲述各个细节的快速视频教程"),l("。")],-1),s("p",null,"视频在最后的代码部分有点 bug，因为我没将 count 属性和 undefined 对比，所以在第一个元素上，键盘功能没法正常工作（0 是 falsy）。",-1)])]),_:1})}}};export{u as default};
