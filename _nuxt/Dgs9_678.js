import{_ as t}from"./Bm2Oy-cY.js";import{c as p,w as c,o as r,a as s,b as l}from"./YobvFIQM.js";const j={__name:"writing-a-lambda-calculus-interpreter-in-javascript",setup(o){const n={title:"[译] 小两百行 JavaScript 打造 lambda 演算解释器",description:"小两百行 JavaScript 打造lambda 演算解释器",keywords:"翻译,JavaScript",pathname:"writing-a-lambda-calculus-interpreter-in-javascript",translation:{author:"Tadeu Zagallo",social:"http://tadeuzagallo.com/blog/about/",from:"http://tadeuzagallo.com/blog/writing-a-lambda-calculus-interpreter-in-javascript/"},create_time:"2016-06-27",prev:{title:"[译] 防火墙背后的笔记：Web 设计在中国",pathname:"notes-from-behind-the-firewall-the-state-of-web-design-in-china"},next:{title:"[译] 无限滚动加载最佳实践",pathname:"infinite-scrolling-best-practices"}};return(i,a)=>{const e=t;return r(),p(e,{data:n},{default:c(()=>[...a[0]||(a[0]=[s("p",null,[l("最近，我发了一条"),s("a",{href:"https://twitter.com/tadeuzagallo/status/742836038264098817",target:"_blank",rel:"noopener"},"推特"),l("，我喜欢上 lambda 演算了，它简单、强大。")],-1),s("p",null,[l("我当然听说过 lambda 演算，但直到我读了这本书 "),s("a",{href:"https://www.cis.upenn.edu/~bcpierce/tapl",target:"_blank",rel:"noopener"},"《类型和编程语言》（Types and Programming Languages）"),l(" 我才体会到其中美妙。")],-1),s("p",null,"已经有许多编译器/解析器/解释器（compiler / parser / interpreter）的教程，但大多数不会引导你完整实现一种语言，因为实现完全的语言语义，通常需要很多工作。不过在本文中， lambda 演算（译者注：又写作“λ 演算”，为统一行文，下文一律作 “lambda 演算”）是如此简单，我们可以搞定一切！",-1),s("p",null,[l("首先，什么是 lambda 演算呢？"),s("a",{href:"https://en.wikipedia.org/wiki/Lambda_calculus",target:"_blank",rel:"noopener"},"维基百科"),l("是这样描述的:")],-1),s("blockquote",null,[s("p",null,"lambda 演算（又写作 “λ 演算”）是表达基于功能抽象和使用变量绑定和替代的应用计算数学逻辑形式系统。这是一个通用的计算模型，可以用来模拟单带图灵机，在 20 世纪 30 年代，由数学家奥隆索·乔奇第一次引入，作为数学基础的调查的一部分。")],-1),s("p",null,"这是一个非常简单的 lambda 演算程序的模样：",-1),s("pre",null,[s("code",{class:"hljs lang-haskell"},`(λx. λy. x) (λy. y) (λx. x)
`)],-1),s("p",null,"lambda 演算中只有两个结构，函数抽象（也就是函数声明）和应用（即函数调用），然而可以拿它做任何计算。",-1),s("h2",null,"1. 语法",-1),s("p",null,[l("编写解析器之前，我们需要知道的第一件事是我们将要解析的语言的语法是什么，这是 "),s("a",{href:"https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form",target:"_blank",rel:"noopener"},"BNF"),l("（译者注：Backus–Naur Form，巴科斯范式， 上下文无关的语法的标记技术） 表达式：")],-1),s("pre",null,[s("code",null,`Term ::= Application
        | LAMBDA LCID DOT Term

Application ::= Application Atom
               | Atom

Atom ::= LPAREN Term RPAREN
        | LCID
`)],-1),s("p",null,"语法告诉我们如何在分析过程中寻找 token 。但是等一下，token 是什么鬼？",-1),s("h2",null,"2. Tokens",-1),s("p",null,[l("正如你可能已经知道的，解析器不会操作源代码。在开始解析之前，先通过 "),s("code",null,"词法分析器（lexer）"),l(" 运行源码，这会将源码打散成 token（语法中全大写的部分）。我们可以从上面的语法中提取的如下的 token ：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-attr"},"LPAREN"),l(": "),s("span",{class:"hljs-string"},"'('"),l(`
`),s("span",{class:"hljs-attr"},"RPAREN"),l(": "),s("span",{class:"hljs-string"},"')'"),l(`
`),s("span",{class:"hljs-attr"},"LAMBDA"),l(": "),s("span",{class:"hljs-string"},"'λ'"),l(),s("span",{class:"hljs-comment"},"// 为了方便也可以使用 “\\”"),l(`
`),s("span",{class:"hljs-attr"},"DOT"),l(": "),s("span",{class:"hljs-string"},"'.'"),l(`
`),s("span",{class:"hljs-attr"},"LCID"),l(": "),s("span",{class:"hljs-regexp"},"/[a-z][a-zA-Z]*/"),l(),s("span",{class:"hljs-comment"},"// LCID 表示小写标识符"),l(`
                       `),s("span",{class:"hljs-comment"},"// 即任何一个小写字母开头的字符串"),l(`
`)])],-1),s("p",null,[l("我们来建一个可以包含 "),s("code",null,"type"),l(" （以上的任意一种）的 "),s("code",null,"Token"),l(" 类，以及一个可选的 value (比如 "),s("code",null,"LCID"),l(" 的字符串)。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Token"),l(` {
  `),s("span",{class:"hljs-title function_"},"constructor"),l("("),s("span",{class:"hljs-params"},"type, value"),l(`) {
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"type"),l(` = type;
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"value"),l(` = value;
  }
};
`)])],-1),s("h2",null,"3. 词法分析器( Lexer )",-1),s("p",null,[l("现在我们可以拿上面定义的 token 来写 "),s("code",null,"词法分析器（Lexer）"),l(" 了， 为解析器解析程序提供一个很棒的 "),s("em",null,"API"),l(" 。")],-1),s("p",null,"词法分析器的 token 生成的部分不是很好玩：这是一个大的 switch 语句，用来检查源代码中的下一个字符：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"_nextToken"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-keyword"},"switch"),l(` (c) {
    `),s("span",{class:"hljs-keyword"},"case"),l(),s("span",{class:"hljs-string"},"'λ'"),l(`:
    `),s("span",{class:"hljs-keyword"},"case"),l(),s("span",{class:"hljs-string"},"'\\\\'"),l(`:
      `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"_token"),l(" = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Token"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LAMBDA"),l(`);
      `),s("span",{class:"hljs-keyword"},"break"),l(`;

    `),s("span",{class:"hljs-keyword"},"case"),l(),s("span",{class:"hljs-string"},"'.'"),l(`:
      `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"_token"),l(" = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Token"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"DOT"),l(`);
      `),s("span",{class:"hljs-keyword"},"break"),l(`;

    `),s("span",{class:"hljs-keyword"},"case"),l(),s("span",{class:"hljs-string"},"'('"),l(`:
      `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"_token"),l(" = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Token"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LPAREN"),l(`);
      `),s("span",{class:"hljs-keyword"},"break"),l(`;

    `),s("span",{class:"hljs-comment"},"/* ... */"),l(`
  }
}
`)])],-1),s("p",null,"下面这些方法是处理 token 的辅助方法：",-1),s("ul",null,[s("li",null,[s("code",null,"next(Token)"),l(": 返回下一个 token 是否匹配 "),s("code",null,"Token")]),s("li",null,[s("code",null,"skip(Token)"),l(": 和 "),s("code",null,"next"),l(" 一样, 但如果匹配的话会跳过")]),s("li",null,[s("code",null,"match(Token)"),l(": 断言 "),s("code",null,"next"),l(" 方法返回 true 并 "),s("code",null,"skip")]),s("li",null,[s("code",null,"token(Token)"),l(": 断言 "),s("code",null,"next"),l(" 方法返回 true 并返回 token")])],-1),s("p",null,"OK，现在来看 “解析器”！",-1),s("h2",null,"4. 解析器",-1),s("p",null,[l("解析器基本上是语法的一个副本。我们基于每个 production 规则的名称（"),s("code",null,"::="),l(" 的左侧）为其创建一个方法，再来看右侧内容 —— 如果是全大写的单词，说明它是一个 "),s("em",null,"终止符"),l(" （即一个 token ），词法分析器会用到它。如果是一个大写字母开头的单词，这是另外一段，所以同样为其调用 production 规则的方法。遇到 “/” （读作 “或”）的时候，要决定使用那一侧，这取决于基于哪一侧匹配我们的 token。")],-1),s("p",null,[l("这个语法有点棘手的地方是：手写的解析器通常是"),s("a",{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",target:"_blank",rel:"noopener"},"递归下降（recursive descent）"),l("的（我们的就是），它们无法处理左侧递归。你可能已经注意到了， "),s("code",null,"Application"),l(" 的右侧开头包含 "),s("code",null,"Application"),l(" 本身。所以如果我们只是遵循前面段落说到的流程，调用我们找到的所有 production，会导致无限递归。")],-1),s("p",null,"幸运的是左递归可以用一个简单的技巧移除掉：",-1),s("pre",null,[s("code",null,`Application ::= Atom Application'

Application' ::= Atom Application'
                | ε  # empty
`)],-1),s("h3",null,"4.1. 抽象语法树 （AST）",-1),s("p",null,[l("进行分析时，需要以存储分析出的信息，为此要建立 "),s("a",{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank",rel:"noopener"},"抽象语法树 ( AST )"),l(" 。lambda 演算的 AST 非常简单，因为我们只有 3 种节点： Abstraction （抽象）， Application （应用）以及 Identifier （标识符）（译者注： 为方便理解，这三个单词不译）。")],-1),s("p",null,[s("em",null,"Abstraction"),l(" 持有其参数（param） 和主体（body）； "),s("em",null,"Application"),l(" 则持有语句的左右侧； "),s("em",null,"Identifier"),l(" 是一个叶节点，只有持有该标识符本身的字符串表示形式。")],-1),s("p",null,"这是一个简单的程序及其 AST:",-1),s("pre",null,[s("code",null,`(λx. x) (λy. y)

Application {
  abstraction: Abstraction {
    param: Identifier { name: 'x' },
    body: Identifier { name: 'x' }
  },
  value: Abstraction {
    param: Identifier { name: 'y' },
    body: Identifier { name: 'y' }
  }
}
`)],-1),s("h3",null,"4.2. 解析器的实现",-1),s("p",null,"现在有了我们的 AST 节点，可以拿它们来建构真正的树了。下面是基于语法中的生成规则的分析方法：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"term"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-comment"},"// Term ::= LAMBDA LCID DOT Term"),l(`
  `),s("span",{class:"hljs-comment"},"//        | Application"),l(`
  `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"skip"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LAMBDA"),l(`)) {
    `),s("span",{class:"hljs-keyword"},"const"),l(" id = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-title class_"},"Identifier"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"token"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LCID"),l(")."),s("span",{class:"hljs-property"},"value"),l(`);
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"match"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"DOT"),l(`);
    `),s("span",{class:"hljs-keyword"},"const"),l(" term = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"term"),l(`();
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-title class_"},"Abstraction"),l(`(id, term);
  }  `),s("span",{class:"hljs-keyword"},"else"),l(` {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"application"),l(`();
  }
}

`),s("span",{class:"hljs-title function_"},"application"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-comment"},"// Application ::= Atom Application'"),l(`
  `),s("span",{class:"hljs-keyword"},"let"),l(" lhs = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"atom"),l(`();
  `),s("span",{class:"hljs-keyword"},"while"),l(" ("),s("span",{class:"hljs-literal"},"true"),l(`) {
    `),s("span",{class:"hljs-comment"},"// Application' ::= Atom Application'"),l(`
    `),s("span",{class:"hljs-comment"},"//                | ε"),l(`
    `),s("span",{class:"hljs-keyword"},"const"),l(" rhs = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"atom"),l(`();
    `),s("span",{class:"hljs-keyword"},"if"),l(` (!rhs) {
      `),s("span",{class:"hljs-keyword"},"return"),l(` lhs;
    } `),s("span",{class:"hljs-keyword"},"else"),l(` {
      lhs = `),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-title class_"},"Application"),l(`(lhs, rhs);
    }
  }
}

`),s("span",{class:"hljs-title function_"},"atom"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-comment"},"// Atom ::= LPAREN Term RPAREN"),l(`
  `),s("span",{class:"hljs-comment"},"//        | LCID"),l(`
  `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"skip"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LPAREN"),l(`)) {
    `),s("span",{class:"hljs-keyword"},"const"),l(" term = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"term"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"RPAREN"),l(`);
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"match"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"RPAREN"),l(`);
    `),s("span",{class:"hljs-keyword"},"return"),l(` term;
  } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"next"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LCID"),l(`)) {
    `),s("span",{class:"hljs-keyword"},"const"),l(" id = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-title class_"},"Identifier"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"lexer"),l("."),s("span",{class:"hljs-title function_"},"token"),l("("),s("span",{class:"hljs-title class_"},"Token"),l("."),s("span",{class:"hljs-property"},"LCID"),l(")."),s("span",{class:"hljs-property"},"value"),l(`);
    `),s("span",{class:"hljs-keyword"},"return"),l(` id;
  } `),s("span",{class:"hljs-keyword"},"else"),l(` {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-literal"},"undefined"),l(`;
  }
}
`)])],-1),s("h2",null,"5. 求值（Evaluation）",-1),s("p",null,"现在，我们可以用 AST 来给程序求值了。不过想知道我们的解释器长什么样子，还得先看看 lambda 的求值规则。",-1),s("h3",null,"5.1. 求值规则",-1),s("p",null,"首先，我们需要定义，什么是形式（terms）（从语法可以推断），什么是值（values）。",-1),s("p",null,"我们的 term 是:",-1),s("pre",null,[s("code",null,`t1 t2   # Application

λx. t1  # Abstraction

x       # Identifier
`)],-1),s("p",null,"是的，这些几乎和我们的 AST 节点一模一样！但这其中哪些是 value？",-1),s("p",null,"value 是最终的形式，也就是说，它们不能再被求值了。在这个例子中，唯一的既是 term 又是 value 的是 abstraction（不能对函数求值，除非它被调用）。",-1),s("p",null,"实际的求值规则如下：",-1),s("pre",null,[s("code",null,`1)       t1 -> t1'
     _________________

      t1 t2 -> t1' t2

2)       t2 -> t2'
     ________________

      v1 t2 -> v1 t2'

3)    (λx. t12) v2 -> [x -> v2]t12 
`)],-1),s("p",null,"我们可以这样解读每一条规则：",-1),s("ol",null,[s("li",null,[l("如果 "),s("code",null,"t1"),l(" 是值为 "),s("code",null,"t1'"),l(" 的项， "),s("code",null,"t1 t2"),l(" 求值为 "),s("code",null,"t1' t2"),l("。即一个 application 的左侧先被求值。")]),s("li",null,[l("如果 "),s("code",null,"t2"),l(" 是值为 "),s("code",null,"t2'"),l(" 的项， "),s("code",null,"v1 t2"),l(" 求值为 "),s("code",null,"v1 t2'"),l("。注意这里左侧的是 "),s("code",null,"v1"),l(" 而非 "),s("code",null,"t1"),l("， 这意味着它是 value，不能再一步被求值，也就是说，只有左侧的完成之后，才会对右侧求值。")]),s("li",null,[l("application "),s("code",null,"(λx. t12) v2"),l(" 的结果，和 "),s("code",null,"t12"),l(" 中出现的所有 "),s("code",null,"x"),l(" 被有效替换之后是一样的。注意在对 application 求值之前，两侧必须都是 value。")])],-1),s("h3",null,"5.2. 解释器",-1),s("p",null,"解释器遵循求值规则，将一个程序归化为 value。现在我们将上面的规则用 JavaScript 写出来：",-1),s("p",null,"首先定义一个工具，当某个节点是 value 的时候告诉我们：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-title function_"},"isValue"),l(" = node => node "),s("span",{class:"hljs-keyword"},"instanceof"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-property"},"Abstraction"),l(`;
`)])],-1),s("p",null,"好了，如果 node 是 abstraction，它就是 value；否则就不是。",-1),s("p",null,"接下来是解释器起作用的地方：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-title function_"},"eval"),l(" = ("),s("span",{class:"hljs-params"},"ast, context={}"),l(`) => {
  `),s("span",{class:"hljs-keyword"},"while"),l(" ("),s("span",{class:"hljs-literal"},"true"),l(`) {
    `),s("span",{class:"hljs-keyword"},"if"),l(" (ast "),s("span",{class:"hljs-keyword"},"instanceof"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-property"},"Application"),l(`) {
      `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-title function_"},"isValue"),l("(ast."),s("span",{class:"hljs-property"},"lhs"),l(") && "),s("span",{class:"hljs-title function_"},"isValue"),l("(ast."),s("span",{class:"hljs-property"},"rhs"),l(`)) {
        context[ast.`),s("span",{class:"hljs-property"},"lhs"),l("."),s("span",{class:"hljs-property"},"param"),l("."),s("span",{class:"hljs-property"},"name"),l("] = ast."),s("span",{class:"hljs-property"},"rhs"),l(`;
        ast = `),s("span",{class:"hljs-built_in"},"eval"),l("(ast."),s("span",{class:"hljs-property"},"lhs"),l("."),s("span",{class:"hljs-property"},"body"),l(`, context);
      } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-title function_"},"isValue"),l("(ast."),s("span",{class:"hljs-property"},"lhs"),l(`)) {
        ast.`),s("span",{class:"hljs-property"},"rhs"),l(" = "),s("span",{class:"hljs-built_in"},"eval"),l("(ast."),s("span",{class:"hljs-property"},"rhs"),l(", "),s("span",{class:"hljs-title class_"},"Object"),l("."),s("span",{class:"hljs-title function_"},"assign"),l(`({}, context));
      } `),s("span",{class:"hljs-keyword"},"else"),l(` {
        ast.`),s("span",{class:"hljs-property"},"lhs"),l(" = "),s("span",{class:"hljs-built_in"},"eval"),l("(ast."),s("span",{class:"hljs-property"},"lhs"),l(`, context);
      }
    } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" (ast "),s("span",{class:"hljs-keyword"},"instanceof"),l(),s("span",{class:"hljs-variable constant_"},"AST"),l("."),s("span",{class:"hljs-property"},"Identifier"),l(`) {
       ast = context[ast.`),s("span",{class:"hljs-property"},"name"),l(`];
    } `),s("span",{class:"hljs-keyword"},"else"),l(` {
      `),s("span",{class:"hljs-keyword"},"return"),l(` ast;
    }
  }
};
`)])],-1),s("p",null,"代码有点密，但睁大眼睛好好看下，可以看到编码后的规则：",-1),s("ul",null,[s("li",null,[l("首先检测其是否为 application，如果是，则对其求值："),s("ul",null,[s("li",null,[l("若 abstraction 的两侧都是值，只要将所有出现的 "),s("code",null,"x"),l(" 用给出的值替换掉； (3)")]),s("li",null,"否则，若左侧为值，给右侧求值；(2)"),s("li",null,"如果上面都不行，只对左侧求值；(1)")])]),s("li",null,"现在，如果下一个节点是 identifier，我们只需将它替换为它所表示的变量绑定的值。"),s("li",null,"最后，如果没有规则适用于AST，这意味着它已经是一个 value，我们将它返回。")],-1),s("p",null,"另外一个值得提出的是上下文（context）。上下文持有从名字到值（AST节点）的绑定，举例来说，调用一个函数时，就说你说传的参数绑定到函数需要的变量上，然后再对函数体求值。",-1),s("p",null,"克隆上下文能保证一旦我们完成对右侧的求值，绑定的变量会从作用域出来，因为我们还持有原来的上下文。",-1),s("p",null,"如果不克隆上下文， application 右侧引入的绑定可能泄露并可以在左侧获取到 —— 这是不应当的。考虑下面的代码：",-1),s("pre",null,[s("code",{class:"hljs lang-haskell"},`(λx. y) ((λy. y) (λx. x))
`)],-1),s("p",null,[l("这显然是无效程序： 最左侧 abstraction 中的标识符 "),s("code",null,"y"),l("没有被绑定。来看下如果不克隆上下文，求值最后变成什么样。")],-1),s("p",null,[l("左侧已经是一个 value，所以对右侧求值。这是个 application，所以会将 "),s("code",null,"(λx .x)"),l(" 与 "),s("code",null,"y"),l(" 绑定，然后对 "),s("code",null,"(λy. y)"),l(" 求值，而这就是 "),s("code",null,"y"),l(" 本身。所以最后的求值就成了 "),s("code",null,"(λx. x)"),l("。")],-1),s("p",null,[l("到目前，我们完成了右侧，它是 value，而 "),s("code",null,"y"),l(" 超出了作用域，因为我们退出了 "),s("code",null,"(λy. y)"),l("， 如果求值的时候不克隆上下文，我们会得到一个变化过的的上下文，绑定就会泄漏，"),s("code",null,"y"),l(" 的值就是 "),s("code",null,"(λx. x)"),l("，最后得到错误的结果。")],-1),s("h2",null,"6. Printing",-1),s("p",null,"OK， 现在差不多完成了：已经可以将一个程序归化为 value，我们要做的就是想办法将这个 value 表示出来。",-1),s("p",null,[l("一个简单的 办法是为每个AST节点添加 "),s("code",null," toString方法"),l("：")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"/* Abstraction */"),l(),s("span",{class:"hljs-title function_"},"toString"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-string"},[l("`(λ"),s("span",{class:"hljs-subst"},[l("${"),s("span",{class:"hljs-variable language_"},"this"),l(".param.toString()}")]),l(". "),s("span",{class:"hljs-subst"},[l("${"),s("span",{class:"hljs-variable language_"},"this"),l(".body.toString()}")]),l(")`")]),l(`;
}

`),s("span",{class:"hljs-comment"},"/* Application */"),l(),s("span",{class:"hljs-title function_"},"toString"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-string"},[l("`"),s("span",{class:"hljs-subst"},[l("${"),s("span",{class:"hljs-variable language_"},"this"),l(".lhs.toString()}")]),l(),s("span",{class:"hljs-subst"},[l("${"),s("span",{class:"hljs-variable language_"},"this"),l(".rhs.toString()}")]),l("`")]),l(`;
}

`),s("span",{class:"hljs-comment"},"/* Identifier */"),l(),s("span",{class:"hljs-title function_"},"toString"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"name"),l(`;
}
`)])],-1),s("p",null,[l("现在我们可以在结果的根节点上调用 "),s("code",null,"toString"),l("方法，它会递归打印所有子节点， 以生成字符串表示形式。")],-1),s("h2",null,"7. 组合起来",-1),s("p",null,"我们需要一个脚本，将所有这些部分连接在一起，代码看起来是这样的：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// assuming you have some source"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" source = "),s("span",{class:"hljs-string"},"'(λx. λy. x) (λx. x) (λy. y)'"),l(`;

`),s("span",{class:"hljs-comment"},"// wire all the pieces together"),l(`
`),s("span",{class:"hljs-keyword"},"const"),l(" lexer = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Lexer"),l(`(source);
`),s("span",{class:"hljs-keyword"},"const"),l(" parser = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Parser"),l(`(lexer);
`),s("span",{class:"hljs-keyword"},"const"),l(" ast = parser."),s("span",{class:"hljs-title function_"},"parse"),l(`();
`),s("span",{class:"hljs-keyword"},"const"),l(" result = "),s("span",{class:"hljs-title class_"},"Interpreter"),l("."),s("span",{class:"hljs-built_in"},"eval"),l(`(ast);

`),s("span",{class:"hljs-comment"},"// stringify the resulting node and print it"),l(`
`),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(result."),s("span",{class:"hljs-title function_"},"toString"),l(`());
`)])],-1),s("h2",null,"源代码",-1),s("p",null,[l("完整实现可以在 Github 上找到： "),s("a",{href:"https://github.com/tadeuzagallo/lc-js",target:"_blank",rel:"noopener"},"github.com/tadeuzagallo/lc-js")],-1),s("h4",null,"完成了！",-1),s("p",null,"感谢阅读，一如既往地欢迎你的反馈！",-1)])]),_:1})}}};export{j as default};
