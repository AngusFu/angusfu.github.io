import{_ as r}from"./CaNb7KN_.js";import{c as e,w as t,o as p,a as s,b as l}from"./Du-K4N_a.js";const i={__name:"xdu-campus-recruitment-2014",setup(o){const n={title:"某度 2014 年秋招前端笔试",keywords:"原创,面试",pathname:"xdu-campus-recruitment-2014",translation:null,create_time:"2014-09-21",prev:{title:"某易 2014 校招面试总结",pathname:"xease-campus-2014-note"},next:{}};return(h,a)=>{const c=r;return p(),e(c,{data:n},{default:t(()=>[...a[0]||(a[0]=[s("p",null,"今晚跑去华工参加百度 Web 前端的笔试，做完之后交卷，本来感觉是“为之四顾，为之踌躇满志”的。然而……",-1),s("p",null,"其中一道题目是关于数组的，回来在电脑上面一敲，顿时为自己的智商和知识羞愧了。",-1),s("p",null,"多话不说，直接上题目吧。大概是酱紫的：",-1),s("p",null,"代码如下，请写出输出的结果。 ",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" str = "),s("span",{class:"hljs-string"},"'john'"),l(`;
`),s("span",{class:"hljs-keyword"},"var"),l(" str2 = "),s("span",{class:"hljs-string"},"'angus'"),l(`;

`),s("span",{class:"hljs-keyword"},"var"),l(" arr1 = str."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"''"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" arr2 = arr1."),s("span",{class:"hljs-title function_"},"reverse"),l(`();
`),s("span",{class:"hljs-keyword"},"var"),l(" arr = str2."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"''"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" arr3 = arr2."),s("span",{class:"hljs-title function_"},"push"),l(`(arr);

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(arr1."),s("span",{class:"hljs-property"},"length"),l(", arr1."),s("span",{class:"hljs-title function_"},"slice"),l("(-"),s("span",{class:"hljs-number"},"1"),l(`));
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(arr3."),s("span",{class:"hljs-property"},"length"),l(", arr3."),s("span",{class:"hljs-title function_"},"slice"),l("(-"),s("span",{class:"hljs-number"},"1"),l(`));
`)])],-1),s("p",null,[l("先说答案：第一次打印，"),s("code",null,"5, [ Array[5] ]"),l("；第二次不仅没有结果，还报错了。")],-1),s("p",null,"你，猜到了吗？博主没有猜到两点：",-1),s("p",null,"1.第一次显示 arr1 的 length 是 “5”；",-1),s("p",null,"2.第二次居然没有任何输出，还报错，博主试了 N++ 次都不敢相信。",-1),s("p",null,"下面解释下这些问题。",-1),s("p",null,[l("第一个问题，见博客园中的"),s("a",{href:"http://www.cnblogs.com/0banana0/archive/2011/11/17/2252639.html",target:"_blank",rel:"noopener"},"这篇博文"),l("：")],-1),s("blockquote",null,[s("p",null,"结论:js数组是引用类型,它只允许通过索引来获取或改变数组的值。引用类型的东西都是不能通过(它赋值过的外部变量)所改变的。也就是(它赋值过的外部变量)这个值改变了原数组不会有任何变化。")],-1),s("p",null,"所以虽然我们是在arr3上应用push()方法，但最终影响的还是arr1、arr2、arr3共同指向的数组。",-1),s("p",null,"上述博文一楼评论说得很明白：",-1),s("blockquote",null,[l(" JS 中没有指针，只有传值（value)与传址（reference引用）的区别。 "),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" a = ["),s("span",{class:"hljs-number"},"1"),l(","),s("span",{class:"hljs-number"},"2"),l(","),s("span",{class:"hljs-number"},"3"),l(","),s("span",{class:"hljs-number"},"4"),l("] "),s("span",{class:"hljs-comment"},"// a 不仅是数组，还是个对象，实际上 a 就是对 [1,2,3,4] 的引用"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(` b = a
`),s("span",{class:"hljs-keyword"},"var"),l(` c = a
`),s("span",{class:"hljs-comment"},"// 以上两条赋值语句建立了 b 与 c 对 a 即 [1,2,3,4] 的引用"),l(`
`),s("span",{class:"hljs-comment"},"// 无论改变 a 还是 b 抑或 c 都是对 [1,2,3,4] 的操作"),l(`
`),s("span",{class:"hljs-comment"},"// 这就是传址(堆中操作)"),l(`

`),s("span",{class:"hljs-comment"},'// 把 a[1] 的值"1"传递给 d'),l(`
`),s("span",{class:"hljs-comment"},"// 对 d 的改变则不会影响 a[1]"),l(`
`),s("span",{class:"hljs-comment"},"// 即所谓的传值(栈中操作)"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(" d = a["),s("span",{class:"hljs-number"},"1"),l(`]
`)])])],-1),s("p",null,"第二个问题是第11行代码报错的问题。这涉及到 Array 的可变方法不可变方法。",-1),s("ul",null,[s("li",null,[s("code",null,"unshift()"),l(" 方法可向数组的开头添加一个或更多元素，并返回新的长度;")]),s("li",null,[s("code",null,"push()"),l(" 方法可向数组的末尾添加一个或多个元素，并返回新的长度;")]),s("li",null,[s("code",null,"pop()"),l(" 方法用于删除并返回数组的最后一个元素;")]),s("li",null,[s("code",null,"shift()"),l(" 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。")])],-1),s("p",null,"So，一定一定要记住，这四个方法是有返回值的。",-1),s("p",null,"另外，array.splice() 方法也是有返回值的，返回的含有被删除的元素的数组（如果木有元素被删除，辣么返回空数组）。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" str = "),s("span",{class:"hljs-string"},"'john'"),l(`;
`),s("span",{class:"hljs-keyword"},"var"),l(" str2 = "),s("span",{class:"hljs-string"},"'angus'"),l(`;
`),s("span",{class:"hljs-keyword"},"var"),l(" a = str."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"''"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" b = str2."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"''"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" c = a."),s("span",{class:"hljs-title function_"},"splice"),l("("),s("span",{class:"hljs-number"},"2"),l(","),s("span",{class:"hljs-number"},"1"),l(","),s("span",{class:"hljs-string"},'"test"'),l(`);

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(a); "),s("span",{class:"hljs-comment"},'// Array [ "j", "o", "test", "n" ] '),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(b); "),s("span",{class:"hljs-comment"},'// Array [ "a", "n", "g", "u", "s" ] '),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(c); "),s("span",{class:"hljs-comment"},'// Array [ "h" ]'),l(`
`)])],-1),s("p",null,"还得提到 reverse()、sort() 这两个操作是会影响到原来的数组的：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" str = "),s("span",{class:"hljs-string"},"'john'"),l(`;
`),s("span",{class:"hljs-keyword"},"var"),l(" a = str."),s("span",{class:"hljs-title function_"},"split"),l("("),s("span",{class:"hljs-string"},"''"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" c = a."),s("span",{class:"hljs-title function_"},"sort"),l(`();

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(c); "),s("span",{class:"hljs-comment"},'// Array [ "h", "j", "n", "o" ]'),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(a); "),s("span",{class:"hljs-comment"},'// Array [ "h", "j", "n", "o" ]'),l(`
`)])],-1),s("p",null,"而 concat()、slice() 操作则对数组都不影响。。。。",-1),s("p",null,[l("说到concat()方法，想到了昨天看到的"),s("strong",null,"高效复制数组"),l("的方法：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" newArr = rr."),s("span",{class:"hljs-title function_"},"slice"),l("("),s("span",{class:"hljs-number"},"0"),l(`)
`),s("span",{class:"hljs-comment"},"// or"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(" newArr = arr."),s("span",{class:"hljs-title function_"},"concat"),l(`()
`)])],-1),s("p",null,"记下来备用吧。。。",-1),s("p",null,"这是作为前端新手的第一篇博文。继续加油~",-1)])]),_:1})}}};export{i as default};
