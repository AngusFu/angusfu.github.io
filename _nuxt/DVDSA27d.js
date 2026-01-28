import{_ as p}from"./CaNb7KN_.js";import{c,w as r,o as t,a as l,b as a}from"./Du-K4N_a.js";const k={__name:"prepack",setup(o){const n={title:"Facebook 开源代码优化工具 Prepack",description:"Facebook 开源代码优化工具 Prepack",keywords:"JavaScript",pathname:"prepack",translation:null,create_time:"2017-05-04",prev:{title:"[译] 浏览器中的 ES6 module 实现",pathname:"es-modules-in-browsers"},next:{title:"[译] 内容加速黑科技趣谈",pathname:"fun-hacks-faster-content"}};return(i,s)=>{const e=p;return t(),c(e,{data:n},{default:r(()=>[...s[0]||(s[0]=[l("p",null,"Fackbook 又搞了个大新闻！",-1),l("p",null,"今天一早，朋友圈被一个名为 Prepack 的工具刷爆了。",-1),l("p",null,[a("周刊君很好奇地看了下官网（"),l("a",{href:"https://prepack.io/",target:"_blank",rel:"noopener"},"prepack.io"),a("），这么厉害的工具，有必要第一时间向大家介绍一下（还能不能好好过个青年节了）。")],-1),l("p",null,"看 “Prepack” 这个名字就能大概知道，它的作用，肯定是在发布前（“pre”）对代码动了些什么手脚。官网介绍 Prepack 是“一个使 JavaScript 跑得更快的工具”。那么它到底做了些什么厉害的事情呢？",-1),l("p",null,"根据官网首页信息，Prepack “能够消除那些可以本可以在编译（compile）阶段完成的运行时计算”，将代码中的某些部分替换为一系列赋值语句，这样一来就可以省去很多中间计算和对象的分配工作。",-1),l("h3",null,"官方示例",-1),l("p",null,"下面是 Prepack 官网给出的一个例子：",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[a("("),l("span",{class:"hljs-keyword"},"function"),a(" ("),l("span",{class:"hljs-params"}),a(`) {
  `),l("span",{class:"hljs-keyword"},"var"),a(" self = "),l("span",{class:"hljs-variable language_"},"this"),a(`;
  [`),l("span",{class:"hljs-string"},"'A'"),a(", "),l("span",{class:"hljs-string"},"'B'"),a(", "),l("span",{class:"hljs-number"},"42"),a("]."),l("span",{class:"hljs-title function_"},"forEach"),a("("),l("span",{class:"hljs-keyword"},"function"),a("("),l("span",{class:"hljs-params"},"x"),a(`) {
    `),l("span",{class:"hljs-keyword"},"var"),a(" name = "),l("span",{class:"hljs-string"},"'_'"),a(" + x."),l("span",{class:"hljs-title function_"},"toString"),a("()["),l("span",{class:"hljs-number"},"0"),a("]."),l("span",{class:"hljs-title function_"},"toLowerCase"),a(`();
    `),l("span",{class:"hljs-keyword"},"var"),a(" y = "),l("span",{class:"hljs-built_in"},"parseInt"),a(`(x);
    self[name] = y ? y : x;
  });
})();
`)])],-1),l("p",null,"经过 Prepack 的处理，上面这段代码变成了下面这样：",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[a("("),l("span",{class:"hljs-keyword"},"function"),a(" ("),l("span",{class:"hljs-params"}),a(`) {
  _a = `),l("span",{class:"hljs-string"},'"A"'),a(`;
  _b = `),l("span",{class:"hljs-string"},'"B"'),a(`;
  _4 = `),l("span",{class:"hljs-number"},"42"),a(`;
})();
`)])],-1),l("p",null,[a("原来的 "),l("code",null,".forEach"),a(" 调用没有了，一系列的中间转换过程也不见了。借用官网的说法，“多数的计算都在 Prepack 编译时进行了预初始化”。")],-1),l("p",null,"再举一个 Fibonacci 的例子：",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-comment"},"// 处理前"),a(`
(`),l("span",{class:"hljs-keyword"},"function"),a(" ("),l("span",{class:"hljs-params"}),a(`) {
  `),l("span",{class:"hljs-keyword"},"function"),a(),l("span",{class:"hljs-title function_"},"fibonacci"),a("("),l("span",{class:"hljs-params"},"x"),a(`) {
    `),l("span",{class:"hljs-keyword"},"return"),a(" x <= "),l("span",{class:"hljs-number"},"1"),a(" ? x : "),l("span",{class:"hljs-title function_"},"fibonacci"),a("(x - "),l("span",{class:"hljs-number"},"1"),a(") + "),l("span",{class:"hljs-title function_"},"fibonacci"),a("(x - "),l("span",{class:"hljs-number"},"2"),a(`);
  }
  `),l("span",{class:"hljs-variable language_"},"global"),a("."),l("span",{class:"hljs-property"},"x"),a(" = "),l("span",{class:"hljs-title function_"},"fibonacci"),a("("),l("span",{class:"hljs-number"},"23"),a(`);
})();

`),l("span",{class:"hljs-comment"},"// 处理后"),a(`
(`),l("span",{class:"hljs-keyword"},"function"),a(" ("),l("span",{class:"hljs-params"}),a(`) {
  x = `),l("span",{class:"hljs-number"},"28657"),a(`;
})();
`)])],-1),l("h3",null,"工作机制",-1),l("p",null,"据官网介绍，Prepack 的实现依赖以下几个方面：",-1),l("h4",null,"1. AST（抽象语法树）",-1),l("p",null,"Prepack 是在 AST 这一层级对代码进行操作的。通过 Babel 来解析源码，并生成优化后的代码。关于 Babel 与 AST，周刊君推荐两篇文章：",-1),l("ul",null,[l("li",null,[l("p",null,[a("《"),l("a",{href:"https://mp.weixin.qq.com/s/fFQUBeg332gdU8yNddauxQ",target:"_blank",rel:"noopener"},"Babel for ES6? And Beyond!"),a("》")])]),l("li",null,[l("p",null,[a("《"),l("a",{href:"http://www.zcfy.cc/article/347",target:"_blank",rel:"noopener"},"通过开发 Babel 插件理解抽象语法树（AST）"),a("》")])])],-1),l("h4",null,"2. 具体执行（Concrete Execution）",-1),l("p",null,"Prepack 的核心部分是“一个大致兼容 ECMAScript 5 的编译器”（an almost ECMAScript 5 compatible interpreter），而这个编译器是通过 JavaScript 实现的。这个编译器可以追踪、撤销包括对象变化在内的所有的操作。这样一来就能进行推理性的优化（speculative optimizations）。",-1),l("h4",null,"3. 符号执行（Symbolic Execution）",-1),l("p",null,[a("除了计算具体值，Prepack 的编译器还可以操作抽象值，而这些抽象值通常都来自于代码与环境的交互。如 "),l("code",null,"Date.now"),a(" 所返回的就是抽象值。此外，根据官网首页的描述，还可以通过 "),l("code",null,"__abstract()"),a(" 这样的辅助工具函数，手动插入抽象值。Prepack 会追踪发生在抽象值之上的操作，如果有分支情况，则会对所有可能性进行探查。")],-1),l("p",null,[a("官网介绍说，“因此，Prepack 为 JavaScript 实现了一套符号执行引擎”。为了方便大家理解，周刊君特地引用了"),l("a",{href:"https://zh.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E6%89%A7%E8%A1%8C",target:"_blank",rel:"noopener"},"维基百科"),a("上的一段话：")],-1),l("blockquote",null,[l("p",null,"符号执行 （Symbolic Execution）是一种程序分析技术。其可以通过分析程序来得到让特定代码区域执行的输入。使用符号执行分析一个程序时，该程序会使用符号值作为输入，而非一般执行程序时使用的具体值。在达到目标代码时，分析器可以得到相应的路径约束，然后通过约束求解器来得到可以触发目标代码的具体值。")],-1),l("h4",null,"4. 抽象解释（Abstract Interpretation）",-1),l("p",null,[a("官网的描述有点复杂。关于抽象解释，请移步"),l("a",{href:"https://en.wikipedia.org/wiki/Abstract_interpretation",target:"_blank",rel:"noopener"},"维基百科"),a("。有兴趣的可以去官网阅读原文。")],-1),l("h4",null,"5. 堆序列化（Heap Serialization）",-1),l("p",null,"初始化阶段结束时，Prepack 会捕获最终的堆。按顺序遍历堆，生成新的代码，创建、链接堆中的可及对象。",-1),l("p",null,"如前所述，堆中的一些值可能是对抽象值进行计算的结果。Prepack 将会根据这些值生成执行计算的代码，其计算过程与源程序相同。",-1),l("h3",null,"环境很重要！",-1),l("p",null,[a("需要注意的是，Prepack 并未完整模拟浏览器、Node 环境，Prepack 对 "),l("code",null,"document"),a(" 和 "),l("code",null,"window"),a(" 并没有多少了解。对这样一些属性求值的时候，将会得到 "),l("code",null,"undefined"),a("。如果需要在这样一些地方使用 Prepack，必须通过一些工具函数实现。")],-1),l("h3",null,"如何尝鲜",-1),l("pre",null,[l("code",{class:"hljs lang-bash"},[l("span",{class:"hljs-comment"},"# 安装"),a(`
npm install -g prepack

`),l("span",{class:"hljs-comment"},"# 处理文件，并打印到控制台"),a(`
prepack script.js

`),l("span",{class:"hljs-comment"},"# 处理文件，并输出到新文件"),a(`
prepack script.js --out script-processed.js
`)])],-1),l("p",null,"除了上面的基本用法之外，还支持如 sourceMap 等更多选项。这里就不一一介绍了。",-1),l("h3",null,"当前支持情况",-1),l("p",null,[a("此外，官方介绍称，"),l("strong",null,"“Prepack 目前仍处于早期开发阶段，尚未做好投入生产环境的准备”"),a("。不过，还是响应 Prepack 的号召吧，“try it out, give feedback, and help fix bugs”。")],-1),l("p",null,[a("想要进一步关于该项目的发展计划，可以访问官网首页的 "),l("a",{href:"https://prepack.io/",target:"_blank",rel:"noopener"},"Roadmap"),a(" 部分。")],-1),l("h3",null,"相关技术",-1),l("p",null,"Closure Compiler 同样会对 JavaScript 代码进行优化。Prepack 比 Closure Compiler 走得更远的地方在于执行了初始化阶段的全局代码，展开循环、递归。官网的一个说法是，“Prepack 着眼于运行时性能，而 Closure Compiler 的重点在于代码体积”。",-1)])]),_:1})}}};export{k as default};
