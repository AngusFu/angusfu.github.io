import{_ as r}from"./BV7Yc4PX.js";import{c as t,w as o,o as c,a as s,b as e}from"./B1kHp8qp.js";import"./8oskhlv7.js";const j={__name:"es6-proxy-data-binding",setup(p){const n={title:"[译] 手把手教你写一个 Javascript 框架：使用 ES6 Proxy 实现数据绑定",description:"手把手教你写一个 Javascript 框架：使用 ES6 Proxy 实现数据绑定",keywords:"翻译,ES6,数据绑定",pathname:"es6-proxy-data-binding",translation:{author:"Bertalan Miklos",social:"https://blog.risingstack.com/author/bertalan/",from:"https://blog.risingstack.com/writing-a-javascript-framework-data-binding-es6-proxy/"},create_time:"2016-11-14",prev:{title:"[译] 手把手教你写一个 Javascript 框架：执行调度",pathname:"execution-timing"},next:{title:"[译] 手把手教你写一个 Javascript 框架：数据绑定",pathname:"data-bind-dirty-checking"}};return(i,l)=>{const a=r;return c(),t(a,{data:n},{default:o(()=>[...l[0]||(l[0]=[s("p",null,[s("strong",null,"本文是“编写 JavaScript 框架”系列的第五章。在本章中，我将介绍如何使用 ES6 Proxy 实现简单、强大的数据绑定。")],-1),s("p",null,[e("本系列主要是如何开发一个开源的客户端框架，框架名为 NX。我将在本系列中分享框架编写过程中如何克服遇到的主要困难。对 NX 感兴趣的朋友可以点击 NX 项目"),s("a",{href:"http://nx-framework.com",target:"_blank",rel:"noopener"},"主页"),e("查看。")],-1),s("p",null,"本系列章节如下：",-1),s("ul",null,[s("li",null,[s("a",{href:"/post/nx-project-structure/"},"项目结构（Project structuring）")]),s("li",null,[s("a",{href:"/post/execution-timing/"},"执行调度（Execution timing）")]),s("li",null,[s("a",{href:"/post/sandbox-code-evaluation/"},"沙箱求值（Sandboxed code evaluation）")]),s("li",null,[s("a",{href:"/post/data-bind-dirty-checking"},"数据绑定简介")]),s("li",null,"ES6 Proxy 实现数据绑定 (本文)"),s("li",null,"自定义元素 "),s("li",null,"客户端路由")],-1),s("h2",null,"知识回顾",-1),s("p",null,[e("ES6 让 JavaScript 变得更加优雅，但多数新特性不过是语法糖罢了。Proxy 是少数几个无法 polyfill 的新增特性。如果还不太熟悉 Proxy，请先看一眼 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener"},"MDN 上的 Proxy 文档"),e("。")],-1),s("p",null,[e("如果对 ES6 中的 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener"},"Reflection API"),e("、"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener"},"Set"),e("、 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",target:"_blank",rel:"noopener"},"Map"),e(" 以及 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",target:"_blank",rel:"noopener"},"WeakMap"),e(" 有所了解，那便是极好的。")],-1),s("h2",null,"nx-observe",-1),s("p",null,[s("a",{href:"https://github.com/RisingStack/nx-observe",target:"_blank",rel:"noopener"},"nx-observe"),e(" 是一个不到 140 行代码的数据绑定方案。对外暴露的 "),s("code",null,"observable(obj)"),e(" 、"),s("code",null,"observe(fn)"),e("二者分别用于创建 observable 和 observer 函数。当使用到的 observable 对象发生属性变化时，observer 函数将自动执行。示例如下：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 这是一个 observable object"),e(`
`),s("span",{class:"hljs-keyword"},"const"),e(" person = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'John'"),e(", "),s("span",{class:"hljs-attr"},"age"),e(": "),s("span",{class:"hljs-number"},"20"),e(`})

`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"print"),e(" ("),s("span",{class:"hljs-params"}),e(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),e("."),s("span",{class:"hljs-title function_"},"log"),e("("),s("span",{class:"hljs-string"},[e("`"),s("span",{class:"hljs-subst"},"${person.name}"),e(", "),s("span",{class:"hljs-subst"},"${person.age}"),e("`")]),e(`)
}

`),s("span",{class:"hljs-comment"},"// 创建一个 observer 函数"),e(`
`),s("span",{class:"hljs-comment"},"// 控制台打印出 'John, 20'"),e(`
`),s("span",{class:"hljs-title function_"},"observe"),e(`(print)

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Dave, 20'"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" person."),s("span",{class:"hljs-property"},"name"),e(" = "),s("span",{class:"hljs-string"},"'Dave'"),e(", "),s("span",{class:"hljs-number"},"100"),e(`)

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Dave, 22'"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" person."),s("span",{class:"hljs-property"},"age"),e(" = "),s("span",{class:"hljs-number"},"22"),e(", "),s("span",{class:"hljs-number"},"200"),e(`)
`)])],-1),s("p",null,[e("每当 "),s("code",null,"person.name"),e(" 或 "),s("code",null,"person.age"),e(" 发生变化，传给 "),s("code",null,"observe()"),e(" 的 "),s("code",null,"print"),e(" 函数就会重新运行。在这里，"),s("code",null,"print"),e(" 被称为 observer 函数。")],-1),s("p",null,[e("如果对更多例子感兴趣，可以点开 "),s("a",{href:"https://github.com/RisingStack/nx-observe#example",target:"_blank",rel:"noopener"},"GitHub readme"),e(" 或 "),s("a",{href:"http://nx-framework.com/docs/spa/observer",target:"_blank",rel:"noopener"},"NX 主页"),e("，看看更逼真的场景。")],-1),s("h2",null,"实现简单的 observable",-1),s("p",null,"接下来的小节解释 nx-observe 底层发生了什么。首先介绍 observable 对象的属性变化是如何被侦测到的，又是如何匹配 observer 的。然后再展示怎样运行这些由变化触发的 observer 函数。",-1),s("h3",null,"注册变化",-1),s("p",null,[e("变化是通过由 ES6 Proxy 包装后的 observable 对象注册的。在 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener"},"Reflection API"),e(" 的协助下，这些 proxy 能够完美拦截 get 和 set 操作。")],-1),s("p",null,[e("下面代码中使用的 "),s("code",null,"currentObserver"),e(" 和 "),s("code",null,"queueObserver()"),e(" 会在下一节中解释。目前只需要知道，"),s("code",null,"currentObserver"),e(" 总是指向当前执行的 observer 函数，"),s("code",null,"queueObserver()"),e(" 把即将执行的 observer 加入队列。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[e(`
`),s("span",{class:"hljs-comment"},`/* 将 observable 对象的属性映射到
   那些使用了这些属性的 observer 函数集合中 */`),e(`
`),s("span",{class:"hljs-keyword"},"const"),e(" observers = "),s("span",{class:"hljs-keyword"},"new"),e(),s("span",{class:"hljs-title class_"},"WeakMap"),e(`()

`),s("span",{class:"hljs-comment"},`/* 指向当前正在执行的 observer 函数，
   也可能是 undefined */`),e(`
`),s("span",{class:"hljs-keyword"},"let"),e(` currentObserver

`),s("span",{class:"hljs-comment"},`/* 将对象包装成 proxy，从而将其转换为 observable 对象，
   还为 observers 添加了一个空 Map，
   用于保存 property-observer 组合 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"observable"),e(" ("),s("span",{class:"hljs-params"},"obj"),e(`) {
  observers.`),s("span",{class:"hljs-title function_"},"set"),e("(obj, "),s("span",{class:"hljs-keyword"},"new"),e(),s("span",{class:"hljs-title class_"},"Map"),e(`())
  `),s("span",{class:"hljs-keyword"},"return"),e(),s("span",{class:"hljs-keyword"},"new"),e(),s("span",{class:"hljs-title class_"},"Proxy"),e(`(obj, {get, set})
}

`),s("span",{class:"hljs-comment"},`/* 拦截 get 操作，若当前没有正在
   执行的 observer，则不会做任何事 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"get"),e(" ("),s("span",{class:"hljs-params"},"target, key, receiver"),e(`) {
  `),s("span",{class:"hljs-keyword"},"const"),e(" result = "),s("span",{class:"hljs-title class_"},"Reflect"),e("."),s("span",{class:"hljs-title function_"},"get"),e(`(target, key, receiver)
   `),s("span",{class:"hljs-keyword"},"if"),e(` (currentObserver) {
     `),s("span",{class:"hljs-title function_"},"registerObserver"),e(`(target, key, currentObserver)
   }
  `),s("span",{class:"hljs-keyword"},"return"),e(` result
}

`),s("span",{class:"hljs-comment"},`/* 若当前有 observer 函数正在运行，
   本函数会将该 observer 函数与
   当前取到的 observable 对象的属性进行配对，
   并将它们保存到 observers Map 中 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"registerObserver"),e(" ("),s("span",{class:"hljs-params"},"target, key, observer"),e(`) {
  `),s("span",{class:"hljs-keyword"},"let"),e(" observersForKey = observers."),s("span",{class:"hljs-title function_"},"get"),e("(target)."),s("span",{class:"hljs-title function_"},"get"),e(`(key)
  `),s("span",{class:"hljs-keyword"},"if"),e(` (!observersForKey) {
    observersForKey = `),s("span",{class:"hljs-keyword"},"new"),e(),s("span",{class:"hljs-title class_"},"Set"),e(`()
    observers.`),s("span",{class:"hljs-title function_"},"get"),e("(target)."),s("span",{class:"hljs-title function_"},"set"),e(`(key, observersForKey)
  }
  observersForKey.`),s("span",{class:"hljs-title function_"},"add"),e(`(observer)
}

`),s("span",{class:"hljs-comment"},`/* 拦截 set 操作，与当前设置的属性相关联的
   所有 observer 加入执行队列 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"set"),e(" ("),s("span",{class:"hljs-params"},"target, key, value, receiver"),e(`) {
  `),s("span",{class:"hljs-keyword"},"const"),e(" observersForKey = observers."),s("span",{class:"hljs-title function_"},"get"),e("(target)."),s("span",{class:"hljs-title function_"},"get"),e(`(key)
  `),s("span",{class:"hljs-keyword"},"if"),e(` (observersForKey) {
    observersForKey.`),s("span",{class:"hljs-title function_"},"forEach"),e(`(queueObserver)
  }
  `),s("span",{class:"hljs-keyword"},"return"),e(),s("span",{class:"hljs-title class_"},"Reflect"),e("."),s("span",{class:"hljs-title function_"},"set"),e(`(target, key, value, receiver)
}
`)])],-1),s("p",null,[e("尚未设置 "),s("code",null,"currentObserver"),e(" 时，"),s("code",null,"get"),e(" 不会做任何事情。否则，"),s("code",null,"get"),e(" 操作会将拿到的 observable 对象属性与当前运行的 observer 函数组合（pair）在一起，保存到 "),s("code",null,"observers"),e(" WeakMap 中。对于 observable 对象的每个属性，observer 函数都保存在一个 "),s("code",null,"Set"),e(" 中。这样可以保证不会出现重复。")],-1),s("p",null,[s("code",null,"set"),e(" 会检索所有与 observable 对象变动的属性相关的 observer，并将它们加入稍后执行的队列。")],-1),s("p",null,"下图展示了前面的例子的执行步骤。",-1),s("p",null,[s("img",{loading:"lazy",src:"https://blog-assets.risingstack.com/2016/11/writing-a-javascript-framework-data-binding-with-es6-proxy-observables-code.png",alt:"JavaScript data binding with es6 proxy - observable code sample"})],-1),s("ol",null,[s("li",null,[e("创建 observable 对象 "),s("code",null,"person"),e("；")]),s("li",null,[s("code",null,"currentObserver"),e(" 被设为 "),s("code",null,"print"),e("；")]),s("li",null,[s("code",null,"print"),e(" 开始执行；")]),s("li",null,[e("在 "),s("code",null,"print"),e(" 内部检索到 "),s("code",null,"person.name"),e("；")]),s("li",null,[e("在 "),s("code",null,"person"),e(" 上触发 "),s("code",null,"get"),e("；")]),s("li",null,[s("code",null,"observers.get(person).get('name')"),e(" 检索到 "),s("code",null,"(person, name)"),e(" 组合的 observer Set；")]),s("li",null,[s("code",null,"currentObserver"),e(" (print) 被添加到 observer Set 中；")]),s("li",null,[e("对 "),s("code",null,"person.age"),e("，同理，执行前面 4-7 步；")]),s("li",null,[s("code",null,"${person.name}, ${person.age}"),e(" 打印出来；")]),s("li",null,[s("code",null,"print"),e(" 函数执行结束；")]),s("li",null,[s("code",null,"currentObserver"),e(" 变为 undefined；")]),s("li",null,"其他代码开始运行；"),s("li",null,[e("设置 "),s("code",null,"person.age"),e(" 为新的值（22）；")]),s("li",null,[s("code",null,"person"),e(" 上触发 "),s("code",null,"set"),e("；")]),s("li",null,[s("code",null,"observers.get(person).get('age')"),e(" 检索到 "),s("code",null,"(person, age)"),e(" 组合的 observer Set，")]),s("li",null,[e("observer Set 中的 observer（包括 "),s("code",null,"print"),e("）入队准备执行；")]),s("li",null,[e("再次执行 "),s("code",null,"print"),e("。")])],-1),s("h3",null,"observer 执行",-1),s("p",null,[e("队列中的 observer 是分批异步执行的，因此性能很好。注册期间，这些 observer 被异步地添加到 "),s("code",null,"queuedObservers"),e(),s("code",null,"Set"),e(" 中。"),s("code",null,"Set"),e(" 中不会包含重复元素，所以多次加入同一个 observer 也不会导致重复执行。如果该 "),s("code",null,"Set"),e(" 之前是空的，则会加入新的任务，在一段时间后迭代执行队列中所有的 observer。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* 包含触发的将要执行的 observer 函数 */"),e(`
`),s("span",{class:"hljs-keyword"},"const"),e(" queuedObservers = "),s("span",{class:"hljs-keyword"},"new"),e(),s("span",{class:"hljs-title class_"},"Set"),e(`()

`),s("span",{class:"hljs-comment"},`/* 指向当前正在执行的 observer 函数，
   也可能是 undefined */`),e(`
`),s("span",{class:"hljs-keyword"},"let"),e(` currentObserver

`),s("span",{class:"hljs-comment"},"/* 暴露的 observe 函数 */"),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"observe"),e(" ("),s("span",{class:"hljs-params"},"fn"),e(`) {
  `),s("span",{class:"hljs-title function_"},"queueObserver"),e(`(fn)
}

`),s("span",{class:"hljs-comment"},`/* 将 observer 添加到队列中，
   并确保队列会尽快执行 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"queueObserver"),e(" ("),s("span",{class:"hljs-params"},"observer"),e(`) {
  `),s("span",{class:"hljs-keyword"},"if"),e(" (queuedObservers."),s("span",{class:"hljs-property"},"size"),e(" === "),s("span",{class:"hljs-number"},"0"),e(`) {
    `),s("span",{class:"hljs-title class_"},"Promise"),e("."),s("span",{class:"hljs-title function_"},"resolve"),e("()."),s("span",{class:"hljs-title function_"},"then"),e(`(runObservers)
  }
  queuedObservers.`),s("span",{class:"hljs-title function_"},"add"),e(`(observer)
}

`),s("span",{class:"hljs-comment"},`/* 执行队列中的 observer，
   完成后 currentObserver 置为 undefined */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"runObservers"),e(" ("),s("span",{class:"hljs-params"}),e(`) {
  `),s("span",{class:"hljs-keyword"},"try"),e(` {
    queuedObservers.`),s("span",{class:"hljs-title function_"},"forEach"),e(`(runObserver)
  } `),s("span",{class:"hljs-keyword"},"finally"),e(` {
    currentObserver = `),s("span",{class:"hljs-literal"},"undefined"),e(`
    queuedObservers.`),s("span",{class:"hljs-title function_"},"clear"),e(`()
  }
}

`),s("span",{class:"hljs-comment"},`/* 将全局的 currentObserver 变量
  指向 observer 并执行 */`),e(`
`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"runObserver"),e(" ("),s("span",{class:"hljs-params"},"observer"),e(`) {
  currentObserver = observer
  `),s("span",{class:"hljs-title function_"},"observer"),e(`()
}
`)])],-1),s("p",null,[e("执行某一个 observer 时，上面的代码确保全局变量 "),s("code",null,"currentObserver"),e(" 指向该 observer。设置 "),s("code",null,"currentObserver"),e("，会启用 "),s("code",null,"get"),e("，监听、匹配执行时用到的 observable 对象的所有属性。")],-1),s("h2",null,"建立动态 observable tree",-1),s("p",null,"到目前为止，模型结合单层数据结构使用起来还挺好，但还需要用 observable 手动包装那些值是对象的属性。比如，下面的代码就没法达到预期：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),e(" person = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"data"),e(": {"),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'John'"),e(`}})

`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"print"),e(" ("),s("span",{class:"hljs-params"}),e(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),e("."),s("span",{class:"hljs-title function_"},"log"),e("(person."),s("span",{class:"hljs-property"},"data"),e("."),s("span",{class:"hljs-property"},"name"),e(`)
}

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'John'"),e(`
`),s("span",{class:"hljs-title function_"},"observe"),e(`(print)

`),s("span",{class:"hljs-comment"},"// does nothing"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" person."),s("span",{class:"hljs-property"},"data"),e("."),s("span",{class:"hljs-property"},"name"),e(" = "),s("span",{class:"hljs-string"},"'Dave'"),e(", "),s("span",{class:"hljs-number"},"100"),e(`)
`)])],-1),s("p",null,[e("为了让代码正常工作，还需要将 "),s("code",null,"observable({data: {name: 'John'}})"),e(" 替换成 "),s("code",null,"observable({data: observable({name: 'John'})})"),e("。幸运的是，稍微修改一下 "),s("code",null,"get"),e(" 就能解决问题。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"get"),e(" ("),s("span",{class:"hljs-params"},"target, key, receiver"),e(`) {
  `),s("span",{class:"hljs-keyword"},"const"),e(" result = "),s("span",{class:"hljs-title class_"},"Reflect"),e("."),s("span",{class:"hljs-title function_"},"get"),e(`(target, key, receiver)
  `),s("span",{class:"hljs-keyword"},"if"),e(` (currentObserver) {
    `),s("span",{class:"hljs-title function_"},"registerObserver"),e(`(target, key, currentObserver)
    `),s("span",{class:"hljs-keyword"},"if"),e(" ("),s("span",{class:"hljs-keyword"},"typeof"),e(" result === "),s("span",{class:"hljs-string"},"'object'"),e(`) {
      `),s("span",{class:"hljs-keyword"},"const"),e(" observableResult = "),s("span",{class:"hljs-title function_"},"observable"),e(`(result)
      `),s("span",{class:"hljs-title class_"},"Reflect"),e("."),s("span",{class:"hljs-title function_"},"set"),e(`(target, key, observableResult, receiver)
      `),s("span",{class:"hljs-keyword"},"return"),e(` observableResult
    }
  }
  `),s("span",{class:"hljs-keyword"},"return"),e(` result
}
`)])],-1),s("p",null,[e("如果要返回的值是对象，那么在返回之前，"),s("code",null,"get"),e(" 会将其包装成 observable 对象。从性能方面来看也很完美，只会在需要的时候才会创建 observable 对象。")],-1),s("h2",null,"与 ES5 对比",-1),s("p",null,[e("利用 ES5 的属性访问器（getter/setter）也能实现类似的数据绑定。很多流行的框架/库都在使用，如 "),s("a",{href:"https://mobxjs.github.io/mobx/",target:"_blank",rel:"noopener"},"MobX"),e(" 和 "),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue"),e("。相较于访问器，使用 Proxy 有两大优势，也有一点不足之处。")],-1),s("h3",null,"扩展属性",-1),s("p",null,"在 JavaScript 中，扩展属性（Expando properties） 是指动态添加的属性。ES5 技术不支持扩展属性，每个属性的访问器都必须预先定义才能实现拦截操作。这也是为何当今预定义的键值集合成为趋势的原因。",-1),s("p",null,"而 Proxy 技术可以真正支持扩展属性，因为 Proxy 是按照单个对象定义的，对象的所有属性操作都可以拦截。",-1),s("p",null,"扩展属性很重要，典型例子就是数组。离开添加、删除功能，JavaScript 数组几乎毫无用处。针对此问题，ES5 数据绑定技术通常自定义数组方法，或者干脆重写。",-1),s("h3",null,"getter 和 setter",-1),s("p",null,[e("通过某些特殊的语法，一些使用 ES5 方法的框架/库提供 "),s("code",null,"computed"),e(" 绑定属性。这些属性都有相应的原生实现，即 getter 和 setter。因为内部使用 getter 和 setter 实现数据绑定逻辑，那么也就无法再利用属性访问器了。")],-1),s("p",null,"而 Proxy 可以拦截包括 getter 和 setter 在内的所有类型的属性访问和变动，所以这对 ES6 方法来说不构成问题。",-1),s("h3",null,"不足之处",-1),s("p",null,[e("使用 Proxy 最大的不足还是在于浏览器支持。只有"),s("a",{href:"http://caniuse.com/#feat=proxy",target:"_blank",rel:"noopener"},"比较新的浏览器"),e("才支持，而 Proxy API 最精华的部分却无法通过 polyfill 实现。")],-1),s("h2",null,"一点笔记",-1),s("p",null,"上面介绍的数据绑定方法能够工作，但为了更容易理解，我进行了一些简化处理。下面会提到一些之前没有提到的问题。",-1),s("h3",null,"垃圾清理",-1),s("p",null,[e("内存泄漏比较恶心。前面的代码在某种意义上来说有所避免，因为使用了 "),s("code",null,"WeakMap"),e(" 保存 observer。因此，observable 对象及与其关联的 observer 也会同时被回收。")],-1),s("p",null,[e("不过，实际使用场景常常是中心化、持久化的存储，伴随着频繁的 DOM 变动。这种情况下，DOM 在垃圾回收之前，必须释放所有为其注册的 observer。前面的例子并没有实现该功能，但可以在 "),s("a",{href:"https://github.com/RisingStack/nx-observe/blob/master/observer.js",target:"_blank",rel:"noopener"},"nx-observe 的代码"),e(" 中可以看到 "),s("code",null,"unobserve()"),e(" 方法如何实现。")],-1),s("h3",null,"多次包装",-1),s("p",null,"Proxy 是透明的，没有分辨 Proxy 和普通对象的原生方法。此外，它们还能无限嵌套，若不进行必要的预防，最终可能导致不停地对 observable 对象进行包装。",-1),s("p",null,[e("分辨 Proxy 与普通对象的办法有很多，例子中没有提到。其中一种办法是设置一个名为 "),s("code",null,"proxies"),e(" 的 "),s("code",null,"WeakSet"),e(" 对象，之后检查该 WeakSet 中是否存在某个 Proxy 对象即可。如果对 nx-observe 中的 "),s("code",null,"isObservable()"),e(" 方法感兴趣，可以去看"),s("a",{href:"https://github.com/RisingStack/nx-observe/blob/master/observer.js",target:"_blank",rel:"noopener"},"代码"),e("。")],-1),s("h3",null,"继承",-1),s("p",null,"nx-observe 还能与原型继承搭配工作。请看示例：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),e(" parent = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"greeting"),e(": "),s("span",{class:"hljs-string"},"'Hello'"),e(`})
`),s("span",{class:"hljs-keyword"},"const"),e(" child = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"subject"),e(": "),s("span",{class:"hljs-string"},"'World!'"),e(`})
`),s("span",{class:"hljs-title class_"},"Object"),e("."),s("span",{class:"hljs-title function_"},"setPrototypeOf"),e(`(child, parent)

`),s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title function_"},"print"),e(" ("),s("span",{class:"hljs-params"}),e(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),e("."),s("span",{class:"hljs-title function_"},"log"),e("("),s("span",{class:"hljs-string"},[e("`"),s("span",{class:"hljs-subst"},"${child.greeting}"),e(),s("span",{class:"hljs-subst"},"${child.subject}"),e("`")]),e(`)
}

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Hello World!'"),e(`
`),s("span",{class:"hljs-title function_"},"observe"),e(`(print)

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Hello There!'"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" child."),s("span",{class:"hljs-property"},"subject"),e(" = "),s("span",{class:"hljs-string"},"'There!'"),e(`)

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Hey There!'"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" parent."),s("span",{class:"hljs-property"},"greeting"),e(" = "),s("span",{class:"hljs-string"},"'Hey'"),e(", "),s("span",{class:"hljs-number"},"100"),e(`)

`),s("span",{class:"hljs-comment"},"// 控制台打印出 'Look There!'"),e(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" child."),s("span",{class:"hljs-property"},"greeting"),e(" = "),s("span",{class:"hljs-string"},"'Look'"),e(", "),s("span",{class:"hljs-number"},"200"),e(`)
`)])],-1),s("p",null,[e("沿着原型链中的每个对象都会触发 "),s("code",null,"get"),e(" 操作，直到找到属性，因此在所有可能需要的地方都会注册 observer。")],-1),s("p",null,[e("还有一个鲜为人知事情，"),s("code",null,"set"),e(" 操作同样会（偷偷摸摸地）沿着原型链进行。有些极端情况就是因此造成的，这里略过不谈。")],-1),s("h3",null,"内部属性",-1),s("p",null,[e("Proxy 还能拦截“内部属性访问”。你的代码中可能会使用许多通常基本都不考虑的内部属性。这样一些属性，通常会使用如 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener"},"Symbol"),e(" 这样的值作为 key。这些属性也通常也能被 Proxy 拦截到，不过也也会有一些出现 bug 的情况。")],-1),s("h3",null,"异步特性",-1),s("p",null,[e("拦截到 "),s("code",null,"set"),e(" 操作时，observer 可以同步运行。这样有一些优势，比如减低复杂度，时序也可预测，堆栈跟踪更优雅。但某些场景下也会造成混乱。")],-1),s("p",null,"想象一下，在单个循环中向6一个 observable 数组中添加 1000 项。数组长度会变化一千次，关联的 observer 也会在接连执行一千次。这恐怕不是什么好事。",-1),s("p",null,"另一个场景是双向观测。如若 observer 同步执行，下面的代码会造成无限循环。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),e(" observable1 = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"prop"),e(": "),s("span",{class:"hljs-string"},"'value1'"),e(`})
`),s("span",{class:"hljs-keyword"},"const"),e(" observable2 = "),s("span",{class:"hljs-title function_"},"observable"),e("({"),s("span",{class:"hljs-attr"},"prop"),e(": "),s("span",{class:"hljs-string"},"'value2'"),e(`})

`),s("span",{class:"hljs-title function_"},"observe"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" observable1."),s("span",{class:"hljs-property"},"prop"),e(" = observable2."),s("span",{class:"hljs-property"},"prop"),e(`)
`),s("span",{class:"hljs-title function_"},"observe"),e("("),s("span",{class:"hljs-function"},"() =>"),e(" observable2."),s("span",{class:"hljs-property"},"prop"),e(" = observable1."),s("span",{class:"hljs-property"},"prop"),e(`)
`)])],-1),s("p",null,[e("鉴于这些，nx-observe 将 observer 添加到不允许重复的队列中一起执行，以避免"),s("a",{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content",target:"_blank",rel:"noopener"},"无样式内容闪动"),e("。如果你对 microtask 的概念还不熟悉，请查看我之前关于浏览器时间控制的"),s("a",{href:"https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/",target:"_blank",rel:"noopener"},"文章"),e("。")],-1),s("h2",null,"写在最后",-1),s("p",null,[e("如果对 NX 框架感兴趣，请访问 "),s("a",{href:"http://nx-framework.com",target:"_blank",rel:"noopener"},"主页"),e("。胆大的读者还可以在Github 上查看 "),s("a",{href:"https://github.com/RisingStack/nx-framework",target:"_blank",rel:"noopener"},"NX 源码"),e(" 和 "),s("a",{href:"https://github.com/RisingStack/nx-observe",target:"_blank",rel:"noopener"},"nx-observe 源码"),e("。 ")],-1),s("p",null,"希望你喜欢这篇文章，下一章我们将讨论自定义 HTML 元素。",-1),s("h2",null,"译者补记",-1),s("p",null,"关于 Proxy，可以参阅：",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"http://es6.ruanyifeng.com/#docs/proxy",target:"_blank",rel:"noopener"},"ECMAScript 6 入门")])]),s("li",null,[s("p",null,[s("a",{href:"http://exploringjs.com/es6/ch_proxies.html",target:"_blank",rel:"noopener"},"Metaprogramming with proxies")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.2ality.com/2016/11/proxying-builtins.html",target:"_blank",rel:"noopener"},"Pitfall: not all objects can be proxied transparently")])]),s("li",null,[s("p",null,[s("a",{href:"http://pinggod.com/2016/%E5%AE%9E%E4%BE%8B%E8%A7%A3%E6%9E%90-ES6-Proxy-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF/",target:"_blank",rel:"noopener"},"实例解析 ES6 Proxy 使用场景")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.cnblogs.com/ziyunfei/p/3187867.html",target:"_blank",rel:"noopener"},"ES6中的代理对象")])])],-1)])]),_:1})}}};export{j as default};
