import{_ as c}from"./BV7Yc4PX.js";import{c as t,w as r,o as p,a as s,b as a}from"./B1kHp8qp.js";import"./8oskhlv7.js";const u={__name:"front-end-interview-algo-questions",setup(h){const l={title:"关于前端常见算法面试题的一些思考",description:"关于前端常见算法面试题的一些思考",keywords:"算法,JavaScript,原创",pathname:"front-end-interview-algo-questions",translation:null,create_time:"2016-10-26",prev:{title:"2016 年 10 月 27 日阅读笔记",pathname:"20161027-reading"},next:{title:"JavaScript Weekly 306 阅读笔记",pathname:"javascript-weekly-306-notes"}};return(i,n)=>{const e=c;return p(),t(e,{data:l},{default:r(()=>[...n[0]||(n[0]=[s("p",null,[a("今天上班时间，读了 "),s("a",{href:"http://www.jackpu.com/",target:"_blank",rel:"noopener"},"@JackPu"),a(" 的新文章"),s("a",{href:"http://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/",target:"_blank",rel:"noopener"},"《前端面试中的常见的算法问题》"),a("。内容虽然看起挺基础，但可以有不少思考，同时也是一次挺好的复习。")],-1),s("p",null,"其中，有几个问题，想出了一些不同的解决办法，做了下笔记，并且进行了简单的性能测试。关于排序，这次没有深看。接下来有空时，再研究一番。",-1),s("h2",null,"判断回文(Palindromic Words)",-1),s("p",null,"结果是，使用循环来判断，性能远高于数组方法。接下来，在其他一些例子中也能看到，借用数组方法，往往很耗性能。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-comment"},"// Array methods"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"isPalindromicA"),a(" = w => w === w."),s("span",{class:"hljs-title function_"},"split"),a("("),s("span",{class:"hljs-string"},"''"),a(")."),s("span",{class:"hljs-title function_"},"reverse"),a("()."),s("span",{class:"hljs-title function_"},"join"),a("("),s("span",{class:"hljs-string"},"''"),a(`);

`),s("span",{class:"hljs-comment"},"// while loop"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"isPalindromicB"),a(" = ("),s("span",{class:"hljs-params"},"w"),a(`) => {
    
    `),s("span",{class:"hljs-keyword"},"let"),a(" len = w."),s("span",{class:"hljs-property"},"length"),a(`;
    `),s("span",{class:"hljs-comment"},"// 感谢 @拉比克魔王 的指点"),a(`
    `),s("span",{class:"hljs-keyword"},"let"),a(" start = "),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"ceil"),a("(len / "),s("span",{class:"hljs-number"},"2"),a(`);
    `),s("span",{class:"hljs-keyword"},"while"),a(` (start < len) {
      `),s("span",{class:"hljs-keyword"},"if"),a(" (w[start] !== w[len - start - "),s("span",{class:"hljs-number"},"1"),a(`]) {
            `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-literal"},"false"),a(`;
       }
       start++;
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-literal"},"true"),a(`;
};

`),s("span",{class:"hljs-comment"},"// -------------------------------------------------"),a(`
`),s("span",{class:"hljs-comment"},"// perf test"),a(`
`),s("span",{class:"hljs-comment"},"// first let's generate a fake word with, say 20 chars"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" word = ("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" len = "),s("span",{class:"hljs-number"},"20"),a(`;
    `),s("span",{class:"hljs-keyword"},"var"),a(` arr = [];
    `),s("span",{class:"hljs-keyword"},"while"),a(` (len--) {
        arr.`),s("span",{class:"hljs-title function_"},"push"),a("("),s("span",{class:"hljs-number"},"97"),a(" + (("),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("()* "),s("span",{class:"hljs-number"},"26"),a(") | "),s("span",{class:"hljs-number"},"0"),a(`));
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"String"),a("."),s("span",{class:"hljs-property"},"fromCharCode"),a("."),s("span",{class:"hljs-title function_"},"apply"),a("("),s("span",{class:"hljs-title class_"},"String"),a(`, arr);
})();

`),s("span",{class:"hljs-comment"},"// times"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" t = "),s("span",{class:"hljs-number"},"2e4"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(" i = "),s("span",{class:"hljs-number"},"0"),a(`;

`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'Array method'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"isPalindromicA"),a(`(word);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'Array method'"),a(`);

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'Loop'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"isPalindromicB"),a(`(word);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'Loop'"),a(`);
`)])],-1),s("h2",null,"数组去重",-1),s("p",null,[a("ES 5 方法性能更好，高一倍以上。不过笔试、面试时，附上 "),s("code",null,"Set"),a(" 的办法，肯定会更好。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-comment"},"// ES 5"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"uniqueES5"),a(" = ("),s("span",{class:"hljs-params"},"arr"),a(`) => {
    `),s("span",{class:"hljs-keyword"},"var"),a(` cache = {};
    `),s("span",{class:"hljs-keyword"},"return"),a(" arr."),s("span",{class:"hljs-title function_"},"filter"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"item"),a(") =>")]),a(` {
        `),s("span",{class:"hljs-keyword"},"return"),a(" cache[item] ? "),s("span",{class:"hljs-literal"},"false"),a(" : (cache[item] = "),s("span",{class:"hljs-literal"},"true"),a(`);
    });
};

`),s("span",{class:"hljs-comment"},"// ES6 method"),a(`
`),s("span",{class:"hljs-comment"},"// 为啥用了 Array.from 呢，保持类型一致啊"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"uniqueES6"),a(" = ("),s("span",{class:"hljs-params"},"arr"),a(") => "),s("span",{class:"hljs-title class_"},"Array"),a("."),s("span",{class:"hljs-title function_"},"from"),a("("),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Set"),a(`(arr));


`),s("span",{class:"hljs-comment"},"// -------------------------------------------------"),a(`
`),s("span",{class:"hljs-comment"},"// perf test"),a(`

`),s("span",{class:"hljs-comment"},"// times"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" t = "),s("span",{class:"hljs-number"},"2e4"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(` i;
`),s("span",{class:"hljs-keyword"},"var"),a(" array = ["),s("span",{class:"hljs-number"},"1"),a(", "),s("span",{class:"hljs-number"},"2"),a(", "),s("span",{class:"hljs-number"},"3"),a(", "),s("span",{class:"hljs-number"},"3"),a(", "),s("span",{class:"hljs-number"},"2"),a(", "),s("span",{class:"hljs-number"},"4"),a(", "),s("span",{class:"hljs-number"},"5"),a(", "),s("span",{class:"hljs-number"},"4"),a(`];

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'ES5 filter + cache'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"uniqueES5"),a(`(array);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'ES5 filter + cache'"),a(`);

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'ES6 Set'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"uniqueES6"),a(`(array);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'ES6 Set'"),a(`);
`)])],-1),s("h2",null,"统计一个字符串出现最多的字母",-1),s("p",null,"正则表达式的办法，临时想起来的，运行起来还是要慢，至少慢了一半。所以有时候还是要老老实实写代码，奇淫巧技少用。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-comment"},"// 黑科技"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"findMaxDuplicateCharRegex"),a(" = ("),s("span",{class:"hljs-params"},"chars"),a(`) => {
    `),s("span",{class:"hljs-comment"},"// 先对字符进行排序"),a(`
    chars = chars.`),s("span",{class:"hljs-title function_"},"split"),a("("),s("span",{class:"hljs-string"},"''"),a(")."),s("span",{class:"hljs-title function_"},"sort"),a("()."),s("span",{class:"hljs-title function_"},"join"),a("("),s("span",{class:"hljs-string"},"''"),a(`);
    `),s("span",{class:"hljs-comment"},"// 获取相同字符序列"),a(`
    `),s("span",{class:"hljs-keyword"},"let"),a(" regex = "),s("span",{class:"hljs-regexp"},"/(.)(\\1)+/g"),a(`;

    `),s("span",{class:"hljs-keyword"},"let"),a(" temp = "),s("span",{class:"hljs-literal"},"null"),a(`;
    `),s("span",{class:"hljs-keyword"},"let"),a(" max = "),s("span",{class:"hljs-number"},"0"),a(`;
    `),s("span",{class:"hljs-keyword"},"let"),a(" char = "),s("span",{class:"hljs-string"},"''"),a(`;

    `),s("span",{class:"hljs-keyword"},"while"),a(" (temp = regex."),s("span",{class:"hljs-title function_"},"exec"),a(`(chars)) {
        `),s("span",{class:"hljs-keyword"},"if"),a(" (temp["),s("span",{class:"hljs-number"},"0"),a("]."),s("span",{class:"hljs-property"},"length"),a(` > max) {
            char = temp[`),s("span",{class:"hljs-number"},"1"),a(`];
            max = temp[`),s("span",{class:"hljs-number"},"0"),a("]."),s("span",{class:"hljs-property"},"length"),a(`;
        }
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(` char;
};

`),s("span",{class:"hljs-comment"},"// see http://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" findMaxDuplicateCharNormal = "),s("span",{class:"hljs-keyword"},"function"),a("("),s("span",{class:"hljs-params"},"str"),a(`) {
    `),s("span",{class:"hljs-keyword"},"if"),a(" (str."),s("span",{class:"hljs-property"},"length"),a(" == "),s("span",{class:"hljs-number"},"1"),a(`) {
        `),s("span",{class:"hljs-keyword"},"return"),a(` str;
    }
    `),s("span",{class:"hljs-keyword"},"let"),a(` charObj = {};
    `),s("span",{class:"hljs-keyword"},"for"),a(" ("),s("span",{class:"hljs-keyword"},"let"),a(" i = "),s("span",{class:"hljs-number"},"0"),a("; i < str."),s("span",{class:"hljs-property"},"length"),a(`; i++) {
        `),s("span",{class:"hljs-keyword"},"if"),a(" (!charObj[str."),s("span",{class:"hljs-title function_"},"charAt"),a(`(i)]) {
            charObj[str.`),s("span",{class:"hljs-title function_"},"charAt"),a("(i)] = "),s("span",{class:"hljs-number"},"1"),a(`;
        } `),s("span",{class:"hljs-keyword"},"else"),a(` {
            charObj[str.`),s("span",{class:"hljs-title function_"},"charAt"),a("(i)] += "),s("span",{class:"hljs-number"},"1"),a(`;
        }
    }
    `),s("span",{class:"hljs-keyword"},"let"),a(" maxChar = "),s("span",{class:"hljs-string"},"''"),a(`,
        maxValue = `),s("span",{class:"hljs-number"},"1"),a(`;
    `),s("span",{class:"hljs-keyword"},"for"),a(" ("),s("span",{class:"hljs-keyword"},"var"),a(" k "),s("span",{class:"hljs-keyword"},"in"),a(` charObj) {
        `),s("span",{class:"hljs-keyword"},"if"),a(` (charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(` maxChar;
};


`),s("span",{class:"hljs-comment"},"// -------------------------------------------------"),a(`
`),s("span",{class:"hljs-comment"},"// perf test"),a(`

`),s("span",{class:"hljs-comment"},"// first let's generate a random string with 30 chars"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" chars = ("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" len = "),s("span",{class:"hljs-number"},"30"),a(`;
    `),s("span",{class:"hljs-keyword"},"var"),a(` arr = [];
    `),s("span",{class:"hljs-keyword"},"while"),a(` (len--) {
        arr.`),s("span",{class:"hljs-title function_"},"push"),a("("),s("span",{class:"hljs-number"},"97"),a(" + (("),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("()* "),s("span",{class:"hljs-number"},"26"),a(") | "),s("span",{class:"hljs-number"},"0"),a(`));
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"String"),a("."),s("span",{class:"hljs-property"},"fromCharCode"),a("."),s("span",{class:"hljs-title function_"},"apply"),a("("),s("span",{class:"hljs-title class_"},"String"),a(`, arr);
})();

`),s("span",{class:"hljs-comment"},"// times"),a(`
`),s("span",{class:"hljs-keyword"},"var"),a(" t = "),s("span",{class:"hljs-number"},"2e4"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(` i;

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'正常方法'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"findMaxDuplicateCharNormal"),a(`(chars);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'正常方法'"),a(`);

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'正则方法'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"findMaxDuplicateCharRegex"),a(`(chars);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'正则方法'"),a(`);
`)])],-1),s("h2",null,"不借助临时变量，进行两个整数的交换",-1),s("p",null,"三种方式均可。没有做性能测试。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"let"),a(" a = "),s("span",{class:"hljs-number"},"1"),a(`;
`),s("span",{class:"hljs-keyword"},"let"),a(" b = "),s("span",{class:"hljs-number"},"2"),a(`;

`),s("span",{class:"hljs-comment"},"// ES 6"),a(`
[a, b] = [b, a];

`),s("span",{class:"hljs-comment"},"// 加减法"),a(`
a = a - b;
b = b + a;
a = b - a;

`),s("span",{class:"hljs-comment"},"// 异或"),a(`
a = a ^ b;
b = a ^ b;
a = b ^ a;
`)])],-1),s("h2",null,"斐波那契数列",-1),s("p",null,[a("联想到了三种方式：动态规划；"),s("a",{href:"http://es6.ruanyifeng.com/#docs/function#尾递归",target:"_blank",rel:"noopener"},"尾递归"),a("；generator（算不上一个解决方案，只是临时想到的）。")],-1),s("p",null,"上述三种方式中，动态规划最快，计算 fib(1000) 20000 次耗时 170 ms；尾递归耗时 200 ms 左右，generator 耗时 2800 ms 左右。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-comment"},"// 动态规划"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" fibonacciDynamic = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"n"),a(`) {
    `),s("span",{class:"hljs-keyword"},"let"),a(" array = ["),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"1"),a(`];

    `),s("span",{class:"hljs-keyword"},"for"),a("("),s("span",{class:"hljs-keyword"},"let"),a(" i = "),s("span",{class:"hljs-number"},"2"),a("; i < n + "),s("span",{class:"hljs-number"},"1"),a(`; i++){
        array[i] = array[i - `),s("span",{class:"hljs-number"},"1"),a("] + array[i - "),s("span",{class:"hljs-number"},"2"),a(`];
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` array[n];
};

`),s("span",{class:"hljs-comment"},"// 尾递归"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" fibonacciTailCall = "),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},[a("n , ac1 = "),s("span",{class:"hljs-number"},"1"),a(" , ac2 = "),s("span",{class:"hljs-number"},"1")]),a(`) {
    `),s("span",{class:"hljs-keyword"},"if"),a("( n <= "),s("span",{class:"hljs-number"},"1"),a(` ) {
        `),s("span",{class:"hljs-keyword"},"return"),a(` ac2
    }
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title function_"},"fibonacciTailCall"),a("(n - "),s("span",{class:"hljs-number"},"1"),a(`, ac2, ac1 + ac2);
};

`),s("span",{class:"hljs-comment"},"// generator"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" fibonacciGenerator = ("),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-keyword"},"function"),a(" *"),s("span",{class:"hljs-title function_"},"fib"),a("("),s("span",{class:"hljs-params"}),a(`) {
        `),s("span",{class:"hljs-keyword"},"let"),a(" a = "),s("span",{class:"hljs-number"},"0"),a(", b = "),s("span",{class:"hljs-number"},"1"),a(", sum = "),s("span",{class:"hljs-number"},"0"),a(`;

        `),s("span",{class:"hljs-keyword"},"while"),a(" ("),s("span",{class:"hljs-literal"},"true"),a(`) {
            sum = a + b;
            b = a;
            a = sum;
            `),s("span",{class:"hljs-keyword"},"yield"),a(` sum;
        }
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"function"),a(" ("),s("span",{class:"hljs-params"},"n"),a(`) {
        `),s("span",{class:"hljs-keyword"},"var"),a(" iterator = "),s("span",{class:"hljs-title function_"},"fib"),a(`();
        `),s("span",{class:"hljs-keyword"},"let"),a(" result = "),s("span",{class:"hljs-number"},"0"),a(`;

        `),s("span",{class:"hljs-keyword"},"while"),a(` (n--) {
            result = iterator.`),s("span",{class:"hljs-title function_"},"next"),a(`();
        }
        `),s("span",{class:"hljs-keyword"},"return"),a(" result."),s("span",{class:"hljs-property"},"value"),a(`;
    };
}());


`),s("span",{class:"hljs-comment"},"// -------------------------------------------------"),a(`
`),s("span",{class:"hljs-comment"},"// perf test"),a(`
`),s("span",{class:"hljs-comment"},"// calculate fib(1000) 20000 times"),a(`

`),s("span",{class:"hljs-keyword"},"var"),a(" t = "),s("span",{class:"hljs-number"},"2e4"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(" n = "),s("span",{class:"hljs-number"},"1000"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(` i;

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'动态规划'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"fibonacciDynamic"),a(`(n);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'动态规划'"),a(`);


i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'尾递归'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"fibonacciTailCall"),a(`(n);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'尾递归'"),a(`);


i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'generator'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"fibonacciGenerator"),a(`(n);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'generator'"),a(`);
`)])],-1),s("h2",null,"正数组的最大差值",-1),s("p",null,"出乎意料地，这次 Math 方法竟然败给看 for 循环。不用说，reduce 超级慢，比 Math 还慢近十倍。",-1),s("p",null,"声明：Math 只是在本案例中比 for 循环慢，实际上如果只是单独取数组中的最大值或最小值，Math 还是很厉害的。实测：随机生成一个长度为 20 的数组（100 以内的正整数），寻找最大值，运行 10^6 次，Math 完胜，不到 1s 搞定，for 循环直接卡死。所以还是得看具体情况。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[a(`
`),s("span",{class:"hljs-comment"},"// 使用 Math "),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"getMaxGap"),a(" = ("),s("span",{class:"hljs-params"},"array"),a(") => "),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-property"},"max"),a("."),s("span",{class:"hljs-title function_"},"apply"),a("("),s("span",{class:"hljs-title class_"},"Math"),a(", array) - "),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-property"},"min"),a("."),s("span",{class:"hljs-title function_"},"apply"),a("("),s("span",{class:"hljs-title class_"},"Math"),a(`, array);

`),s("span",{class:"hljs-comment"},"// 使用 reduce"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"getMaxDiff"),a(" = ("),s("span",{class:"hljs-params"},"array"),a(`) => {
    `),s("span",{class:"hljs-keyword"},"if"),a(" (array."),s("span",{class:"hljs-property"},"length"),a(" < "),s("span",{class:"hljs-number"},"1"),a(") "),s("span",{class:"hljs-keyword"},"return"),a(" arrary["),s("span",{class:"hljs-number"},"0"),a(`];

    array = array.`),s("span",{class:"hljs-title function_"},"reduce"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"[max, min], el"),a(") =>")]),a(` {
       max = el > max ? el : max;
       min = el < min ? el : min;
       `),s("span",{class:"hljs-keyword"},"return"),a(` [max, min];
    }, array);

    `),s("span",{class:"hljs-keyword"},"return"),a(" array["),s("span",{class:"hljs-number"},"0"),a("] - array["),s("span",{class:"hljs-number"},"1"),a(`];
};

`),s("span",{class:"hljs-comment"},"// see http://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/"),a(`
`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getMaxProfit"),a("("),s("span",{class:"hljs-params"},"arr"),a(`) {
    `),s("span",{class:"hljs-keyword"},"var"),a(" minPrice = arr["),s("span",{class:"hljs-number"},"0"),a(`];
    `),s("span",{class:"hljs-keyword"},"var"),a(" maxProfit = "),s("span",{class:"hljs-number"},"0"),a(`;

    `),s("span",{class:"hljs-keyword"},"for"),a(" ("),s("span",{class:"hljs-keyword"},"var"),a(" i = "),s("span",{class:"hljs-number"},"0"),a("; i < arr."),s("span",{class:"hljs-property"},"length"),a(`; i++) {
        `),s("span",{class:"hljs-keyword"},"var"),a(` currentPrice = arr[i];

        minPrice = `),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"min"),a(`(minPrice, currentPrice);

        `),s("span",{class:"hljs-keyword"},"var"),a(` potentialProfit = currentPrice - minPrice;

        maxProfit = `),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"max"),a(`(maxProfit, potentialProfit);
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` maxProfit;
}


`),s("span",{class:"hljs-comment"},"// -------------------------------------------------"),a(`
`),s("span",{class:"hljs-comment"},"// perf test"),a(`
`),s("span",{class:"hljs-comment"},"// 2000000 times: Math ~= 100ms; Reduce ~= 1100ms; Normal ~= 25ms"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" array = ["),s("span",{class:"hljs-number"},"10"),a(","),s("span",{class:"hljs-number"},"5"),a(","),s("span",{class:"hljs-number"},"11"),a(","),s("span",{class:"hljs-number"},"7"),a(","),s("span",{class:"hljs-number"},"8"),a(","),s("span",{class:"hljs-number"},"9"),a(`];

`),s("span",{class:"hljs-keyword"},"var"),a(" t = "),s("span",{class:"hljs-number"},"2e6"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(" n = "),s("span",{class:"hljs-number"},"1000"),a(`;
`),s("span",{class:"hljs-keyword"},"var"),a(` i;

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'Math'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"getMaxGap"),a(`(array);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'Math'"),a(`);

i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'Reduce'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"getMaxDiff"),a(`(array);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'Reduce'"),a(`);


i = `),s("span",{class:"hljs-number"},"0"),a(`;
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"time"),a("("),s("span",{class:"hljs-string"},"'Normal'"),a(`);
`),s("span",{class:"hljs-keyword"},"while"),a(` (i < t) {
    `),s("span",{class:"hljs-title function_"},"getMaxProfit"),a(`(array);
    i++;
}
`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"timeEnd"),a("("),s("span",{class:"hljs-string"},"'Normal'"),a(`);
`)])],-1),s("p",null,[a("对算法的了解还十分浅薄，错误肯定有，希望读者指教。还需要钻研更多。感谢 "),s("a",{href:"http://www.jackpu.com/",target:"_blank",rel:"noopener"},"@JackPu"),a(" 的文章带来的启发和思考。")],-1),s("div",{class:"tip"},[a(" 补注："),s("br"),a(" 本文在描述测试结果会进行一些对比，也会使用一些“失败”“不如”等字眼，但测试比较主要是满足好奇心。实际工作中，多数人应该不会碰到那么大的计算量，因此几乎不用担心（多数情况下），多关注其他方面的优化吧。"),s("br"),a(" 另外，请不要对某些说法（正数组的差值例子中所说 Math 败给 for 循环）产生刻板印象（我自己就是，这次之后总感觉 Math 是不是不给力。被自己误会到了囧），具体情况具体分析，另外，多操作，多做实验。"),s("br"),a(" 如果本文一些不严谨的说法给您的学习、工作造成负面影响，还请谅解。如有问题，欢迎随时和我联系。 ")],-1)])]),_:1})}}};export{u as default};
