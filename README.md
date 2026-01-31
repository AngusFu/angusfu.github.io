# 文蔺的博客

基于 [Nuxt 3](https://nuxt.com) 构建的个人博客，采用现代化顶部导航布局，支持明暗主题切换，符合 WCAG 2.1 AA 无障碍标准。

## 技术栈

- **框架**: [Nuxt 3](https://nuxt.com) (Vue 3) — 静态站点生成
- **Node.js**: 22+
- **Markdown**: [marked](https://marked.js.org/) + [highlight.js](https://highlightjs.org/)
- **部署**: GitHub Actions → GitHub Pages

## 特性

- 固定顶部导航栏，毛玻璃效果（`backdrop-filter`）
- 明/暗主题切换，跟随系统偏好
- CSS 变量驱动的完整主题系统
- 文章列表卡片式布局
- 内联 SVG 图标，无外部字体依赖
- 移动端响应式汉堡菜单
- `prefers-reduced-motion` 动画减弱支持

### 无障碍

- `lang="zh-CN"` 语言声明
- Skip-to-content 跳转链接
- 全部按钮/图标提供 `aria-label`
- `:focus-visible` 键盘焦点指示器
- 语义化 HTML（`<nav>`、`<main>`、`<footer>`、`<article>`、`<time>`）
- 搜索输入关联 `<label>`
- 允许页面缩放（无 `user-scalable=no`）

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器（端口 3333）
npm run start

# 构建生产版本（静态生成）
npm run build

# 预览生产构建
npm run preview
```

## 目录结构

```
├── assets/css/       # 样式文件（模块化 CSS + 变量）
├── build/            # 构建脚本（Markdown → Vue 页面）
├── components/       # Vue 组件
├── layouts/          # Nuxt 布局
├── pages/            # Nuxt 页面（自动路由）
├── public/           # 静态资源
├── source/           # 博客内容（Markdown）
│   ├── _post/        # 文章
│   └── *.md          # 静态页面（关于、链接等）
├── config.yaml       # 站点配置
└── nuxt.config.ts    # Nuxt 配置
```

## 相关项目

- [Nuxt 3](https://nuxt.com)
- [Firekylin](https://github.com/firekylin/firekylin)（原始主题来源）
