import{_ as r}from"./CaNb7KN_.js";import{c as e,w as p,o as t,a as s,b as n}from"./Du-K4N_a.js";const j={__name:"algo-insertion-sort",setup(o){const l={title:"算法学习：插入排序",description:"算法学习：插入排序",keywords:"原创,算法,JavaScript",pathname:"algo-insertion-sort",translation:null,create_time:"2016-11-02",prev:{title:"[译] HTML 表单验证",pathname:"using-html-form-validation-in-pure-javascript"},next:{title:"使用 jQuery.ajax 上传带文件的表单",pathname:"jquery-ajax-formdata"}};return(d,a)=>{const c=r;return t(),e(c,{data:l},{default:p(()=>[...a[0]||(a[0]=[s("h2",null,"缘起",-1),s("p",null,"最近打算好好学习算法。因为专业的原因，对计算机原理、数据结构与算法这些知识，一开始可以说是一窍不通的。",-1),s("p",null,"最开始在项目中接触算法，完全基于项目需要。当时负责一个酒店项目，数据接入来自公共部分。项目详情页拿到的数据，包括当前酒店所有套餐，最多的可能有几十个。需求仅仅要求显示三条，而且结果是根据不同内容（如状态、网络、热水、空调等等）有优先级的。",-1),s("p",null,"当时被这套逻辑闹得很揪心。后来想想，放手干吧，多做几次遍历。最后在排序这块遇到问题了。结果就是在阮大神的博客上找到了一个快速排序的例子，稍作修改，就用在项目中了。当时还觉得小有成就。当然，后来项目经过满满一周测试，即将上线时，被取消了。",-1),s("p",null,"回首算来，在上一家公司一年多的时间中，我所做的项目，真正上线的真没几个。唯一上线的可能只有一个 React Native 开发的 APP，一直活到现在。当然，也有好处，学到了很多东西。",-1),s("p",null,"哦，对了，第一次接触算法应该是在找工作的时候。当时跑到杭州去面试，公司不大，相对传统，主营业务说白了就是 POS 机。面试我们的是软件出身的总经理，要求很简单，每人一台机器，题目相同，不管面的是 Java 还是 C++ 或者前端。一个和图有关的题目，记得后来在哪本书上看过类似的题，很经典的算法。当时，主要学习视觉、交互为主的我，完全是一脸懵的状态。结果自然不用多说。奇怪的是，第二天回到武汉，我竟然解决了，还是拿高中数学知识解决的。造化弄人，塞翁失马，焉知非福？",-1),s("p",null,"面试完了之后，开始读《数据结构与算法 JavaScript 描述》一书。但这本书在数据结构方面用了很大的篇幅。了解稍微多了一点，但解决问题的能力依然有限。所以这次，我打算读《算法导论》。不打算用学院派的方式学习，只求了解算法的思想，然后自己跟着试验一遍，加强了解。",-1),s("p",null,"好了，前言说够了。步入正题。",-1),s("h2",null,"插入排序",-1),s("p",null,"想象现在你手上有十张扑克牌（假定它们在 2-10 之间），没有经过整理，顺序打乱，我们用一个数组记录如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(" cards = ["),s("span",{class:"hljs-number"},"7"),n(", "),s("span",{class:"hljs-number"},"3"),n(", "),s("span",{class:"hljs-number"},"5"),n(", "),s("span",{class:"hljs-number"},"10"),n(", "),s("span",{class:"hljs-number"},"6"),n(", "),s("span",{class:"hljs-number"},"9"),n(", "),s("span",{class:"hljs-number"},"2"),n(", "),s("span",{class:"hljs-number"},"7"),n(", "),s("span",{class:"hljs-number"},"9"),n(", "),s("span",{class:"hljs-number"},"4"),n(`];
`),s("span",{class:"hljs-comment"},"// 生成方法如下"),n(`
`),s("span",{class:"hljs-comment"},"// var arr = [];"),n(`
`),s("span",{class:"hljs-comment"},"// var t =10;"),n(`
`),s("span",{class:"hljs-comment"},"// while (t) a[--t] = ~~(Math.random()*9) + 2"),n(`
`)])],-1),s("p",null,"下面，我们要通过一种办法对手上的牌进行排序。",-1),s("p",null,"首先，拿出最左侧的一张牌 cardA，放在桌面上：",-1),s("pre",null,[s("code",null,`Table: cardA(7)
Cards: 3   5   10   6   9   2   7   9   4
`)],-1),s("p",null,"接着进行第二次取牌，依然拿手上最左侧的第一张 cardB，然后将这张牌与桌面上的牌 cardA 进行比较。",-1),s("p",null,"在我们的例子中，因为 cardB(3) 小于 cardA(7)，所以将 cardB(3) 放在 cardA(7) 的左侧：",-1),s("pre",null,[s("code",null,`Table: cardB(3)   cardA(7)
Cards: 5   10   6   9   2   7   9   4
`)],-1),s("p",null,[n("第三步，拿出手上左侧第一张 cardC，将它和桌面上的两张牌进行比较。这时候，因为 cardB(3) < cardC(5) < cardA(7)，所以我们将这次从手上拿出的牌"),s("strong",null,"插入"),n("到桌面两张牌之间。")],-1),s("pre",null,[s("code",null,`Table: cardB(3)   cardC(5)   cardA(7)
Cards: 10   6   9   2   7   9   4
`)],-1),s("p",null,"我们继续上面的步骤。从前面的步骤可以看出，每次从手上拿出一张牌之前，桌面的牌是已经排好序的。我们只需要将此次拿出的牌与桌面上的牌一一比较，找到合适的位置插入即可 —— 记住，插入位置后面所有牌的位置都相应加 1，这点很重要。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 我们将桌面上排好序的牌记为数组 sorted"),n(`
`),s("span",{class:"hljs-comment"},"// 将第 n 轮（n >=0 ）拿出的牌记作 cardN"),n(`
`),s("span",{class:"hljs-comment"},"// 那么找到 cardN 插入位置的办法如下："),n(`

`),s("span",{class:"hljs-comment"},"// 从右向左找"),n(`
`),s("span",{class:"hljs-comment"},"// 只需要找到第一个比 cardN 小的即可"),n(`
`),s("span",{class:"hljs-comment"},"// 数组下标从 0 开始"),n(`
`),s("span",{class:"hljs-keyword"},"var"),n(" pos = sorted."),s("span",{class:"hljs-property"},"length"),n(" - "),s("span",{class:"hljs-number"},"1"),n(`;

`),s("span",{class:"hljs-comment"},"// 开始从右向左比较"),n(`
`),s("span",{class:"hljs-keyword"},"while"),n(" (pos >= "),s("span",{class:"hljs-number"},"0"),n(` && sorted[pos] > cardN) {
  `),s("span",{class:"hljs-comment"},"// 比 cardN 大的都向右挪动一位"),n(`
  sorted[pos + `),s("span",{class:"hljs-number"},"1"),n(`] = sorted[pos];
  `),s("span",{class:"hljs-comment"},"// 向左移动"),n(`
  pos--;
}

`),s("span",{class:"hljs-comment"},"// 上面 while 循环已经将所有比 cardN 大的数都右移一位"),n(`
`),s("span",{class:"hljs-comment"},"// 空出来的位置，自然就是 cardN 应该在的位置了"),n(`
`),s("span",{class:"hljs-comment"},"// 注意次这时 pos 已经是第一个比 cardN 小的数字的位置"),n(`
`),s("span",{class:"hljs-comment"},"// 所以需加一"),n(`
sorted[pos + `),s("span",{class:"hljs-number"},"1"),n(`] = cardN;
`)])],-1),s("p",null,"这样一来，我们就有了下面这个纯粹是 JavaScript 思维式的代码：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"insertionSort"),n("("),s("span",{class:"hljs-params"},"cards"),n(`) {
  `),s("span",{class:"hljs-comment"},"// 为了不改变原数组，便于比较"),n(`
  `),s("span",{class:"hljs-comment"},"// 我们先复制一份"),n(`
  cards = cards.`),s("span",{class:"hljs-title function_"},"slice"),n("("),s("span",{class:"hljs-number"},"0"),n(`);

  `),s("span",{class:"hljs-keyword"},"var"),n(" cardN = "),s("span",{class:"hljs-literal"},"null"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(` sorted = [];

  `),s("span",{class:"hljs-comment"},"// 从最左侧取出一张 直到取完"),n(`
  `),s("span",{class:"hljs-keyword"},"while"),n(" (cardN = cards."),s("span",{class:"hljs-title function_"},"shift"),n(`()) {
    `),s("span",{class:"hljs-keyword"},"var"),n(" pos = sorted."),s("span",{class:"hljs-property"},"length"),n(" - "),s("span",{class:"hljs-number"},"1"),n(`;
    
    `),s("span",{class:"hljs-keyword"},"while"),n(" (pos >= "),s("span",{class:"hljs-number"},"0"),n(` && sorted[pos] > cardN) {
      `),s("span",{class:"hljs-comment"},"// 比 cardN 大的都向右挪动一位"),n(`
      sorted[pos + `),s("span",{class:"hljs-number"},"1"),n(`] = sorted[pos];
      `),s("span",{class:"hljs-comment"},"// 向左移动"),n(`
      pos--;
    }
    sorted[pos + `),s("span",{class:"hljs-number"},"1"),n(`] = cardN;
  }

  `),s("span",{class:"hljs-keyword"},"return"),n(` sorted;
}
`)])],-1),s("p",null,"OK，一个 JavaScript 版本的插入排序就这样实现啦！",-1),s("p",null,"不过，聪明如你，肯定会去搜索一番，怎么和其他的不一样啊？没关系，我们来继续改进。",-1),s("p",null,"在上面的算法实现中，我们预设了一个 sorted 数组，相当于我们桌面的牌。我相信，聪明如你，牌技肯定不差，要照这么一张张往桌子上放，多累！我们整理手上的牌时，一般都是在一只手上完成的好吗？",-1),s("p",null,"该怎么实现呢？我们直接看代码，相信有了上面的分析，很容易就能看懂。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[n(`
 `),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"insertionSort"),n("("),s("span",{class:"hljs-params"},"cards"),n(`) {
  cards = cards.`),s("span",{class:"hljs-title function_"},"slice"),n("("),s("span",{class:"hljs-number"},"0"),n(`);

  `),s("span",{class:"hljs-keyword"},"var"),n(" len = cards."),s("span",{class:"hljs-property"},"length"),n(`;
  `),s("span",{class:"hljs-keyword"},"var"),n(` cardN, i, j;

  `),s("span",{class:"hljs-comment"},"// 将左侧第一张牌先看作我们的桌面上已经排好序的 sorted 数组"),n(`
  `),s("span",{class:"hljs-comment"},"// 每次循环时 i 代表当前的要插值的那张牌"),n(`
  `),s("span",{class:"hljs-keyword"},"for"),n(" (i = "),s("span",{class:"hljs-number"},"1"),n(`; i < len; i++) {
    `),s("span",{class:"hljs-comment"},"// 当前要移动的牌"),n(`
    cardN = cards[i];

    `),s("span",{class:"hljs-comment"},"// 倒着往前对比"),n(`
    `),s("span",{class:"hljs-comment"},"// 这是最右侧那张牌"),n(`
    j = i - `),s("span",{class:"hljs-number"},"1"),n(`;

    `),s("span",{class:"hljs-comment"},"// 将 cardN 与其左侧已排序的数组逐一对比"),n(`
    `),s("span",{class:"hljs-comment"},"// 直至找到比 cardN 小的那张"),n(`
    `),s("span",{class:"hljs-keyword"},"while"),n(" (j >= "),s("span",{class:"hljs-number"},"0"),n(` && cards[j] > cardN) {
      cards[j + `),s("span",{class:"hljs-number"},"1"),n(`] = cards[j];
      `),s("span",{class:"hljs-comment"},"// 相当于 cardN 逐一不停地与其左侧排好序的牌交换位置"),n(`
      `),s("span",{class:"hljs-comment"},"// 直到找到比 cardN 小的那张"),n(`
      `),s("span",{class:"hljs-comment"},"// 但下面这句没必要"),n(`
      `),s("span",{class:"hljs-comment"},"// cards[j] = cardN;"),n(`
      j--;
    }
    `),s("span",{class:"hljs-comment"},"// 插入 cardN "),n(`
    cards[j + `),s("span",{class:"hljs-number"},"1"),n(`] = cardN;
  }

  `),s("span",{class:"hljs-keyword"},"return"),n(` cards;
}
`)])],-1),s("p",null,"最近刚刚给博客新增了复制代码的功能（PC 下方可见）。可以直接复制前面的代码，测试一下~",-1),s("p",null,"简单分析插入排序的时间复杂度。考虑两个极端情况。",-1),s("p",null,"最好的情况是给定的数组已经排序好的，每次拿到的数向左对比一次就可。对比一次后，while 循环根本就不会进入。所以 for 循环中每次只需要一次对比，算起来最后就是 (n - 1) 次循环。",-1),s("p",null,[n("最差的情况是数组是完全逆序的，每次拿到的数必须一直向前进行对比，直到最左侧的数字为止。考虑第 i 个数，需要与前面对比 (i - 1) 次，累计起来总次数就是 "),s("code",null,"0 + 1 + 2 + 3 + (n - 1) = n * (n - 1) / 2"),n(" 次。")],-1),s("p",null,[n("取最好情况与最差情况的平均数："),s("code",null,"((n - 1) + n * (n - 1) / 2) / 2 = (n^2 + n -2) / 2"),n("。")],-1),s("p",null,"经过上面粗略的估算，可以得出插入排序的时间复杂度为 O(n^2)。",-1)])]),_:1})}}};export{j as default};
