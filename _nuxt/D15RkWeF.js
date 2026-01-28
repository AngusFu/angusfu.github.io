import{_ as t}from"./CaNb7KN_.js";import{c,w as m,o as h,a as s,b as n}from"./Du-K4N_a.js";const d={__name:"Node.js-sh-scripts-Manager",setup(o){const a={title:"Node.js .sh scripts Manager",description:"【nshm】 Node.js .sh scripts Manager",keywords:"原创,Node.js,命令行工具",pathname:"Node.js-sh-scripts-Manager",translation:null,create_time:"2016-07-12",prev:{title:"[译] 给 Service Worker 开后门",pathname:"backdoor-service-worker"},next:{title:"判断资源并行加载完成的三种办法：计数、Promise及 $.Deferred",pathname:"when-are-all-resources-all-loaded"}};return(i,l)=>{const e=t;return h(),c(e,{data:a},{default:m(()=>[...l[0]||(l[0]=[s("h2",null,"命令行也有苦恼",-1),s("p",null,"不知身为前端er的你是不是还在使用 Windows 开发？反正我是。使用 Git？使用 npm scripts？好吧，命令行是少不了的吧？想必很多同学和我一样，使用 Git Bash 作为命令行终端吧。",-1),s("p",null,"可是每次都要敲，累不累？想想一次简单的 Git 提交需要几个步骤？",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n(`$ git add -A
$ git commit -m `),s("span",{class:"hljs-string"},"'commit'"),n(`
$ git push
`)])],-1),s("p",null,"图简便的你可能会在 package.json 中这样配置：",-1),s("pre",null,[s("code",{class:"hljs lang-javascript"},[n(`{
    `),s("span",{class:"hljs-comment"},"// ..."),n(`
    `),s("span",{class:"hljs-string"},'"scripts"'),n(`: {
       `),s("span",{class:"hljs-comment"},"// ..."),n(`
       `),s("span",{class:"hljs-string"},'"push"'),n(": "),s("span",{class:"hljs-string"},`"git add -A && git commit -m 'commit' && git push"`),n(`
    }
}
`),s("span",{class:"hljs-comment"},"// ..."),n(`
`)])],-1),s("p",null,[n("然后再敲 "),s("code",null,"npm run push"),n("。啊啊心好累。")],-1),s("p",null,[n("用过 "),s("code",null,"browser-sync cli"),n(" 吗？反正为了图简便，我是经常用的。敲过最变态的是下面这一行：")],-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n("browser-sync start --server --files "),s("span",{class:"hljs-string"},'"dist/*"'),n(`\\
    --index `),s("span",{class:"hljs-string"},'"dist/index.html"'),n(`\\
    --open `),s("span",{class:"hljs-string"},'"external"'),n(`\\
    --reload-debounce --no-notify
`)])],-1),s("h2",null,".bat/.sh 的故事",-1),s("p",null,[n("敲过一次之后，发誓再也不这么玩了。索性在桌面保存了一个 "),s("code",null,"bs.bat"),n(" 文件，把上面的内容放进去。每次都从桌面 copy 到工作目录中去，双击完事。")],-1),s("p",null,[n("后来玩 github 稍微勤了一些，commit、pull 的时候，命令行敲起来固然爽得不行，可是累啊。在上一家公司做 react-native 应用的时候，对 "),s("code",null,"react-native run start"),n(),s("code",null,"cd android && ./gradlew assembleRelease"),n(" 也是深恶痛绝。最后无不以 bat、sh文件收尾。")],-1),s("h2",null,"nshm 的由来",-1),s("p",null,[n("前些时间接触到一个管理 "),s("code",null,"npm registry"),n(" 的 package，叫 "),s("code",null,"nrm"),n("，用起来真是爽。"),s("code",null,"nrm use taobao"),n(),s("code",null,"nrm add xx url"),n("简单就能解决问题。这让我萌生一个想法：能不能不要每次都从桌面 copy 那些简单的脚本啊，来个简单的命令行自己把文件写目录不就 OK 了吗？")],-1),s("p",null,[n("酝酿了一段时间。迟迟不肯动手。今天中午下楼抽烟，灵机一动，思路来了，花了半下午时间，边写边重构，最终做出来一个略嫌简陋但还能凑合用的工具，名之曰 “nshm”，取 “Node.js .sh scripts Manager” 的缩写，放在 Github 上了，"),s("a",{href:"https://github.com/AngusFu/nshm",target:"_blank",rel:"noopener"},"https://github.com/AngusFu/nshm"),n("。")],-1),s("p",null,"使用起来很简单，看文档就行。",-1),s("h2",null,"安装",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n(`
$ npm install nshm -g

$ nshm <`),s("span",{class:"hljs-built_in"},"command"),n(`> [args...]
`)])],-1),s("h2",null,"添加一条自定义命令",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n(`$ nshm add <command_name> -[t|f] [text|path]

`),s("span",{class:"hljs-comment"},"# add file content"),n(`
$ nshm add commit --file ./my-commit.sh
`),s("span",{class:"hljs-comment"},"# or"),n(`
$ nshm add commit -f ./my-commit.sh

`),s("span",{class:"hljs-comment"},"# add text content"),n(`
$ nshm add pull --text `),s("span",{class:"hljs-string"},'"git pull"'),n(`
`),s("span",{class:"hljs-comment"},"# or"),n(`
$ nshm add pull -t `),s("span",{class:"hljs-string"},'"git pull"'),n(`
`)])],-1),s("h2",null,"多个命令合并成一条命令",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n("$ nshm co <command_name> ["),s("span",{class:"hljs-built_in"},"command"),n("|text] ["),s("span",{class:"hljs-built_in"},"command"),n("|text] ["),s("span",{class:"hljs-built_in"},"command"),n(`|text] [...]

$ nshm co git commit pull `),s("span",{class:"hljs-string"},'"git status"'),n(`
`)])],-1),s("h2",null,"删除缓存的命令",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n("$ nshm "),s("span",{class:"hljs-built_in"},"rm"),n(` <command_name> <command_name> <...> 

$ nshm `),s("span",{class:"hljs-built_in"},"rm"),n(` commit pull git
`)])],-1),s("h2",null,"清除所有缓存的命令",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},`$ nshm clean
`)],-1),s("h2",null,"列出现有的命令",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[s("span",{class:"hljs-comment"},"# view all names"),n(`
$ nshm `),s("span",{class:"hljs-built_in"},"ls"),n(`

`),s("span",{class:"hljs-comment"},"# view all details"),n(`
$ nshm `),s("span",{class:"hljs-built_in"},"ls"),n(` -a
`)])],-1),s("h2",null,"Example 01",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[n("$ nshm add add -t "),s("span",{class:"hljs-string"},'"git add -A"'),n(`
$ nshm add commit -t `),s("span",{class:"hljs-string"},`"git commit -m 'push'"`),n(`
$ nshm add pull -t `),s("span",{class:"hljs-string"},'"git push"'),n(`

$ nshm co git add commit pull

`),s("span",{class:"hljs-comment"},"# init my directory"),n(`
`),s("span",{class:"hljs-comment"},"# then we'll get `add.sh` `commit.sh` `pull.sh`"),n(`
$ nshm git 
`)])],-1),s("h2",null,"Example 02",-1),s("pre",null,[s("code",{class:"hljs lang-bash"},[s("span",{class:"hljs-comment"},"# browserSync cli "),n(`
`),s("span",{class:"hljs-comment"},"# here we use `${}` as placeholders"),n(`
`),s("span",{class:"hljs-comment"},"# for necessary params"),n(`
$ nshm add bs -t `),s("span",{class:"hljs-string"},[n('"browser-sync start --server --files \\"'),s("span",{class:"hljs-variable"},"${files}"),n('\\" --index \\"'),s("span",{class:"hljs-variable"},"${index}"),n('\\" --open \\"external\\" --reload-debounce --no-notify"')]),n(`

`),s("span",{class:"hljs-comment"},"# now we get the `bs.sh` file under our working directory"),n(`
$ nshm bs --file `),s("span",{class:"hljs-string"},"'**'"),n(" --index "),s("span",{class:"hljs-string"},"'index.html'"),n(`
`)])],-1),s("h2",null,"结尾",-1),s("p",null,[n("工具默认自带了 Git 相关的 "),s("code",null,"commit"),n(),s("code",null,"pull"),n(" 及集成两者的 "),s("code",null,"git"),n(" 命令，还有上面提到的 "),s("code",null,"browser-sync"),n(" 的命令（简称作"),s("code",null,"bs"),n("）。也可以使用 "),s("code",null,"nshm add"),n(" 的形式自己添加。")],-1),s("p",null,"微不足道的工具，自娱自乐一下，虽然显得 low 了点，也能解决自己的一点问题。",-1),s("p",null,"That's all。",-1),s("p",null,"PS: 今晚开始看 WebRTC 的内容，小有收获，学习的生活捡起来！",-1)])]),_:1})}}};export{d as default};
