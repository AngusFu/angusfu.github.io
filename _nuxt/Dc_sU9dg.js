import{_ as o}from"./Dob-N6Pb.js";import{_ as p}from"./CaNb7KN_.js";import{c,w as r,o as i,a as s,b as n,l as h}from"./Du-K4N_a.js";import"./B0DNxzf8.js";const y={__name:"cache-fetched-ajax-requests",setup(j){const a={title:"[译] Fetch 请求的本地缓存",description:"Fetch 请求的本地缓存",keywords:"翻译,JavaScript,优化,缓存",pathname:"cache-fetched-ajax-requests",translation:{author:"Peter Bengtsson",social:"https://twitter.com/peterbe",from:"https://www.sitepoint.com/cache-fetched-ajax-requests/"},create_time:"2016-08-27",prev:{title:"[译] 渐进增强的键盘导航",pathname:"better-keyboard-navigation-with-progressive-enhancement"},next:{title:"[译] 渐进式 Web App 的离线存储",pathname:"offline-storage-for-progressive-web-apps"}};return(u,l)=>{const t=o,e=p;return i(),c(e,{data:a},{default:r(()=>[l[0]||(l[0]=s("p",null,[s("strong",null,"本文展示了如何使用实现 fetch 请求的本地缓存"),n("，遇到重复请求时，将会从 sessionStorage 中读取数据。这样做的好处是，无需为每个需要缓存的资源编写自定义代码。")],-1)),l[1]||(l[1]=s("p",null,"如果你想在 JavaScript 盛会中露露脸，秀秀如何玩转 Promise、最前沿的 API 和 localStorage，那就接着往下看吧。",-1)),l[2]||(l[2]=s("h2",null,"Fetch API",-1)),l[3]||(l[3]=s("p",null,[n("此时此刻，你对 "),s("a",{href:"https://www.sitepoint.com/introduction-to-the-fetch-api/",target:"_blank",rel:"noopener"},"fetch"),n(" 可能已经很熟悉了。它是浏览器提供的用以替代旧版的"),s("code",null,"XMLHttpRequest"),n("的原生 API。")],-1)),s("p",null,[h(t,{src:"/caniuse/embed.html?feat=fetch&periods=future_1,current,past_1,past_2"})]),l[4]||(l[4]=s("p",null,[n("并非所有浏览器都完美支持 fetch，但你可以使用 "),s("a",{href:"https://github.com/github/fetch",target:"_blank",rel:"noopener"},"GitHub 上的 fetch polyfill"),n("（如果没事做，可以看看 "),s("a",{href:"https://fetch.spec.whatwg.org/",target:"_blank",rel:"noopener"},"Fetch 标准"),n("）。")],-1)),l[5]||(l[5]=s("h2",null,"原始替代版本",-1)),l[6]||(l[6]=s("p",null,"做个假设，我们准确了解需要下载的那个资源，并且只想下载一次。可以使用全局变量作为缓存，像下面这样：",-1)),l[7]||(l[7]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"let"),n(" origin = "),s("span",{class:"hljs-literal"},"null"),n(`
`),s("span",{class:"hljs-title function_"},"fetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"information"),n(" =>")]),n(` {
    origin = information.`),s("span",{class:"hljs-property"},"origin"),n("  "),s("span",{class:"hljs-comment"},"// your client's IP"),n(`
  })

`),s("span",{class:"hljs-comment"},"// 需要延时以确保 fetch 完成"),n(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),n("("),s("span",{class:"hljs-function"},"() =>"),n(` {
  `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(` + origin)
}, `),s("span",{class:"hljs-number"},"3000"),n(`)
`)])],-1)),l[8]||(l[8]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/QEPEpB?editors=0010#0",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[9]||(l[9]=s("p",null,"上面使用了全局变量来保存缓存的数据。马上可以发现问题，一旦刷新页面或者跳转到其他页面，缓存的数据就消失了。",-1)),l[10]||(l[10]=s("p",null,"在剖析这个办法的短板之前，先将解决方案升级下。",-1)),l[11]||(l[11]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"fetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"sessionStorage"),n("."),s("span",{class:"hljs-title function_"},"setItem"),n("("),s("span",{class:"hljs-string"},"'information'"),n(", "),s("span",{class:"hljs-title class_"},"JSON"),n("."),s("span",{class:"hljs-title function_"},"stringify"),n(`(info))
  })

`),s("span",{class:"hljs-comment"},"// 需要延时以确保 fetch 完成"),n(`
`),s("span",{class:"hljs-built_in"},"setTimeout"),n("("),s("span",{class:"hljs-function"},"() =>"),n(` {
  `),s("span",{class:"hljs-keyword"},"let"),n(" info = "),s("span",{class:"hljs-title class_"},"JSON"),n("."),s("span",{class:"hljs-title function_"},"parse"),n("("),s("span",{class:"hljs-variable language_"},"sessionStorage"),n("."),s("span",{class:"hljs-title function_"},"getItem"),n("("),s("span",{class:"hljs-string"},"'information'"),n(`))
  `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
}, `),s("span",{class:"hljs-number"},"3000"),n(`)
`)])],-1)),l[12]||(l[12]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/zBXBwg?editors=0010#0",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[13]||(l[13]=s("p",null,[n("第一个问题是，"),s("code",null,"fetch"),n(" 是基于 Promise 的，意味着我们无法准确知晓 fetch 何时完成，因此在 fetch 完成之前，我们不能依赖它的执行。")],-1)),l[14]||(l[14]=s("p",null,[n("第二个问题是，该解决方案详细指定了 URL 和缓存的内容（本例中的 "),s("code",null,"information"),n("）。我们需要一个基于 URL 的通用解决方案。")],-1)),l[15]||(l[15]=s("h2",null,"第一次的简单实现",-1)),l[16]||(l[16]=s("p",null,[n("在 "),s("code",null,"fetch"),n("外面再包装一层，同样也返回 Promise。调用该方法时，我们并不关心结果是来源于网络还是本地缓存。")],-1)),l[17]||(l[17]=s("p",null,"之前你可能是这样做的：",-1)),l[18]||(l[18]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"fetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"issues"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })
`)])],-1)),l[19]||(l[19]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/pbBbwQ?editors=0011",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[20]||(l[20]=s("p",null,[n("现在加上一层包装，重复的网络请求可以通过本地缓存进行优化。我们将这个包装过的方法简单称作 "),s("code",null,"cachedFetch"),n("，代码如下：")],-1)),l[21]||(l[21]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })
`)])],-1)),l[22]||(l[22]=s("p",null,"该方法首次运行的时候，需要发出网络请求，并将结果缓存下来。第二次请求时，则会直接从本地存储中取出数据。",-1)),l[23]||(l[23]=s("p",null,[n("首先试试简单地将 "),s("code",null,"fetch"),n(" 包装下：")],-1)),l[24]||(l[24]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"cachedFetch"),n(" = ("),s("span",{class:"hljs-params"},"url, options"),n(`) => {
  `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"fetch"),n(`(url, options)
}
`)])],-1)),l[25]||(l[25]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/kXmXwm?editors=0010#0",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[26]||(l[26]=s("p",null,[n("这当然能工作，不过没什么用。接下来，来实现获取数据的"),s("strong",null,"存储"),n("。")],-1)),l[27]||(l[27]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"cachedFetch"),n(" = ("),s("span",{class:"hljs-params"},"url, options"),n(`) => {
  `),s("span",{class:"hljs-comment"},"// 将 URL 作为 sessionStorage 的 key"),n(`
  `),s("span",{class:"hljs-keyword"},"let"),n(` cacheKey = url
  `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"fetch"),n("(url, options)."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"response"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-comment"},"// 仅在结果为 JSON 或其他非二进制数据情况下缓存结果"),n(`
    `),s("span",{class:"hljs-keyword"},"let"),n(" ct = response."),s("span",{class:"hljs-property"},"headers"),n("."),s("span",{class:"hljs-title function_"},"get"),n("("),s("span",{class:"hljs-string"},"'Content-Type'"),n(`)
    `),s("span",{class:"hljs-keyword"},"if"),n(" (ct && (ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/application\\/json/i"),n(") || ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/text\\//i"),n(`))) {
      `),s("span",{class:"hljs-comment"},"// 当然，除了 .text()，也有 .json() 方法"),n(`
      `),s("span",{class:"hljs-comment"},"// 不过结果最终还是会以字符串形式存在 sessionStorage 中"),n(`
      `),s("span",{class:"hljs-comment"},"// 如果不克隆 response，在其返回时就会被使用"),n(`
      `),s("span",{class:"hljs-comment"},"// 这里用这种方式，保持非入侵性"),n(`
      response.`),s("span",{class:"hljs-title function_"},"clone"),n("()."),s("span",{class:"hljs-title function_"},"text"),n("()."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"content"),n(" =>")]),n(` {
        `),s("span",{class:"hljs-variable language_"},"sessionStorage"),n("."),s("span",{class:"hljs-title function_"},"setItem"),n(`(cacheKey, content)
      })
    }
    `),s("span",{class:"hljs-keyword"},"return"),n(` response
  })
}
`)])],-1)),l[28]||(l[28]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/yJAJok?editors=0012",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[29]||(l[29]=s("p",null,"上面发生了不少事。",-1)),l[30]||(l[30]=s("p",null,[s("code",null,"fetch"),n(" 所返回的首个 Promise 实际上还是径直发出了 GET 请求。注意如果有 CORS（Cross-Origin Resource Sharing，跨域资源共享）的问题，"),s("code",null,".text()"),n("、"),s("code",null,".json()"),n(" 、"),s("code",null,".blob()"),n(" 这些方法不会工作。")],-1)),l[31]||(l[31]=s("p",null,[n("最有意思的点在于，我们需要"),s("em",null,"克隆"),n("首个 Promise 返回的 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response/clone",target:"_blank",rel:"noopener"},"Response"),n(" 对象。如果不这样做，我们就介入过多，当该 Promise 的最终使用者调用如 "),s("code",null,".json()"),n(" 这些方法时，会得到如下错误：")],-1)),l[32]||(l[32]=s("pre",null,[s("code",null,`TypeError: Body has already been consumed.
`)],-1)),l[33]||(l[33]=s("p",null,[n("另外需要注意的一点是，需要注意响应类型：我们只存储状态码为 "),s("code",null,"200"),n(),s("em",null,"且"),n("内容类型为 "),s("code",null,"application/json"),n(" 或 "),s("code",null,"text/*"),n("的响应。因为 "),s("code",null,"sessionStorage"),n(" 只能存储文本数据。")],-1)),l[34]||(l[34]=s("p",null,"下面是使用示例：",-1)),l[35]||(l[35]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })

`),s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/html'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"text"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"document"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Document has '"),n(" + "),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/<p>/"),n(")."),s("span",{class:"hljs-property"},"length"),n(" + "),s("span",{class:"hljs-string"},"' paragraphs'"),n(`)
  })

`),s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/image/png'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"blob"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"image"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Image is '"),n(" + image."),s("span",{class:"hljs-property"},"size"),n(" + "),s("span",{class:"hljs-string"},"' bytes'"),n(`)
  })
`)])],-1)),l[36]||(l[36]=s("p",null,[n("让人喜欢的是，这个解决方案到目前为止可以正常工作，也不会干扰 JSON "),s("em",null,"与"),n(" HTML 请求。当数据为图片的时候，它也不会试图将其存在 "),s("code",null,"sessionStorage"),n(" 中。")],-1)),l[37]||(l[37]=s("h2",null,"真实返回命中缓存的第二次实现",-1)),l[38]||(l[38]=s("p",null,[n("我们的第一次实现，仅仅只关心响应结果的"),s("strong",null,"存储"),n("。当你第二次调用 "),s("code",null,"cachedFetch"),n(" 时，并未试着从 "),s("code",null,"sessionStorage"),n(" 中"),s("em",null,"检索"),n("任何内容。我们要做的，首先是返回一个 Promise，它需要返回一个 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response/Response",target:"_blank",rel:"noopener"},"Response 对象"),n("。")],-1)),l[39]||(l[39]=s("p",null,"先看下最基本的实现：",-1)),l[40]||(l[40]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"cachedFetch"),n(" = ("),s("span",{class:"hljs-params"},"url, options"),n(`) => {
  `),s("span",{class:"hljs-comment"},"// 将 URL 作为 sessionStorage 的 key"),n(`
  `),s("span",{class:"hljs-keyword"},"let"),n(` cacheKey = url

  `),s("span",{class:"hljs-comment"},"// 命中缓存的新代码开始"),n(`
  `),s("span",{class:"hljs-keyword"},"let"),n(" cached = "),s("span",{class:"hljs-variable language_"},"sessionStorage"),n("."),s("span",{class:"hljs-title function_"},"getItem"),n(`(cacheKey)
  `),s("span",{class:"hljs-keyword"},"if"),n(" (cached !== "),s("span",{class:"hljs-literal"},"null"),n(`) {
    `),s("span",{class:"hljs-comment"},"// it was in sessionStorage! Yay!"),n(`
    `),s("span",{class:"hljs-keyword"},"let"),n(" response = "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"Response"),n("("),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"Blob"),n(`([cached]))
    `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title class_"},"Promise"),n("."),s("span",{class:"hljs-title function_"},"resolve"),n(`(response)
  }
  `),s("span",{class:"hljs-comment"},"// 命中缓存的新代码结束"),n(`

  `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"fetch"),n("(url, options)."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"response"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-comment"},"// 仅在结果为 JSON 或其他非二进制数据情况下缓存结果"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(" (response."),s("span",{class:"hljs-property"},"status"),n(" === "),s("span",{class:"hljs-number"},"200"),n(`) {
      `),s("span",{class:"hljs-keyword"},"let"),n(" ct = response."),s("span",{class:"hljs-property"},"headers"),n("."),s("span",{class:"hljs-title function_"},"get"),n("("),s("span",{class:"hljs-string"},"'Content-Type'"),n(`)
      `),s("span",{class:"hljs-keyword"},"if"),n(" (ct && (ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/application\\/json/i"),n(") || ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/text\\//i"),n(`))) {
        `),s("span",{class:"hljs-comment"},"// 当然，除了 .text()，也有 .json() 方法"),n(`
        `),s("span",{class:"hljs-comment"},"// 不过结果最终还是会以字符串形式存在 sessionStorage 中"),n(`
        `),s("span",{class:"hljs-comment"},"// 如果不克隆 response，在其返回时就会被使用"),n(`
        `),s("span",{class:"hljs-comment"},"// 这里用这种方式，保持非入侵性"),n(`
        response.`),s("span",{class:"hljs-title function_"},"clone"),n("()."),s("span",{class:"hljs-title function_"},"text"),n("()."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"content"),n(" =>")]),n(` {
          `),s("span",{class:"hljs-variable language_"},"sessionStorage"),n("."),s("span",{class:"hljs-title function_"},"setItem"),n(`(cacheKey, content)
        })
      }
    }
    `),s("span",{class:"hljs-keyword"},"return"),n(` response
  })
}
`)])],-1)),l[41]||(l[41]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/qNwNPb?editors=0012",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[42]||(l[42]=s("p",null,"这已经可以工作了！",-1)),l[43]||(l[43]=s("p",null,[n("打开 "),s("a",{href:"http://codepen.io/SitePoint/pen/qNwNPb?editors=0012",target:"_blank",rel:"noopener"},"CodePen"),n(" 查看上面代码的实际效果，记得开启浏览器开发者工具中的 Network tab。多点几次 “Run” 按钮（CodePen 的右上角），可以发现，只有图片被反复请求。")],-1)),l[44]||(l[44]=s("p",null,[n("本解决方案的好处是避免了“意面式回调”（callback spaghetti）。"),s("code",null,"sessionStorage.getItem"),n(" 的调用是同步的（也就是阻塞的），所以在 Promise 或者回调中无需应对“它在本地存储中是否存在？”这种问题。只要有内容，就返回缓存结果。否则就按正常逻辑执行。")],-1)),l[45]||(l[45]=s("h2",null,"考虑失效时间的第三次实现",-1)),l[46]||(l[46]=s("p",null,[n("到目前为止我们一直在使用 "),s("code",null,"sessionStorage"),n("，它有点像 "),s("code",null,"localStorage"),n("，除了在"),s("strong",null,"打开新页面"),n("时会被清除这一点。这意味着我们在使用一种“自然形式”，内容不会缓存很久。如果要使用 "),s("code",null,"localStorage"),n(" 来缓存内容，那就算远程内容改变了，浏览器还是会“永远”卡在本地内容。这太糟糕了。")],-1)),l[47]||(l[47]=s("p",null,[n("更好的解决办法是提供"),s("em",null,"用户"),n("控制。（这里的用户指的是使用 "),s("code",null,"cachedFetch"),n(" 函数的 Web 开发者。）就像 Memcached 或 Redis 这些服务端存储一样，我们可以指定缓存的使用期。")],-1)),l[48]||(l[48]=s("p",null,"例如在 Python (with Flask) 中：",-1)),l[49]||(l[49]=s("pre",null,[s("code",{class:"hljs lang-bash"},[n(`>>> from werkzeug.contrib.cache import MemcachedCache
>>> cache = MemcachedCache([`),s("span",{class:"hljs-string"},"'127.0.0.1:11211'"),n(`])
>>> cache.set(`),s("span",{class:"hljs-string"},"'key'"),n(", "),s("span",{class:"hljs-string"},"'value'"),n(`, 10)
True
>>> cache.get(`),s("span",{class:"hljs-string"},"'key'"),n(`)
`),s("span",{class:"hljs-string"},"'value'"),n(`
>>> `),s("span",{class:"hljs-comment"},"# waiting 10 seconds"),n(`
...
>>> cache.get(`),s("span",{class:"hljs-string"},"'key'"),n(`)
>>>
`)])],-1)),l[50]||(l[50]=s("p",null,[n("对此，目前 "),s("code",null,"sessionStorage"),n(" 和 "),s("code",null,"localStorage"),n(" 都没有内建的功能实现，所以需要自己手动来实现。通过对比存储与缓存命中时的时间戳，可以达成目的。")],-1)),l[51]||(l[51]=s("p",null,"在此之前，先看看大概应该长什么样子：",-1)),l[52]||(l[52]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 使用默认过期时间，如 5 min"),n(`
`),s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })

`),s("span",{class:"hljs-comment"},"// 传递以秒为单位的数值"),n(`
`),s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(", "),s("span",{class:"hljs-number"},"2"),n(" * "),s("span",{class:"hljs-number"},"60"),n(")  "),s("span",{class:"hljs-comment"},"// 2 min"),n(`
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })

`),s("span",{class:"hljs-comment"},"// 和  fetch 选项放在一起，使用自定义的名字"),n(`
`),s("span",{class:"hljs-keyword"},"let"),n(` init = {
  `),s("span",{class:"hljs-attr"},"mode"),n(": "),s("span",{class:"hljs-string"},"'same-origin'"),n(`,
  `),s("span",{class:"hljs-attr"},"seconds"),n(": "),s("span",{class:"hljs-number"},"3"),n(" * "),s("span",{class:"hljs-number"},"60"),n(),s("span",{class:"hljs-comment"},"// 3 min"),n(`
}
`),s("span",{class:"hljs-title function_"},"cachedFetch"),n("("),s("span",{class:"hljs-string"},"'https://httpbin.org/get'"),n(`, init)
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),n(" =>")]),n(" r."),s("span",{class:"hljs-title function_"},"json"),n(`())
  .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"info"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},"'Your origin is '"),n(" + info."),s("span",{class:"hljs-property"},"origin"),n(`)
  })
`)])],-1)),l[53]||(l[53]=s("p",null,[n("最重要的来了，每次保存响应数据的时候，"),s("em",null,"也"),n("需要记录"),s("em",null,"何时"),n("存储的。现在我们也可以切换到 "),s("code",null,"localStorage"),n(" 上了。代码会保证我们不会命中过期的缓存，在 "),s("code",null,"localStorage"),n(" 中内容原本是持久化的。")],-1)),l[54]||(l[54]=s("p",null,"下面是最终的解决方案：",-1)),l[55]||(l[55]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"cachedFetch"),n(" = ("),s("span",{class:"hljs-params"},"url, options"),n(`) => {
  `),s("span",{class:"hljs-keyword"},"let"),n(" expiry = "),s("span",{class:"hljs-number"},"5"),n(" * "),s("span",{class:"hljs-number"},"60"),n(),s("span",{class:"hljs-comment"},"// 默认 5 min"),n(`
  `),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-keyword"},"typeof"),n(" options === "),s("span",{class:"hljs-string"},"'number'"),n(`) {
    expiry = options
    options = `),s("span",{class:"hljs-literal"},"undefined"),n(`
  } `),s("span",{class:"hljs-keyword"},"else"),n(),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-keyword"},"typeof"),n(" options === "),s("span",{class:"hljs-string"},"'object'"),n(`) {
    `),s("span",{class:"hljs-comment"},"// 但愿你别设置为 0"),n(`
    expiry = options.`),s("span",{class:"hljs-property"},"seconds"),n(` || expiry
  }
  `),s("span",{class:"hljs-comment"},"// 将 URL 作为 localStorage 的 key"),n(`
  `),s("span",{class:"hljs-keyword"},"let"),n(` cacheKey = url
  `),s("span",{class:"hljs-keyword"},"let"),n(" cached = "),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"getItem"),n(`(cacheKey)
  `),s("span",{class:"hljs-keyword"},"let"),n(" whenCached = "),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"getItem"),n("(cacheKey + "),s("span",{class:"hljs-string"},"':ts'"),n(`)
  `),s("span",{class:"hljs-keyword"},"if"),n(" (cached !== "),s("span",{class:"hljs-literal"},"null"),n(" && whenCached !== "),s("span",{class:"hljs-literal"},"null"),n(`) {
    `),s("span",{class:"hljs-comment"},"// 耶！ 它在 localStorage 中"),n(`
    `),s("span",{class:"hljs-comment"},"// 尽管 'whenCached' 是字符串"),n(`
    `),s("span",{class:"hljs-comment"},"// 但减号运算符会将其转换为数字"),n(`
    `),s("span",{class:"hljs-keyword"},"let"),n(" age = ("),s("span",{class:"hljs-title class_"},"Date"),n("."),s("span",{class:"hljs-title function_"},"now"),n("() - whenCached) / "),s("span",{class:"hljs-number"},"1000"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(` (age < expiry) {
      `),s("span",{class:"hljs-keyword"},"let"),n(" response = "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"Response"),n("("),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"Blob"),n(`([cached]))
      `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title class_"},"Promise"),n("."),s("span",{class:"hljs-title function_"},"resolve"),n(`(response)
    } `),s("span",{class:"hljs-keyword"},"else"),n(` {
      `),s("span",{class:"hljs-comment"},"// 清除旧值"),n(`
      `),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"removeItem"),n(`(cacheKey)
      `),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"removeItem"),n("(cacheKey + "),s("span",{class:"hljs-string"},"':ts'"),n(`)
    }
  }

  `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title function_"},"fetch"),n("(url, options)."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"response"),n(" =>")]),n(` {
    `),s("span",{class:"hljs-comment"},"// 仅在结果为 JSON 或其他非二进制数据情况下缓存结果"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(" (response."),s("span",{class:"hljs-property"},"status"),n(" === "),s("span",{class:"hljs-number"},"200"),n(`) {
      `),s("span",{class:"hljs-keyword"},"let"),n(" ct = response."),s("span",{class:"hljs-property"},"headers"),n("."),s("span",{class:"hljs-title function_"},"get"),n("("),s("span",{class:"hljs-string"},"'Content-Type'"),n(`)
      `),s("span",{class:"hljs-keyword"},"if"),n(" (ct && (ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/application\\/json/i"),n(") || ct."),s("span",{class:"hljs-title function_"},"match"),n("("),s("span",{class:"hljs-regexp"},"/text\\//i"),n(`))) {
        `),s("span",{class:"hljs-comment"},"// 当然，除了 .text()，也有 .json() 方法"),n(`
        `),s("span",{class:"hljs-comment"},"// 不过结果最终还是会以字符串形式存在 sessionStorage 中"),n(`
        `),s("span",{class:"hljs-comment"},"// 如果不克隆 response，在其返回时就会被使用"),n(`
        `),s("span",{class:"hljs-comment"},"// 这里用这种方式，保持非入侵性"),n(`
        response.`),s("span",{class:"hljs-title function_"},"clone"),n("()."),s("span",{class:"hljs-title function_"},"text"),n("()."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"content"),n(" =>")]),n(` {
          `),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"setItem"),n(`(cacheKey, content)
          `),s("span",{class:"hljs-variable language_"},"localStorage"),n("."),s("span",{class:"hljs-title function_"},"setItem"),n("(cacheKey+"),s("span",{class:"hljs-string"},"':ts'"),n(", "),s("span",{class:"hljs-title class_"},"Date"),n("."),s("span",{class:"hljs-title function_"},"now"),n(`())
        })
      }
    }
    `),s("span",{class:"hljs-keyword"},"return"),n(` response
  })
} 
`)])],-1)),l[56]||(l[56]=s("p",null,[s("a",{href:"http://codepen.io/SitePoint/pen/KrYrXA?editors=0012",target:"_blank",rel:"noopener"},"On CodePen")],-1)),l[57]||(l[57]=s("h2",null,"未来更好、更理想、更酷的实现",-1)),l[58]||(l[58]=s("p",null,[n("我们在避免过度变动 Web API，最棒的是 "),s("code",null,"localStorage"),n(" 可比依赖网络快得多了。看看这篇文章对 "),s("code",null,"localStorage"),n(" 和 XHR 的比较： "),s("a",{href:"https://www.peterbe.com/plog/localforage-vs.-xhr",target:"_blank",rel:"noopener"},"localForage vs. XHR"),n("。它还衡量了其他内容，但得出基本结论，"),s("code",null,"localStorage"),n(" 确实很快，磁盘缓存热身（disk-cache warm-ups，？不知如何翻译，请读者赐教）也很少出现。")],-1)),l[59]||(l[59]=s("p",null,"接下来，我们还能怎样改进方案呢？",-1)),l[60]||(l[60]=s("h3",null,"处理二进制响应",-1)),l[61]||(l[61]=s("p",null,[n("我们的实现没有考虑缓存非文本的内容，如图片等等，但这并非不可能。需要一些更多的代码。特别的，我们可能想存储更多关于 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",target:"_blank",rel:"noopener"},"Blob"),n(" 的信息。从根本上说，所有响应都是 Blob。对文本和 JSON 来说，它只是字符串数组，"),s("code",null,"type"),n(" 和 "),s("code",null,"size"),n(" 并不真正那么重要，因为从字符串本身就能识别出来。对二进制内容而言，需要将它们转换为 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",target:"_blank",rel:"noopener"},"ArrayBuffer"),n("。")],-1)),l[62]||(l[62]=s("p",null,[n("关注更多内容，请看 "),s("a",{href:"http://codepen.io/SitePoint/pen/XKQKZv?editors=1010#0",target:"_blank",rel:"noopener"},"CodePen"),n(" 上支持图片的实现。")],-1)),l[63]||(l[63]=s("h3",null,"使用哈希键值缓存",-1)),l[64]||(l[64]=s("p",null,[n("另外一点潜在的优化点是对用作 key 的每个 URL 进行哈希处理，使其变得更小，以空间换取速度（trade space for speed）。在上面的例子中，我们使用了很多非常短小整洁的 URL（如 "),s("code",null,"https://httpbin.org/get"),n("），但如果你使用了大量的带有很多查询字符串的长 URL，这样做就很有意义了。")],-1)),l[65]||(l[65]=s("p",null,[n("办法之一是使用"),s("a",{href:"http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/",target:"_blank",rel:"noopener"},"这个不错的算法"),n("，以其安全快速而知名：")],-1)),l[66]||(l[66]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"hashstr"),n(` = s => {
  `),s("span",{class:"hljs-keyword"},"let"),n(" hash = "),s("span",{class:"hljs-number"},"0"),n(`;
  `),s("span",{class:"hljs-keyword"},"if"),n(" (s."),s("span",{class:"hljs-property"},"length"),n(" == "),s("span",{class:"hljs-number"},"0"),n(") "),s("span",{class:"hljs-keyword"},"return"),n(` hash;
  `),s("span",{class:"hljs-keyword"},"for"),n(" ("),s("span",{class:"hljs-keyword"},"let"),n(" i = "),s("span",{class:"hljs-number"},"0"),n("; i < s."),s("span",{class:"hljs-property"},"length"),n(`; i++) {
    `),s("span",{class:"hljs-keyword"},"let"),n(" char = s."),s("span",{class:"hljs-title function_"},"charCodeAt"),n(`(i);
    hash = ((hash<<`),s("span",{class:"hljs-number"},"5"),n(`)-hash)+char;
    hash = hash & hash; `),s("span",{class:"hljs-comment"},"// Convert to 32bit integer"),n(`
  }
  `),s("span",{class:"hljs-keyword"},"return"),n(` hash;
}
`)])],-1)),l[67]||(l[67]=s("p",null,[n("如果觉得这个不错，看下 "),s("a",{href:"http://codepen.io/SitePoint/pen/LkvkON?editors=0012",target:"_blank",rel:"noopener"},"CodePen"),n("。在控制台上可以看到类似 "),s("code",null,"557027443"),n(" 这样的 key 值。")],-1)),l[68]||(l[68]=s("h2",null,"结语",-1)),l[69]||(l[69]=s("p",null,"现在我们拥有了一个可以使用在 web app 中的工作方案了，我们使用 Web API，并且知晓响应结果会很好地为用户缓存下来。",-1)),l[70]||(l[70]=s("p",null,[n("最后一件事大概是这个扩展置于本文之外，将其作为一个真实、具体的项目，加上测试和 "),s("code",null,"README"),n("，并发布到 npm 上 —— 换个时间再做吧！")],-1))]),_:1})}}};export{y as default};
