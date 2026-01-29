import{_ as p}from"./Bm2Oy-cY.js";import{c as o,w as i,o as e,a as s,b as n,t as j}from"./YobvFIQM.js";const u={class:"hljs lang-javascript"},m={class:"hljs-string"},f={__name:"javascript-weekly-306-notes",setup(d){const t={title:"JavaScript Weekly 306 阅读笔记",description:" JavaScript Weekly 306 阅读笔记",keywords:"原创,阅读笔记,Angular 2",pathname:"javascript-weekly-306-notes",translation:null,create_time:"2016-10-21",prev:{title:"关于前端常见算法面试题的一些思考",pathname:"front-end-interview-algo-questions"},next:{title:"[译] yarn 和 npm 命令行小抄",pathname:"npm-vs-yarn-cheat-sheet"}};return(a,l)=>{const r=p;return e(),o(r,{data:t},{default:i(()=>[l[169]||(l[169]=s("h2",null,[s("code",null,"$(document).ready"),n(" 方法")],-1)),l[170]||(l[170]=s("ul",null,[s("li",null,[s("p",null,[n("jQuery 3 中"),s("code",null,"$(document).ready(handler)"),n(" 等方法被 deprecated，仅保留 "),s("code",null,"$(handler)")])]),s("li",null,[s("p",null,[s("code",null,"$('img').ready"),n(" 这种方式，和 "),s("code",null,"$(document).ready"),n(" 没有任何区别")])]),s("li",null,[s("p",null,[s("code",null,"$(selector).ready(handler)"),n(" 这种是低效的，且会造成不必要的误解")])]),s("li",null,[s("p",null,[n("脚本放在 "),s("code",null,"<body>"),n(" 最底部的话，完全不需要 ready；")])])],-1)),l[171]||(l[171]=s("p",null,"原生代码实现：",-1)),l[172]||(l[172]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),n(" callback = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`){
  `),s("span",{class:"hljs-comment"},"// Handler when the DOM is fully loaded"),n(`
};

`),s("span",{class:"hljs-keyword"},"if"),n(` (
    `),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-property"},"readyState"),n(" === "),s("span",{class:"hljs-string"},'"complete"'),n(` ||
    (`),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-property"},"readyState"),n(" !== "),s("span",{class:"hljs-string"},'"loading"'),n(" && !"),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-property"},"documentElement"),n("."),s("span",{class:"hljs-property"},"doScroll"),n(`)
) {
  `),s("span",{class:"hljs-title function_"},"callback"),n(`();
} `),s("span",{class:"hljs-keyword"},"else"),n(` {
  `),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-title function_"},"addEventListener"),n("("),s("span",{class:"hljs-string"},'"DOMContentLoaded"'),n(`, callback);
}

`),s("span",{class:"hljs-comment"},"// IE <= 8 "),n(`
`),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-title function_"},"attachEvent"),n("("),s("span",{class:"hljs-string"},'"onreadystatechange"'),n(", "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"}),n(`){
  `),s("span",{class:"hljs-comment"},"// check if the DOM is fully loaded"),n(`
  `),s("span",{class:"hljs-keyword"},"if"),n("("),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-property"},"readyState"),n(" === "),s("span",{class:"hljs-string"},'"complete"'),n(`){
    `),s("span",{class:"hljs-comment"},"// remove the listener, to make sure it isn't fired in future"),n(`
    `),s("span",{class:"hljs-variable language_"},"document"),n("."),s("span",{class:"hljs-title function_"},"detachEvent"),n("("),s("span",{class:"hljs-string"},'"onreadystatechange"'),n(", "),s("span",{class:"hljs-variable language_"},"arguments"),n("."),s("span",{class:"hljs-property"},"callee"),n(`);
    `),s("span",{class:"hljs-comment"},"// The actual handler..."),n(`
  }
});
`)])],-1)),l[173]||(l[173]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"https://www.sitepoint.com/jquery-document-ready-plain-javascript/",target:"_blank",rel:"noopener"},"Quick Tip: Replace jQuery’s Ready() with Plain JavaScript")])],-1)),l[174]||(l[174]=s("h2",null,"Yarn vs NPM",-1)),l[175]||(l[175]=s("ul",null,[s("li",null,[s("p",null,"shrinkwrap "),s("ul",null,[s("li",null,"yarn 会自动更新 yarn.lock 文件，npm 需要手动维护"),s("li",null,[s("a",{href:"https://yarnpkg.com/en/docs/configuration#toc-use-yarn-lock-to-pin-your-dependencies",target:"_blank",rel:"noopener"},"yarn.lock 文档")]),s("li",null,[s("a",{href:"https://docs.npmjs.com/cli/shrinkwrap",target:"_blank",rel:"noopener"},"npm shrinkwrap 文档")])])]),s("li",null,[s("p",null,"yarn 并行安装；npm 串行安装")]),s("li",null,[s("p",null,[n("命令行差异：见原文，也可参见"),s("a",{href:"http://www.wemlion.com/2016/npm-vs-yarn-cheat-sheet/",target:"_blank",rel:"noopener"},"Yarn 和 Npm 命令行小抄"),n("译文")])])],-1)),l[176]||(l[176]=s("h2",null,"Angular 2 Reactive Forms",-1)),l[177]||(l[177]=s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"https://toddmotto.com/angular-2-forms-reactive",target:"_blank",rel:"noopener"},[s("strong",null,"reactive")]),n(" ==> "),s("strong",null,"ReactiveFormsModule")])]),s("li",null,[s("p",null,[s("a",{href:"https://toddmotto.com/angular-2-forms-template-driven",target:"_blank",rel:"noopener"},[s("strong",null,"template-driven")]),n(" ==> "),s("strong",null,"FormsModule")])]),s("li",null,[s("p",null,[s("code",null,"import { ReactiveFormsModule } from '@angular/forms';")])]),s("li",null,[s("p",null,[s("code",null,"import { FormControl, FormGroup, Validators } from '@angular/forms';")])])],-1)),l[178]||(l[178]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"SignupFormComponent"),n(" implements "),s("span",{class:"hljs-title class_"},"OnInit"),n(` {
  `),s("span",{class:"hljs-attr"},"user"),n(": "),s("span",{class:"hljs-title class_"},"FormGroup"),n(`;
  `),s("span",{class:"hljs-title function_"},"constructor"),n("("),s("span",{class:"hljs-params"}),n(`) {}
  `),s("span",{class:"hljs-title function_"},"ngOnInit"),n("("),s("span",{class:"hljs-params"}),n(`) {
    `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"user"),n(" = "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormGroup"),n(`({
      `),s("span",{class:"hljs-attr"},"name"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", ["),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-title function_"},"minLength"),n("("),s("span",{class:"hljs-number"},"2"),n(`)]),
      `),s("span",{class:"hljs-attr"},"account"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormGroup"),n(`({
	`),s("span",{class:"hljs-attr"},"email"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`),
	`),s("span",{class:"hljs-attr"},"confirm"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`)
      })
    });
  }
  `),s("span",{class:"hljs-title function_"},"onSubmit"),n("("),s("span",{class:"hljs-params"},"{ value, valid }: { value: User, valid: boolean }"),n(`) {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n(`(value, valid);
  }
}
`)])],-1)),l[179]||(l[179]=s("ul",null,[s("li",null,[s("code",null,"import { FormBuilder, FormGroup, Validators } from '@angular/forms';")])],-1)),l[180]||(l[180]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[n("@"),s("span",{class:"hljs-title class_"},"Component"),n(`({...})
`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"SignupFormComponent"),n(" implements "),s("span",{class:"hljs-title class_"},"OnInit"),n(` {
  `),s("span",{class:"hljs-attr"},"user"),n(": "),s("span",{class:"hljs-title class_"},"FormGroup"),n(`;
  `),s("span",{class:"hljs-title function_"},"constructor"),n("("),s("span",{class:"hljs-params"},"private fb: FormBuilder"),n(`) {}
  `),s("span",{class:"hljs-title function_"},"ngOnInit"),n("("),s("span",{class:"hljs-params"}),n(`) {
    `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"user"),n(" = "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"fb"),n("."),s("span",{class:"hljs-title function_"},"group"),n(`({
      `),s("span",{class:"hljs-attr"},"name"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", ["),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-title function_"},"minLength"),n("("),s("span",{class:"hljs-number"},"2"),n(`)]],
      `),s("span",{class:"hljs-attr"},"account"),n(": "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"fb"),n("."),s("span",{class:"hljs-title function_"},"group"),n(`({
	`),s("span",{class:"hljs-attr"},"email"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`],
	`),s("span",{class:"hljs-attr"},"confirm"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`]
      })
    });
  }
  `),s("span",{class:"hljs-title function_"},"onSubmit"),n("("),s("span",{class:"hljs-params"},"{ value, valid }: { value: User, valid: boolean }"),n(`) {
    `),s("span",{class:"hljs-variable language_"},"console"),n("."),s("span",{class:"hljs-title function_"},"log"),n(`(value, valid);
  }
}
`)])],-1)),l[181]||(l[181]=s("ul",null,[s("li",null,"FormBuilder 和 FormControl 对比")],-1)),l[182]||(l[182]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// before"),n(`
`),s("span",{class:"hljs-title function_"},"ngOnInit"),n("("),s("span",{class:"hljs-params"}),n(`) {
  `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"user"),n(" = "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormGroup"),n(`({
    `),s("span",{class:"hljs-attr"},"name"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", ["),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-title function_"},"minLength"),n("("),s("span",{class:"hljs-number"},"2"),n(`)]),
    `),s("span",{class:"hljs-attr"},"account"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormGroup"),n(`({
      `),s("span",{class:"hljs-attr"},"email"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`),
      `),s("span",{class:"hljs-attr"},"confirm"),n(": "),s("span",{class:"hljs-keyword"},"new"),n(),s("span",{class:"hljs-title class_"},"FormControl"),n("("),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`)
    })
  });
}

`),s("span",{class:"hljs-comment"},"// after"),n(`
`),s("span",{class:"hljs-title function_"},"ngOnInit"),n("("),s("span",{class:"hljs-params"}),n(`) {
  `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"user"),n(" = "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"fb"),n("."),s("span",{class:"hljs-title function_"},"group"),n(`({
    `),s("span",{class:"hljs-attr"},"name"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", ["),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-title function_"},"minLength"),n("("),s("span",{class:"hljs-number"},"2"),n(`)]],
    `),s("span",{class:"hljs-attr"},"account"),n(": "),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"fb"),n("."),s("span",{class:"hljs-title function_"},"group"),n(`({
      `),s("span",{class:"hljs-attr"},"email"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`],
      `),s("span",{class:"hljs-attr"},"confirm"),n(": ["),s("span",{class:"hljs-string"},"''"),n(", "),s("span",{class:"hljs-title class_"},"Validators"),n("."),s("span",{class:"hljs-property"},"required"),n(`]
    })
  });
}
`)])],-1)),l[183]||(l[183]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"https://toddmotto.com/angular-2-forms-reactive",target:"_blank",rel:"noopener"},"Angular 2 form fundamentals: reactive forms")])],-1)),l[184]||(l[184]=s("h2",null,"ES2016 Strict Mode",-1)),l[185]||(l[185]=s("ul",null,[s("li",null,[n("以下情况下，函数体内不能使用 "),s("code",null,'"use strict"'),n("："),s("ul",null,[s("li",null,"参数有默认值"),s("li",null,"参数解构"),s("li",null,"rest 参数")])])],-1)),l[186]||(l[186]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// syntax error in ECMAScript 2016"),n(`
`),s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title function_"},"doSomething"),n("("),s("span",{class:"hljs-params"},"a, b=a"),n(`) {
    `),s("span",{class:"hljs-string"},'"use strict"'),n(`;
    `),s("span",{class:"hljs-comment"},"// code"),n(`
}

`),s("span",{class:"hljs-comment"},"// syntax error in ECMAScript 2016"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" doSomething = "),s("span",{class:"hljs-keyword"},"function"),n("("),s("span",{class:"hljs-params"},"{a, b}"),n(`) {
    `),s("span",{class:"hljs-string"},'"use strict"'),n(`;
    `),s("span",{class:"hljs-comment"},"// code"),n(`
};

`),s("span",{class:"hljs-comment"},"// syntax error in ECMAScript 2016"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"doSomething"),n(" = ("),s("span",{class:"hljs-params"},"...a"),n(`) => {
    `),s("span",{class:"hljs-string"},'"use strict"'),n(`;
    `),s("span",{class:"hljs-comment"},"// code"),n(`
};
`)])],-1)),l[187]||(l[187]=s("blockquote",null,[s("p",null,[n("the specification indicated that "),s("strong",null,"parameter lists should be parsed in the same mode as the function body"),n(' (which means the "use strict" directive in the function body must trigger strict mode).')])],-1)),l[188]||(l[188]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"https://www.nczonline.net/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/",target:"_blank",rel:"noopener"},"The ECMAScript 2016 change you probably don't know")])],-1)),l[189]||(l[189]=s("h2",null,"Asynchronous Iteration",-1)),l[190]||(l[190]=s("ul",null,[s("li",null,"参见原文"),s("li",null,[n("Alternative 1: Communicating Sequential Processes (CSP), "),s("a",{href:"https://github.com/ubolonton/js-csp",target:"_blank",rel:"noopener"},"js-csp")]),s("li",null,"Alternative 2: Reactive Programming")],-1)),l[191]||(l[191]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"https://www.nczonline.net/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/",target:"_blank",rel:"noopener"},"The ECMAScript 2016 change you probably don't know")])],-1)),l[192]||(l[192]=s("h2",null,"Angular 2 变化",-1)),l[193]||(l[193]=s("p",null,[n("其实我就看上了 "),s("a",{href:"https://plnkr.co/edit/oydh0yvV27hlQPA8wEYP?p=preview",target:"_blank",rel:"noopener"},"Demo"),n(" 中的两段代码，很有启发：")],-1)),s("pre",null,[s("code",u,[l[0]||(l[0]=s("span",{class:"hljs-comment"},"//our root app component",-1)),l[1]||(l[1]=n(`
`,-1)),l[2]||(l[2]=s("span",{class:"hljs-keyword"},"import",-1)),l[3]||(l[3]=n(" {",-1)),l[4]||(l[4]=s("span",{class:"hljs-title class_"},"Component",-1)),l[5]||(l[5]=n(", ",-1)),l[6]||(l[6]=s("span",{class:"hljs-title class_"},"NgModule",-1)),l[7]||(l[7]=n(", ",-1)),l[8]||(l[8]=s("span",{class:"hljs-title class_"},"Input",-1)),l[9]||(l[9]=n(", trigger, state, animate, transition, style, ",-1)),l[10]||(l[10]=s("span",{class:"hljs-title class_"},"HostListener",-1)),l[11]||(l[11]=n(" } ",-1)),l[12]||(l[12]=s("span",{class:"hljs-keyword"},"from",-1)),l[13]||(l[13]=n()),l[14]||(l[14]=s("span",{class:"hljs-string"},"'@angular/core'",-1)),l[15]||(l[15]=n(`
`,-1)),l[16]||(l[16]=s("span",{class:"hljs-keyword"},"import",-1)),l[17]||(l[17]=n(" {",-1)),l[18]||(l[18]=s("span",{class:"hljs-title class_"},"BrowserModule",-1)),l[19]||(l[19]=n("} ",-1)),l[20]||(l[20]=s("span",{class:"hljs-keyword"},"from",-1)),l[21]||(l[21]=n()),l[22]||(l[22]=s("span",{class:"hljs-string"},"'@angular/platform-browser'",-1)),l[23]||(l[23]=n(`
`,-1)),l[24]||(l[24]=s("span",{class:"hljs-keyword"},"import",-1)),l[25]||(l[25]=n(" {",-1)),l[26]||(l[26]=s("span",{class:"hljs-title class_"},"Tooltip",-1)),l[27]||(l[27]=n("} ",-1)),l[28]||(l[28]=s("span",{class:"hljs-keyword"},"from",-1)),l[29]||(l[29]=n()),l[30]||(l[30]=s("span",{class:"hljs-string"},"'./tooltip.directive'",-1)),l[31]||(l[31]=n(`;

@`,-1)),l[32]||(l[32]=s("span",{class:"hljs-title class_"},"Component",-1)),l[33]||(l[33]=n(`({
  selector : `,-1)),l[34]||(l[34]=s("span",{class:"hljs-string"},"'toggle'",-1)),l[35]||(l[35]=n(`,
  `,-1)),l[36]||(l[36]=s("span",{class:"hljs-attr"},"animations",-1)),l[37]||(l[37]=n(`: [
    `,-1)),l[38]||(l[38]=s("span",{class:"hljs-title function_"},"trigger",-1)),l[39]||(l[39]=n("(",-1)),l[40]||(l[40]=s("span",{class:"hljs-string"},"'toggle'",-1)),l[41]||(l[41]=n(`, [
      `,-1)),l[42]||(l[42]=s("span",{class:"hljs-title function_"},"state",-1)),l[43]||(l[43]=n("(",-1)),l[44]||(l[44]=s("span",{class:"hljs-string"},"'true'",-1)),l[45]||(l[45]=n(", ",-1)),l[46]||(l[46]=s("span",{class:"hljs-title function_"},"style",-1)),l[47]||(l[47]=n("({ ",-1)),l[48]||(l[48]=s("span",{class:"hljs-attr"},"opacity",-1)),l[49]||(l[49]=n(": ",-1)),l[50]||(l[50]=s("span",{class:"hljs-number"},"1",-1)),l[51]||(l[51]=n("; ",-1)),l[52]||(l[52]=s("span",{class:"hljs-attr"},"color",-1)),l[53]||(l[53]=n(": ",-1)),l[54]||(l[54]=s("span",{class:"hljs-string"},"'red'",-1)),l[55]||(l[55]=n(` })),
      `,-1)),l[56]||(l[56]=s("span",{class:"hljs-title function_"},"state",-1)),l[57]||(l[57]=n("(",-1)),l[58]||(l[58]=s("span",{class:"hljs-string"},"'void'",-1)),l[59]||(l[59]=n(", ",-1)),l[60]||(l[60]=s("span",{class:"hljs-title function_"},"style",-1)),l[61]||(l[61]=n("({ ",-1)),l[62]||(l[62]=s("span",{class:"hljs-attr"},"opacity",-1)),l[63]||(l[63]=n(": ",-1)),l[64]||(l[64]=s("span",{class:"hljs-number"},"0",-1)),l[65]||(l[65]=n("; ",-1)),l[66]||(l[66]=s("span",{class:"hljs-attr"},"color",-1)),l[67]||(l[67]=n(": ",-1)),l[68]||(l[68]=s("span",{class:"hljs-string"},"'blue'",-1)),l[69]||(l[69]=n(` })),
      `,-1)),l[70]||(l[70]=s("span",{class:"hljs-title function_"},"transition",-1)),l[71]||(l[71]=n("(",-1)),l[72]||(l[72]=s("span",{class:"hljs-string"},"':enter'",-1)),l[73]||(l[73]=n(", ",-1)),l[74]||(l[74]=s("span",{class:"hljs-title function_"},"animate",-1)),l[75]||(l[75]=n("(",-1)),l[76]||(l[76]=s("span",{class:"hljs-string"},"'500ms ease-in-out'",-1)),l[77]||(l[77]=n(`)),
      `,-1)),l[78]||(l[78]=s("span",{class:"hljs-title function_"},"transition",-1)),l[79]||(l[79]=n("(",-1)),l[80]||(l[80]=s("span",{class:"hljs-string"},"':leave'",-1)),l[81]||(l[81]=n(", ",-1)),l[82]||(l[82]=s("span",{class:"hljs-title function_"},"animate",-1)),l[83]||(l[83]=n("(",-1)),l[84]||(l[84]=s("span",{class:"hljs-string"},"'500ms ease-in-out'",-1)),l[85]||(l[85]=n(`))
    ])
  ],
  `,-1)),l[86]||(l[86]=s("span",{class:"hljs-attr"},"template",-1)),l[87]||(l[87]=n(": ",-1)),l[88]||(l[88]=s("span",{class:"hljs-string"},`\`
  <div class="toggle" [@toggle]="show" *ngIf="show">
    <ng-content></ng-content>
  </div>\``,-1)),l[89]||(l[89]=n(`
})
`,-1)),l[90]||(l[90]=s("span",{class:"hljs-keyword"},"export",-1)),l[91]||(l[91]=n()),l[92]||(l[92]=s("span",{class:"hljs-keyword"},"class",-1)),l[93]||(l[93]=n()),l[94]||(l[94]=s("span",{class:"hljs-title class_"},"Toggle",-1)),l[95]||(l[95]=n(` {
  @`,-1)),l[96]||(l[96]=s("span",{class:"hljs-title class_"},"Input",-1)),l[97]||(l[97]=n("() ",-1)),l[98]||(l[98]=s("span",{class:"hljs-attr"},"show",-1)),l[99]||(l[99]=n(":boolean = ",-1)),l[100]||(l[100]=s("span",{class:"hljs-literal"},"true",-1)),l[101]||(l[101]=n(`;
  @`,-1)),l[102]||(l[102]=s("span",{class:"hljs-title class_"},"HostListener",-1)),l[103]||(l[103]=n("(",-1)),l[104]||(l[104]=s("span",{class:"hljs-string"},"'document:click'",-1)),l[105]||(l[105]=n(`)
  `,-1)),l[106]||(l[106]=s("span",{class:"hljs-title function_"},"onClick",-1)),l[107]||(l[107]=n("(",-1)),l[108]||(l[108]=s("span",{class:"hljs-params"},null,-1)),l[109]||(l[109]=n(`){
    `,-1)),l[110]||(l[110]=s("span",{class:"hljs-variable language_"},"this",-1)),l[111]||(l[111]=n(".",-1)),l[112]||(l[112]=s("span",{class:"hljs-property"},"show",-1)),l[113]||(l[113]=n("=!",-1)),l[114]||(l[114]=s("span",{class:"hljs-variable language_"},"this",-1)),l[115]||(l[115]=n(".",-1)),l[116]||(l[116]=s("span",{class:"hljs-property"},"show",-1)),l[117]||(l[117]=n(`;
  }
}

@`,-1)),l[118]||(l[118]=s("span",{class:"hljs-title class_"},"Component",-1)),l[119]||(l[119]=n(`({
  `,-1)),l[120]||(l[120]=s("span",{class:"hljs-attr"},"selector",-1)),l[121]||(l[121]=n(": ",-1)),l[122]||(l[122]=s("span",{class:"hljs-string"},"'my-app'",-1)),l[123]||(l[123]=n(`,
  `,-1)),l[124]||(l[124]=s("span",{class:"hljs-attr"},"template",-1)),l[125]||(l[125]=n(": ",-1)),s("span",m,`\`
    <div>
      <div tooltip>Click to toggle animations</div>
      <h2>Hello `+j(a.name)+`</h2>
      <toggle>Hey!</toggle>
    </div>
  \``,1),l[126]||(l[126]=n(`,
})
`,-1)),l[127]||(l[127]=s("span",{class:"hljs-keyword"},"export",-1)),l[128]||(l[128]=n()),l[129]||(l[129]=s("span",{class:"hljs-keyword"},"class",-1)),l[130]||(l[130]=n()),l[131]||(l[131]=s("span",{class:"hljs-title class_"},"App",-1)),l[132]||(l[132]=n(` {
  `,-1)),l[133]||(l[133]=s("span",{class:"hljs-attr"},"name",-1)),l[134]||(l[134]=n(`:string;
  `,-1)),l[135]||(l[135]=s("span",{class:"hljs-title function_"},"constructor",-1)),l[136]||(l[136]=n("(",-1)),l[137]||(l[137]=s("span",{class:"hljs-params"},null,-1)),l[138]||(l[138]=n(`) {
    `,-1)),l[139]||(l[139]=s("span",{class:"hljs-variable language_"},"this",-1)),l[140]||(l[140]=n(".",-1)),l[141]||(l[141]=s("span",{class:"hljs-property"},"name",-1)),l[142]||(l[142]=n(" = ",-1)),l[143]||(l[143]=s("span",{class:"hljs-string"},"'Angular 2.1'",-1)),l[144]||(l[144]=n(`
  }
}

@`,-1)),l[145]||(l[145]=s("span",{class:"hljs-title class_"},"NgModule",-1)),l[146]||(l[146]=n(`({
  `,-1)),l[147]||(l[147]=s("span",{class:"hljs-attr"},"imports",-1)),l[148]||(l[148]=n(": [ ",-1)),l[149]||(l[149]=s("span",{class:"hljs-title class_"},"BrowserModule",-1)),l[150]||(l[150]=n(` ],
  `,-1)),l[151]||(l[151]=s("span",{class:"hljs-attr"},"declarations",-1)),l[152]||(l[152]=n(": [ ",-1)),l[153]||(l[153]=s("span",{class:"hljs-title class_"},"App",-1)),l[154]||(l[154]=n(", ",-1)),l[155]||(l[155]=s("span",{class:"hljs-title class_"},"Toggle",-1)),l[156]||(l[156]=n(", ",-1)),l[157]||(l[157]=s("span",{class:"hljs-title class_"},"Tooltip",-1)),l[158]||(l[158]=n(` ],
  `,-1)),l[159]||(l[159]=s("span",{class:"hljs-attr"},"bootstrap",-1)),l[160]||(l[160]=n(": [ ",-1)),l[161]||(l[161]=s("span",{class:"hljs-title class_"},"App",-1)),l[162]||(l[162]=n(` ]
})
`,-1)),l[163]||(l[163]=s("span",{class:"hljs-keyword"},"export",-1)),l[164]||(l[164]=n()),l[165]||(l[165]=s("span",{class:"hljs-keyword"},"class",-1)),l[166]||(l[166]=n()),l[167]||(l[167]=s("span",{class:"hljs-title class_"},"AppModule",-1)),l[168]||(l[168]=n(` {}
`,-1))])]),l[194]||(l[194]=s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"// tooltip.directive.ts"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" {"),s("span",{class:"hljs-title class_"},"Directive"),n(", "),s("span",{class:"hljs-title class_"},"ElementRef"),n(", "),s("span",{class:"hljs-title class_"},"HostListener"),n("} "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},'"@angular/core"'),n(`;

@`),s("span",{class:"hljs-title class_"},"Directive"),n(`({
  `),s("span",{class:"hljs-attr"},"selector"),n(": "),s("span",{class:"hljs-string"},"'[tooltip]'"),n(`,
  `),s("span",{class:"hljs-attr"},"host"),n(`: {
    `),s("span",{class:"hljs-string"},"'[class.tooltip]'"),n(": "),s("span",{class:"hljs-string"},'"true"'),n(`,
  }
})
`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"Tooltip"),n(` {
  `),s("span",{class:"hljs-title function_"},"constructor"),n("("),s("span",{class:"hljs-params"},"private div: ElementRef"),n(`) { }
  
  @`),s("span",{class:"hljs-title class_"},"HostListener"),n("("),s("span",{class:"hljs-string"},"'document:mousemove'"),n(", ["),s("span",{class:"hljs-string"},"'$event'"),n(`])
  `),s("span",{class:"hljs-title function_"},"mousemove"),n("("),s("span",{class:"hljs-params"},"e: MouseEvent"),n(`){
    `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"div"),n("."),s("span",{class:"hljs-property"},"nativeElement"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"display"),n(" = "),s("span",{class:"hljs-string"},'"block"'),n(`;
    `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"div"),n("."),s("span",{class:"hljs-property"},"nativeElement"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"top"),n(" = e."),s("span",{class:"hljs-property"},"pageY"),n(" + "),s("span",{class:"hljs-number"},"15"),n(" + "),s("span",{class:"hljs-string"},'"px"'),n(`;
    `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"div"),n("."),s("span",{class:"hljs-property"},"nativeElement"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"left"),n(" = e."),s("span",{class:"hljs-property"},"pageX"),n(" + "),s("span",{class:"hljs-number"},"10"),n(" + "),s("span",{class:"hljs-string"},'"px"'),n(`;
  }
  
  @`),s("span",{class:"hljs-title class_"},"HostListener"),n("("),s("span",{class:"hljs-string"},"'document:mouseout'"),n(", ["),s("span",{class:"hljs-string"},"'$event'"),n(`])
  `),s("span",{class:"hljs-title function_"},"mouseout"),n("("),s("span",{class:"hljs-params"},"e: MouseEvent"),n(`){
    `),s("span",{class:"hljs-keyword"},"var"),n(),s("span",{class:"hljs-keyword"},"from"),n(" = e."),s("span",{class:"hljs-property"},"relatedTarget"),n(" || e."),s("span",{class:"hljs-property"},"toElement"),n(`;
    `),s("span",{class:"hljs-keyword"},"if"),n(" (!"),s("span",{class:"hljs-keyword"},"from"),n(" || "),s("span",{class:"hljs-keyword"},"from"),n("."),s("span",{class:"hljs-property"},"nodeName"),n(" == "),s("span",{class:"hljs-string"},'"HTML"'),n(`) {
      `),s("span",{class:"hljs-variable language_"},"this"),n("."),s("span",{class:"hljs-property"},"div"),n("."),s("span",{class:"hljs-property"},"nativeElement"),n("."),s("span",{class:"hljs-property"},"style"),n("."),s("span",{class:"hljs-property"},"display"),n(" = "),s("span",{class:"hljs-string"},'"none"'),n(`;
    }
  }
}
`)])],-1)),l[195]||(l[195]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"https://medium.com/google-developer-experts/angular-2-new-features-in-angular-2-1-94132b1888f0#.wegekey62",target:"_blank",rel:"noopener"},"Angular 2 — New features in Angular 2.1")])],-1)),l[196]||(l[196]=s("h2",null,"编写自己的 .d.ts",-1)),l[197]||(l[197]=s("p",null,"写得挺详细，需要的时候可以参阅",-1)),l[198]||(l[198]=s("p",null,[s("small",null,[n("原文："),s("a",{href:"http://blog.wolksoftware.com/contributing-to-definitelytyped",target:"_blank",rel:"noopener"},"How to Create Your Own TypeScript Type Definition Files (.d.ts)")])],-1)),l[199]||(l[199]=s("h2",null,"更多",-1)),l[200]||(l[200]=s("p",null,[n("see "),s("a",{href:"http://javascriptweekly.com/issues/306",target:"_blank",rel:"noopener"},"http://javascriptweekly.com/issues/306")],-1))]),_:1})}}};export{f as default};
