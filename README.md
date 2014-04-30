<img align="right" src="https://cloud.githubusercontent.com/assets/157338/2829225/4fd0441e-cfa0-11e3-844f-060b1fd2275f.png">

**Saber** 是 **模块化**、**组合式** 的前端移动框架。

她是提供了 [**JavaScript 模块**](#javascript-modules)、[**CSS 样式库**](#css-library) 与 [**开发平台**](#platform) 的完整前端解决方案。

现在，她最擅长做 **移动端 SPA** (Single Page App) 项目。

+ [一分钟入门](https://github.com/ecomfe/saber/wiki/Getting-Started)
+ [使用教程](https://github.com/ecomfe/saber/wiki/Tutorial)
    + [安装](https://github.com/ecomfe/saber/wiki/Tutorial#installation)
    + [开始一个项目](https://github.com/ecomfe/saber/wiki/Tutorial#starting-project)
    + [开发调试](https://github.com/ecomfe/saber/wiki/Tutorial#development-and-debuging)
    + [构建项目](https://github.com/ecomfe/saber/wiki/Tutorial#building-it-out)
+ [演示](#showcase)
+ [JavaScript 模块](#javascript-modules)
+ [CSS 样式库](#css-library)
+ [开发平台](#platform)


## Showcase

![screenshot](https://cloud.githubusercontent.com/assets/157338/2828876/6e4d9874-cf9b-11e3-96d9-33f1ef058961.png)

访问地址：http://startupnews.duapp.com

二维码：

![二维码](https://cloud.githubusercontent.com/assets/157338/2837732/3088e110-d022-11e3-81cb-507f61683ba7.png)


## JavaScript Modules

`JavaScript 模块` 是 [`edp`](https://github.com/ecomfe/edp) 下的 AMD Package，通过 `edp import <package>` 的方式引入。

他们的特点是：

+ 细粒度拆分，每个模块专注做好自己的事情，项目中按需组合
+ 抛开桌面浏览器的历史包袱，只为移动端设计，优先使用原生 `JavaScript`
+ 拥抱社区，受益于 `AMD` 规范，有众多可用的模块资源

模块名 | 模块说明 | 文档
--- | --- | ---
[saber-ajax](https://github.com/ecomfe/saber-ajax) | Promise 风格的 Ajax 模块 | [文档](https://github.com/ecomfe/saber-ajax/blob/master/README.md)
[saber-cookie](https://github.com/ecomfe/saber-cookie) | Cookie 操作模块 | [文档](https://github.com/ecomfe/saber-cookie/blob/master/README.md)
[saber-dom](https://github.com/ecomfe/saber-dom) | 静态函数风格的 DOM 工具库 | [文档](https://github.com/ecomfe/saber-dom/blob/master/README.md)
[saber-emitter](https://github.com/ecomfe/saber-emitter) | 事件发射器 | [文档](https://github.com/ecomfe/saber-emitter/blob/master/README.md)
[saber-env](https://github.com/ecomfe/saber-env) | 浏览器环境检测 | [文档](https://github.com/ecomfe/saber-env/blob/master/README.md)
[saber-firework](https://github.com/ecomfe/saber-firework) | MVP 开发框架，提供完整的 SPA 解决方案 | [文档](https://github.com/ecomfe/saber-firework/blob/master/README.md)
[saber-geo](https://github.com/ecomfe/saber-geo) | 地理位置信息 | [文档](https://github.com/ecomfe/saber-geo/blob/master/README.md)
[saber-lang](https://github.com/ecomfe/saber-lang) | 语言增强模块，包含 `extend`、`inherits`、`aspect` 等支持 | [文档](https://github.com/ecomfe/saber-lang/blob/master/README.md)
[saber-matchmedia](https://github.com/ecomfe/saber-matchmedia) | 监测 CSS 的 media queries | [文档](https://github.com/ecomfe/saber-matchmedia/blob/master/README.md)
[saber-promise](https://github.com/ecomfe/saber-promise) | Promise/A+ 实现 | [文档](https://github.com/ecomfe/saber-promise/blob/master/README.md)
[saber-router](https://github.com/ecomfe/saber-router) | hash 路由控制模块 | [文档](https://github.com/ecomfe/saber-router/blob/master/README.md)
[saber-run](https://github.com/ecomfe/saber-run) | 动画支持模块 | [文档](https://github.com/ecomfe/saber-run/blob/master/README.md)
[saber-scroll](https://github.com/ecomfe/saber-scroll) | 区域滚动支持模块 | [文档](https://github.com/ecomfe/saber-scroll/blob/master/README.md)
[saber-storage](https://github.com/ecomfe/saber-storage) | 本地存储模块 | [文档](https://github.com/ecomfe/saber-storage/blob/master/README.md)
[saber-tap](https://github.com/ecomfe/saber-tap) | 浏览器无延迟点击支持模块 | [文档](https://github.com/ecomfe/saber-tap/blob/master/README.md)
[saber-uri](https://github.com/ecomfe/saber-uri) | URI 处理模块 | [文档](https://github.com/ecomfe/saber-uri/blob/master/README.md)
[saber-viewport](https://github.com/ecomfe/saber-viewport) | 页面视口管理，提供页面转场功能 | [文档](https://github.com/ecomfe/saber-viewport/blob/master/README.md)
[hammer](https://github.com/ecomfe/dep-hammer) | 外部模块，移动端手势库 | [文档](https://github.com/EightMedia/hammer.js/wiki)

<!-- [saber-ui](https://github.com/ecomfe/saber-ui) | UI 库 | [文档](https://github.com/ecomfe/saber-ui/blob/master/README.md) -->


## CSS Library

**Saber** 的 **CSS 样式库** 提供了基本的 **样式工具库** 与 **UI 样式库**，请根据项目特点按需选用。

他们的特点是：

+ 用 `Autoprefixer` 处理多数兼容性问题，面向 **标准 CSS** 开发
+ 只在调用时才输出 `CSS` 代码，避免 `样式类` 污染 HTML 代码的语义
+ 以 `npm package` 的形式管理版本，升级方便

### rider

基于 [`Stylus`](http://learnboost.github.io/stylus/)、专注于移动端的 CSS 样式工具库。

提供了 样式初始化、顺时针简写、缓动函数、图片、排版、单位转换、形状、动画、响应式工具 等功能。

+ [项目地址](https://github.com/ecomfe/rider)
+ 文档
    + [在 edp 环境使用](https://github.com/ecomfe/edp-provider-rider/blob/master/README.md)
    + [API](https://github.com/ecomfe/rider/blob/master/doc/api.md)
    + [代码风格](https://github.com/ecomfe/rider/blob/master/doc/code-style.md)
    + [DEMO 与单元测试](https://github.com/ecomfe/rider/blob/master/doc/demo-and-ut.md)
    + [常见问题](https://github.com/ecomfe/rider/blob/master/doc/faq.md)

### rider-ui

基于 `rider` 的 UI 样式库，用于快速构建移动应用界面。

+ [项目地址](https://github.com/ecomfe/rider-ui)
+ [文档](https://github.com/ecomfe/rider-ui/blob/master/README.md)


## Platform

**Saber** 的 **平台工具**（[`edpx-mobile`](https://github.com/ecomfe/edpx-mobile)）是对 `edp` 功能的补充。

首次运行 `edp mobile` 开头的命令即会自动安装 `edpx-mobile`，用法请参考 [使用教程](https://github.com/ecomfe/saber/wiki/Tutorial)。

