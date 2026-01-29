import{_ as r}from"./Bm2Oy-cY.js";import{c as t,w as p,o,a as l,b as s}from"./YobvFIQM.js";const h={__name:"data-bind-dirty-checking",setup(c){const e={title:"[译] 手把手教你写一个 Javascript 框架：数据绑定",description:"手把手教你写一个 Javascript 框架：数据绑定",keywords:"翻译,ES6,数据绑定",pathname:"data-bind-dirty-checking",translation:{author:"Bertalan Miklos",social:"https://blog.risingstack.com/author/bertalan/",from:"https://blog.risingstack.com/writing-a-javascript-framework-data-binding-dirty-checking/"},create_time:"2016-11-14",prev:{title:"[译] 手把手教你写一个 Javascript 框架：使用 ES6 Proxy 实现数据绑定",pathname:"es6-proxy-data-binding"},next:{title:"笔记：IE 下透明度问题",pathname:"ie-filter"}};return(i,n)=>{const a=r;return o(),t(a,{data:e},{default:p(()=>[...n[0]||(n[0]=[l("p",null,[l("strong",null,"本文是“编写 JavaScript 框架”系列的第四章。本章我将解释脏检查和基于getter/setter 访问器的数据绑定技术，并指出它们各自的优缺点。")],-1),l("p",null,[s("本系列主要是如何开发一个开源的客户端框架，框架名为 NX。我将在本系列中分享框架编写过程中如何克服遇到的主要困难。对 NX 感兴趣的朋友可以点击 NX 项目"),l("a",{href:"http://nx-framework.com/",target:"_blank",rel:"noopener"},"主页"),s("查看。")],-1),l("p",null,"本系列章节如下：",-1),l("ul",null,[l("li",null,[l("a",{href:"/post/nx-project-structure/"},"项目结构（Project structuring）")]),l("li",null,[l("a",{href:"/post/execution-timing/"},"执行调度（Execution timing）")]),l("li",null,[l("a",{href:"/post/sandbox-code-evaluation/"},"沙箱求值（Sandboxed code evaluation）")]),l("li",null,"数据绑定简介(本文)"),l("li",null,[l("a",{href:"/post/es6-proxy-data-binding/"},"ES6 Proxy 实现数据绑定")]),l("li",null,"自定义元素"),l("li",null,"客户端路由")],-1),l("h2",null,"数据绑定简介",-1),l("blockquote",null,[l("p",null,"数据绑定是将数据源与数据提供者、消费者绑定并在它们之间保持同步的一种基本技术。")],-1),l("p",null,"上面这个基本定义指出了数据绑定技术的通用构建模块。",-1),l("ul",null,[l("li",null,"定义数据提供者、消费者"),l("li",null,"定义哪些变化触发数据同步"),l("li",null,"数据提供者监听变化的方式"),l("li",null,[s("发送变化时运行的同步函数 —— 下文会将该函数称作 "),l("code",null,"handler()")])],-1),l("p",null,"不同数据绑定技术采用不同方式实现以上几步。接下来几个小节介绍其中两种技术，即脏检查、getter/setter 访问器方法。介绍完它们后我将简要讨论它们各自的优缺点。",-1),l("h3",null,"脏检查",-1),l("p",null,"脏检查可能是最广为人知的数据绑定方法。它是一种不错的传统选择，因其概念简单，无需复杂的语言特性支持。",-1),l("h3",null,"脏检查语法",-1),l("p",null,"定义数据提供者和消费者无需任何特殊语法，仅靠普通 JavaScript 对象即可。",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"const"),s(` provider = {
  `),l("span",{class:"hljs-attr"},"message"),s(": "),l("span",{class:"hljs-string"},"'Hello World'"),s(`
}
`),l("span",{class:"hljs-keyword"},"const"),s(" consumer = "),l("span",{class:"hljs-variable language_"},"document"),s("."),l("span",{class:"hljs-title function_"},"createElement"),s("("),l("span",{class:"hljs-string"},"'p'"),s(`)
`)])],-1),l("p",null,[s("数据同步通常由提供者属性变化触发。那些需要对变化进行观察的属性，必须明确映射到各自的"),l("code",null,"handler()"),s("函数。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-title function_"},"observe"),s("(provider, "),l("span",{class:"hljs-string"},"'message'"),s(", "),l("span",{class:"hljs-function"},[l("span",{class:"hljs-params"},"message"),s(" =>")]),s(` {
  consumer.`),l("span",{class:"hljs-property"},"innerHTML"),s(` = message
})
`)])],-1),l("p",null,[l("code",null,"observe()"),s(" 函数仅仅保存了 "),l("code",null,"(provider, property) -> handler"),s(" 映射，留作后用。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"observe"),s(" ("),l("span",{class:"hljs-params"},"provider, prop, handler"),s(`) {
  provider.`),l("span",{class:"hljs-property"},"_handlers"),s(`[prop] = handler
}
`)])],-1),l("p",null,[s("这样一来就可以定义数据提供者、消费者，为属性变化注册"),l("code",null,"handler()"),s("函数。公有 API 部分已经完成，下面要完成的是内部实现。")],-1),l("h3",null,"监听变化",-1),l("p",null,[s("脏检查之所以“脏”是有原因的。它依赖周期性检查，而非直接监听属性变化。这种周期性检查通常称作 digest cycle。在一个 digest cycle 内，遍历由"),l("code",null,"observe()"),s("所添加的每一个 "),l("code",null,"(provider, property) -> handler"),s(" 入口，并检查属性自上一次遍历以来是否发生了变化。若发生变化，则运行"),l("code",null,"handler()"),s("函数。简单实现如下：")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"digest"),s(" ("),l("span",{class:"hljs-params"}),s(`) {
  providers.`),l("span",{class:"hljs-title function_"},"forEach"),s(`(digestProvider)
}

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"digestProvider"),s(" ("),l("span",{class:"hljs-params"},"provider"),s(`) {
  `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" prop "),l("span",{class:"hljs-keyword"},"in"),s(" provider."),l("span",{class:"hljs-property"},"_handlers"),s(`) {
    `),l("span",{class:"hljs-keyword"},"if"),s(" (provider."),l("span",{class:"hljs-property"},"_prevValues"),s(`[prop] !== provider[prop]) {
      provider.`),l("span",{class:"hljs-property"},"_prevValues"),s(`[prop] = provider[prop]
      `),l("span",{class:"hljs-title function_"},"handler"),s(`(provider[prop])
    }
  }
}
`)])],-1),l("p",null,[l("code",null,"digest()"),s(" 函数需要不时运行，以保障状态同步。")],-1),l("h2",null,"getter/setter 访问器方法",-1),l("p",null,"getter/setter 访问器方法是当前的主流趋势，其支持广泛程度稍低，因为需要用到 ES5 getter/setter 功能。但这种方法之优雅足以弥补这个问题。",-1),l("h3",null,"访问器语法",-1),l("p",null,[s("定义数据提供者需要一些特殊语法。普通提供者对象需要传给"),l("code",null,"observable()"),s("函数，转换为可观察对象。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"const"),s(" provider = "),l("span",{class:"hljs-title function_"},"observable"),s(`({
  `),l("span",{class:"hljs-attr"},"greeting"),s(": "),l("span",{class:"hljs-string"},"'Hello'"),s(`,
  `),l("span",{class:"hljs-attr"},"subject"),s(": "),l("span",{class:"hljs-string"},"'World'"),s(`
})
`),l("span",{class:"hljs-keyword"},"const"),s(" consumer = "),l("span",{class:"hljs-variable language_"},"document"),s("."),l("span",{class:"hljs-title function_"},"createElement"),s("("),l("span",{class:"hljs-string"},"'p'"),s(`)
`)])],-1),l("p",null,[s("这完全可以弥补简单的 "),l("code",null,"handler()"),s(" 映射语法。在脏检查中，我们必须像下面这样，为每一个观察属性明确进行定义：")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-title function_"},"observe"),s("(provider, "),l("span",{class:"hljs-string"},"'greeting'"),s(", "),l("span",{class:"hljs-function"},[l("span",{class:"hljs-params"},"greeting"),s(" =>")]),s(` {
  consumer.`),l("span",{class:"hljs-property"},"innerHTML"),s(" = greeting + "),l("span",{class:"hljs-string"},"' '"),s(" + provider."),l("span",{class:"hljs-property"},"subject"),s(`
})

`),l("span",{class:"hljs-title function_"},"observe"),s("(provider, "),l("span",{class:"hljs-string"},"'subject'"),s(", "),l("span",{class:"hljs-function"},[l("span",{class:"hljs-params"},"subject"),s(" =>")]),s(` {
  consumer.`),l("span",{class:"hljs-property"},"innerHTML"),s(" = provider."),l("span",{class:"hljs-property"},"greeting"),s(" + "),l("span",{class:"hljs-string"},"' '"),s(` + subject
})
`)])],-1),l("p",null,[s("又笨又长。访问器技术可以在 "),l("code",null,"handler()"),s(" 函数中自动检测用到的提供者属性，这样就可以简化以上代码。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-title function_"},"observe"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
  consumer.`),l("span",{class:"hljs-property"},"innerHTML"),s(" = provider."),l("span",{class:"hljs-property"},"greeting"),s(" + "),l("span",{class:"hljs-string"},"' '"),s(" + provider."),l("span",{class:"hljs-property"},"subject"),s(`
}) 
`)])],-1),l("p",null,[l("code",null,"observe()"),s(" 的实现与脏检查并不相同。我们仅仅需要执行传入的 "),l("code",null,"handler()"),s("，并在其执行期间将其标记为当前活动函数。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"let"),s(` activeHandler

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"observe"),s("("),l("span",{class:"hljs-params"},"handler"),s(`) {
  activeHandler = handler
  `),l("span",{class:"hljs-title function_"},"handler"),s(`()
  activeHandler = `),l("span",{class:"hljs-literal"},"undefined"),s(`
}
`)])],-1),l("p",null,[s("我们利用 JavaScript 单线程特点，采用单一的"),l("code",null,"activehandler"),s("变量来记录当前运行的"),l("code",null,"handler()"),s(" 函数。")],-1),l("h3",null,"监听变化",-1),l("p",null,"“访问器技术”终于闪亮登场。借助于 getter/setter 访问器在背后的强力支持，数据提供者 provider 的能力大大增强。基本的思想是，拦截 provider 的属性获取、设置操作。",-1),l("ul",null,[l("li",null,[l("p",null,[s("get：如果存在正在运行的"),l("code",null,"activeHandler"),s("，则保存"),l("code",null,"(provider, property) -> activeHandler"),s("映射，稍后使用。")])]),l("li",null,[l("p",null,[s("set：运行所有 "),l("code",null,"(provide, property)"),s(" 对应的 "),l("code",null,"handler()"),s("函数。")])])],-1),l("p",null,[l("img",{loading:"lazy",src:"https://s0.ssl.qhres2.com/static/363a87a8b3f27981.svg",alt:"The accessor data binding technique."})],-1),l("p",null,"下面是监听单个属性变化的简单实现：",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"observableProp"),s(" ("),l("span",{class:"hljs-params"},"provider, prop"),s(`) {
  `),l("span",{class:"hljs-keyword"},"const"),s(` value = provider[prop]
  `),l("span",{class:"hljs-title class_"},"Object"),s("."),l("span",{class:"hljs-title function_"},"defineProperty"),s(`(provider, prop, {
    `),l("span",{class:"hljs-title function_"},"get"),s(` () {
      `),l("span",{class:"hljs-keyword"},"if"),s(` (activeHandler) {
        provider.`),l("span",{class:"hljs-property"},"_handlers"),s(`[prop] = activeHandler
      }
      `),l("span",{class:"hljs-keyword"},"return"),s(` value
    },
    `),l("span",{class:"hljs-title function_"},"set"),s(` (newValue) {
      value = newValue
      `),l("span",{class:"hljs-keyword"},"const"),s(" handler = obj."),l("span",{class:"hljs-property"},"_handlers"),s(`[prop]
      `),l("span",{class:"hljs-keyword"},"if"),s(` (handler) {
        activeHandler = handler
        `),l("span",{class:"hljs-title function_"},"handler"),s(`()
        activeHandler = `),l("span",{class:"hljs-literal"},"undefined"),s(`
      }
    }
  })
}
`)])],-1),l("p",null,[s("上一节提到的"),l("code",null,"observable()"),s("函数会递归遍历 provider 的属性，并使用 "),l("code",null,"observableProp()"),s(" 函数将它们统统转换为可观察对象。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"observable"),s(" ("),l("span",{class:"hljs-params"},"provider"),s(`) {
  `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" prop "),l("span",{class:"hljs-keyword"},"in"),s(` provider) {
    `),l("span",{class:"hljs-title function_"},"observableProp"),s(`(provider, prop)
    `),l("span",{class:"hljs-keyword"},"if"),s(" ("),l("span",{class:"hljs-keyword"},"typeof"),s(" provider[prop] === "),l("span",{class:"hljs-string"},"'object'"),s(`) {
      `),l("span",{class:"hljs-title function_"},"observable"),s(`(provider[prop])
    }
  }
}
`)])],-1),l("p",null,"这只是一个简单实现，但用来对比两种技术已足够。",-1),l("h2",null,"两种技术对比",-1),l("p",null,"本节将简要指出脏检查和访问器两种技术各自的优缺点。",-1),l("h3",null,"语法形式",-1),l("p",null,[s("脏检查无需定义提供者、消费者，但将 "),l("code",null,"(provider, property)"),s(" 和 "),l("code",null,"handler()"),s(" 进行映射的方式笨拙又不灵活。")],-1),l("p",null,[s("访问器技术需要使用 "),l("code",null,"observable()"),s(" 函数对提供者进行封装，不过自动进行 "),l("code",null,"handler()"),s(" 映射弥补了不足。对于使用数据绑定的大型项目来说，访问器技术是必备特性。")],-1),l("h3",null,"性能",-1),l("p",null,[s("脏检查早就因其性能表现臭名昭著。每次 digest cycle 中，需要对每个 "),l("code",null,"(provider, property) -> handler"),s(" 入口进行数次检查。此外，即便应用处于闲置状态也必须保持运转，因为它并不值得属性何时发生变化。")],-1),l("p",null,[s("访问器方法更快一些，但在一些大型可观察对象面前，性能也可能发生退化。使用访问器替换提供者的所有属性，通常是过重了。一种解决办法是在必要时动态建立 getter/setter，而不是一次性提前完成。此外，还有一种简单方法是使用一个 "),l("code",null,"noObserve()"),s(" 函数包装不需要的属性，告诉 "),l("code",null,"observable()"),s(" 不要理会这些。但这会引入额外的语法。")],-1),l("h3",null,"灵活性",-1),l("p",null,"脏检查天生就能和扩展属性（动态添加的）以及访问器属性一起工作。",-1),l("p",null,[s("访问器技术在这方面有个弱点。初始化 getter/setter 时，扩展属性并不包含在内。比如对数组来说，这就会导致问题，但也能通过手动调用 "),l("code",null,"observableProp()"),s(" 来解决。访问器属性也无法支持，因为访问器属性无法再包装一次。一种常见的解决办法是使用 "),l("code",null,"computed()"),s(" 函数替代 getter。不过这会引入更多自定义语法。")],-1),l("h3",null,"时间控制",-1),l("p",null,[s("脏检查给我们的自由并不多，因为我们无从得知属性实际发生变化的时机。"),l("code",null,"handler()"),s(" 函数只能通过不时运行 "),l("code",null,"digest()"),s(" 循环而异步执行。")],-1),l("p",null,[s("使用访问器技术，getter/setter 是同步触发的，因此就有了选择上的自由。我们可以决定是否立即执行 "),l("code",null,"handler()"),s("，或者分批异步执行。前者保证了可预见性，后者则可以通过去重提升性能。")],-1),l("h2",null,"关于下一章",-1),l("p",null,[s("下一章我将介绍 "),l("a",{href:"https://github.com/RisingStack/nx-observe",target:"_blank",rel:"noopener"},"nx-observe"),s(" 数据绑定工具，阐述如何用 ES6 Proxy 替代 ES5 getters/setters，以弥补访问器技术的多数不足之处。")],-1),l("h2",null,"写在最后",-1),l("p",null,[s("如果对 NX 框架感兴趣，请访问 "),l("a",{href:"http://nx-framework.com/",target:"_blank",rel:"noopener"},"主页"),s("。胆大的读者还可以在Github 上查看 "),l("a",{href:"https://github.com/RisingStack/nx-framework",target:"_blank",rel:"noopener"},"NX 源码"),s(" 和 "),l("a",{href:"https://github.com/RisingStack/nx-observe",target:"_blank",rel:"noopener"},"nx-observe 源码"),s("。")],-1),l("p",null,[s("希望你喜欢这篇文章。下一章我们将讨论 "),l("a",{href:"https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/",target:"_blank",rel:"noopener"},"沙箱求值（Sandboxed code evaluation）"),s("。")],-1)])]),_:1})}}};export{h as default};
