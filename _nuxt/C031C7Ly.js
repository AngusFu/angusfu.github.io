import{_ as t}from"./CaNb7KN_.js";import{c,w as r,o as p,a as s,b as n}from"./Du-K4N_a.js";const m={__name:"algo-selection-sort",setup(o){const a={title:"算法学习：选择排序",description:"算法学习：选择排序",keywords:"原创,JavaScript,算法",pathname:"algo-selection-sort",translation:null,create_time:"2016-11-06",prev:{title:"算法学习：冒泡排序",pathname:"algo-bubble-sort"},next:{title:"[译] HTML 表单验证",pathname:"using-html-form-validation-in-pure-javascript"}};return(i,l)=>{const e=t;return p(),c(e,{data:a},{default:r(()=>[...l[0]||(l[0]=[s("p",null,"所谓“选择排序”，基本思路就是不断从数组中选择出最小的数。",-1),s("p",null,"还是以扑克牌为例。假设有 N 张扑克牌，记扑克牌集合为 cards，则我们的基本操作如下：",-1),s("p",null,"首先，从手中拿出左侧第 0 张牌 cardA；",-1),s("p",null,[n("第二步，将 cardA 向右"),s("strong",null,"依次"),n("与剩下的 (N - 1) 张牌进行对比，找出最小的那张牌所在的位置 minIndex；")],-1),s("p",null,"第三步，对比完成后，若 minIndex 不等于 1，则说明 cardA 不是最小的，将 cards[minIndex] 与 cardA 进行位置交换。",-1),s("p",null,"第四步，从第二张牌开始，重复前面的步骤……",-1),s("p",null,"……",-1),s("p",null,"最后得到的数组即是排序好的。",-1),s("p",null,"实现如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 选择排序"),n(`
`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"selectionSort"),n("("),s("span",{class:"hljs-params"},"cards"),n(`) {
  cards = cards.`),s("span",{class:"hljs-title function_"},"slice"),n("("),s("span",{class:"hljs-number"},"0"),n(`);
  `),s("span",{class:"hljs-keyword"},"var"),n(" len = cards."),s("span",{class:"hljs-property"},"length"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(" i = "),s("span",{class:"hljs-number"},"0"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(" j = "),s("span",{class:"hljs-number"},"0"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(" minIndex = "),s("span",{class:"hljs-number"},"0"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(" temp = "),s("span",{class:"hljs-number"},"0"),n(`;

  `),s("span",{class:"hljs-keyword"},"for"),n(" (i = "),s("span",{class:"hljs-number"},"0"),n("; i < len - "),s("span",{class:"hljs-number"},"1"),n(`; i++) {
    `),s("span",{class:"hljs-comment"},"// 将当前的数字与后面子序列中最小数进行换位"),n(`
    `),s("span",{class:"hljs-comment"},"// 这样每次拿到前面的都是最小的数字"),n(`
    minIndex = i;

    `),s("span",{class:"hljs-comment"},"// 寻找子序列中最小数的索引"),n(`
    `),s("span",{class:"hljs-comment"},"// 每一轮得比较 n - i 次"),n(`
    `),s("span",{class:"hljs-keyword"},"for"),n(" (j = i + "),s("span",{class:"hljs-number"},"1"),n(`; j < len; j++) {
      `),s("span",{class:"hljs-keyword"},"if"),n(` (cards[j] < cards[minIndex]) {
        minIndex = j;
      }
    }

    `),s("span",{class:"hljs-comment"},"// 如果当前数比后面子序列最小元素大"),n(`
    `),s("span",{class:"hljs-comment"},"// 则进行换位处理"),n(`
    `),s("span",{class:"hljs-keyword"},"if"),n(` (minIndex !== i) {
      temp = cards[i];
      cards[i] = cards[minIndex];
      cards[minIndex] = temp;
    }
  }
  `),s("span",{class:"hljs-keyword"},"return"),n(` cards;
}
`)])],-1),s("p",null,"来粗略看下时间复杂度的问题。",-1),s("p",null,[n("实际上，这个算法，"),s("strong",null,"不存在最好的情况和最坏的情况"),n("。因为每次通过比较寻找最小数时，必须将所有剩余数字对比个遍。")],-1),s("p",null,[n("第一次需要与 (N - 1) 个数进行对比；第二次需要与 (N - 2 个数) 对比，直到最后。总的计算次数为 "),s("code",null,"(N - 1) + (N - 2) + ... + 1 + 0 = N * (N - 1) / 2"),n("。不难看出，"),s("strong",null,[n("时间复杂度是 "),s("code",null,"O(n^n)")]),n("。")],-1),s("p",null,[n("在 JavaScript 中，与"),s("a",{href:"../algo-insertion-sort/"},"插入排序"),n("比较，感觉选择排序比较好的一点是，没有频繁的元素位置调换，每次只会进行一次交换这一点上，性能应该会好很多（尤其是数组较大的情况下）。可以参考 "),s("a",{href:"https://jsfiddle.net/wemlin/hf4bz4mc/",target:"_blank",rel:"noopener"},"测试Demo"),n("。")],-1),s("p",null,[n("每次使用的数组都长度为 1000、元素为在 (0, 10000) 区间中的整数的随机数组，每种方法分别测试 10000次，最终取计算时间平均值。结果插入排序每次时间大约在 0.9 毫秒左右，而选择排序在 0.6 毫秒左右，但注意，这里的时间"),s("strong",null,"包含"),n("生成随机数组的时间。")],-1),s("p",null,"也可以用 node 来测试（排序函数代码略）：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(" times = "),s("span",{class:"hljs-number"},"10000"),n(`;

`),s("span",{class:"hljs-keyword"},"var"),n(` t = times;
`),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"time"),n("("),s("span",{class:"hljs-string"},"'selectionSort'"),n(`);
`),s("span",{class:"hljs-keyword"},"while"),n(` (t--) {
    `),s("span",{class:"hljs-title function_"},"selectionSort"),n("("),s("span",{class:"hljs-title function_"},"getRandArray"),n("("),s("span",{class:"hljs-number"},"1000"),n(`));
}
`),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"timeEnd"),n("("),s("span",{class:"hljs-string"},"'selectionSort'"),n(`);


t = times;
`),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"time"),n("("),s("span",{class:"hljs-string"},"'insertionSort'"),n(`);
`),s("span",{class:"hljs-keyword"},"while"),n(` (t--) {
  `),s("span",{class:"hljs-title function_"},"insertionSort"),n("("),s("span",{class:"hljs-title function_"},"getRandArray"),n("("),s("span",{class:"hljs-number"},"1000"),n(`));
}
`),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"timeEnd"),n("("),s("span",{class:"hljs-string"},"'insertionSort'"),n(`);

`),s("span",{class:"hljs-comment"},"// 获取指定长度的元素大小在 0 到 10000 之间的随机数组"),n(`
`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"getRandArray"),n("("),s("span",{class:"hljs-params"},"len"),n(`) {
  `),s("span",{class:"hljs-keyword"},"return"),n(" ("),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"Array"),n("(len))."),s("span",{class:"hljs-title function_"},"fill"),n("("),s("span",{class:"hljs-number"},"0"),n(")."),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-function"},[n("("),s("span",{class:"hljs-params"},"i"),n(") =>")]),n(),s("span",{class:"hljs-title class_"},"Math"),n("."),s("span",{class:"hljs-title function_"},"random"),n("() * "),s("span",{class:"hljs-number"},"10000"),n(" | "),s("span",{class:"hljs-number"},"0"),n(`);
}
`)])],-1)])]),_:1})}}};export{m as default};
