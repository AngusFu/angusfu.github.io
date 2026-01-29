import{_ as t}from"./Bm2Oy-cY.js";import{c as o,w as i,o as e,a as s,b as n}from"./YobvFIQM.js";const j={__name:"queues-in-node.js",setup(p){const a={title:"[译] Node.js 中的队列",description:"Node.js 中的队列",keywords:"翻译,Node.js",pathname:"queues-in-node.js",translation:{author:"Pedro Teixeira",social:"http://blog.yld.io/author/pedro/",from:"http://blog.yld.io/2016/05/10/introducing-queues/"},create_time:"2016-06-25",prev:{title:"关于JavaScript 函数传参",pathname:"javascript-argument"},next:{title:"[译] 客户端存储",pathname:"client-side-storage"}};return(h,l)=>{const c=t;return e(),o(c,{data:a},{default:i(()=>[...l[0]||(l[0]=[s("p",null,[n("这是深入探索 Node.js 中使用工作队列（work queues）管理异步工作流的系列文章的第一篇，来自"),s("a",{href:"http://nodepatternsbooks.com/",target:"_blank",rel:"noopener"},"the Node Patterns series"),n("。")],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p1.ssl.qhimg.com/t0195a38b6ea509460d.png",alt:"Node.js 中的队列"})],-1),s("p",null,"开始享受吧!",-1),s("hr",null,null,-1),s("p",null,"很常见的是，在应用程序流中，应用有着可以异步处理的工作负载。一个常见的例子是发送邮件。比方说，新用户注册时，可能需要给 Ta 发送一封确认邮件来确认用户刚刚输入的 email 地址是 Ta 自己的。这包括从模板中生成消息，向电子邮件服务提供商发送请求，解析结果，处理任何可能发送的最终错误，重试，等等…… 这个流程可能比较复杂，容易出错，或者在 HTTP 服务器的周期中花费太长时间。不过也有另外一个选择，可以向持久化存储中插入一个文档，该文档描述我们有一条待发送给这个用户的消息。另一个进程可能拿到这个文档，做一些比较重的工作：从模板生成消息，向服务器发送请求，解析错误，并在必要的情况下重排这个工作。",-1),s("p",null,"此外，系统需要和其他系统整合的情况也很常见。在我曾做过的一些项目中，需要不同的系统之间的进行用户配置文件的双向同步：当用户在一个系统中更新了个人资料，这些变化需要传递给其他系统，反之亦然。如果两个系统之间不需要很强的一致性，资料同步之间有一个小的延迟也许是可接受的，那这项工作就可以使用另一个进程异步处理。",-1),s("p",null,"更一般地说，在整个系统中有一个工作队列将工作生产者和消费者分开，这是一种常见的模式。生产者往工作队列中插入工作，消费者从队列中拿到工作并执行需要的任务。",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t01a62cf9e49214926b.png",alt:"工作队列"})],-1),s("p",null,"使用这样的拓扑结构有许多原因和优点，如：",-1),s("ul",null,[s("li",null,[s("p",null,"解耦工作生产者和消费者")]),s("li",null,[s("p",null,"使重试逻辑更易于实现")]),s("li",null,[s("p",null,"跨时间分配工作负载")]),s("li",null,[s("p",null,"跨空间（nodes 节点）分配工作负载")]),s("li",null,[s("p",null,"异步工作")]),s("li",null,[s("p",null,"使外部系统更容易整合（最终的一致性）")])],-1),s("p",null,"让我们来分析一下其中的一些问题吧。",-1),s("h2",null,"独立 （Isolate）",-1),s("p",null,"发送邮件是许多应用需要做的工作。一个例子是，用户修改了密码，一些应用很友好地发送邮件通知用户有人（最好不是其他人）修改了密码。现在发送邮件，通常是通过调用第三方邮件提供商提供的 HTTP API来完成的。如果服务缓慢或无法访问时候会怎样？你可不想就因为一封邮件发布出去就把密码给回滚了。当然，你也不想就因为在处理请求失败时碰到了工作中的一个非重要的部分，使得密码更改请求就这样崩掉了。密码修改后希望可以很快就发送出这封邮件，但不能有如此的代价。",-1),s("h2",null,"重试 （Retry）",-1),s("p",null,"还有，修改密码意味着，你要为这个用户在两个系统中都做更改：一个中央用户数据库和一个遗留系统（legacy system）。（我知道这很恶心啊，不过我可不止见过一次 —— 现实就这么骨感。）假如第一个成功了、第二个失败了，咋办？",-1),s("p",null,"在这些情形下，你可以想一直重试直至成功：在遗留系统中更改密码是一个可以多次重复的结果相同的操作，而邮件也可以重复发送多次。",-1),s("blockquote",null,[s("p",null,"举例子，假如遗留系统修改密码了但未能成功返回通知，如果操作是幂等的，你可以稍后重试。"),s("p",null,"甚至，非幂等操作也可以从工作队列处理中尝到甜头。比如，你可以将一次货币交易插入到工作队列中 ：给每次交易一个通用唯一标识符（UUID, universal unique identifier），稍后接收交易请求的系统可以保证不会发生重复交易。"),s("p",null,"在这个例子中，你基本只需要担心工作队列提供的必要的持久性保证：如果系统故障，你希望将交易丢失的风险降到最低。")],-1),s("h2",null,"分布及规模 （Distribute and scale）",-1),s("p",null,"另一个将工作生产者和消费者解耦的原因是，你可能想将工作集群规模化：如果任务消耗大量资源，如果任务是重 CPU 型的或者需要大量内存或操作系统资源，你可以将其与应用其他部分分离出来，放到工作队列中。",-1),s("p",null,"在任何应用中，一些操作比其他的要重。这可能会在整个节点引入有差异的工作负载：一个不幸的节点可能因处理太多的高并发业务而负担过重，而其它节点却被闲置。使用工作队列，将具体工作平均分配，可以将影响最小化。",-1),s("p",null,"工作队列的另一个效果是吸收工作峰（absorb work peaks）：你可以为工作集群计划给定的最大容量，并确保容量永远不会超过。如果工作数量在短时间内急剧上升，工作队列完全可以解决，远离工作峰的压力。",-1),s("blockquote",null,[s("p",null,"系统监控在这里起到重要作用：你应当持续监控工作队列的长度，工作时间（完成一项任务的时间），工作占用，以及容量，以确定在高峰时间保证令人满意的操作时间需要的最佳、最小的资源。")],-1),s("h2",null,"防止崩溃 （Survive crashes）",-1),s("p",null,"如果你不需要以上任何一点东西，使用持久化工作队列的一个理由是防止崩溃。即使是同一个进程中的内存队列也能满足你的应用需求，持续的队列使你的应用在进程重启的时候更具弹性。",-1),s("p",null,"好了，理论讲得差不多了 —— 我们来看具体实现。",-1),s("p",null,"可以设计出的最简单的工作队列是一个内存队列。实现内存队列可能是个学校的练习（留给读者）。这里我们使用 Async 的 queue。",-1),s("p",null,"假设你在做的这个演示应用和一个控制你的房子的硬件单元相连接。你的 Node.js 应用和该单元通过一个串行端口对话，且有线协议只能同时接受一个挂起的命令。",-1),s("p",null,[n("这个协议被包装在我们的 "),s("code",null,"domotic.js"),n(" 模块中，模块暴露三个函数：")],-1),s("ul",null,[s("li",null,[s("p",null,[s("code",null,".connect()"),n(" - 连接 domotic 模块")])]),s("li",null,[s("p",null,[s("code",null,".command()"),n(" - 发送命令，等待响应")])]),s("li",null,[s("p",null,[s("code",null,".disconnect()"),n(" - 切断与模块的连接")])])],-1),s("p",null,"下面的代码模拟了这样一个模块：",-1),s("p",null,[s("strong",null,"domotic.js:")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"connect"),n(` = connect;  
`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"command"),n(` = command;  
`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"disconnect"),n(` = disconnect;

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"connect"),n("("),s("span",{class:"hljs-params"},"cb"),n(`) {  
  `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(cb, "),s("span",{class:"hljs-number"},"100"),n("); "),s("span",{class:"hljs-comment"},"// simulate connection"),n(`
}

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"command"),n("("),s("span",{class:"hljs-params"},"cmd, options, cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-title function_"},"succeeds"),n(`()) {
    `),s("span",{class:"hljs-built_in"},"setTimeout"),n("(cb, "),s("span",{class:"hljs-number"},"100"),n("); "),s("span",{class:"hljs-comment"},"// simulate command"),n(`
  } `),s("span",{class:"hljs-keyword"},"else"),n(` {
    `),s("span",{class:"hljs-built_in"},"setTimeout"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
      `),s("span",{class:"hljs-keyword"},"var"),n(" err = "),s("span",{class:"hljs-title class_"},"Error"),n("("),s("span",{class:"hljs-string"},"'error connecting'"),n(`);
      err.`),s("span",{class:"hljs-property"},"code"),n(" = "),s("span",{class:"hljs-string"},"'ECONN'"),n(`;
      `),s("span",{class:"hljs-title function_"},"cb"),n(`(err);
    }, `),s("span",{class:"hljs-number"},"100"),n(`);
  }

}

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"disconnect"),n("("),s("span",{class:"hljs-params"},"cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(" (cb) "),s("span",{class:"hljs-built_in"},"setTimeout"),n("(cb, "),s("span",{class:"hljs-number"},"100"),n("); "),s("span",{class:"hljs-comment"},"// simulate disconnection"),n(`
}

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"succeeds"),n("("),s("span",{class:"hljs-params"}),n(`) {  
  `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title class_"},"Math"),n("."),s("span",{class:"hljs-title function_"},"random"),n("() > "),s("span",{class:"hljs-number"},"0.5"),n(`;
} 
`)])],-1),s("blockquote",null,[s("p",null,"注意我们并没有和任何 domotic 模块交互；我们只是假装，100 毫秒后成功调用回调函数。"),s("p",null,[n("同样， "),s("code",null,".command"),n(" 函数模拟了连接错误： 如果 "),s("code",null,"succeeds()"),n(" 返回 "),s("code",null,"false"),n("，连接失败，命令失败，这有 50% 的可能性（我们的 domotic 串行连接很容易出错）。这使我们能够测试在发生失败之后，我们的应用是否会成功重连并重试命令。")])],-1),s("p",null,"然后我们新建另一个模块，可以在队列后面发出命令。",-1),s("p",null,[s("strong",null,"domotic_queue.js:")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(),s("span",{class:"hljs-keyword"},"async"),n(" = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'async'"),n(`);  
`),s("span",{class:"hljs-keyword"},"var"),n(),s("span",{class:"hljs-title class_"},"Backoff"),n(" = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'backoff'"),n(`);  
`),s("span",{class:"hljs-keyword"},"var"),n(" domotic = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'./domotic'"),n(`);

`),s("span",{class:"hljs-keyword"},"var"),n(" connected = "),s("span",{class:"hljs-literal"},"false"),n(`;

`),s("span",{class:"hljs-keyword"},"var"),n(" queue = "),s("span",{class:"hljs-keyword"},"async"),n("."),s("span",{class:"hljs-title function_"},"queue"),n("(work, "),s("span",{class:"hljs-number"},"1"),n(`);

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"work"),n("("),s("span",{class:"hljs-params"},"item, cb"),n(`) {  
  `),s("span",{class:"hljs-title function_"},"ensureConnected"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
    domotic.`),s("span",{class:"hljs-title function_"},"command"),n("(item."),s("span",{class:"hljs-property"},"command"),n(", item."),s("span",{class:"hljs-property"},"options"),n(`, callback);
  });

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"callback"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
    `),s("span",{class:"hljs-keyword"},"if"),n(" (err && err."),s("span",{class:"hljs-property"},"code"),n(" == "),s("span",{class:"hljs-string"},"'ECONN'"),n(`) {
      connected = `),s("span",{class:"hljs-literal"},"false"),n(`;
      `),s("span",{class:"hljs-title function_"},"work"),n(`(item);
    } `),s("span",{class:"hljs-keyword"},"else"),n(),s("span",{class:"hljs-title function_"},"cb"),n(`(err);
  }
}

`),s("span",{class:"hljs-comment"},"/// command"),n(`

`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"command"),n(` = pushCommand;

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"pushCommand"),n("("),s("span",{class:"hljs-params"},"command, options, cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"var"),n(` work = {
    `),s("span",{class:"hljs-attr"},"command"),n(`: command,
    `),s("span",{class:"hljs-attr"},"options"),n(`: options
  };

  `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'pushing command'"),n(`, work);

  queue.`),s("span",{class:"hljs-title function_"},"push"),n(`(work, cb);
}

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"ensureConnected"),n("("),s("span",{class:"hljs-params"},"cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(` (connected) {
    `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"cb"),n(`();
  } `),s("span",{class:"hljs-keyword"},"else"),n(` {
    `),s("span",{class:"hljs-keyword"},"var"),n(" backoff = "),s("span",{class:"hljs-title class_"},"Backoff"),n("."),s("span",{class:"hljs-title function_"},"fibonacci"),n(`();
    backoff.`),s("span",{class:"hljs-title function_"},"on"),n("("),s("span",{class:"hljs-string"},"'backoff'"),n(`, connect);
    backoff.`),s("span",{class:"hljs-title function_"},"backoff"),n(`();
  }

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"connect"),n("("),s("span",{class:"hljs-params"}),n(`) {
    domotic.`),s("span",{class:"hljs-title function_"},"connect"),n(`(connected);
  }

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"connected"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
    `),s("span",{class:"hljs-keyword"},"if"),n(` (err) {
      backoff.`),s("span",{class:"hljs-title function_"},"backoff"),n(`();
    } `),s("span",{class:"hljs-keyword"},"else"),n(` {
      connected = `),s("span",{class:"hljs-literal"},"true"),n(`;
      `),s("span",{class:"hljs-title function_"},"cb"),n(`();
    }
  }
}

`),s("span",{class:"hljs-comment"},"/// disconnect"),n(`

`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"disconnect"),n(` = disconnect;

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"disconnect"),n("("),s("span",{class:"hljs-params"}),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(" (! queue."),s("span",{class:"hljs-title function_"},"length"),n(`()) {
    domotic.`),s("span",{class:"hljs-title function_"},"disconnect"),n(`();
  } `),s("span",{class:"hljs-keyword"},"else"),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'waiting for the queue to drain before disonnecting'"),n(`);
    queue.`),s("span",{class:"hljs-property"},"drain"),n(" = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
      `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'disconnecting'"),n(`);
      domotic.`),s("span",{class:"hljs-title function_"},"disconnect"),n(`();
    };
  }
} 
`)])],-1),s("p",null,"做了不少工作 —— 我们来一段段地分析。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(),s("span",{class:"hljs-keyword"},"async"),n(" = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'async'"),n(`);  
`),s("span",{class:"hljs-keyword"},"var"),n(),s("span",{class:"hljs-title class_"},"Backoff"),n(" = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'backoff'"),n(`);  
`),s("span",{class:"hljs-keyword"},"var"),n(" domotic = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'./domotic'"),n(`); 
`)])],-1),s("p",null,"这里我们引入了一些包： ",-1),s("ul",null,[s("li",null,[s("p",null,[s("code",null,"async"),n(" - 提供内存队列的实现")])]),s("li",null,[s("p",null,[s("code",null,"backoff"),n(" - 让我们增加每一次失败后尝试重新连接的时间间隔")])]),s("li",null,[s("p",null,[s("code",null,"./domotic"),n(" - 模拟 domotic 的模块")])])],-1),s("p",null,"我们的模块从连接断开状态开始启动：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-string"},"`var connected = false;`"),n(` 
`)])],-1),s("p",null,"建立我们的 async 队列：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-string"},"`var queue = async.queue(work, 1);`"),n(` 
`)])],-1),s("p",null,[n("这里提供一个叫做 "),s("code",null,"worker"),n(" 的工作函数（在代码中进一步定义的）和一个最大并发量 1。我们在这里强制设置，是因为我们定义了 domotic 模块协议一次只允许一个命令。")],-1),s("p",null,[n("然后定义 "),s("code",null,"worker"),n(" 函数，它每次处理一个队列元素：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"work"),n("("),s("span",{class:"hljs-params"},"item, cb"),n(`) {  
  `),s("span",{class:"hljs-title function_"},"ensureConnected"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
    domotic.`),s("span",{class:"hljs-title function_"},"command"),n("(item."),s("span",{class:"hljs-property"},"command"),n(", item."),s("span",{class:"hljs-property"},"options"),n(`, callback);
  });

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"callback"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
    `),s("span",{class:"hljs-keyword"},"if"),n(" (err && err."),s("span",{class:"hljs-property"},"code"),n(" == "),s("span",{class:"hljs-string"},"'ECONN'"),n(`) {
      connected = `),s("span",{class:"hljs-literal"},"false"),n(`;
      `),s("span",{class:"hljs-title function_"},"work"),n(`(item);
    } `),s("span",{class:"hljs-keyword"},"else"),n(),s("span",{class:"hljs-title function_"},"cb"),n(`(err);
  }
} 
`)])],-1),s("p",null,[n("当我们的 "),s("code",null,"async"),n(" 队列加入另一个工作项目，会调用 "),s("code",null,"work"),n(" 函数，传递该工作项目和一个当工作完成时候为我们所调用的回调函数。")],-1),s("p",null,[n("对每个工作项目来说，我们要确认已经连接了。一旦连接上，使用工作项目中会有的 "),s("code",null,"command"),n(" 和 "),s("code",null,"options"),n(" 属性，来用 domotic 模块来执行命令。传的最后一次参数是一个回调函数，当命令成功或失败之后会立即被调用。")],-1),s("p",null,[n("回调函数中，我们明确地处理连接错误的情况，设置 "),s("code",null,"connected"),n(" 状态为 "),s("code",null,"false"),n("，并再次调用 "),s("code",null,"work"),n("重连。")],-1),s("p",null,[n("如果没有发生错误，调用回调函数 "),s("code",null,"cb"),n(" 结束当前工作项目。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"ensureConnected"),n("("),s("span",{class:"hljs-params"},"cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(` (connected) {
    `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"cb"),n(`();
  } `),s("span",{class:"hljs-keyword"},"else"),n(` {
    `),s("span",{class:"hljs-keyword"},"var"),n(" backoff = "),s("span",{class:"hljs-title class_"},"Backoff"),n("."),s("span",{class:"hljs-title function_"},"fibonacci"),n(`();
    backoff.`),s("span",{class:"hljs-title function_"},"on"),n("("),s("span",{class:"hljs-string"},"'backoff'"),n(`, connect);
    backoff.`),s("span",{class:"hljs-title function_"},"backoff"),n(`();
  }

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"connect"),n("("),s("span",{class:"hljs-params"}),n(`) {
    domotic.`),s("span",{class:"hljs-title function_"},"connect"),n(`(connected);
  }

  `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"connected"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
    `),s("span",{class:"hljs-keyword"},"if"),n(` (err) {
      backoff.`),s("span",{class:"hljs-title function_"},"backoff"),n(`();
    } `),s("span",{class:"hljs-keyword"},"else"),n(` {
      connected = `),s("span",{class:"hljs-literal"},"true"),n(`;
      `),s("span",{class:"hljs-title function_"},"cb"),n(`();
    }
  }
} 
`)])],-1),s("p",null,[s("code",null,"ensureConnected"),n(" 函数现在负责处于连接状态时调用回调或相反情况下尝试连接。尝试连接的时候，使用 "),s("code",null,"backoff"),n(" 增加每次重连的时间间隔。 每次 "),s("code",null,"domotic.connect"),n(" 函数带着错误被调用，在 "),s("code",null,"backoff"),n(" 事件触发之前增加间隔时间。触发 "),s("code",null,"backoff"),n(" 时，尝试连接。一旦连接成功，调用 "),s("code",null,"cb"),n(" 回调；否则保持重试。")],-1),s("p",null,[n("这个模块暴露一个 "),s("code",null,".command"),n(" 函数：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/// command"),n(`

`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"command"),n(` = pushCommand;

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"pushCommand"),n("("),s("span",{class:"hljs-params"},"command, options, cb"),n(`) {  
  `),s("span",{class:"hljs-keyword"},"var"),n(` work = {
    `),s("span",{class:"hljs-attr"},"command"),n(`: command,
    `),s("span",{class:"hljs-attr"},"options"),n(`: options
  };

  `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'pushing command'"),n(`, work);

  queue.`),s("span",{class:"hljs-title function_"},"push"),n(`(work, cb);
} 
`)])],-1),s("p",null,"这个命令简单的解析一个工作项目并将其推入队列。",-1),s("p",null,[n("最后，这个模块同样暴露出 "),s("code",null,".disconnect"),n(" 函数。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/// disconnect"),n(`

`),s("span",{class:"hljs-built_in"},"exports"),n("."),s("span",{class:"hljs-property"},"disconnect"),n(` = disconnect;

`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"disconnect"),n("("),s("span",{class:"hljs-params"}),n(`) {  
  `),s("span",{class:"hljs-keyword"},"if"),n(" (! queue."),s("span",{class:"hljs-title function_"},"length"),n(`()) {
    domotic.`),s("span",{class:"hljs-title function_"},"disconnect"),n(`();
  } `),s("span",{class:"hljs-keyword"},"else"),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'waiting for the queue to drain before disonnecting'"),n(`);
    queue.`),s("span",{class:"hljs-property"},"drain"),n(" = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`) {
      `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'disconnecting'"),n(`);
      domotic.`),s("span",{class:"hljs-title function_"},"disconnect"),n(`();
    };
  }
} 
`)])],-1),s("p",null,[n("这里我们只是确保在调用 domotic 模块的 "),s("code",null,"disconnected"),n(" 方法之前队列是空的。如果队列非空，在真正断开连接之前会等待其耗尽（drain）。")],-1),s("blockquote",null,[s("p",null,"可选：在队列未被耗尽的情况下，您可以设置一个超时时间，然后强制断开连接。")],-1),s("p",null,"然后我们来新建一个 domotic 客户端：",-1),s("p",null,[s("strong",null,"client.js:")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(" domotic = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'./domotic_queue'"),n(`);

`),s("span",{class:"hljs-keyword"},"for"),n("("),s("span",{class:"hljs-keyword"},"var"),n(" i = "),s("span",{class:"hljs-number"},"0"),n(" ; i < "),s("span",{class:"hljs-number"},"20"),n(`; i ++) {  
  domotic.`),s("span",{class:"hljs-title function_"},"command"),n("("),s("span",{class:"hljs-string"},"'toggle light'"),n(", i, "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
    `),s("span",{class:"hljs-keyword"},"if"),n(" (err) "),s("span",{class:"hljs-keyword"},"throw"),n(` err;
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'command finished'"),n(`);
  });
}

domotic.`),s("span",{class:"hljs-title function_"},"disconnect"),n(`(); 
`)])],-1),s("p",null,[n("这里我们并行得向 domotic 模块添加了 20 个 "),s("code",null,"settime"),n(" 命令，同时传递了回调函数，当命令完成时就会被调用。如果有命令出错，简单地抛出错误并中断执行。")],-1),s("p",null,"添加所有命令之后我们马上断开连接，不过模块会等待所有命令被执行之后才会真正将其断开。",-1),s("p",null,"让我们在命令行中试一下：",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n(`$ node client.js
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 0 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 1 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 2 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 3 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 4 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 5 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 6 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 7 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 8 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 9 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 10 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 11 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 12 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 13 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 14 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 15 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 16 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 17 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 18 }  
pushing `),s("span",{class:"hljs-built_in"},"command"),n(" { "),s("span",{class:"hljs-built_in"},"command"),n(": "),s("span",{class:"hljs-string"},"'toggle light'"),n(`, options: 19 }  
waiting `),s("span",{class:"hljs-keyword"},"for"),n(` the queue to drain before disonnecting  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
`),s("span",{class:"hljs-built_in"},"command"),n(` finished  
disconnecting 
`)])],-1),s("p",null,"这里我们可以看到，所有命令被立即放到队列中，并且命令是被一些随机时间间隔着有序完成的。最后，所有命令完成之后连接切断。",-1),s("h2",null,"下一篇文章",-1),s("p",null,"本系列的下一篇文章，我们将探索如何避免崩溃以及通过持久化工作项目来限制内存影响。",-1)])]),_:1})}}};export{j as default};
