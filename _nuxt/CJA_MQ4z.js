import{_ as t}from"./Bm2Oy-cY.js";import{c as o,w as c,o as i,a as l,b as s}from"./YobvFIQM.js";const g={__name:"nodejs-event-loop",setup(u){const e={title:"[译] 理解 Node.js 事件循环",description:"javascript event loop; Node.js 事件循环",keywords:"翻译,JavaScript,Node.js,Event Loop",pathname:"nodejs-event-loop",translation:{author:"Tamas Kadlecsik",social:"https://blog.risingstack.com/author/tamas-kadlecsik/",from:"https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/"},create_time:"2016-11-12",prev:{title:"快来上钩哈哈哈",pathname:"fishing-for-spider"},next:{title:"算法学习：冒泡排序",pathname:"algo-bubble-sort"}};return(p,n)=>{const a=t;return i(),o(a,{data:e},{default:c(()=>[...n[0]||(n[0]=[l("p",null,"本文介绍了 Node.js 事件循环是如何工作，如何使用 Node.js 构建高速应用。文章还会涉及最常见的一些问题及其解决方案。",-1),l("p",null,"（我们正在编写一系列文章，聚焦于那些大规模使用 Node.js 的公司、有一定 Node 基础的开发者们的需求。）",-1),l("p",null,[l("strong",null,"Node.js at Scale 系列章节:")],-1),l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"使用 npm")]),l("ul",null,[l("li",null,[l("a",{href:"https://blog.risingstack.com/nodejs-at-scale-npm-best-practices",target:"_blank",rel:"noopener"},"npm 技巧与最佳实践")]),l("li",null,[l("a",{href:"https://blog.risingstack.com/nodejs-at-scale-npm-publish-tutorial",target:"_blank",rel:"noopener"},"语义化版本和模块发布")]),l("li",null,[l("a",{href:"https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require",target:"_blank",rel:"noopener"},"理解 Module System、CommonJS 和 require")])])]),l("li",null,[l("p",null,[l("strong",null,"深入 Node.js 底层")]),l("ul",null,[l("li",null,[s("Node.js 事件循环 ("),l("strong",null,"正是本文"),s(")")]),l("li",null,"垃圾回收"),l("li",null,"编写元素模块")])]),l("li",null,[l("p",null,[l("strong",null,"Building")]),l("ul",null,[l("li",null,"Node.js 应用结构"),l("li",null,"代码整洁之道"),l("li",null,"异步处理"),l("li",null,"事件源（Event sourcing）"),l("li",null,"命令查询与责任隔离")])]),l("li",null,[l("p",null,[l("strong",null,"Testing")]),l("ul",null,[l("li",null,"单元测试"),l("li",null,"E2E 测试")])]),l("li",null,[l("p",null,[l("strong",null,"生产环境的 Node.js")]),l("ul",null,[l("li",null,"应用监控"),l("li",null,"应用调试"),l("li",null,"应用分析")])]),l("li",null,[l("p",null,[l("strong",null,"微服务")]),l("ul",null,[l("li",null,"请求签名（Request Signing）"),l("li",null,"分布式跟踪（Distributed Tracing）"),l("li",null,"API 网关（API Gateways）")])])],-1),l("hr",null,null,-1),l("h2",null,"问题提出",-1),l("p",null,"多数网站后端是不需要进行复杂运算的。程序多数时间都在等待进行硬盘读写，等待网络传输信息、响应返回。",-1),l("p",null,"IO 操作可能比数据处理要慢几个数量级。举个例子，SSD 可以达到 200-730 MB/s 的速度 —— 至少高端 SSD 可以做到。读取 1KB 数据仅需要 1.4μs，但同样的时间里，主频 2GHz 的 CPU 可以完成 28,000 次指令处理周期。",-1),l("p",null,"对网络通信来说，情况还可能更糟糕，ping 下 google.com 试试看：",-1),l("pre",null,[l("code",null,`$ ping google.com
64 bytes from 172.217.16.174: icmp_seq=0 ttl=52 time=33.017 ms  
64 bytes from 172.217.16.174: icmp_seq=1 ttl=52 time=83.376 ms  
64 bytes from 172.217.16.174: icmp_seq=2 ttl=52 time=26.552 ms  
64 bytes from 172.217.16.174: icmp_seq=3 ttl=52 time=40.153 ms  
64 bytes from 172.217.16.174: icmp_seq=4 ttl=52 time=37.291 ms  
64 bytes from 172.217.16.174: icmp_seq=5 ttl=52 time=58.692 ms  
64 bytes from 172.217.16.174: icmp_seq=6 ttl=52 time=45.245 ms  
64 bytes from 172.217.16.174: icmp_seq=7 ttl=52 time=27.846 ms 
`)],-1),l("p",null,"平均延时为 44ms。数据包在网络上一个来回，前面提到的处理器可以执行 8800 万次周期。",-1),l("h2",null,"解决方案",-1),l("p",null,"多数操作系统都提供了某种类型的异步 IO 接口，在允许我们在处理那些不依赖于通信结果的数据之外，通信还能继续...",-1),l("p",null,"数种方式可以达到此目的。如今的完成方式，主要是以额外的软件复杂性为代价，挖掘多线程潜力。比方说，在 Java 或 Python 中，文件读取是阻塞操作。在等待网络/硬盘通信（network/disk communication）完成时，程序无法做任何其他工作。我们能做的 —— 至少在 Java 中是如此 —— 只能是启动新的线程，然后在操作完成后通知主线程。",-1),l("p",null,"既枯燥又复杂，但能完成任务。那 Node 是怎样的呢？好吧，因为 Node.js（更准确的说是 V8） 是单线程的，我们肯定也会遇到同样的问题。我们代码只能在一个线程中运行。",-1),l("p",null,[l("strong",null,"编者按"),s(": 这里所说的并非完全正确。Java 和 Python 都有异步接口，但使用起来要比 Node.js 麻烦得多。感谢 "),l("a",{href:"https://disqus.com/by/keidi19/",target:"_blank",rel:"noopener"},"Shahar"),s(" 和 "),l("a",{href:"https://twitter.com/dirkjharrington",target:"_blank",rel:"noopener"},"Dirk Harrington"),s(" 指正。")],-1),l("p",null,[s("也许你知道，有时候，在浏览器中用 "),l("code",null,"setTimeout(someFunction, 0)"),s(" 能够神奇地解决一些问题。可是为什么将超时时间设置为 0，将执行延迟 0ms 就能解决问题？难道和立即调用 "),l("code",null,"someFunction"),s(" 不是一回事吗？并非如此。")],-1),l("p",null,[s("首先，来看看调用栈（call stack），又简称作“栈”。我会尽量将问题简化，因为我们只需要理解调用栈的最基本概念。如果你对此已经熟悉，请直接"),l("a",{href:"#事件循环"},"跳到下一节吧"),s("。")],-1),l("h2",null,"调用栈",-1),l("p",null,"调用一个函数时，返回地址（return address）、参数（arguments）、本地变量（local variables）等都会被推入栈中。如果在当前正在运行的函数中调用另一个函数，则该函数的相关内容也会以同样的方式推到栈顶。",-1),l("p",null,"为行文简便，接下来我将使用“函数被推入栈顶”这样不太准确的表达。",-1),l("p",null,[s("来看看吧！（"),l("strong",null,[s("译者注：下面的示意图中的一些地方将 "),l("code",null,"square"),s(" 误作 "),l("code",null,"sqrt"),s("，请根据代码甄别。")]),s("）")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"main"),s(" ("),l("span",{class:"hljs-params"}),s(`) {
  `),l("span",{class:"hljs-keyword"},"const"),s(" hypotenuse = "),l("span",{class:"hljs-title function_"},"getLengthOfHypotenuse"),s("("),l("span",{class:"hljs-number"},"3"),s(", "),l("span",{class:"hljs-number"},"4"),s(`)
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s(`(hypotenuse)
}
 
`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"getLengthOfHypotenuse"),s("("),l("span",{class:"hljs-params"},"a, b"),s(`) {
  `),l("span",{class:"hljs-keyword"},"const"),s(" squareA = "),l("span",{class:"hljs-title function_"},"square"),s(`(a)
  `),l("span",{class:"hljs-keyword"},"const"),s(" squareB = "),l("span",{class:"hljs-title function_"},"square"),s(`(b)
  `),l("span",{class:"hljs-keyword"},"const"),s(` sumOfSquares = squareA + squareB
  `),l("span",{class:"hljs-keyword"},"return"),s(),l("span",{class:"hljs-title class_"},"Math"),s("."),l("span",{class:"hljs-title function_"},"sqrt"),s(`(sumOfSquares)  
}

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"square"),s("("),l("span",{class:"hljs-params"},"number"),s(`) {  
  `),l("span",{class:"hljs-keyword"},"return"),s(` number * number  
}

`),l("span",{class:"hljs-title function_"},"main"),s(`()
`)])],-1),l("p",null,[s("首先调用 "),l("code",null,"main"),s(" 函数：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01ce56e785b8ca1925.png",alt:"The main function"})],-1),l("p",null,[s("紧接着以 3 和 4 为参数，调用 "),l("code",null,"getLengthOfHypotenuse"),s(" 函数：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01638ef1f34edebd4b.png",alt:"The getLengthOfHypotenuse function"})],-1),l("p",null,[s("然后是 "),l("code",null,"square(a)"),s("：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01853c10926172f492.png",alt:"The square(a) function"})],-1),l("p",null,[l("code",null,"square(a)"),s(" 返回后，从栈中弹出，其返回值赋值给 "),l("code",null,"squareA"),s("。然后 "),l("code",null,"squareA"),s(" 被添加到 "),l("code",null,"getLengthOfHypotenuse"),s(" 的调用帧中：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t0131d9d440676ac6db.png",alt:"Variable a"})],-1),l("p",null,[s("下面计算 "),l("code",null,"square(b)"),s(" 也是一样：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01d0940a2e39afc9b8.png",alt:"The square(b) function"})],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01e3c678adc983fe06.png",alt:"Variable b"})],-1),l("p",null,[s("下一行是表达式 "),l("code",null,"squareA + squareB"),s(" 求值：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01a6f422d209f22c87.png",alt:"sumOfSquares"})],-1),l("p",null,[s("计算 "),l("code",null,"Math.sqrt(sumOfSquares)"),s(":")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01a839e63df37022d1.png",alt:"Math.sqrt"})],-1),l("p",null,[s("现在 "),l("code",null,"getLengthOfHypotenuse"),s(" 剩下的工作就是将计算的最终结果返回：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t018965143c9066d384.png",alt:"The return function"})],-1),l("p",null,[l("code",null,"getLengthOfHypotenuse"),s(" 返回值被赋值给 "),l("code",null,"main"),s(" 中的 "),l("code",null,"hypotenuse"),s("：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t0151eb79acb5966784.png",alt:"hypotenuse"})],-1),l("p",null,[s("控制台打印出 "),l("code",null,"hypotenuse"),s("：")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t0103341d998752b217.png",alt:"The console log"})],-1),l("p",null,[s("然后，"),l("code",null,"main"),s(" 返回，不带任何值，并从栈中弹出，栈变为空。")],-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01d03e975bae0fee94.png",alt:"Finally"})],-1),l("p",null,[l("strong",null,"注意"),s("： 上面提到函数执行完毕后，本地变量从栈中弹出。这仅对 Number、String、Boolean 等基本类型的值成立。对象、数组等值位于堆（heap）中，变量只是指向它们的指针。传递的变量其实只是指针，让这些值在不同的栈帧中可变化。当函数从栈中弹出后，只有指针弹出，而实际值依然还在堆中。当对象失去作用后，由垃圾回收器释放空间。")],-1),l("h2",null,"事件循环",-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01c3a8e7546481b4ee.gif",alt:"The Node.js Event Loop - cat version"})],-1),l("p",null,"不不不，不是这种循环。 :)",-1),l("p",null,[s("所以，当我们调用 "),l("code",null,"setTimeout"),s("、"),l("code",null,"http.get"),s("、"),l("code",null,"process.nextTick"),s(" 或 "),l("code",null,"fs.readFile"),s(" 这样一些东西时，到底发生了什么？V8 代码没有这些，但 Chrome WebApi 和 Node.js 的 C++ API 中有。要了解它们，我们得更好地理解执行顺序。")],-1),l("p",null,[s("看看一个更一般的 Node.js 应用 —— 监听 "),l("code",null,"localhost:3000/"),s(" 的服务器。收到请求时，服务器会在控制台上打印一些消息，请求 "),l("code",null,"wttr.in/"),s("，然后将接收的响应转发给请求者。")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-meta"},"'use strict'"),s(` 
`),l("span",{class:"hljs-keyword"},"const"),s(" express = "),l("span",{class:"hljs-built_in"},"require"),s("("),l("span",{class:"hljs-string"},"'express'"),s(`)  
`),l("span",{class:"hljs-keyword"},"const"),s(" superagent = "),l("span",{class:"hljs-built_in"},"require"),s("("),l("span",{class:"hljs-string"},"'superagent'"),s(`)  
`),l("span",{class:"hljs-keyword"},"const"),s(" app = "),l("span",{class:"hljs-title function_"},"express"),s(`()

app.`),l("span",{class:"hljs-title function_"},"get"),s("("),l("span",{class:"hljs-string"},"'/'"),s(`, sendWeatherOfRandomCity)

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"sendWeatherOfRandomCity"),s(" ("),l("span",{class:"hljs-params"},"request, response"),s(`) {  
  `),l("span",{class:"hljs-title function_"},"getWeatherOfRandomCity"),s(`(request, response)
  `),l("span",{class:"hljs-title function_"},"sayHi"),s(`()
}

`),l("span",{class:"hljs-keyword"},"const"),s(),l("span",{class:"hljs-variable constant_"},"CITIES"),s(` = [  
  `),l("span",{class:"hljs-string"},"'london'"),s(`,
  `),l("span",{class:"hljs-string"},"'newyork'"),s(`,
  `),l("span",{class:"hljs-string"},"'paris'"),s(`,
  `),l("span",{class:"hljs-string"},"'budapest'"),s(`,
  `),l("span",{class:"hljs-string"},"'warsaw'"),s(`,
  `),l("span",{class:"hljs-string"},"'rome'"),s(`,
  `),l("span",{class:"hljs-string"},"'madrid'"),s(`,
  `),l("span",{class:"hljs-string"},"'moscow'"),s(`,
  `),l("span",{class:"hljs-string"},"'beijing'"),s(`,
  `),l("span",{class:"hljs-string"},"'capetown'"),s(`,
]

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"getWeatherOfRandomCity"),s(" ("),l("span",{class:"hljs-params"},"request, response"),s(`) {  
  `),l("span",{class:"hljs-keyword"},"const"),s(" city = "),l("span",{class:"hljs-variable constant_"},"CITIES"),s("["),l("span",{class:"hljs-title class_"},"Math"),s("."),l("span",{class:"hljs-title function_"},"floor"),s("("),l("span",{class:"hljs-title class_"},"Math"),s("."),l("span",{class:"hljs-title function_"},"random"),s("() * "),l("span",{class:"hljs-variable constant_"},"CITIES"),s("."),l("span",{class:"hljs-property"},"length"),s(`)]
  superagent.`),l("span",{class:"hljs-title function_"},"get"),s("("),l("span",{class:"hljs-string"},[s("`wttr.in/"),l("span",{class:"hljs-subst"},"${city}"),s("`")]),s(`)
    .`),l("span",{class:"hljs-title function_"},"end"),s("("),l("span",{class:"hljs-function"},[s("("),l("span",{class:"hljs-params"},"err, res"),s(") =>")]),s(` {
      `),l("span",{class:"hljs-keyword"},"if"),s(` (err) {
        `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'O snap'"),s(`)
        `),l("span",{class:"hljs-keyword"},"return"),s(" response."),l("span",{class:"hljs-title function_"},"status"),s("("),l("span",{class:"hljs-number"},"500"),s(")."),l("span",{class:"hljs-title function_"},"send"),s("("),l("span",{class:"hljs-string"},"'There was an error getting the weather, try looking out the window'"),s(`)
      }
      `),l("span",{class:"hljs-keyword"},"const"),s(" responseText = res."),l("span",{class:"hljs-property"},"text"),s(`
      response.`),l("span",{class:"hljs-title function_"},"send"),s(`(responseText)
      `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'Got the weather'"),s(`)
    })

  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'Fetching the weather, please be patient'"),s(`)
}

`),l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title function_"},"sayHi"),s(" ("),l("span",{class:"hljs-params"}),s(`) {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'Hi'"),s(`)
}

app.`),l("span",{class:"hljs-title function_"},"listen"),s("("),l("span",{class:"hljs-number"},"3000"),s(`) 
`)])],-1),l("p",null,[s("请求 "),l("code",null,"localhost:3000"),s(" 时，除了获取天气，还有哪些内容打印出来？")],-1),l("p",null,[s("如果你在 Node 方面有些经验，肯定不会惊讶：在代码中，尽管调用 "),l("code",null,"console.log('Fetching the weather, please be patient')"),s(" 在 "),l("code",null,"console.log('Got the weather')"),s(" 之后，当前者会先打印出来：")],-1),l("pre",null,[l("code",{class:"hljs lang-bash"},`Fetching the weather, please be patient  
Hi  
Got the weather 
`)],-1),l("p",null,"发生了什么？就算 V8 是单线程的，Node 底层的 C++ API 并不是啊。这意味着，无论何时调用非阻塞的操作，Node 会在底层调用一些和 JavaScript 代码同时运行的代码。一旦该隐藏线程接收到等待的值或者抛出错误，就会传入必要参数，调用提供的回调。",-1),l("p",null,[l("strong",null,"注意"),s("： 上面所谓的“一些和 JavaScript 代码同时运行的代码”，实际上是 "),l("a",{href:"https://github.com/libuv/libuv",target:"_blank",rel:"noopener"},"libuv"),s(" 的一部分。libuv 是处理线程池的开源库，用于处理信号，以及异步任务执行所必要的其他东西。一开始是为 Node.js 开发的，不过目前也有"),l("a",{href:"https://github.com/libuv/libuv/wiki/Projects-that-use-libuv",target:"_blank",rel:"noopener"},"很多其他项目"),s("在使用。")],-1),l("p",null,"为了深入底层，我们需要引入两个新概念：事件循环（event loop）和任务队列（task queue）。",-1),l("h3",null,"任务队列",-1),l("p",null,"Javascript 是单线程、事件驱动型语言。这意味着，我们可以为事件添加监听器，当某一事件触发时，监听器执行提供的回调。",-1),l("p",null,[s("调用 "),l("code",null,"setTimeout"),s("、"),l("code",null,"http.get"),s(" 或 "),l("code",null,"fs.readFile"),s(" 时，Node.js 将这些操作发送到另外一个线程，允许 V8 继续执行代码。计时完毕或 IO/http 操作完成后，Node 还会调用回调函数。")],-1),l("p",null,"然后这些回调也可以将其他任务入列，其余亦可依此类推。这样，在处理请求时还能读取文件，并根据读取的内容发送 http 请求，而不会阻塞正在处理的其他请求。",-1),l("p",null,"尽管如此，我们只有一个主线程加一个调用栈，所以为避免在读取那个文件时又去处理另一个请求，回调函数需要等待调用栈变空。回调函数等待执行的中间状态被称为任务队列（又称作事件队列、消息队列）。一旦主线程结束此前工作，回调函数就会在一个无限循环当中被调用，因此叫作“事件循环”。（译者注：附原文如下）",-1),l("blockquote",null,[l("p",null,"However, we only have one main thread and one call-stack, so in case there is another request being served when the said file is read, its callback will need to wait for the stack to become empty. The limbo where callbacks are waiting for their turn to be executed is called the task queue (or event queue, or message queue). Callbacks are being called in an infinite loop whenever the main thread has finished its previous task, hence the name 'event loop'.")],-1),l("p",null,"在上一个例子中，事件循环大概如下所述：",-1),l("ol",null,[l("li",null,[l("p",null,"express 为“request”事件注册了一个处理程序，请求 “/” 时会被调用；")]),l("li",null,[l("p",null,"跳过函数，开始监听 3000 端口；")]),l("li",null,[l("p",null,"调用栈为空，等待“request”事件触发；")]),l("li",null,[l("p",null,[s("请求到来，等待已久的事件触发，express 调用 "),l("code",null,"sendWeatherOfRandomCity"),s("；")])]),l("li",null,[l("p",null,[l("code",null,"sendWeatherOfRandomCity"),s(" 入栈；")])]),l("li",null,[l("p",null,[l("code",null,"getWeatherOfRandomCity"),s(" 被调用并入栈；")])]),l("li",null,[l("p",null,[s("调用 "),l("code",null,"Math.floor"),s(" 和 "),l("code",null,"Math.random"),s("，入栈、出栈，"),l("code",null,"cities"),s(" 中的某一个被赋值给 "),l("code",null,"city"),s("；")])]),l("li",null,[l("p",null,[s("传入 "),l("code",null,"'wttr.in/${city}'"),s(" 调用 "),l("code",null,"superagent.get"),s("，为 "),l("code",null,"end"),s(" 事件设置处理回调；")])]),l("li",null,[l("p",null,[s("发送 "),l("code",null,"http://wttr.in/${city}"),s(" http 请求到底层线程，继续向下执行；")])]),l("li",null,[l("p",null,[s("控制台打印 "),l("code",null,"'Fetching the weather, please be patient'"),s("，"),l("code",null,"getWeatherOfRandomCity"),s(" 函数返回；")])]),l("li",null,[l("p",null,[s("调用 "),l("code",null,"sayHi"),s("，控制台打印 "),l("code",null,"'Hi'"),s("；")])]),l("li",null,[l("p",null,[l("code",null,"sendWeatherOfRandomCity"),s(" 函数返回、出栈，调用栈变空；")])]),l("li",null,[l("p",null,[s("等待 "),l("code",null,"http://wttr.in/${city}"),s(" 发送响应；")])]),l("li",null,[l("p",null,[s("一旦响应返回，"),l("code",null,"end"),s(" 事件触发；")])]),l("li",null,[l("p",null,[s("传给 "),l("code",null,".end()"),s(" 的匿名回调函数调用，带着其闭包内所有变量一起入栈，也就是说，其内部能够访问、修改 "),l("code",null,"express, superagent, app, CITIES, request, response, city"),s(" 以及我们定义的函数；")])]),l("li",null,[l("p",null,[s("调用 "),l("code",null,"response.send()"),s("，状态码为 "),l("code",null,"200"),s(" 或 "),l("code",null,"500"),s("，再次发送到底层线程，response stream 不会阻塞代码执行，匿名回调出栈。")])])],-1),l("p",null,[s("这样我们就能理解一开始提到的 "),l("code",null,"setTimeout"),s(" hack 是如何工作的。尽管将时间设置为 0，但是会延迟到当前栈和任务队列为空后执行，以允许浏览器重新绘制 UI，或 Node 处理其他请求。")],-1),l("h3",null,"Microtask 与 Macrotask",-1),l("p",null,"实际上，不止一个任务队列，microtask（小型任务） 与 macrotask（巨型任务）各有一个任务队列。",-1),l("p",null,"Microtask 如：",-1),l("ul",null,[l("li",null,[l("p",null,[l("code",null,"process.nextTick")])]),l("li",null,[l("p",null,[l("code",null,"promises")])]),l("li",null,[l("p",null,[l("code",null,"Object.observe")])])],-1),l("p",null,"Macrotask 如：",-1),l("ul",null,[l("li",null,[l("p",null,[l("code",null,"setTimeout")])]),l("li",null,[l("p",null,[l("code",null,"setInterval")])]),l("li",null,[l("p",null,[l("code",null,"setImmediate")])]),l("li",null,[l("p",null,[l("code",null,"I/O")])])],-1),l("p",null,"看看下面的代码：",-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'script start'"),s(`)

`),l("span",{class:"hljs-keyword"},"const"),s(" interval = "),l("span",{class:"hljs-built_in"},"setInterval"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setInterval'"),s(`)
}, `),l("span",{class:"hljs-number"},"0"),s(`)

`),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setTimeout 1'"),s(`)
  `),l("span",{class:"hljs-title class_"},"Promise"),s("."),l("span",{class:"hljs-title function_"},"resolve"),s("()."),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 3'"),s(`)
  }).`),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 4'"),s(`)
  }).`),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
      `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setTimeout 2'"),s(`)
      `),l("span",{class:"hljs-title class_"},"Promise"),s("."),l("span",{class:"hljs-title function_"},"resolve"),s("()."),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
        `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 5'"),s(`)
      }).`),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
        `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 6'"),s(`)
      }).`),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
        `),l("span",{class:"hljs-built_in"},"clearInterval"),s(`(interval)
      })
    }, `),l("span",{class:"hljs-number"},"0"),s(`)
  })
}, `),l("span",{class:"hljs-number"},"0"),s(`)

`),l("span",{class:"hljs-title class_"},"Promise"),s("."),l("span",{class:"hljs-title function_"},"resolve"),s("()."),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 1'"),s(`)
}).`),l("span",{class:"hljs-title function_"},"then"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'promise 2'"),s(`)
}) 
`)])],-1),l("p",null,"控制台结果如下：",-1),l("pre",null,[l("code",{class:"hljs lang-bash"},`script start  
promise1  
promise2  
setInterval  
setTimeout1  
promise3  
promise4  
setInterval  
setTimeout2  
setInterval  
promise5  
promise6 
`)],-1),l("p",null,[s("按照 "),l("a",{href:"https://html.spec.whatwg.org/multipage/webappapis.html#task-queue",target:"_blank",rel:"noopener"},"WHATWG"),s(" 规范，每一次事件循环（one cycle of the event loop），只处理一个 (macro)task。待该 macrotask 完成后，所有的 microtask 会在同一次循环中处理。处理这些 microtask 时，还可以将更多的 microtask 入队，它们会一一执行，直到整个 microtask 队列处理完。")],-1),l("p",null,"下图展示得更加清楚：",-1),l("p",null,[l("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01134d053300881c3b.png",alt:"The Node.js Event Loop"})],-1),l("p",null,"在上面的例子中：",-1),l("p",null,[l("strong",null,"Cycle 1:")],-1),l("ol",null,[l("li",null,[l("p",null,[l("code",null,"setInterval"),s(" 加入 macrotask 队列；")])]),l("li",null,[l("p",null,[l("code",null,"setTimeout 1"),s(" 加入 macrotask 队列；")])]),l("li",null,[l("p",null,[l("code",null,"Promise.resolve 1"),s(" 中，两个 "),l("code",null,"then"),s(" 加入 microtask 队列；")])]),l("li",null,[l("p",null,"调用栈变空，microtask 执行。")])],-1),l("p",null,[s("Macrotask queue: "),l("code",null,"setInterval"),s(", "),l("code",null,"setTimeout 1")],-1),l("p",null,[l("strong",null,"Cycle 2:")],-1),l("ol",{start:"5"},[l("li",null,[s("microtask 队列为空，"),l("code",null,"setInteval"),s(" 回调执行，又一个 "),l("code",null,"setInterval"),s(" 加入 macrotask 队列，正好位于 "),l("code",null,"setTimeout 1"),s(" 之后；")])],-1),l("p",null,[s("Macrotask queue: "),l("code",null,"setTimeout 1"),s(", "),l("code",null,"setInterval")],-1),l("p",null,[l("strong",null,"Cycle 3:")],-1),l("ol",{start:"6"},[l("li",null,[l("p",null,[s("microtask 队列为空，"),l("code",null,"setTimeout 1"),s(" 回调执行，"),l("code",null,"promise 3"),s(" 和 "),l("code",null,"promise 4"),s(" 加入 microtask 队列；")])]),l("li",null,[l("p",null,[l("code",null,"promise 3"),s(" 和 "),l("code",null,"promise 4"),s(" 执行，"),l("code",null,"setTimeout 2"),s(" 加入 macrotask 队列；")])])],-1),l("p",null,[s("Macrotask queue: "),l("code",null,"setInterval"),s(", "),l("code",null,"setTimeout 2")],-1),l("p",null,[l("strong",null,"Cycle 4:")],-1),l("ol",{start:"8"},[l("li",null,[s("microtask 队列为空，"),l("code",null,"setInteval"),s(" 回调执行，另一个 "),l("code",null,"setInterval"),s(" 加入 macrotask 队列，正好位于 "),l("code",null,"setTimeout 2"),s(" 之后；")])],-1),l("p",null,[s("Macrotask queue: "),l("code",null,"setTimeout 2"),s(", "),l("code",null,"setInteval")],-1),l("ol",{start:"9"},[l("li",null,[l("code",null,"setTimeout 2"),s(" 回调执行，"),l("code",null,"promise 5"),s(" 和 "),l("code",null,"promise 6"),s(" 加入 microtask 队列；")])],-1),l("p",null,[s("紧接着，"),l("code",null,"promise 5"),s(" 和 "),l("code",null,"promise 6"),s(" 的处理程序会清除 interval，但奇怪的是，"),l("code",null,"setInterval"),s(" 还是运行了一次。不过，如果在 Chrome 中运行代码，结果和预期是一致的。")],-1),l("div",{class:"tip"}," **译者注**：笔者实际测试发现，情况可能和上面的叙述有所不同。Node v5.12 执行的结果是符合预期的。而 Chrome 53 上，反而出现一些状况，`promise 4` 之后，`setInterval` 执行了两次，原因未详，有待进一步追踪（disqus 评论被墙，我的 VPN 也没戏）。 ",-1),l("p",null,[s("使用 "),l("code",null,"process.nextTick"),s(" 和一些嵌套回调，在也 Node 中也能修复问题：")],-1),l("pre",null,[l("code",{class:"hljs lang-javascript"},[l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'script start'"),s(`)

`),l("span",{class:"hljs-keyword"},"const"),s(" interval = "),l("span",{class:"hljs-built_in"},"setInterval"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setInterval'"),s(`)
}, `),l("span",{class:"hljs-number"},"0"),s(`)

`),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setTimeout 1'"),s(`)
  process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 3'"),s(`)
    process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
      `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 4'"),s(`)
      `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
        `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'setTimeout 2'"),s(`)
        process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
          `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 5'"),s(`)
          process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
            `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 6'"),s(`)
            `),l("span",{class:"hljs-built_in"},"clearInterval"),s(`(interval)
          })
        })
      }, `),l("span",{class:"hljs-number"},"0"),s(`)
    })
  })
})

process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {  
  `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 1'"),s(`)
  process.`),l("span",{class:"hljs-title function_"},"nextTick"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s("("),l("span",{class:"hljs-string"},"'nextTick 2'"),s(`)
  })
}) 
`)])],-1),l("p",null,"这和上面的逻辑基本一样，只是看起来比较可怕。至少工作按照预期完成了。",-1),l("h3",null,"驯服异步怪兽！",-1),l("p",null,"如前所见，在编写 Node.js 应用时，需要管理、留心两个任务队列和事件循环 —— 如果想要发挥它们全部的理力量，如果需要避免耗时任务阻塞主线程。",-1),l("p",null,[s("事件循环的概念一开始可能不太好掌握，一旦掌握之后就再也离不开了。可能导致回调地狱的延续传递风格看起来很丑，不过我们有 Promise，很快还有 async-await 在手... 在等待 async-await 的时候，还可以使用 "),l("a",{href:"https://github.com/tj/co",target:"_blank",rel:"noopener"},"co"),s("、"),l("a",{href:"http://koajs.com/",target:"_blank",rel:"noopener"},"koa"),s(" 这些工具。")],-1),l("p",null,"最后一点建议：",-1),l("p",null,[s("了解了 Node.js 和 V8 如何处理长时间任务，可以开始尝试使用。你之前可能听说过，应当将耗时循环放入任务队列。可以手动去做，或者借助 "),l("a",{href:"http://caolan.github.io/async/",target:"_blank",rel:"noopener"},"async.js"),s("。")],-1),l("p",null,"祝你搬砖愉快！如果有什么问题或想法，请在评论中提出。",-1)])]),_:1})}}};export{g as default};
