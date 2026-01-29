import{_ as e}from"./Bm2Oy-cY.js";import{c as o,w as c,o as p,a as s,b as l}from"./YobvFIQM.js";const d={__name:"todo-api-with-unit-test",setup(r){const n={title:"[译] 测试驱动开发：使用 Node.js 和 MongoDB 构建 Todo API",description:"测试驱动开发：使用 Node.js 和 MongoDB 构建 Todo API",keywords:"翻译,Node.js,测试,单元测试",pathname:"todo-api-with-unit-test",translation:{author:"Raja Sekar",social:"http://rajasekarm.com/",from:"https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb"},create_time:"2016-07-04",prev:{title:"判断资源并行加载完成的三种办法：计数、Promise及 $.Deferred",pathname:"when-are-all-resources-all-loaded"},next:{title:"使用 ava 和 jsdom 测试前端界面",pathname:"test-with-ava-jsdom"}};return(i,a)=>{const t=e;return p(),o(t,{data:n},{default:c(()=>[...a[0]||(a[0]=[s("p",null,"学习如何使用测试驱动开发的方式，用 Node.js、MongoDB、Mocha 和 Sinon.js 开发 Todo API。",-1),s("h2",null,"简介",-1),s("p",null,"测试是软件开发过程中的一个完整部分，它帮助我们提升软件品质。有很多种测试方法，如手动测试，集成测试，功能测试，负载测试，单元测试等等。在本文中，我们将会遵循测试驱动开发的规则编写代码。",-1),s("h3",null,"单元测试是什么？",-1),s("p",null,"Martin Fowler 将单元测试定义如下：",-1),s("ul",null,[s("li",null,[s("p",null,"首先一个概念，单元测试是低层次的，专注于软件系统的一小部分；")]),s("li",null,[s("p",null,"其次，单元测试通常是由程序员使用常规工具自己编写的 —— 唯一的区别是使用某种单元测试框架；")]),s("li",null,[s("p",null,"再次，单元测试预计比其他类型的测试显著地更快。")])],-1),s("p",null,"在本教程中，我们将会使用 Node.js 和 MongoDB 构建一个 Todo API。我们首先会给生产代码写单元测试，然后才会真正写生产代码。",-1),s("h2",null,"环境",-1),s("ul",null,[s("li",null,"Express.js"),s("li",null,"MongoDB"),s("li",null,"Mocha"),s("li",null,"Chai"),s("li",null,"Sinon.js")],-1),s("h2",null,"项目设置",-1),s("p",null,"在我们真正开发 API 之前，我们必须设置文件夹和端点（end point）。",-1),s("p",null,[l("在软件项目中，没有最好的应用架构。本教程使用的文件结构，请看该 "),s("a",{href:"https://github.com/rajzshkr/todoapi",target:"_blank",rel:"noopener"},"GitHub"),l(" 仓库。")],-1),s("p",null,"现在来创建端点（endpoints）：",-1),s("p",null,[s("img",{loading:"lazy",src:"https://p3.ssl.qhimg.com/t019ce24b482a7f3229.png",alt:"table"})],-1),s("h2",null,"安装依赖",-1),s("p",null,[l("Node.js 有自己的包管理工具 "),s("a",{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener"},"NPM"),l("。要学习更多关于 NPM 的知识，可以看我们的另一篇教程，"),s("a",{href:"https://semaphoreci.com/community/tutorials/npm-node-js-package-manager",target:"_blank",rel:"noopener"},"《Node.js Package Manager tutorial》"),l("。")],-1),s("p",null,"好，我们来安装项目依赖。",-1),s("pre",null,[s("code",null,`npm install express mongoose method-override morgan body-parser cors —save-dev
`)],-1),s("h2",null,"定义 Schema",-1),s("p",null,"我们会使用 Mongoose 作为 Node.js 中的对象文档模型（Object Document Model），它工作起来和典型的 ORM一样，就像 Rails 中用 ActiveRecord一样。Mongoose 帮我们更方便地访问 MongoDB 命令。首先我们为 Todo API 定义 schema。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" mongoose = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'mongoose'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"Schema"),l(" = mongoose."),s("span",{class:"hljs-property"},"Schema"),l(`;
`),s("span",{class:"hljs-comment"},"// Defining schema for our Todo API"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoSchema"),l(" = "),s("span",{class:"hljs-title class_"},"Schema"),l(`({
  `),s("span",{class:"hljs-attr"},"todo"),l(`: {
    `),s("span",{class:"hljs-attr"},"type"),l(": "),s("span",{class:"hljs-title class_"},"String"),l(`
  },
  `),s("span",{class:"hljs-attr"},"completed"),l(`: {
    `),s("span",{class:"hljs-attr"},"type"),l(": "),s("span",{class:"hljs-title class_"},"Boolean"),l(`,
    `),s("span",{class:"hljs-attr"},"default"),l(": "),s("span",{class:"hljs-literal"},"false"),l(`
  },
  `),s("span",{class:"hljs-attr"},"created_by"),l(`: {
    `),s("span",{class:"hljs-attr"},"type"),l(": "),s("span",{class:"hljs-title class_"},"Date"),l(`,
    `),s("span",{class:"hljs-attr"},"default"),l(": "),s("span",{class:"hljs-title class_"},"Date"),l("."),s("span",{class:"hljs-property"},"now"),l(`
  }
});
`),s("span",{class:"hljs-comment"},"//Exporting our model"),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoModel"),l(" = mongoose."),s("span",{class:"hljs-title function_"},"model"),l("("),s("span",{class:"hljs-string"},"'Todo'"),l(", "),s("span",{class:"hljs-title class_"},"TodoSchema"),l(`);

`),s("span",{class:"hljs-variable language_"},"module"),l("."),s("span",{class:"hljs-property"},"exports"),l(" = "),s("span",{class:"hljs-title class_"},"TodoModel"),l(`;
`)])],-1),s("p",null,"Mongoose 中的一切都是从 schema 开始。每个 schema 对应一个 MongoDB 集合，它定义了集合中文档的形状。",-1),s("p",null,"在上面的 todo schema 中，我们创建了三个字段来存储 todo 描述、状态和创建日期。该 schema 帮助 Node.js 应用理解如何将 MongoDB 中的数据映射成 JavaScript 对象。",-1),s("h2",null,"搭建 Express Server",-1),s("p",null,"我们将使用 Express 来搭建服务器，它是一个小型 Node.js web 框架，提供了一个强大的功能集，用于开发Web应用程序。",-1),s("p",null,"我们继续，搭建 Express server。",-1),s("p",null,"首先，我们要按下面这样引入项目依赖：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" express = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'express'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" mongoose = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'mongoose'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" morgan = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'morgan'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" bodyParser = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'body-parser'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" methodOverride = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'method-override'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" app = "),s("span",{class:"hljs-title function_"},"express"),l(`();
`),s("span",{class:"hljs-keyword"},"var"),l(" config = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'./app/config/config'"),l(`);
`)])],-1),s("p",null,"接着，配置 Express 中间件：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("app."),s("span",{class:"hljs-title function_"},"use"),l("("),s("span",{class:"hljs-title function_"},"morgan"),l("("),s("span",{class:"hljs-string"},"'dev'"),l(")); "),s("span",{class:"hljs-comment"},"// log every request to the console"),l(`
app.`),s("span",{class:"hljs-title function_"},"use"),l("(bodyParser."),s("span",{class:"hljs-title function_"},"urlencoded"),l("({"),s("span",{class:"hljs-string"},"'extended'"),l(":"),s("span",{class:"hljs-string"},"'true'"),l("})); "),s("span",{class:"hljs-comment"},"// parse application/x-www-form-urlencoded"),l(`
app.`),s("span",{class:"hljs-title function_"},"use"),l("(bodyParser."),s("span",{class:"hljs-title function_"},"json"),l("()); "),s("span",{class:"hljs-comment"},"// parse application/json"),l(`
app.`),s("span",{class:"hljs-title function_"},"use"),l("(bodyParser."),s("span",{class:"hljs-title function_"},"json"),l("({ "),s("span",{class:"hljs-attr"},"type"),l(": "),s("span",{class:"hljs-string"},"'application/vnd.api+json'"),l(" })); "),s("span",{class:"hljs-comment"},"// parse application/vnd.api+json as json"),l(`
app.`),s("span",{class:"hljs-title function_"},"use"),l("("),s("span",{class:"hljs-title function_"},"methodOverride"),l(`());
`)])],-1),s("h3",null,"管理 Mongoose 连接",-1),s("p",null,[l("使用"),s("code",null,"mongoose.connect"),l("将 MongoDB 和应用连接，这会和数据库建立连接。这就是连接 todoapi 数据库的最小操作，数据库跑在本地，默认端口是 27017。如果本地连接失败，试试将 localhost 换成 127.0.0.1。")],-1),s("p",null,"有时候本地主机名改变时会出现一些问题。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-comment"},"//Connecting MongoDB using mongoose to our application"),l(`
mongoose.`),s("span",{class:"hljs-title function_"},"connect"),l("(config."),s("span",{class:"hljs-property"},"db"),l(`);

`),s("span",{class:"hljs-comment"},"//This callback will be triggered once the connection is successfully established to MongoDB"),l(`
mongoose.`),s("span",{class:"hljs-property"},"connection"),l("."),s("span",{class:"hljs-title function_"},"on"),l("("),s("span",{class:"hljs-string"},"'connected'"),l(", "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-string"},"'Mongoose default connection open to '"),l(" + config."),s("span",{class:"hljs-property"},"db"),l(`);
});

`),s("span",{class:"hljs-comment"},"//Express application will listen to port mentioned in our configuration"),l(`
app.`),s("span",{class:"hljs-title function_"},"listen"),l("(config."),s("span",{class:"hljs-property"},"port"),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err"),l(`){
  `),s("span",{class:"hljs-keyword"},"if"),l("(err) "),s("span",{class:"hljs-keyword"},"throw"),l(` err;
  `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-string"},'"App listening on port "'),l("+config."),s("span",{class:"hljs-property"},"port"),l(`);
});
`)])],-1),s("p",null,"使用下面的命令启动服务器：",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},`//starting our node server
> node server.js
App listening on port 2000
`)],-1),s("h2",null,"为 API 编写测试用例",-1),s("p",null,"在 TDD（测试驱动开发）中，将所有可能的输入、输出以及错误纳入考虑，然后开始编写测试用例。来给我们的 Todo API 编写测试用例吧。",-1),s("h3",null,"搭建测试环境",-1),s("p",null,"之前提到过，我们会使用 Mocha 作为测试运行器，Chai 作为断言库，用 Sinon.js 模拟 Todo model。首先安装单元测试环境：",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},`> npm install mocha chai sinon sinon-mongoose --save
`)],-1),s("p",null,[l("使用 "),s("code",null,"sinon-mongoose"),l(" 模块来模拟 Mongoose 定义的 MongoDB 模型。")],-1),s("p",null,"现在，引入测试的依赖：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" sinon = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'sinon'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" chai = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'chai'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" expect = chai."),s("span",{class:"hljs-property"},"expect"),l(`;

`),s("span",{class:"hljs-keyword"},"var"),l(" mongoose = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'mongoose'"),l(`);
`),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'sinon-mongoose'"),l(`);

`),s("span",{class:"hljs-comment"},"//Importing our todo model for our unit testing."),l(`
`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"Todo"),l(" = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'../../app/models/todo.model'"),l(`);
`)])],-1),s("h3",null,"Todo API 的测试用例",-1),s("p",null,"编写单元测试时，需要同时考虑成功和出错的场景。",-1),s("p",null,"对我们的 Todo API 来说，我们要给新建、删除、更新、查询 API 同时编写成功和出错的测试用例。我们使用 Mocha, Chai 和 Sinon.js 来编写测试。",-1),s("h4",null,"获取所有 Todo",-1),s("p",null,"本小节，我们来编写从数据库获取所有 todo 的测试用例。需要同时为成功、出错场景编写，以确保代码在生产中的各种环境下都能正常工作。",-1),s("p",null,[l("我们不会使用真实数据库来跑测试用例，而是用 "),s("code",null,"sinon.mock"),l(" 给 Todo schema 建立假数据模型，然后再测试期望的结果。")],-1),s("p",null,[l("来使用 "),s("code",null,"sinon.mock"),l(" 给 Todo model 据，然后使用 "),s("code",null,"find"),l(" 方法获取数据库中存储的所有 todo。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("    "),s("span",{class:"hljs-title function_"},"describe"),l("("),s("span",{class:"hljs-string"},'"Get all todos"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`){
         `),s("span",{class:"hljs-comment"},"// Test will pass if we get all todos"),l(`
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should return all todos"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-title class_"},"Todo"),l(`);
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = {"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(", "),s("span",{class:"hljs-attr"},"todo"),l(`: []};
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'find'"),l(")."),s("span",{class:"hljs-title function_"},"yields"),l("("),s("span",{class:"hljs-literal"},"null"),l(`, expectedResult);
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"find"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(result."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });

        `),s("span",{class:"hljs-comment"},"// Test will pass if we fail to get a todo"),l(`
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should return error"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-title class_"},"Todo"),l(`);
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = {"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(", "),s("span",{class:"hljs-attr"},"error"),l(": "),s("span",{class:"hljs-string"},'"Something went wrong"'),l(`};
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'find'"),l(")."),s("span",{class:"hljs-title function_"},"yields"),l("(expectedResult, "),s("span",{class:"hljs-literal"},"null"),l(`);
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"find"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(err."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"not"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });
    });
`)])],-1),s("h4",null,"保存 New Todo",-1),s("p",null,"保存一个新的 todo，需要用一个示例任务来模拟 Todo model。使用我们创建的Todo model来检验 mongoose 的save 方法保存 todo 到数据库的结果。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("    "),s("span",{class:"hljs-comment"},"// Test will pass if the todo is saved"),l(`
    `),s("span",{class:"hljs-title function_"},"describe"),l("("),s("span",{class:"hljs-string"},'"Post a new todo"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`){
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should create new post"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Todo"),l("({ "),s("span",{class:"hljs-attr"},"todo"),l(": "),s("span",{class:"hljs-string"},"'Save new todo from mock'"),l(`}));
            `),s("span",{class:"hljs-keyword"},"var"),l(" todo = "),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-property"},"object"),l(`;
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(` };
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'save'"),l(")."),s("span",{class:"hljs-title function_"},"yields"),l("("),s("span",{class:"hljs-literal"},"null"),l(`, expectedResult);
            todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(result."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });
        `),s("span",{class:"hljs-comment"},"// Test will pass if the todo is not saved"),l(`
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should return error, if post not saved"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Todo"),l("({ "),s("span",{class:"hljs-attr"},"todo"),l(": "),s("span",{class:"hljs-string"},"'Save new todo from mock'"),l(`}));
            `),s("span",{class:"hljs-keyword"},"var"),l(" todo = "),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-property"},"object"),l(`;
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(` };
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'save'"),l(")."),s("span",{class:"hljs-title function_"},"yields"),l("(expectedResult, "),s("span",{class:"hljs-literal"},"null"),l(`);
            todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(err."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"not"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });
    });
`)])],-1),s("h4",null,"根据 ID 更新 Todo",-1),s("p",null,[l("本节我们来检验 API 的 update 功能。这和上面的例子很类似，除了我们要使用"),s("code",null,"withArgs"),l("方法，模拟带有参数 ID 的 Todo model。")],-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("  "),s("span",{class:"hljs-comment"},"// Test will pass if the todo is updated based on an ID"),l(`
  `),s("span",{class:"hljs-title function_"},"describe"),l("("),s("span",{class:"hljs-string"},'"Update a new todo by id"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`){
    `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should updated a todo by id"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
      `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Todo"),l("({ "),s("span",{class:"hljs-attr"},"completed"),l(": "),s("span",{class:"hljs-literal"},"true"),l(`}));
      `),s("span",{class:"hljs-keyword"},"var"),l(" todo = "),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-property"},"object"),l(`;
      `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(` };
      `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'save'"),l(")."),s("span",{class:"hljs-title function_"},"withArgs"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("})."),s("span",{class:"hljs-title function_"},"yields"),l("("),s("span",{class:"hljs-literal"},"null"),l(`, expectedResult);
      todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
        `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
        `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
        `),s("span",{class:"hljs-title function_"},"expect"),l("(result."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
        `),s("span",{class:"hljs-title function_"},"done"),l(`();
      });
    });
    `),s("span",{class:"hljs-comment"},"// Test will pass if the todo is not updated based on an ID"),l(`
    `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should return error if update action is failed"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
      `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Todo"),l("({ "),s("span",{class:"hljs-attr"},"completed"),l(": "),s("span",{class:"hljs-literal"},"true"),l(`}));
      `),s("span",{class:"hljs-keyword"},"var"),l(" todo = "),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-property"},"object"),l(`;
      `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(` };
      `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'save'"),l(")."),s("span",{class:"hljs-title function_"},"withArgs"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("})."),s("span",{class:"hljs-title function_"},"yields"),l("(expectedResult, "),s("span",{class:"hljs-literal"},"null"),l(`);
      todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
        `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
        `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
        `),s("span",{class:"hljs-title function_"},"expect"),l("(err."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"not"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
        `),s("span",{class:"hljs-title function_"},"done"),l(`();
      });
    });
  });
`)])],-1),s("h4",null,"根据 ID 删除 Todo",-1),s("p",null,"这是 Todo API 单元测试的最后一小节。本节我们将基于给定的 ID ，使用 mongoose 的 remove 方法，测试 API 的 delete 功能。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("    "),s("span",{class:"hljs-comment"},"// Test will pass if the todo is deleted based on an ID"),l(`
    `),s("span",{class:"hljs-title function_"},"describe"),l("("),s("span",{class:"hljs-string"},'"Delete a todo by id"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"}),l(`){
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should delete a todo by id"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-title class_"},"Todo"),l(`);
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(` };
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'remove'"),l(")."),s("span",{class:"hljs-title function_"},"withArgs"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("})."),s("span",{class:"hljs-title function_"},"yields"),l("("),s("span",{class:"hljs-literal"},"null"),l(`, expectedResult);
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"remove"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("}, "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(result."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });
        `),s("span",{class:"hljs-comment"},"// Test will pass if the todo is not deleted based on an ID"),l(`
        `),s("span",{class:"hljs-title function_"},"it"),l("("),s("span",{class:"hljs-string"},'"should return error if delete action is failed"'),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"done"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoMock"),l(" = sinon."),s("span",{class:"hljs-title function_"},"mock"),l("("),s("span",{class:"hljs-title class_"},"Todo"),l(`);
            `),s("span",{class:"hljs-keyword"},"var"),l(" expectedResult = { "),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(` };
            `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"expects"),l("("),s("span",{class:"hljs-string"},"'remove'"),l(")."),s("span",{class:"hljs-title function_"},"withArgs"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("})."),s("span",{class:"hljs-title function_"},"yields"),l("(expectedResult, "),s("span",{class:"hljs-literal"},"null"),l(`);
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"remove"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": "),s("span",{class:"hljs-number"},"12345"),l("}, "),s("span",{class:"hljs-keyword"},"function"),l(" ("),s("span",{class:"hljs-params"},"err, result"),l(`) {
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"verify"),l(`();
                `),s("span",{class:"hljs-title class_"},"TodoMock"),l("."),s("span",{class:"hljs-title function_"},"restore"),l(`();
                `),s("span",{class:"hljs-title function_"},"expect"),l("(err."),s("span",{class:"hljs-property"},"status"),l(")."),s("span",{class:"hljs-property"},"to"),l("."),s("span",{class:"hljs-property"},"not"),l("."),s("span",{class:"hljs-property"},"be"),l("."),s("span",{class:"hljs-property"},"true"),l(`;
                `),s("span",{class:"hljs-title function_"},"done"),l(`();
            });
        });
    });
`)])],-1),s("p",null,"每次我们都要还原（restore） Todomock，确保下次它还能正常工作。",-1),s("p",null,"每次运行测试用例的时候，所有的都会失败，因为我们的生产代码还没写好呢。我们会运行自动化测试，直至所有单元测试都通过。",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[l("> npm "),s("span",{class:"hljs-built_in"},"test"),l(`

  Unit `),s("span",{class:"hljs-built_in"},"test"),l(),s("span",{class:"hljs-keyword"},"for"),l(` Todo API
    Get all todo
      1) should `),s("span",{class:"hljs-built_in"},"return"),l(` all todo
      2) should `),s("span",{class:"hljs-built_in"},"return"),l(` error
    Post a new todo
      3) should create new post
      4) should `),s("span",{class:"hljs-built_in"},"return"),l(" error, "),s("span",{class:"hljs-keyword"},"if"),l(` post not saved
    Update a new todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      5) should updated a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      6) should `),s("span",{class:"hljs-built_in"},"return"),l(" error "),s("span",{class:"hljs-keyword"},"if"),l(` update action is failed
    Delete a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      7) should delete a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      8) should `),s("span",{class:"hljs-built_in"},"return"),l(" error "),s("span",{class:"hljs-keyword"},"if"),l(` delete action is failed

  0 passing (17ms)
  8 failing
`)])],-1),s("p",null,[l("你在命令行终端上运行"),s("code",null,"npm test"),l("的时候，会得到上面的输出信息，所有的测试用例都失败了。需要根据需求和单元测试用例来编写应用逻辑，使我们的程序更加稳定。")],-1),s("h2",null,"编写应用逻辑",-1),s("p",null,"下一步就是为 Todo API 编写真正的应用代码。我们会运行自动测试用例，一直重构，直到所有单元测试都通过。",-1),s("h2",null,"配置路由",-1),s("p",null,"对客户端和服务端的 web 应用来说，路由配置是最重要的一部分。在我们的应用中，使用 Express Router 的实例来处理所有路由。来给我们的应用创建路由。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[s("span",{class:"hljs-keyword"},"var"),l(" express = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'express'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(" router = express."),s("span",{class:"hljs-title class_"},"Router"),l(`();

`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"Todo"),l(" = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'../models/todo.model'"),l(`);
`),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoController"),l(" = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'../controllers/todo.controller'"),l(")("),s("span",{class:"hljs-title class_"},"Todo"),l(`);

`),s("span",{class:"hljs-comment"},"// Get all Todo"),l(`
router.`),s("span",{class:"hljs-title function_"},"get"),l("("),s("span",{class:"hljs-string"},"'/todo'"),l(", "),s("span",{class:"hljs-title class_"},"TodoController"),l("."),s("span",{class:"hljs-property"},"GetTodo"),l(`);

`),s("span",{class:"hljs-comment"},"// Create new Todo"),l(`
router.`),s("span",{class:"hljs-title function_"},"post"),l("("),s("span",{class:"hljs-string"},"'/todo'"),l(", "),s("span",{class:"hljs-title class_"},"TodoController"),l("."),s("span",{class:"hljs-property"},"PostTodo"),l(`);

`),s("span",{class:"hljs-comment"},"// Delete a todo based on :id"),l(`
router.`),s("span",{class:"hljs-title function_"},"delete"),l("("),s("span",{class:"hljs-string"},"'/todo/:id'"),l(", "),s("span",{class:"hljs-title class_"},"TodoController"),l("."),s("span",{class:"hljs-property"},"DeleteTodo"),l(`);

`),s("span",{class:"hljs-comment"},"// Update a todo based on :id"),l(`
router.`),s("span",{class:"hljs-title function_"},"put"),l("("),s("span",{class:"hljs-string"},"'/todo/:id'"),l(", "),s("span",{class:"hljs-title class_"},"TodoController"),l("."),s("span",{class:"hljs-property"},"UpdateTodo"),l(`);

`),s("span",{class:"hljs-variable language_"},"module"),l("."),s("span",{class:"hljs-property"},"exports"),l(` = router;
`)])],-1),s("h3",null,"Controller（控制器）",-1),s("p",null,"现在我们差不多在教程的最后阶段了，开始来写控制器代码。在典型的 web 应用里，controller 控制着保存、检索数据的主要逻辑，还要做验证。来写Todo API 真正的控制器，运行自动化单元测试直至测试用例全部通过。",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[l("    "),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"Todo"),l(" = "),s("span",{class:"hljs-built_in"},"require"),l("("),s("span",{class:"hljs-string"},"'../models/todo.model'"),l(`);

    `),s("span",{class:"hljs-keyword"},"var"),l(),s("span",{class:"hljs-title class_"},"TodoCtrl"),l(` = {
        `),s("span",{class:"hljs-comment"},"// Get all todos from the Database"),l(`
        `),s("span",{class:"hljs-title class_"},"GetTodo"),l(": "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"req, res"),l(`){
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"find"),l("({}, "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err, todos"),l(`){
              `),s("span",{class:"hljs-keyword"},"if"),l(`(err) {
                res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(", "),s("span",{class:"hljs-attr"},"error"),l(": "),s("span",{class:"hljs-string"},'"Something went wrong"'),l(`});
                `),s("span",{class:"hljs-keyword"},"return"),l(`;
              }
              res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(", "),s("span",{class:"hljs-attr"},"todo"),l(`: todos});
            });
        },
        `),s("span",{class:"hljs-comment"},"//Post a todo into Database"),l(`
        `),s("span",{class:"hljs-title class_"},"PostTodo"),l(": "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"req, res"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(" todo = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"Todo"),l("(req."),s("span",{class:"hljs-property"},"body"),l(`);
            todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err, todo"),l(`){
              `),s("span",{class:"hljs-keyword"},"if"),l(`(err) {
                res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(", "),s("span",{class:"hljs-attr"},"error"),l(": "),s("span",{class:"hljs-string"},'"Something went wrong"'),l(`});
                `),s("span",{class:"hljs-keyword"},"return"),l(`;
              }
              res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(", "),s("span",{class:"hljs-attr"},"message"),l(": "),s("span",{class:"hljs-string"},'"Todo Saved!!"'),l(`});
            });
        },
        `),s("span",{class:"hljs-comment"},"//Updating a todo status based on an ID"),l(`
        `),s("span",{class:"hljs-title class_"},"UpdateTodo"),l(": "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"req, res"),l(`){
            `),s("span",{class:"hljs-keyword"},"var"),l(" completed = req."),s("span",{class:"hljs-property"},"body"),l("."),s("span",{class:"hljs-property"},"completed"),l(`;
            `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"findById"),l("(req."),s("span",{class:"hljs-property"},"params"),l("."),s("span",{class:"hljs-property"},"id"),l(", "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err, todo"),l(`){
            todo.`),s("span",{class:"hljs-property"},"completed"),l(` = completed;
            todo.`),s("span",{class:"hljs-title function_"},"save"),l("("),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err, todo"),l(`){
              `),s("span",{class:"hljs-keyword"},"if"),l(`(err) {
                res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(", "),s("span",{class:"hljs-attr"},"error"),l(": "),s("span",{class:"hljs-string"},'"Status not updated"'),l(`});
              }
              res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(", "),s("span",{class:"hljs-attr"},"message"),l(": "),s("span",{class:"hljs-string"},'"Status updated successfully"'),l(`});
            });
            });
        },
        `),s("span",{class:"hljs-comment"},"// Deleting a todo baed on an ID"),l(`
        `),s("span",{class:"hljs-title class_"},"DeleteTodo"),l(": "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"req, res"),l(`){
          `),s("span",{class:"hljs-title class_"},"Todo"),l("."),s("span",{class:"hljs-title function_"},"remove"),l("({"),s("span",{class:"hljs-attr"},"_id"),l(": req."),s("span",{class:"hljs-property"},"params"),l("."),s("span",{class:"hljs-property"},"id"),l("}, "),s("span",{class:"hljs-keyword"},"function"),l("("),s("span",{class:"hljs-params"},"err, todos"),l(`){
            `),s("span",{class:"hljs-keyword"},"if"),l(`(err) {
              res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"false"),l(", "),s("span",{class:"hljs-attr"},"error"),l(": "),s("span",{class:"hljs-string"},'"Deleting todo is not successfull"'),l(`});
              `),s("span",{class:"hljs-keyword"},"return"),l(`;
            }
            res.`),s("span",{class:"hljs-title function_"},"json"),l("({"),s("span",{class:"hljs-attr"},"status"),l(": "),s("span",{class:"hljs-literal"},"true"),l(", "),s("span",{class:"hljs-attr"},"message"),l(": "),s("span",{class:"hljs-string"},'"Todo deleted successfully!!"'),l(`});
          });
        }
    }

`),s("span",{class:"hljs-variable language_"},"module"),l("."),s("span",{class:"hljs-property"},"exports"),l(" = "),s("span",{class:"hljs-title class_"},"TodoCtrl"),l(`;
`)])],-1),s("h2",null,"运行测试用例",-1),s("p",null,"现在我们完成了应用的测试用例和控制器逻辑两部分。来跑一下测试，看看最终结果：",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[l("> npm "),s("span",{class:"hljs-built_in"},"test"),l(`
  Unit `),s("span",{class:"hljs-built_in"},"test"),l(),s("span",{class:"hljs-keyword"},"for"),l(` Todo API
    Get all todo
      ✓ should `),s("span",{class:"hljs-built_in"},"return"),l(` all todo
      ✓ should `),s("span",{class:"hljs-built_in"},"return"),l(` error
    Post a new todo
      ✓ should create new post
      ✓ should `),s("span",{class:"hljs-built_in"},"return"),l(" error, "),s("span",{class:"hljs-keyword"},"if"),l(` post not saved
    Update a new todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      ✓ should updated a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      ✓ should `),s("span",{class:"hljs-built_in"},"return"),l(" error "),s("span",{class:"hljs-keyword"},"if"),l(` update action is failed
    Delete a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      ✓ should delete a todo by `),s("span",{class:"hljs-built_in"},"id"),l(`
      ✓ should `),s("span",{class:"hljs-built_in"},"return"),l(" error "),s("span",{class:"hljs-keyword"},"if"),l(` delete action is failed

  8 passing (34ms) 
`)])],-1),s("p",null,"最终结果显示，我们所有的测试用例都通过了。接下来的步骤应该是 API 重构，这包含着重复本教程提到的相同过程。",-1),s("h2",null,"结论",-1),s("p",null,"通过本教程，我们学习了如果使用测试驱动开发的办法，用 Node.js and MongoDB 设计 API。尽管 TDD （测试驱动开发）给开发过程带来了额外复杂度，它能帮我们建立更稳定的、错误更少的应用。就算你不想实践 TDD， 至少也应该编写覆盖应用所有功能点的测试。",-1),s("p",null,"如果你有任何问题或想法，请不吝留言。",-1)])]),_:1})}}};export{d as default};
