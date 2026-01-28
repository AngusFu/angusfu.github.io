import{_ as e}from"./CaNb7KN_.js";import{c,w as r,o as p,a as s,b as a}from"./Du-K4N_a.js";const u={__name:"rxjs-http-timeout",setup(o){const n={title:"Angular 2 中的 HTTP 请求超时处理",description:"Angular 2 中的 HTTP 请求超时处理",keywords:"原创,笔记,RxJS,Angular 2",pathname:"rxjs-http-timeout",translation:null,create_time:"2017-01-16",prev:{title:"笔记：如何获取网站根域名",pathname:"get-root-domain-of-a-site"},next:{title:"关于时序攻击",pathname:"timing-atack"}};return(i,l)=>{const t=e;return p(),c(t,{data:n},{default:r(()=>[...l[0]||(l[0]=[s("p",null,[a("以前做 React Native 时，需要对请求进行超时处理。然而，React Native 提供的 "),s("code",null,"fetch"),a(" 方法，根本没有提供超时的选择。于是只能自己玩些如下的黑科技了，代码一看就很乱，还难以维护：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-variable constant_"},"TIME_OUT"),a(" = "),s("span",{class:"hljs-number"},"3000"),a(`;

`),s("span",{class:"hljs-keyword"},"let"),a(" reqErrror = "),s("span",{class:"hljs-literal"},"false"),a(`;
`),s("span",{class:"hljs-keyword"},"let"),a(" reqDone   = "),s("span",{class:"hljs-literal"},"false"),a(`;

`),s("span",{class:"hljs-keyword"},"let"),a(" timeout = "),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
  `),s("span",{class:"hljs-comment"},"// 超时错误"),a(`
  reqErrror = `),s("span",{class:"hljs-literal"},"true"),a(`;
  `),s("span",{class:"hljs-comment"},"// 标记本次请求结束"),a(`
  reqDone = `),s("span",{class:"hljs-literal"},"true"),a(`;
}, `),s("span",{class:"hljs-variable constant_"},"TIME_OUT"),a(`);

`),s("span",{class:"hljs-title function_"},"fetch"),a("("),s("span",{class:"hljs-string"},"'/api/test'"),a(`)
  .`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"res"),a(" =>")]),a(" res."),s("span",{class:"hljs-title function_"},"json"),a(`())
  .`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"data"),a(") =>")]),a(` {
    `),s("span",{class:"hljs-built_in"},"clearTimeout"),a(`(timeout);
    `),s("span",{class:"hljs-comment"},"// 没有错误发生"),a(`
    reqErrror = `),s("span",{class:"hljs-literal"},"false"),a(`;
    `),s("span",{class:"hljs-comment"},"// 标记本次请求结束"),a(`
    reqDone = `),s("span",{class:"hljs-literal"},"true"),a(`;
    `),s("span",{class:"hljs-comment"},"// ..."),a(`
  })
  .`),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"e"),a(") =>")]),a(` {
    `),s("span",{class:"hljs-built_in"},"clearTimeout"),a(`(timeout);

    `),s("span",{class:"hljs-comment"},"// 发生某种错误"),a(`
    reqErrror = `),s("span",{class:"hljs-literal"},"true"),a(`;
    `),s("span",{class:"hljs-comment"},"// 标记本次请求结束"),a(`
    reqDone = `),s("span",{class:"hljs-literal"},"true"),a(`;

    `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"error"),a(`(e);
  });
`)])],-1),s("p",null,"那会儿刚开始接触，团队的几个人对 ES6 这些东西基本处在一种边学边用的状态，所以上面的方法在当时解决了问题，也还不错。后来离开项目，也许至今还在保留着这种方式吧。唉，当初的代码写得是有多乱啊，竟然都不会封装一下囧。",-1),s("p",null,"简单改写之后的代码如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" fetchWithTimeout = "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"},[a("url = "),s("span",{class:"hljs-string"},"''"),a(", option = {}, timeout")]),a(`) {
  `),s("span",{class:"hljs-keyword"},"if"),a(` (!timeout) {
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title function_"},"fetch"),a(`(url, option);
  }

  `),s("span",{class:"hljs-keyword"},"let"),a(" timeout = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"resolve, reject"),a(`) {
    `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
      `),s("span",{class:"hljs-keyword"},"let"),a(" err = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Error"),a("("),s("span",{class:"hljs-string"},"'timeout'"),a(`);
      `),s("span",{class:"hljs-title function_"},"reject"),a(`(err);
    }, timeout);
  });

  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"race"),a(`([
    timeout,
    `),s("span",{class:"hljs-title function_"},"fetch"),a("(url, option)."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"res"),a(" =>")]),a(" res."),s("span",{class:"hljs-title function_"},"json"),a(`())
  ]);
};

`),s("span",{class:"hljs-title function_"},"fetchWithTimeout"),a("("),s("span",{class:"hljs-string"},"'/api/test'"),a(", {}, "),s("span",{class:"hljs-variable constant_"},"TIME_OUT"),a(`)
  .`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"res"),a(" =>")]),a(" res."),s("span",{class:"hljs-title function_"},"json"),a(`())
  .`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"data"),a(" =>")]),a(` {
    `),s("span",{class:"hljs-comment"},"// ..."),a(`
  })
  .`),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),a(" =>")]),a(` {
    `),s("span",{class:"hljs-comment"},"// ..."),a(`
  });
`)])],-1),s("p",null,"好了，言归正传，其实这次我是要记录 Angular 2 中的 http 超时处理的，事情缘由不再赘述，和前面差不多。",-1),s("p",null,[a("同样我想到了 "),s("code",null,"race"),a("。 不过在 stackoverflow 中有人提过这个问题，是用 "),s("code",null,"timeout"),a(" 操作符，但我使用的时候遇到了一些问题。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Observable"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'rxjs/Observable'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'rxjs/add/observable/of'"),a(`;

`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'rxjs/add/operator/race'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'rxjs/add/operator/delay'"),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-variable constant_"},"TIME_OUT"),a(" = "),s("span",{class:"hljs-number"},"3000"),a(`;

`),s("span",{class:"hljs-comment"},"// ..."),a(`
`),s("span",{class:"hljs-keyword"},"let"),a(" cancel$ = "),s("span",{class:"hljs-title class_"},"Observable"),a("."),s("span",{class:"hljs-title function_"},"of"),a("("),s("span",{class:"hljs-literal"},"null"),a(")."),s("span",{class:"hljs-title function_"},"delay"),a("("),s("span",{class:"hljs-variable constant_"},"TIME_OUT"),a(`);

`),s("span",{class:"hljs-keyword"},"let"),a(" request$ = "),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-property"},"http"),a("."),s("span",{class:"hljs-title function_"},"get"),a(`(url)
  .`),s("span",{class:"hljs-title function_"},"map"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"res"),a(" =>")]),a(" res."),s("span",{class:"hljs-title function_"},"json"),a(`())
  .`),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),a(" =>")]),a(),s("span",{class:"hljs-title class_"},"Observable"),a("."),s("span",{class:"hljs-title function_"},"of"),a(`(e));

`),s("span",{class:"hljs-keyword"},"let"),a(" unsubscribe = request$."),s("span",{class:"hljs-title function_"},"race"),a("(cancel$)."),s("span",{class:"hljs-title function_"},"subscribe"),a(`(
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"data"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(data),
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a("  =>")]),a(" consoel."),s("span",{class:"hljs-title function_"},"error"),a(`(err),
  `),s("span",{class:"hljs-function"},"()   =>"),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'complete'"),a(`);
);
`),s("span",{class:"hljs-comment"},"// ..."),a(`
`)])],-1),s("p",null,"暂且记录成这样吧，有空再补充。",-1)])]),_:1})}}};export{u as default};
