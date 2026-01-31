import{_ as r}from"./BV7Yc4PX.js";import{c as t,w as c,o as p,a as s,b as n}from"./B1kHp8qp.js";import"./8oskhlv7.js";const m={__name:"algo-bubble-sort",setup(o){const a={title:"算法学习：冒泡排序",description:"算法学习：冒泡排序",keywords:"原创,JavaScript,算法",pathname:"algo-bubble-sort",translation:null,create_time:"2016-11-09",prev:{title:"[译] 理解 Node.js 事件循环",pathname:"nodejs-event-loop"},next:{title:"算法学习：选择排序",pathname:"algo-selection-sort"}};return(j,l)=>{const e=r;return p(),t(e,{data:a},{default:c(()=>[...l[0]||(l[0]=[s("p",null,[n("从基础入手。前面学习了"),s("a",{href:"../algo-insertion-sort/"},"插入排序"),n("和"),s("a",{href:"../algo-selection-sort"},"选择排序"),n("。")],-1),s("p",null,"接下来看冒泡排序。",-1),s("p",null,"依然假设手上有 N 张扑克牌，记作 cards。",-1),s("p",null,"第一步，先比较第 1 张与第 2 张，如果第 1 张比第 2 张大，则将两者调换位置；",-1),s("p",null,"第二步，重复上面的方法，比较第 2 张、第 3 张；",-1),s("p",null,"……",-1),s("p",null,"第 (n - 1) 步，比较第 (n - 1) 张、第 n 张，若第 (n - 1) 张比第 n 张大，则将两者调换位置。",-1),s("p",null,"仔细想下，发现没有？这样 (n - 1) 个步骤下来，整个数组中最大数已经被顺利推到最右侧啦！也就是说，现在第 n 个数已经是最大的。这就是冒泡排序叫“冒泡”的原因。",-1),s("p",null,"那么接下来，我们只需要对前面的 (n - 1) 个数再进行同样的 (n - 2) 次操作，找到第二大的数放在第 (n - 1) 个位置上。",-1),s("p",null,"最后的实现如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"bubbleSort"),n(" = ("),s("span",{class:"hljs-params"},"cards"),n(`) => {
  cards = cards.`),s("span",{class:"hljs-title function_"},"slice"),n("("),s("span",{class:"hljs-number"},"0"),n(`);

  `),s("span",{class:"hljs-keyword"},"let"),n(" len = cards."),s("span",{class:"hljs-property"},"length"),n(`;
  `),s("span",{class:"hljs-keyword"},"let"),n(" temp = "),s("span",{class:"hljs-number"},"0"),n(`;

  `),s("span",{class:"hljs-keyword"},"for"),n(" ("),s("span",{class:"hljs-keyword"},"let"),n(" i = len - "),s("span",{class:"hljs-number"},"1"),n("; i >= "),s("span",{class:"hljs-number"},"0"),n(`; i--) {

    `),s("span",{class:"hljs-keyword"},"for"),n(" ("),s("span",{class:"hljs-keyword"},"let"),n(" j = "),s("span",{class:"hljs-number"},"0"),n(`; j < len - i; j++) {

      `),s("span",{class:"hljs-keyword"},"if"),n(" (cards[j] > cards[j + "),s("span",{class:"hljs-number"},"1"),n(`]) {
        temp = cards[j + `),s("span",{class:"hljs-number"},"1"),n(`];
        cards[j + `),s("span",{class:"hljs-number"},"1"),n(`] = cards[j];
        cards[j] = temp;
      }
    }
  }

  `),s("span",{class:"hljs-keyword"},"return"),n(` cards;
};
`)])],-1),s("p",null,"仅仅看循环次数，评估下冒泡排序的复杂度。很简单，因为每次需要 (i - 1) 步的两两对比，因此总的时间是：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[n("(n - "),s("span",{class:"hljs-number"},"1"),n(") + (n - "),s("span",{class:"hljs-number"},"2"),n(") + ... + ("),s("span",{class:"hljs-number"},"2"),n(" - "),s("span",{class:"hljs-number"},"1"),n(") + ("),s("span",{class:"hljs-number"},"1"),n(" - "),s("span",{class:"hljs-number"},"1"),n(") = n * (n - "),s("span",{class:"hljs-number"},"1"),n(") / "),s("span",{class:"hljs-number"},"2"),n(`
`)])],-1),s("p",null,"复杂度为 O(n^n)。不过，在最坏的情况下，交换操作也是 O(n^n)，这对数组来说，还是有些可怕。",-1)])]),_:1})}}};export{m as default};
