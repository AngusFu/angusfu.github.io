import{_ as t}from"./Bm2Oy-cY.js";import{c,w as r,o,a as s,b as l}from"./YobvFIQM.js";const j={__name:"JavaScript-and-Functional-Programming",setup(p){const a={title:"[译] JavaScript  与函数式编程",description:"JavaScript  与函数式编程",keywords:"翻译,函数式编程,JavaScript",pathname:"JavaScript-and-Functional-Programming",translation:{author:"Beth Allchurch",social:"https://www.twitter.com/BethAllchurch",from:"https://bethallchurch.github.io/JavaScript-and-Functional-Programming/"},create_time:"2016-08-10",prev:{title:"[译] 自动化、跨浏览器的 JavaScript 单元测试",pathname:"set-up-automated-cross-browser-javascript-unit-testing"},next:{title:"[译] eBay：style & speed",pathname:"browse-ebay-with-style-and-speed-ebay"}};return(u,n)=>{const e=t;return o(),c(e,{data:a},{default:r(()=>[...n[0]||(n[0]=[s("blockquote",null,[s("p",null,[s("strong",null,[l("译者注：推荐一篇译文，"),s("a",{href:"http://pinggod.com/2016/函数式编程术语解析",target:"_blank",rel:"noopener"},"《函数式编程术语解析》"),l("。")])])],-1),s("p",null,[s("em",null,"本文是我在 2016 年 7 月 29 号听 Kyle Simpson 精彩的课程"),l("*《Functional-Light JavaScript》*"),s("em",null,[l("时所做的笔记（外加个人的深入研究）（"),s("a",{href:"https://speakerdeck.com/getify/functional-light-javascript",target:"_blank",rel:"noopener"},"幻灯片在这"),l("）。")])],-1),s("p",null,[l("长久以来，面向对象在 JavaScript 编程范式中占据着主导地位。不过，最近人们对函数式编程的兴趣正在增长。函数式编程是一种编程风格，它强调将程序状态变化（即"),s("em",null,"副作用[side effect]"),l("）的次数减到最小。因此，函数式编程鼓励使用"),s("em",null,"不可变"),l("数据（immutable data）和纯函数（pure functions）（“纯”意味着没有副作用的）。它也更倾向于使用"),s("em",null,"声明式"),l("的风格，鼓励使用命名良好的函数，这样就能使用在我们视线之外的那些打包好的细节实现，通过描述希望发生什么以进行编码。")],-1),s("p",null,"尽管面向对象编程与函数式编程之间有些矛盾，它们却并非互斥的关系。JavaScript 所拥有的工具，能支持这两种方式。甚至可以说，就算不把它孤立地当作函数式语言使用，还是有不少来自函数式方法的概念和最佳实践可以帮助我们，让代码更干净，可读性更强，推理起来更简单。",-1),s("h2",null,"副作用最小化",-1),s("p",null,[l("所谓"),s("em",null,"副作用"),l("，指的是函数内部产生了超出函数之外的变化。函数可能会做一些事，如操作 DOM、修改更高层作用域中的变量值，或者将数据写入数据库。这些带来的就是副作用。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 有副作用的函数"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(" x = "),s("span",{class:"hljs-number"},"10"),l(`;

`),s("span",{class:"hljs-keyword"},"const"),l(" myFunc = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y "),l(`) {
  x = x + y;
};

`),s("span",{class:"hljs-title function_"},"myFunc"),l("( "),s("span",{class:"hljs-number"},"3"),l(` );
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( x ); "),s("span",{class:"hljs-comment"},"// 13"),l(`

`),s("span",{class:"hljs-title function_"},"myFunc"),l("( "),s("span",{class:"hljs-number"},"3"),l(` );
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( x ); "),s("span",{class:"hljs-comment"},"// 16 "),l(`
`)])],-1),s("p",null,"副作用并非天生邪恶。不产生任何副作用的程序也无法影响世界，因此也没有任何意义（除非是作为理论兴趣进行研究）。不过，副作用确实是危险的，应当尽量避免使用，除非绝对必要。",-1),s("p",null,"当函数产生副作用的时候，仅凭借输入输出的内容，不足以明确函数究竟做了什么工作。必须了解上下文环境、程序状态的历史，这让函数更难理解。在不可预测的交互方式下，副作用可能带来一些 bug，且函数因上述依赖，测试起来也更困难。",-1),s("p",null,"副作用最小化是函数式编程中最基础的原则，接下来的多数小节都可以当作是避免副作用的一些办法概要。",-1),s("h2",null,"视数据为不可变（Immutable）",-1),s("p",null,"变动（mutation）指的是值在原位置上的变化（an in-place change to a value）。不可变值意味着，一旦创建出来，永远都不会变化。在 JavaScript 中，简单值如数字、字符串、布尔值这些是不可变的。不过，像对象、数组这样的数据结构都是可变的。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// push 方法改变了数组"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" x = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(`];
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( x ); "),s("span",{class:"hljs-comment"},"// [1, 2]"),l(`

x.`),s("span",{class:"hljs-title function_"},"push"),l("( "),s("span",{class:"hljs-number"},"3"),l(` );
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( x ); "),s("span",{class:"hljs-comment"},"// [1, 2, 3] "),l(`
`)])],-1),s("p",null,"为什么要避免变动数据呢？",-1),s("p",null,"变动是一种副作用。程序中变化的东西越少，需要跟踪记录的也就越少，程序也就越简单。",-1),s("p",null,[l("JavaScript 中维持对象、数组等数据结构不可变性的可用工具很有限。通过 "),s("code",null,"Object.freeze"),l(" 可以强制实现对象的不可变，但作用深度只有一层：")],-1),s("pre",null,[s("code",null,`const frozenObject = Object.freeze( { valueOne : 1, valueTwo : { nestedValue : 1 } } );
frozenObject.valueOne = 2; // 不允许
frozenObject.valueTwo.nestedValue = 2; // 竟然允许了! 
`)],-1),s("p",null,[l("不过，还是有一些很棒的工具库解决了这些问题，其中最著名的要数 "),s("a",{href:"https://facebook.github.io/immutable-js/",target:"_blank",rel:"noopener"},"Immutable"),l(" 了。")],-1),s("p",null,"对多数应用来说，使用工具库来保证不可变性有些矫枉过正。很多情况下，简单地将数据当作是不可变的，就能让我们受益良多。",-1),s("h3",null,"避免变动：数组",-1),s("p",null,[l("JavaScript 数组方法可以被概括为"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods",target:"_blank",rel:"noopener"},"变动方法 (mutator methods) "),l("和非变动方法。应当尽可能避免变动方法。")],-1),s("p",null,[l("举例来说，"),s("code",null,"concat"),l(" 方法可以用来替代 "),s("code",null,"push"),l(" 方法。"),s("code",null,"push"),l(" 改变了原数组；"),s("code",null,"concat"),l(" 返回由原数组和作为参数的数组组成的新数组，而原来的数组还是完整的。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// push 改变了数组"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" arrayOne = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`];
arrayOne.`),s("span",{class:"hljs-title function_"},"push"),l("( "),s("span",{class:"hljs-number"},"4"),l(` );

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( arrayOne ); "),s("span",{class:"hljs-comment"},"// [1, 2, 3, 4]"),l(`

`),s("span",{class:"hljs-comment"},"// concat 生成了新数组，原数组保持不变"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" arrayTwo = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`];
`),s("span",{class:"hljs-keyword"},"const"),l(" arrayThree = arrayTwo."),s("span",{class:"hljs-title function_"},"concat"),l("([ "),s("span",{class:"hljs-number"},"4"),l(` ]);

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( arrayTwo ); "),s("span",{class:"hljs-comment"},"// [1, 2, 3]"),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( arrayThree ); "),s("span",{class:"hljs-comment"},"// [1, 2, 3, 4] "),l(`
`)])],-1),s("p",null,[l("还有一些非变动方法，包括 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener"},[s("code",null,"map")]),l("、"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",target:"_blank",rel:"noopener"},[s("code",null,"filter")]),l("、"),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",target:"_blank",rel:"noopener"},[s("code",null,"reduce")]),l(" 等。")],-1),s("h3",null,"避免变动：对象",-1),s("p",null,[l("可以使用 "),s("a",{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener"},[s("code",null,"Object.assign")]),l(" 方法，而非直接编辑对象。该方法将源对象的属性复制到目标对象中，并将目标对象返回。如果总是用一个空对象作为目标对象，就能通过 "),s("code",null,"Object.assign"),l(" 避免直接编辑对象。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" objectOne = { valueOne : "),s("span",{class:"hljs-number"},"1"),l(` };
`),s("span",{class:"hljs-keyword"},"const"),l(" objectTwo = { valueTwo : "),s("span",{class:"hljs-number"},"2"),l(` };

`),s("span",{class:"hljs-keyword"},"const"),l(" objectThree = "),s("span",{class:"hljs-title class_"},"Object"),l("."),s("span",{class:"hljs-title function_"},"assign"),l(`( {}, objectOne, objectTwo );

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("( objectThree ); "),s("span",{class:"hljs-comment"},"// { valueOne : 1, valueTwo : 2 } "),l(`
`)])],-1),s("h3",null,[l("关于 "),s("code",null,"const")],-1),s("p",null,[s("code",null,"const"),l(" 很有用，却不会使数据不可变。它只能防止变量被重新赋值。这不能混为一谈。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" x = "),s("span",{class:"hljs-number"},"1"),l(`;
x = `),s("span",{class:"hljs-number"},"2"),l("; "),s("span",{class:"hljs-comment"},"// 不允许"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" myArray = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`];
myArray = [`),s("span",{class:"hljs-number"},"0"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l("]; "),s("span",{class:"hljs-comment"},"// 不允许"),l(`

myArray[`),s("span",{class:"hljs-number"},"0"),l("] = "),s("span",{class:"hljs-number"},"0"),l("; "),s("span",{class:"hljs-comment"},"// 允许了! "),l(`
`)])],-1),s("h2",null,"书写纯函数",-1),s("p",null,[s("em",null,"纯函数"),l(" 不会改变程序的状态，也不会产生可感知的副作用。纯函数的输出，仅仅取决于输入值。无论何时何地被调用，只要输入值相同，返回值也就一样。")],-1),s("p",null,"纯函数是最小化副作用的重要工具。另外，与上下文无关的特点，也让它们有了高可测试性和可复用性。",-1),s("p",null,[l("前面讲副作用的小节中的代码里， "),s("code",null,"myFunc"),l(" 函数就是非纯函数，注意两次调用时输入相同但每次返回结果却不同。不过，它也能改写成纯函数：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 将全局变量变为局部变量"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" myFunc = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"const"),l(" x = "),s("span",{class:"hljs-number"},"10"),l(`;
  `),s("span",{class:"hljs-keyword"},"return"),l(` x + y;
}

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"myFunc"),l("( "),s("span",{class:"hljs-number"},"3"),l(" )); "),s("span",{class:"hljs-comment"},"// 13"),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"myFunc"),l("( "),s("span",{class:"hljs-number"},"3"),l(" )); "),s("span",{class:"hljs-comment"},"// 13 "),l(`
`)])],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 将 x 作为参数传递"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" x = "),s("span",{class:"hljs-number"},"10"),l(`;

`),s("span",{class:"hljs-keyword"},"const"),l(" myFunc = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x + y;
}

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"myFunc"),l("( x, "),s("span",{class:"hljs-number"},"3"),l(" )); "),s("span",{class:"hljs-comment"},"// 13"),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"myFunc"),l("( x, "),s("span",{class:"hljs-number"},"3"),l(" )); "),s("span",{class:"hljs-comment"},"// 13 "),l(`
`)])],-1),s("p",null,"你的程序最终肯定还是会产生一些副作用。当副作用产生的时候，小心应对，尽可能地约束、限制它们的影响。",-1),s("h2",null,"书写返回函数的函数（Function-Generating Functions）",-1),s("p",null,"找一些程经验的人，让他们猜猜下面的代码做了什么：",-1),s("p",null,"例 1",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" numbers = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`];

`),s("span",{class:"hljs-keyword"},"for"),l(" ( "),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < numbers."),s("span",{class:"hljs-property"},"length"),l(`; i++ ) {
  `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l(`( numbers[i] );
} 
`)])],-1),s("p",null,"例 2",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" numbers = ["),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`];

`),s("span",{class:"hljs-keyword"},"const"),l(" print = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," input "),l(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l(`( input );
};

numbers.`),s("span",{class:"hljs-title function_"},"forEach"),l(`( print ); 
`)])],-1),s("p",null,[l("我测试过的所有人在例 2 上运气更好。例 1 展示的是"),s("em",null,"命令式"),l("方法，将一列数字打印出来。例 2 展示的是"),s("em",null,"声明式"),l("方法。将循环遍历数组、在控制台打印数字这些细节各种包装成 "),s("code",null,"forEach"),l(" 和 "),s("code",null,"print"),l(" 函数，无需知道"),s("em",null,"如何做"),l("，就可以表达我们需要程序"),s("em",null,"做什么"),l("。这让代码可读性更高。例 2 的最后一行看起来，很接近英语句子。")],-1),s("p",null,[l("采用这种方法，涉及到编写大量函数。利用现有函数编写生成新函数的函数，可以让这个过程中的重复（"),s("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),l("-er）更少。")],-1),s("p",null,[l("特别地，JavaScript 的两个特性让这种形式的函数生成变得可能。第一个是"),s("em",null,"闭包"),l("。函数能够访问包含作用域中的变量，就算该作用域已不复存在，这就是闭包。第二个特性是，JavaScript 将函数当作值来对待。这使书写高阶函数成为可能，高阶函数可以接收函数作为参数，并/或返回函数。")],-1),s("p",null,"这些特性组合在一起，我们就可以编写返回函数的函数了。返回的函数能“记住”传给生成函数的参数，并在程序的其他地方使用这些参数。",-1),s("h3",null,"函数组合",-1),s("p",null,[l("通过"),s("em",null,"函数组合"),l("，可能将函数组合在一起形成新的函数。一起来看例子：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 通过 add 和 square 函数组合生成 addThenSquare"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" add = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x + y;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" square = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x * x;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" addThenSquare = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"square"),l("("),s("span",{class:"hljs-title function_"},"add"),l(`( x, y ));
};
`)])],-1),s("p",null,"你可能会发现一直在重复这种利用更小的函数生成一个更复杂的函数的形式。通常编写一个组合函数会更有效率：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" add = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x + y;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" square = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x * x;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" composeTwo = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," f, g "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"g"),l("( "),s("span",{class:"hljs-title function_"},"f"),l(` ( x, y ) );
  };
};

`),s("span",{class:"hljs-keyword"},"const"),l(" addThenSquare = "),s("span",{class:"hljs-title function_"},"composeTwo"),l(`( add, square ); 
`)])],-1),s("p",null,"还可以走得更远，编写一个更一般化的组合函数：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// 这个版本的 composeTwo 的初始化函数可以接收任意数量的参数"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" composeTwo = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," f, g "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," ...args "),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"g"),l("( "),s("span",{class:"hljs-title function_"},"f"),l(`( ...args ) );
  };
};

`),s("span",{class:"hljs-comment"},"// composeMany 可以接收任意数量的函数"),l(`
`),s("span",{class:"hljs-comment"},"// 其初始化函数能接收任意数量的参数"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" composeMany = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," ...args "),l(`) {
  `),s("span",{class:"hljs-keyword"},"const"),l(` funcs = args;
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," ...args "),l(`) {
    funcs.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"}," func "),l(") =>")]),l(` {
      args = [func.`),s("span",{class:"hljs-title function_"},"apply"),l("( "),s("span",{class:"hljs-variable language_"},"this"),l(`, args )]; 
    });
    `),s("span",{class:"hljs-keyword"},"return"),l(" args["),s("span",{class:"hljs-number"},"0"),l(`];
  };
}; 
`)])],-1),s("p",null,"组合函数的最终形式取决于你所需的通用性水平，以及偏好的 API 类型。",-1),s("h3",null,"偏函数（Partial Application）",-1),s("p",null,[s("em",null,"Partial 函数应用"),l(" 指定函数参数中的一个或多个，然后返回一个稍后会被完整调用的函数。")],-1),s("p",null,[l("在下面的例子中，"),s("code",null,"double"),l("、"),s("code",null,"triple"),l(" 和 "),s("code",null,"quadruple"),l(" 都是 "),s("code",null,"multiply"),l(" 函数的 partial 应用。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" multiply = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x * y;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" partApply = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," fn, x "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y "),l(`) {
    `),s("span",{class:"hljs-title function_"},"fn"),l(`( x, y );
  };
};

`),s("span",{class:"hljs-keyword"},"const"),l(" double = "),s("span",{class:"hljs-title function_"},"partApply"),l("( multiply, "),s("span",{class:"hljs-number"},"2"),l(` );
`),s("span",{class:"hljs-keyword"},"const"),l(" triple = "),s("span",{class:"hljs-title function_"},"partApply"),l("( multiply, "),s("span",{class:"hljs-number"},"3"),l(` );
`),s("span",{class:"hljs-keyword"},"const"),l(" quadruple = "),s("span",{class:"hljs-title function_"},"partApply"),l("( multiply, "),s("span",{class:"hljs-number"},"4"),l(` );
`)])],-1),s("h3",null,"柯里化",-1),s("p",null,[s("em",null,"柯里化"),l("是将接收多个参数的函数转换为一系列只接收一个参数的函数的过程。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" multiply = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x * y;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" curry = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," fn "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x "),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y "),l(`) {
      `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"fn"),l(`( x, y );
    };
  };
};

`),s("span",{class:"hljs-keyword"},"const"),l(" curriedMultiply = "),s("span",{class:"hljs-title function_"},"curry"),l(`( multiply );

`),s("span",{class:"hljs-keyword"},"const"),l(" double = "),s("span",{class:"hljs-title function_"},"curriedMultiply"),l("( "),s("span",{class:"hljs-number"},"2"),l(` );
`),s("span",{class:"hljs-keyword"},"const"),l(" triple = "),s("span",{class:"hljs-title function_"},"curriedMultiply"),l("( "),s("span",{class:"hljs-number"},"3"),l(` );
`),s("span",{class:"hljs-keyword"},"const"),l(" quadruple = "),s("span",{class:"hljs-title function_"},"curriedMultiply"),l("( "),s("span",{class:"hljs-number"},"4"),l(` );

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"triple"),l("( "),s("span",{class:"hljs-number"},"6"),l(" )); "),s("span",{class:"hljs-comment"},"// 18 "),l(`
`)])],-1),s("p",null,"柯里化和 partial 应用在概念上很相似（可能不会两个都需要使用），但仍然有所不同。主要区别在于，柯里化总是生成函数套链，每次只接收一个参数，而 partial 应用返回的函数可以一次接收多个参数。 比较它们作用于最少接收三个参数的函数时，这种差别就更明晰了：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" multiply = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x, y, z "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` x * y * z;
};

`),s("span",{class:"hljs-keyword"},"const"),l(" curry = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," fn "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," x "),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y "),l(`) {
      `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," z "),l(`) {
        `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"fn"),l(`( x, y, z );
      };
    };
  };
};

`),s("span",{class:"hljs-keyword"},"const"),l(" partApply = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," fn, x "),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," y, z "),l(`) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"fn"),l(`( x, y, z );
  };
};

`),s("span",{class:"hljs-keyword"},"const"),l(" curriedMultiply = "),s("span",{class:"hljs-title function_"},"curry"),l(`( multiply );
`),s("span",{class:"hljs-keyword"},"const"),l(" partiallyAppliedMultiply = "),s("span",{class:"hljs-title function_"},"partApply"),l("( multiply, "),s("span",{class:"hljs-number"},"10"),l(` );

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"curriedMultiply"),l("( "),s("span",{class:"hljs-number"},"10"),l(" )( "),s("span",{class:"hljs-number"},"5"),l(" )( "),s("span",{class:"hljs-number"},"2"),l(" )); "),s("span",{class:"hljs-comment"},"// 100"),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"partiallyAppliedMultiply"),l("( "),s("span",{class:"hljs-number"},"5"),l(", "),s("span",{class:"hljs-number"},"2"),l(" )); "),s("span",{class:"hljs-comment"},"// 100"),l(`
`)])],-1),s("h2",null,"递归",-1),s("p",null,[s("em",null,"递归"),l("函数是这样一种函数，它会一直调用自身，直至满足基本条件。递归函数是高度声明式的。它们也很优雅，写起来很爽！")],-1),s("p",null,"下面是计算递归计算阶乘的例子：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" factorial = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," n "),l(`) {
  `),s("span",{class:"hljs-keyword"},"if"),l(" ( n === "),s("span",{class:"hljs-number"},"0"),l(` ) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-number"},"1"),l(`;
  }
  `),s("span",{class:"hljs-keyword"},"return"),l(" n * "),s("span",{class:"hljs-title function_"},"factorial"),l("( n - "),s("span",{class:"hljs-number"},"1"),l(` );
};

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"factorial"),l("( "),s("span",{class:"hljs-number"},"10"),l(" )); "),s("span",{class:"hljs-comment"},"// 3628800"),l(`
`)])],-1),s("p",null,"在 JavaScript 中使用递归函数需要细心一些。每次函数调用都会向调用栈（call stack）中加入新的调用帧（call frame），当函数返回的时候，该调用帧从调用栈中弹出。递归函数调用在返回之前调用自身，所以很容易就会超出调用栈的限制，导致程序崩溃。",-1),s("p",null,[l("不过，这可以通过"),s("em",null,"尾调用优化"),l("来避免。")],-1),s("h3",null,"尾调用优化",-1),s("p",null,"尾调用指的是，某个函数的最后一步动作是调用函数。尾调用优化指的是，当语言编译器识别到尾调用的时候，会对其复用相同的调用帧。这意味着，在编写尾调用的递归函数时，调用帧的限制永远不会被超出，因为调用帧会被反复使用。",-1),s("p",null,"下面是将前面的递归函数采用尾递归优化重写之后的例子:",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(" factorial = "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}," n, base "),l(`) {
  `),s("span",{class:"hljs-keyword"},"if"),l(" ( n === "),s("span",{class:"hljs-number"},"0"),l(` ) {
    `),s("span",{class:"hljs-keyword"},"return"),l(` base;
  }
  base *= n;
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"factorial"),l("( n - "),s("span",{class:"hljs-number"},"1"),l(`, base );
};

`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"factorial"),l("( "),s("span",{class:"hljs-number"},"10"),l(", "),s("span",{class:"hljs-number"},"1"),l(" )); "),s("span",{class:"hljs-comment"},"// 3628800"),l(`
`)])],-1),s("p",null,[s("a",{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-tail-position-calls",target:"_blank",rel:"noopener"},"ES2015 语言规范"),l("中已包含了适当的尾部调用的支持，但目前在大部分环境中尚未得到支持。可以在"),s("a",{href:"https://kangax.github.io/compat-table/es6/",target:"_blank",rel:"noopener"},"这里"),l("查看你能否使用。")],-1),s("h2",null,"小结",-1),s("p",null,"函数式编程容纳了许多思想，借助它们可以优化代码。纯函数和不可变数据将副作用的危害最小化，声明式编程让代码可读性大大提高。在与复杂性的斗争中，这些是我们应当拥抱的重要工具。",-1),s("h2",null,"资源",-1),s("h3",null,"概述性",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"https://www.sitepoint.com/series/introduction-functional-javascript/",target:"_blank",rel:"noopener"},"SitePoint: An Introduction to Functional JavaScript")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.cs.utexas.edu/~shmat/courses/cs345/whyfp.pdf",target:"_blank",rel:"noopener"},"John Hughes: Why Functional Programming Matters")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.vasinov.com/blog/16-months-of-functional-programming/",target:"_blank",rel:"noopener"},"Vasily Vasinov: 16 Months of Functional Programming")])]),s("li",null,[s("p",null,[s("a",{href:"http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html",target:"_blank",rel:"noopener"},"Stephen Young: Functional programming with Javascript")])]),s("li",null,[s("p",null,[s("a",{href:"http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/",target:"_blank",rel:"noopener"},"James Sinclair: A Gentle Introduction to Functional JavaScript")])])],-1),s("h3",null,"副作用",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"https://en.wikipedia.org/wiki/Side_effect_(computer_science)",target:"_blank",rel:"noopener"},"Wikipedia: Side effect (computer science)")])]),s("li",null,[s("p",null,[s("a",{href:"http://stackoverflow.com/questions/763835/are-side-effects-a-good-thing",target:"_blank",rel:"noopener"},"Stack Overflow: Are side effects a good thing?")])])],-1),s("h3",null,"不可变性",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"https://www.sitepoint.com/immutability-javascript/",target:"_blank",rel:"noopener"},"Site Point: Immutability in JavaScript")])]),s("li",null,[s("p",null,[s("a",{href:"https://auth0.com/blog/2016/03/23/intro-to-immutable-js/",target:"_blank",rel:"noopener"},"Auth0: Introduction to Immutable.js and Functional Programming Concepts")])]),s("li",null,[s("p",null,[s("a",{href:"http://programmers.stackexchange.com/questions/151733/if-immutable-objects-are-good-why-do-people-keep-creating-mutable-objects",target:"_blank",rel:"noopener"},"Stack Exchange: If immutable objects are good, why do people keep creating mutable objects?")])]),s("li",null,[s("p",null,[s("a",{href:"http://stackoverflow.com/questions/34385243/why-is-immutability-so-importantor-needed-in-javascript",target:"_blank",rel:"noopener"},"Stack Overflow: Why is immutability so important(or needed) in javascript?")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.youtube.com/watch?v=I7IdS-PbEgI&t=14m8s",target:"_blank",rel:"noopener"},"React.js Conf 2015 - Immutable Data and React (video)")])]),s("li",null,[s("p",null,[s("a",{href:"https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread",target:"_blank",rel:"noopener"},"Redux: Avoiding Array Mutations with concat(), slice(), and …spread (video)")])]),s("li",null,[s("p",null,[s("a",{href:"https://egghead.io/lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread",target:"_blank",rel:"noopener"},"Redux: Avoiding Object Mutations with Object.assign() and …spread (video)")])])],-1),s("h3",null,"纯函数",-1),s("ul",null,[s("li",null,[s("a",{href:"https://egghead.io/lessons/javascript-redux-pure-and-impure-functions",target:"_blank",rel:"noopener"},"Redux: Pure and Impure Functions")])],-1),s("h3",null,"函数生成",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"http://eloquentjavascript.net/05_higher_order.html",target:"_blank",rel:"noopener"},"Eloquent JavaScript: Higher-Order Functions")])]),s("li",null,[s("p",null,[s("a",{href:"http://scott.sauyet.com/Javascript/Talk/Compose/2013-05-22/#slide-0",target:"_blank",rel:"noopener"},"Scott Sauyet: Compose Yourself: Fun with Functions")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.vasinov.com/blog/on-currying-and-partial-function-application/",target:"_blank",rel:"noopener"},"Vasily Vasinov: On Currying and Partial Function Application")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.2ality.com/2011/09/currying-vs-part-eval.html",target:"_blank",rel:"noopener"},"2ality: Currying versus partial application")])])],-1),s("h3",null,"递归",-1),s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"http://stackoverflow.com/questions/3021/what-is-recursion-and-when-should-i-use-it",target:"_blank",rel:"noopener"},"Stack Overflow: What is recursion and when should I use it?")])]),s("li",null,[s("p",null,[s("a",{href:"https://medium.com/functional-javascript/recursion-282a6abbf3c5#.i913o81g3",target:"_blank",rel:"noopener"},"Medium: Recursion")])]),s("li",null,[s("p",null,[s("a",{href:"http://benignbemine.github.io/2015/07/19/es6-tail-calls/",target:"_blank",rel:"noopener"},"Kyle Owen: ES6 Tail Call Optimization Explained")])]),s("li",null,[s("p",null,[s("a",{href:"https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/",target:"_blank",rel:"noopener"},"Don Taylor: Functional JavaScript – Tail Call Optimization and Trampolines")])]),s("li",null,[s("p",null,[s("a",{href:"http://www.integralist.co.uk/posts/js-recursion.html",target:"_blank",rel:"noopener"},"Mark McDonnell: Understanding recursion in functional JavaScript programming")])])],-1)])]),_:1})}}};export{j as default};
