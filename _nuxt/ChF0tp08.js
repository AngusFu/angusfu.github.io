import{_ as e}from"./BV7Yc4PX.js";import{c as p,w as o,o as c,a as s,b as l}from"./B1kHp8qp.js";import"./8oskhlv7.js";const m={__name:"nx-project-structure",setup(r){const a={title:"[译] 手把手教你写一个 Javascript 框架：项目结构",description:"手把手教你写一个 Javascript 框架：项目结构",keywords:"翻译,ES6,JavaScript",pathname:"nx-project-structure",translation:{author:"Bertalan Miklos",social:"https://blog.risingstack.com/author/bertalan/",from:"https://blog.risingstack.com/writing-a-javascript-framework-project-structuring/"},create_time:"2016-11-20",prev:{title:"[译] CSS 方法论的选择",pathname:"when-to-use-which-css-methodology"},next:{title:"[译] 手把手教你写一个 Javascript 框架：沙箱求值",pathname:"sandbox-code-evaluation"}};return(i,n)=>{const t=e;return c(),p(t,{data:a},{default:o(()=>[...n[0]||(n[0]=[s("p",null,[l("过去几个月中，RisingStack 的 JavaScript 工程师 Bertalan Miklos 编写了新一代客户端框架 "),s("a",{href:"http://nx-nxframework.rhcloud.com",target:"_blank",rel:"noopener"},"NX"),l("。Bertalan 将通过"),s("strong",null,"编写 JavaScript 框架"),l("系列文章与我们分享他在编写框架过程中的收获：")],-1),s("p",null,[s("strong",null,"本章将展示 NX 的项目结构，并讲述如何解决可扩展性、依赖注入以及私有变量等方面的一些困难。")],-1),s("p",null,"本系列章节如下：",-1),s("ol",null,[s("li",null,"项目结构（正是本文）"),s("li",null,[s("a",{href:"/post/execution-timing/"},"执行调度(Execution timing)")]),s("li",null,[s("a",{href:"/post/sandbox-code-evaluation/"},"沙箱求值")]),s("li",null,[s("a",{href:"/post/data-bind-dirty-checking"},"数据绑定简介")]),s("li",null,[s("a",{href:"/post/es6-proxy-data-binding/"},"ES6 Proxy 实现数据绑定")]),s("li",null,"自定义元素"),s("li",null,"客户端路由")],-1),s("h2",null,"项目结构",-1),s("p",null,[l("没有放之四海而皆准的项目结构，但有一些基本准则。感兴趣的同学可以看下我们的 Node Hero 系列中的《"),s("a",{href:"https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/",target:"_blank",rel:"noopener"},"Node.js 项目结构教程"),l(" 》这一章。")],-1),s("h3",null,"NX 框架概览",-1),s("p",null,"NX 的目标是成为一个开源社区驱动的易于扩展的项目。项目特点如下：",-1),s("ul",null,[s("li",null,"包含现代客户端框架必须的所有特性；"),s("li",null,"除 polyfill 外，没有任何外部依赖；"),s("li",null,"代码总量 3000 行；"),s("li",null,"没有代码多于 300 行的模块；"),s("li",null,"单个特性模块依赖不超过 3 个。")],-1),s("p",null,"项目各模块依赖关系如下图所示：",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p4.ssl.qhimg.com/t01c9e92dbaa52fc18f.png",alt:"JavaScript Framework in post: The NX project structure"})],-1),s("p",null,"这种结构为典型框架开发难题提供了一种解决方案。",-1),s("ul",null,[s("li",null,"扩展性"),s("li",null,"依赖注入"),s("li",null,"私有变量")],-1),s("h3",null,"可扩展性实现",-1),s("p",null,"社区驱动项目必须易于扩展。故项目的核心部分应当小巧，并拥有一个预定义的依赖处理系统。前者确保项目易于理解，后者则保证框架稳定。",-1),s("p",null,"本节先聚焦于实现小巧的内核。",-1),s("p",null,[l("现代框架应当拥有的主要特性就是创建自定义元素并将其应用于 DOM 的能力。NX 的核心只有一个 "),s("code",null,"component"),l(" 函数，它的工作正在于此这个函数允许用户配置、注册一个新类型的元素。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"component"),l(`(config)
  .`),s("span",{class:"hljs-title function_"},"register"),l("("),s("span",{class:"hljs-string"},"'comp-name'"),l(`)
`)])],-1),s("p",null,[l("注册的 "),s("code",null,"comp-name"),l(" 是空组件类型，可以按照预期在 DOM 中实例化。")],-1),s("pre",null,[s("code",{class:"hljs lang-html"},[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"comp-name"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"comp-name"),l(">")]),l(`
`)])],-1),s("p",null,"下一步是保证能使用新特性扩展组件。为保持简洁、可扩展，这些新特性不应该污染核心部分。这时候使用依赖注入就很方便了。",-1),s("h2",null,"利用中间件实现依赖注入（DI）",-1),s("p",null,[l("如果你对依赖注入不太熟悉，建立先阅读这篇文章：《"),s("a",{href:"https://blog.risingstack.com/dependency-injection-in-node-js",target:"_blank",rel:"noopener"},"Dependency Injection in Node.js"),l("》。")],-1),s("blockquote",null,[s("p",null,"依赖注入是一种设计模式，在这种模式中，一个或多个依赖或服务被注入到或引用传递给一个独立对象。")],-1),s("p",null,"DI 解决了硬性依赖，却引入了新问题。使用者需要知道如何配置、注入依赖。大多客户端框架都将这些工作交给 DI 容器，帮助开发者完成。",-1),s("blockquote",null,[s("p",null,"DI 容器指的是知道如何实例化、配置对象的对象。")],-1),s("p",null,"另外一种方式则是中间件 DI 模式，这在服务端得到广泛应用（如 Express、Koa 等）。其中的奥秘在于，所有可注入的依赖（中间件）拥有相同的接口，以相同方式注入。这种方法则无需 DI 容器。",-1),s("p",null,"为保持简洁，我决定采用中间件模式。若你曾使用过 Express，以下代码自然不会陌生：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"component"),l(`()
  .`),s("span",{class:"hljs-title function_"},"use"),l("(paint) "),s("span",{class:"hljs-comment"},"// inject paint middleware"),l(`
  .`),s("span",{class:"hljs-title function_"},"use"),l("(resize) "),s("span",{class:"hljs-comment"},"// inject resize middleware"),l(`
  .`),s("span",{class:"hljs-title function_"},"register"),l("("),s("span",{class:"hljs-string"},"'comp-name'"),l(`)

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"paint"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  `),s("span",{class:"hljs-comment"},"// elem is the component instance, set it up or extend it here"),l(`
  elem.`),s("span",{class:"hljs-property"},"style"),l("."),s("span",{class:"hljs-property"},"color"),l(" = "),s("span",{class:"hljs-string"},"'red'"),l(`
  `),s("span",{class:"hljs-comment"},"// then call next to run the next middleware (resize)"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"resize"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  elem.`),s("span",{class:"hljs-property"},"style"),l("."),s("span",{class:"hljs-property"},"width"),l(" = "),s("span",{class:"hljs-string"},"'100 px'"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}
`)])],-1),s("p",null,"中间件在新的组件实例插入 DOM 时执行，通常会给实例扩展一些新特性。如若不同库扩展相同对象，则将导致名称冲突。暴露私有变量会加剧问题，并可能被其他人意外利用。",-1),s("p",null,"公开 API 小巧玲珑，其余部分隐身不见，正是避免问题的优秀方案。",-1),s("h3",null,"处理私有变量",-1),s("p",null,[l("JavaScript 中需要通过函数作用域来实现私有变量。需要使用跨作用域私有变量时，人们习惯使用"),s("code",null,"_"),l("前缀来标志，并将其公开暴露。这可以避免意外使用，但无法解决命名冲突。更好的办法是使用 ES6 的 "),s("code",null,"Symbol"),l(" 基本数据类型。")],-1),s("blockquote",null,[s("p",null,"Symbol 是一种唯一的、不可变的数据类型，可用作对象属性标识符。")],-1),s("p",null,"下面的代码展示了 symbol 的实际使用：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" color = "),s("span",{class:"hljs-title class_"},"Symbol"),l(`()

`),s("span",{class:"hljs-comment"},"// a middleware"),l(`
`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"colorize"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  elem[color] = `),s("span",{class:"hljs-string"},"'red'"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}
`)])],-1),s("p",null,[l("这样一来，通过 "),s("code",null,"color"),l(" symbol （以及元素 elem）就能获取 "),s("code",null,"red"),l("。"),s("code",null,"red"),l(" 的私有程度，可由 "),s("code",null,"color"),l(" symbol 暴露的不同程度控制。合理数量的私有变量，通过中心存储读取，是一种优雅的解决方案。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// symbols module"),l(`
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"private"),l(` = {
  `),s("span",{class:"hljs-attr"},"color"),l(": "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'color from colorize'"),l(`)
}
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"public"),l(` = {}
`)])],-1),s("p",null,[s("code",null,"index.js"),l(" 如下：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// main module"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" symbols = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'./symbols'"),l(`)
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"symbols"),l(" = symbols."),s("span",{class:"hljs-property"},"public"),l(`
`)])],-1),s("p",null,"在项目内部，所有模块都可访问 symbol 存储对象，但私有部分不会对外暴露。公有部分则可用于对外部开发者暴露一些低层次特性。这就避免了意外使用，因为开发者需要明确引入需要使用的 symbol。此外，symbol 引用也不会像字符串一样产出冲突，是故不会产生命名冲突。",-1),s("p",null,"以下几点概括了不同场景下的用法：",-1),s("p",null,[s("strong",null,"1. 公有变量")],-1),s("p",null,"正常使用.",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  elem.`),s("span",{class:"hljs-property"},"publicText"),l(" = "),s("span",{class:"hljs-string"},"'Hello World!'"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}
`)])],-1),s("p",null,[s("strong",null,"2. 私有变量")],-1),s("p",null,"项目私有的跨作用域变量，应当在私有 symbol 对象中加入一个 symbol key。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// symbols module"),l(`
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"private"),l(` = {
  `),s("span",{class:"hljs-attr"},"text"),l(": "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'private text'"),l(`)
}
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"public"),l(` = {}
`)])],-1),s("p",null,"并在需要的地方引入。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" private = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'symbols'"),l(")."),s("span",{class:"hljs-property"},"private"),l(`

`),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  elem[private.`),s("span",{class:"hljs-property"},"text"),l("] = "),s("span",{class:"hljs-string"},"'Hello World!'"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}
`)])],-1),s("p",null,[s("strong",null,"3. 半私有变量")],-1),s("p",null,"低层次 API 的变量，应当在公有 symbol 对象中加入一个 symbol key。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// symbols module"),l(`
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"private"),l(` = {
  `),s("span",{class:"hljs-attr"},"text"),l(": "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'private text'"),l(`)
}
`),s("span",{class:"hljs-built_in"},"exports"),l("."),s("span",{class:"hljs-property"},"public"),l(` = {
  `),s("span",{class:"hljs-attr"},"text"),l(": "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'exposed text'"),l(`)
}
`)])],-1),s("p",null,"并在需要的地方引入。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" exposed = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'symbols'"),l(")."),s("span",{class:"hljs-property"},"public"),l(`

`),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"elem, state, next"),l(`) {
  elem[exposed.`),s("span",{class:"hljs-property"},"text"),l("] = "),s("span",{class:"hljs-string"},"'Hello World!'"),l(`
  `),s("span",{class:"hljs-title function_"},"next"),l(`()
}
`)])],-1),s("h3",null,"写在最后",-1),s("p",null,[l("如果对 NX 框架感兴趣，请访问 "),s("a",{href:"http://nx-framework.com/",target:"_blank",rel:"noopener"},"主页"),l("。胆大的读者还可以在 Github 上查看 "),s("a",{href:"https://github.com/RisingStack/nx-framework",target:"_blank",rel:"noopener"},"NX 源码"),l(" 和 "),s("a",{href:"https://github.com/RisingStack/nx-observe",target:"_blank",rel:"noopener"},"nx-observe 源码"),l("。")],-1),s("p",null,"希望你喜欢这篇文章。下一章我们将讨论执行调度。",-1)])]),_:1})}}};export{m as default};
