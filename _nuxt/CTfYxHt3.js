import{_ as t}from"./BV7Yc4PX.js";import{c as r,w as c,o as i,a as s,b as n}from"./B1kHp8qp.js";import"./8oskhlv7.js";const d={__name:"the-service-worker-lifecycle",setup(o){const e={title:"[译] Service Worker 生命周期",description:"Service Worker 生命周期",keywords:"翻译,Service Worker",pathname:"the-service-worker-lifecycle",translation:{author:"@Ire Aderinokun",social:"https://twitter.com/ireaderinokun",from:"https://bitsofco.de/the-service-worker-lifecycle/"},create_time:"2016-07-25",prev:{title:"[译] eBay：style & speed",pathname:"browse-ebay-with-style-and-speed-ebay"},next:{title:"[译] 从发展历史理解 ES6 Module",pathname:"understanding-es6-modules-via-their-history"}};return(p,l)=>{const a=t;return i(),r(a,{data:e},{default:c(()=>[...l[0]||(l[0]=[s("p",null,"如果使用过 Service Worker，之前你可能遇到过这样的问题，原来的 Service Worker 还在起作用，即使文件本身已经更新过。其中的原因在于 Service Worker 生命周期中的一些微妙之处；它可能会被安装，而且是有效的，但实际上却没有被 document 纳入控制。",-1),s("p",null,[n("Service Worker 可能拥有以下六种状态的一种："),s("strong",null,"解析成功（parsed）"),n("，"),s("strong",null,"正在安装（installing）"),n("，"),s("strong",null,"安装成功（installed）"),n("，"),s("strong",null,"正在激活（activating）"),n("，"),s("strong",null,"激活成功（activated）"),n("，"),s("strong",null,"废弃（redundant）"),n("。")],-1),s("p",null,[s("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t01716a20bbd762eaba.png",alt:"Service Worker 状态"})],-1),s("h2",null,"解析成功（Parsed）",-1),s("p",null,"首次注册 Service Worker 时，浏览器解决脚本并获得入口点。如果解析成功（而且满足其他条件，如 HTTPS 协议），就可以访问到 Service Worker 注册对象（registration object），其中包含 Service Worker 的状态及其作用域。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In main.js */"),n(`
`),s("span",{class:"hljs-keyword"},"if"),n(" ("),s("span",{class:"hljs-string"},"'serviceWorker'"),n(),s("span",{class:"hljs-keyword"},"in"),n(` navigator) {  
    navigator.`),s("span",{class:"hljs-property"},"serviceWorker"),n("."),s("span",{class:"hljs-title function_"},"register"),n("("),s("span",{class:"hljs-string"},"'./sw.js'"),n(`)
    .`),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"registration"),n(`) {
        `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},'"Service Worker Registered"'),n(`, registration);
    })
    .`),s("span",{class:"hljs-title function_"},"catch"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"err"),n(`) {
        `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n("("),s("span",{class:"hljs-string"},'"Service Worker Failed to Register"'),n(`, err);
    })
} 
`)])],-1),s("p",null,"Service Worker 注册成功，并不意味着它已经完成安装，也不能说明它已经激活，仅仅是脚本被成功解析，与 document 同源，而且源协议是 HTTPS。一旦完成注册，Service Worker 将进入下一状态。",-1),s("h2",null,"正在安装（Installing）",-1),s("p",null,[n("Service Worker 脚本解析完成后，浏览器会试着安装，进入下一状态，“installing”。在 Service Worker "),s("code",null,"注册（registration）"),n(" 对象中，我们可以通过 "),s("code",null,"installing"),n(" 子对象检查该状态。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In main.js */"),n(`
navigator.`),s("span",{class:"hljs-property"},"serviceWorker"),n("."),s("span",{class:"hljs-title function_"},"register"),n("("),s("span",{class:"hljs-string"},"'./sw.js'"),n(")."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"registration"),n(`) {  
    `),s("span",{class:"hljs-keyword"},"if"),n(" (registration."),s("span",{class:"hljs-property"},"installing"),n(`) {
        `),s("span",{class:"hljs-comment"},"// Service Worker is Installing"),n(`
    }
}) 
`)])],-1),s("p",null,[n("在 installing 状态中，Service Worker 脚本中的 "),s("code",null,"install"),n(" 事件被执行。我们通常在安装事件中，为 document 缓存静态文件。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In sw.js */"),n(`
self.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},"'install'"),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"event"),n(`) {  
  event.`),s("span",{class:"hljs-title function_"},"waitUntil"),n(`(
    caches.`),s("span",{class:"hljs-title function_"},"open"),n("(currentCacheName)."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"cache"),n(`) {
      `),s("span",{class:"hljs-keyword"},"return"),n(" cache."),s("span",{class:"hljs-title function_"},"addAll"),n(`(arrayOfFilesToCache);
    })
  );
}); 
`)])],-1),s("p",null,[n("若事件中有 "),s("code",null,"event.waitUntil()"),n(" 方法，则 installing 事件会一直等到该方法中的 Promise 完成之后才会成功；若 Promise 被拒，则安装失败，Service Worker 直接进入**废弃（redundant）**状态。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In sw.js */"),n(`
self.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},"'install'"),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"event"),n(`) {  
  event.`),s("span",{class:"hljs-title function_"},"waitUntil"),n(`(
   `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title class_"},"Promise"),n("."),s("span",{class:"hljs-title function_"},"reject"),n("(); "),s("span",{class:"hljs-comment"},"// Failure"),n(`
  );
}); 
`),s("span",{class:"hljs-comment"},"// Install Event will fail"),n(`
`)])],-1),s("h2",null,"安装成功/等待中（Installed/Waiting）",-1),s("p",null,[n("如果安装成功，Service Worker 进入"),s("strong",null,"安装成功（installed）"),n("（也称为"),s("strong",null,"等待中[waiting]"),n("）状态。在此状态中，它是一个有效的但尚未激活的 worker。它尚未纳入 document 的控制，确切来说是在等待着从当前 worker 接手。")],-1),s("p",null,[n("在 Service Worker "),s("code",null,"注册（registration）"),n(" 对象中，可通过 "),s("code",null,"waiting"),n(" 子对象检查该状态。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In main.js */"),n(`
navigator.`),s("span",{class:"hljs-property"},"serviceWorker"),n("."),s("span",{class:"hljs-title function_"},"register"),n("("),s("span",{class:"hljs-string"},"'./sw.js'"),n(")."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"registration"),n(`) {  
    `),s("span",{class:"hljs-keyword"},"if"),n(" (registration."),s("span",{class:"hljs-property"},"waiting"),n(`) {
        `),s("span",{class:"hljs-comment"},"// Service Worker is Waiting"),n(`
    }
}) 
`)])],-1),s("p",null,"这是通知 App 用户升级新版本或自动升级的好时机。",-1),s("h2",null,"正在激活（Activating）",-1),s("p",null,[n("处于 waiting 状态的 Service Worker，在以下之一的情况下，会被触发 "),s("strong",null,"activating"),n(" 状态。")],-1),s("ul",null,[s("li",null,[s("p",null,"当前已无激活状态的 worker")]),s("li",null,[s("p",null,[n("Service Worker 脚本中的 "),s("code",null,"self.skipWaiting()"),n(" 方法被调用")])]),s("li",null,[s("p",null,"用户已关闭 Service Worker 作用域下的所有页面，从而释放了此前处于激活态的 worker")]),s("li",null,[s("p",null,"超出指定时间，从而释放此前处于激活态的 worker")])],-1),s("p",null,[n("处于 activating 状态期间，Service Worker 脚本中的 "),s("code",null,"activate"),n(" 事件被执行。我们通常在 activate 事件中，清理 cache 中的文件。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In sw.js */"),n(`
self.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},"'activate'"),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"event"),n(`) {  
  event.`),s("span",{class:"hljs-title function_"},"waitUntil"),n(`(
    `),s("span",{class:"hljs-comment"},"// 获取所有 cache 名称"),n(`
    caches.`),s("span",{class:"hljs-title function_"},"keys"),n("()."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"cacheNames"),n(`) {
      `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-title class_"},"Promise"),n("."),s("span",{class:"hljs-title function_"},"all"),n(`(
        `),s("span",{class:"hljs-comment"},"// 获取所有不同于当前版本名称 cache 下的内容"),n(`
        cacheNames.`),s("span",{class:"hljs-title function_"},"filter"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"cacheName"),n(`) {
          `),s("span",{class:"hljs-keyword"},"return"),n(` cacheName != currentCacheName;
        }).`),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"cacheName"),n(`) {
          `),s("span",{class:"hljs-comment"},"// 删除内容"),n(`
          `),s("span",{class:"hljs-keyword"},"return"),n(" caches."),s("span",{class:"hljs-title function_"},"delete"),n(`(cacheName);
        })
      ); `),s("span",{class:"hljs-comment"},"// end Promise.all()"),n(`
    }) `),s("span",{class:"hljs-comment"},"// end caches.keys()"),n(`
  ); `),s("span",{class:"hljs-comment"},"// end event.waitUntil()"),n(`
}); 
`)])],-1),s("p",null,[n("与 install 事件类似，如果 activate 事件中存在 "),s("code",null,"event.waitUntil()"),n(" 方法，则在其中的 Promise 完成之后，激活才会成功。如果 Promise 被拒，激活事件失败，Service Worker 进入**废弃（redundant）**状态。")],-1),s("h2",null,"激活成功（Activated）",-1),s("p",null,[n("如果激活成功，Service Worker 进入 "),s("strong",null,"active"),n(" 状态。在此状态中，其成为接受 document 全面控制的激活态 worker。在 Service Worker "),s("code",null,"注册（registration）"),n(" 对象中，可以通过 "),s("code",null,"active"),n(" 子对象检查此状态。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In main.js */"),n(`
navigator.`),s("span",{class:"hljs-property"},"serviceWorker"),n("."),s("span",{class:"hljs-title function_"},"register"),n("("),s("span",{class:"hljs-string"},"'./sw.js'"),n(")."),s("span",{class:"hljs-title function_"},"then"),n("("),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"registration"),n(`) {  
    `),s("span",{class:"hljs-keyword"},"if"),n(" (registration."),s("span",{class:"hljs-property"},"active"),n(`) {
        `),s("span",{class:"hljs-comment"},"// Service Worker is Active"),n(`
    }
}) 
`)])],-1),s("p",null,[n("如果 Service Worker 处于激活态，就可以应对事件性事件 —— "),s("code",null,"fetch"),n(" 和 "),s("code",null,"message"),n("。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* In sw.js */"),n(`

self.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},"'fetch'"),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"event"),n(`) {  
  `),s("span",{class:"hljs-comment"},"// Do stuff with fetch events"),n(`
});

self.`),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},"'message'"),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"event"),n(`) {  
  `),s("span",{class:"hljs-comment"},"// Do stuff with postMessages received from document"),n(`
}); 
`)])],-1),s("h2",null,"废弃（Redundant）",-1),s("p",null,[n("Service Worker 可能以下之一的原因而被"),s("strong",null,"废弃"),n("（redundant，原意为“多余的，累赘的”）——")],-1),s("ul",null,[s("li",null,[s("p",null,"installing 事件失败")]),s("li",null,[s("p",null,"activating 事件失败")]),s("li",null,[s("p",null,"新的 Service Worker 替换其成为激活态 worker")])],-1),s("p",null,"如果 Service Worker 因前两个原因失败，我们可以通过开发者工具看到信息（以及其他相关信息）——",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p0.ssl.qhimg.com/t0141f8766c67ce01c1.png",alt:"Service Worker Redundant in DevTools"})],-1),s("p",null,"如果已存在前一版本的激活态 Service Worker，它会继续保持对 document 的控制。",-1)])]),_:1})}}};export{d as default};
