import{_ as t}from"./BV7Yc4PX.js";import{c,w as p,o as r,a as s,b as l}from"./B1kHp8qp.js";import"./8oskhlv7.js";const m={__name:"functional-refactor-typescript",setup(o){const n={title:"[译] 函数式 TypeScript",description:"函数式 TypeScript",keywords:"翻译,TypeScript,函数式编程",pathname:"functional-refactor-typescript",translation:{author:"@Victor Savkin",social:"https://twitter.com/victorsavkin",from:"https://vsavkin.com/functional-typescript-316f0e003dc6#.h1njvc96o"},create_time:"2016-09-28",prev:{title:"[译] yarn 和 npm 命令行小抄",pathname:"npm-vs-yarn-cheat-sheet"},next:{title:"笔记：TypeScript 中引用全局变量",pathname:"ts-note-on-global-reference"}};return(i,a)=>{const e=t;return r(),c(e,{data:n},{default:p(()=>[...a[0]||(a[0]=[s("p",null,[s("img",{loading:"lazy",src:"https://p2.ssl.qhimg.com/t01aeda500508da54ce.png",alt:""})],-1),s("p",null,[l("谈到函数式编程时，我们常提到机制、方法，而不是核心原则。函数式编程不是关于 Monad、Monoid 和 Zipper 这些概念的，虽然它们确实很有用。从根本上来说，函数式编程就是关于如使用通用的可复用函数进行组合编程。"),s("strong",null,"本文是我在重构 TypeScript 代码时使用函数式的一些思考的结果。")],-1),s("p",null,"首先，我们需要用到以下几项技术：",-1),s("ul",null,[s("li",null,"尽可能使用函数代替简单值"),s("li",null,"数据转换过程管道化"),s("li",null,"提取通用函数")],-1),s("p",null,"来，开始吧！",-1),s("p",null,"假设我们有两个类，Employee 和 Department。Employee 有 name 和 salary 属性，Department 只是 Employee 的简单集合。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Employee"),l(` {
  `),s("span",{class:"hljs-title function_"},"constructor"),l("("),s("span",{class:"hljs-params"},"public name: string, public salary: number"),l(`) {}
}

`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Department"),l(` {
  `),s("span",{class:"hljs-title function_"},"constructor"),l("("),s("span",{class:"hljs-params"},"public employees: Employee[]"),l(`) {}

  `),s("span",{class:"hljs-title function_"},"works"),l("("),s("span",{class:"hljs-attr"},"employee"),l(": "),s("span",{class:"hljs-title class_"},"Employee"),l(`): boolean {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"employees"),l("."),s("span",{class:"hljs-title function_"},"indexOf"),l("(employee) > -"),s("span",{class:"hljs-number"},"1"),l(`;
  }
}
`)])],-1),s("p",null,"我们要重构的是 averageSalary 函数。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], minSalary: number, department?: Department"),l(`): number {
   `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`;
   `),s("span",{class:"hljs-keyword"},"let"),l(" count = "),s("span",{class:"hljs-number"},"0"),l(`;

   employees.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
     `),s("span",{class:"hljs-keyword"},"if"),l("(minSalary <= e."),s("span",{class:"hljs-property"},"salary"),l(" && (department === "),s("span",{class:"hljs-literal"},"undefined"),l(" || department."),s("span",{class:"hljs-title function_"},"works"),l(`(e))){
       total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
       count += `),s("span",{class:"hljs-number"},"1"),l(`;
     }
   });

  `),s("span",{class:"hljs-keyword"},"return"),l(" total === "),s("span",{class:"hljs-number"},"0"),l(" ? "),s("span",{class:"hljs-number"},"0"),l(` : total / count;
 }
`)])],-1),s("p",null,"averageSalary 函数接收 employee 数组、最低薪资 minSalary 以及可选的 department 作为参数。如果传了 department 参数，函数会计算该部门中所有员工的平均薪资；若不传，则对全部员工进行计算。",-1),s("p",null,"该函数的使用方式如下：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-title function_"},"describe"),l("("),s("span",{class:"hljs-string"},'"average salary"'),l(", "),s("span",{class:"hljs-function"},"() =>"),l(` {
  `),s("span",{class:"hljs-keyword"},"const"),l(` empls = [
    `),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Employee"),l("("),s("span",{class:"hljs-string"},'"Jim"'),l(", "),s("span",{class:"hljs-number"},"100"),l(`),
    `),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Employee"),l("("),s("span",{class:"hljs-string"},'"John"'),l(", "),s("span",{class:"hljs-number"},"200"),l(`),
    `),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Employee"),l("("),s("span",{class:"hljs-string"},'"Liz"'),l(", "),s("span",{class:"hljs-number"},"120"),l(`),
    `),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Employee"),l("("),s("span",{class:"hljs-string"},'"Penny"'),l(", "),s("span",{class:"hljs-number"},"30"),l(`)
  ];

  `),s("span",{class:"hljs-keyword"},"const"),l(" sales = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Department"),l("([empls["),s("span",{class:"hljs-number"},"0"),l("], empls["),s("span",{class:"hljs-number"},"1"),l(`]]);

  `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"calculates the average salary"'),l(", "),s("span",{class:"hljs-function"},"() =>"),l(` {
    `),s("span",{class:"hljs-title function_"},"expect"),l("("),s("span",{class:"hljs-title function_"},"averageSalary"),l("(empls, "),s("span",{class:"hljs-number"},"50"),l(", sales))."),s("span",{class:"hljs-title function_"},"toEqual"),l("("),s("span",{class:"hljs-number"},"150"),l(`);
    `),s("span",{class:"hljs-title function_"},"expect"),l("("),s("span",{class:"hljs-title function_"},"averageSalary"),l("(empls, "),s("span",{class:"hljs-number"},"50"),l("))."),s("span",{class:"hljs-title function_"},"toEqual"),l("("),s("span",{class:"hljs-number"},"140"),l(`);
  });
});
`)])],-1),s("p",null,"需求虽简单粗暴，可就算不提代码难以拓展，其混乱是显而易见的。若新增条件，函数签名及接口就不得不发生变动，if 语句也会也越来越臃肿可怕。",-1),s("p",null,"我们一起用一些函数式编程的办法重构这个函数吧。",-1),s("h2",null,"使用函数代替简单值",-1),s("p",null,"**使用函数代替简单值看起来似乎不太直观，但这却是整理归纳代码的强大办法。**在我们的例子中，这样做，意味着要将 minSalary 和 department 参数替换成两个条件检验的函数。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("type "),s("span",{class:"hljs-title class_"},"Predicate"),l(" = "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e: Employee"),l(") =>")]),l(` boolean;

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},`employees: Employee[], salaryCondition: Predicate,
  departmentCondition?: Predicate`),l(`): number {
  `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`;
  `),s("span",{class:"hljs-keyword"},"let"),l(" count = "),s("span",{class:"hljs-number"},"0"),l(`;

  employees.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
    `),s("span",{class:"hljs-keyword"},"if"),l("("),s("span",{class:"hljs-title function_"},"salaryCondition"),l("(e) && (departmentCondition === "),s("span",{class:"hljs-literal"},"undefined"),l(" || "),s("span",{class:"hljs-title function_"},"departmentCondition"),l(`(e))){
      total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
      count += `),s("span",{class:"hljs-number"},"1"),l(`;
    }
  });

  `),s("span",{class:"hljs-keyword"},"return"),l(" total === "),s("span",{class:"hljs-number"},"0"),l(" ? "),s("span",{class:"hljs-number"},"0"),l(` : total / count;
}

`),s("span",{class:"hljs-comment"},"// ..."),l(`

`),s("span",{class:"hljs-title function_"},"expect"),l("("),s("span",{class:"hljs-title function_"},"averageSalary"),l("(empls, "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" e."),s("span",{class:"hljs-property"},"salary"),l(" > "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" sales."),s("span",{class:"hljs-title function_"},"works"),l("(e)))."),s("span",{class:"hljs-title function_"},"toEqual"),l("("),s("span",{class:"hljs-number"},"150"),l(`);
`)])],-1),s("p",null,[l("** 我们所做的就是将 salary、department 两个条件接口统一起来。**而此前这两个条件是写死的，现在它们被明确定义了，并且遵循一致的接口。"),s("strong",null,"这次整合允许我们将所有条件作为数组传递。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`;
  `),s("span",{class:"hljs-keyword"},"let"),l(" count = "),s("span",{class:"hljs-number"},"0"),l(`;

  employees.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
    `),s("span",{class:"hljs-keyword"},"if"),l("(conditions."),s("span",{class:"hljs-title function_"},"every"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"c"),l(" =>")]),l(),s("span",{class:"hljs-title function_"},"c"),l(`(e))){
      total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
      count += `),s("span",{class:"hljs-number"},"1"),l(`;
    }
  });
  `),s("span",{class:"hljs-keyword"},"return"),l(" (count === "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(` : total / count;
}

`),s("span",{class:"hljs-comment"},"//..."),l(`

`),s("span",{class:"hljs-title function_"},"expect"),l("("),s("span",{class:"hljs-title function_"},"averageSalary"),l("(empls, ["),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" e."),s("span",{class:"hljs-property"},"salary"),l(" > "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" sales."),s("span",{class:"hljs-title function_"},"works"),l("(e)]))."),s("span",{class:"hljs-title function_"},"toEqual"),l("("),s("span",{class:"hljs-number"},"150"),l(`);
`)])],-1),s("p",null,"条件数组只不过是组合的条件，可以用一个简单的组合器将它们放到一起，这样看起来更加明晰。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"and"),l("("),s("span",{class:"hljs-params"},"predicates: Predicate[]"),l("): "),s("span",{class:"hljs-title class_"},"Predicate"),l(` {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" predicates."),s("span",{class:"hljs-title function_"},"every"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"p"),l(" =>")]),l(),s("span",{class:"hljs-title function_"},"p"),l(`(e));
}

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`;
  `),s("span",{class:"hljs-keyword"},"let"),l(" count = "),s("span",{class:"hljs-number"},"0"),l(`;

  employees.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
    `),s("span",{class:"hljs-keyword"},"if"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions)(e)){
      total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
      count += `),s("span",{class:"hljs-number"},"1"),l(`;
    }
  });
  `),s("span",{class:"hljs-keyword"},"return"),l(" (count == "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(` : total / count;
}
`)])],-1),s("p",null,"值得注意的是，“and” 组合器是通用的，可以复用并且还可能拓展为库。",-1),s("p",null,[s("strong",null,"提起结果")],-1),s("p",null,[l("现在，averageSalary 函数已健壮得多了。"),s("strong",null,"我们可以加入新条件，无需破坏函数接口或改变函数实现。")],-1),s("h2",null,"数据转换过程管道化",-1),s("p",null,"函数式编程的另外一个很有用的实践是将所有数据转换过程变成管道。在本例中，就是将 filter 过程提取到循环外面。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"const"),l(" filtered = employees."),s("span",{class:"hljs-title function_"},"filter"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions));

  `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`
  `),s("span",{class:"hljs-keyword"},"let"),l(" count = "),s("span",{class:"hljs-number"},"0"),l(`

  filtered.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
    total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
    count += `),s("span",{class:"hljs-number"},"1"),l(`;
  });

  `),s("span",{class:"hljs-keyword"},"return"),l(" (count == "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(` : total / count;
}
`)])],-1),s("p",null,"这样一来计数的 count 就没什么用了。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number{
  `),s("span",{class:"hljs-keyword"},"const"),l(" filtered = employees."),s("span",{class:"hljs-title function_"},"filter"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions));

  `),s("span",{class:"hljs-keyword"},"let"),l(" total = "),s("span",{class:"hljs-number"},"0"),l(`
  filtered.`),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(` {
    total += e.`),s("span",{class:"hljs-property"},"salary"),l(`;
  });

  `),s("span",{class:"hljs-keyword"},"return"),l(" (filtered."),s("span",{class:"hljs-property"},"length"),l(" == "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(" : total / filtered."),s("span",{class:"hljs-property"},"length"),l(`;
}
`)])],-1),s("p",null,"接下来，如在叠加之前将 salary 摘取出来，求和过程就变成简单的 reduce 了。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"const"),l(" filtered = employees."),s("span",{class:"hljs-title function_"},"filter"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions));
  `),s("span",{class:"hljs-keyword"},"const"),l(" salaries = filtered."),s("span",{class:"hljs-title function_"},"map"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),l(" =>")]),l(" e."),s("span",{class:"hljs-property"},"salary"),l(`);

  `),s("span",{class:"hljs-keyword"},"const"),l(" total = salaries."),s("span",{class:"hljs-title function_"},"reduce"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"a,b"),l(") =>")]),l(" a + b, "),s("span",{class:"hljs-number"},"0"),l(`);
  `),s("span",{class:"hljs-keyword"},"return"),l(" (salaries."),s("span",{class:"hljs-property"},"length"),l(" == "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(" : total / salaries."),s("span",{class:"hljs-property"},"length"),l(`;
}
`)])],-1),s("h2",null,"提取通用函数",-1),s("p",null,"接着我们发现，最后两行代码和当前域完全没什么关系。其中不包含任何与员工、部门相关的信息。仅仅只是一个计算平均数的函数。所以也将其提取出来。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"average"),l("("),s("span",{class:"hljs-params"},"nums: number[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"const"),l(" total = nums."),s("span",{class:"hljs-title function_"},"reduce"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"a,b"),l(") =>")]),l(" a + b, "),s("span",{class:"hljs-number"},"0"),l(`);
  `),s("span",{class:"hljs-keyword"},"return"),l(" (nums."),s("span",{class:"hljs-property"},"length"),l(" == "),s("span",{class:"hljs-number"},"0"),l(") ? "),s("span",{class:"hljs-number"},"0"),l(" : total / nums."),s("span",{class:"hljs-property"},"length"),l(`;
}

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"const"),l(" filtered = employees."),s("span",{class:"hljs-title function_"},"filter"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions));
  `),s("span",{class:"hljs-keyword"},"const"),l(" salaries = filtered."),s("span",{class:"hljs-title function_"},"map"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),l(" =>")]),l(" e."),s("span",{class:"hljs-property"},"salary"),l(`);
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"average"),l(`(salaries);
}
`)])],-1),s("p",null,"又一次，提取出的函数是完全通用的。",-1),s("p",null,"最后，将所有 salary 部分提出来之后，我们得到终极方案。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"employeeSalaries"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number[] {
  `),s("span",{class:"hljs-keyword"},"const"),l(" filtered = employees."),s("span",{class:"hljs-title function_"},"filter"),l("("),s("span",{class:"hljs-title function_"},"and"),l(`(conditions));
  `),s("span",{class:"hljs-keyword"},"return"),l(" filtered."),s("span",{class:"hljs-title function_"},"map"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),l(" =>")]),l(" e."),s("span",{class:"hljs-property"},"salary"),l(`);
}

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"averageSalary"),l("("),s("span",{class:"hljs-params"},"employees: Employee[], conditions: Predicate[]"),l(`): number {
  `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"average"),l("("),s("span",{class:"hljs-title function_"},"employeeSalaries"),l(`(employees, conditions));
}
`)])],-1),s("p",null,"对比原始方案和终极方案，我敢说，毫无疑问，后者更棒。首先，它更通用（我们可以不破坏函数接口的情况下添加新类型的判断条件）。其次，我们从可变状态（mutable state）和 if 语句中解脱出来，这使代码更容易阅读、理解。",-1),s("h2",null,"何时收手",-1),s("p",null,"函数式风格的编程中，我们会编写许多小型函数，它们接收一个集合，返回新的集合。这些函数能够以不同方式组合、复用 —— 棒极了。不过，这种风格的一个缺点是代码可能会变得过度抽象，导致难以读懂，那些函数组合在一起到底要干嘛？",-1),s("p",null,"我喜欢使用乐高来类比：乐高积木能够以不同形式放在一起 —— 它们是可组合的。但注意，并不是所有积木都是一小块。所以，在使用本文所述技巧进行代码重构时，千万别妄图将一切都变成接收数组、返回数组的函数。诚然，这样一些函数组合使用极度容易，可它们也会显著降低我们对程序的理解能力。",-1),s("h2",null,"小结",-1),s("p",null,"本文展示了如何使用函数式思维重构 TypeScript 代码。我所遵循的是以下几点规则：",-1),s("ul",null,[s("li",null,"尽可能使用函数代替简单值"),s("li",null,"数据转换过程管道化"),s("li",null,"提取通用函数")],-1),s("h2",null,"了解更多",-1),s("p",null,"强烈推荐以下两本书：",-1),s("ul",null,[s("li",null,[s("a",{href:"https://leanpub.com/javascript-allonge",target:"_blank",rel:"noopener"},"“JavaScript Allonge” by Reginald Braithwaite")]),s("li",null,[s("a",{href:"http://shop.oreilly.com/product/0636920028857.do",target:"_blank",rel:"noopener"},"“Functional JavaScript” by Michael Fogus")])],-1),s("hr",null,null,-1),s("p",null,[s("a",{href:"https://twitter.com/victorsavkin",target:"_blank",rel:"noopener"},"关注 @victorsavkin"),l(" 获得更多关于 Angular 和 TypeScript 的知识。")],-1)])]),_:1})}}};export{m as default};
