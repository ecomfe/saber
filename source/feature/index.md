title: 特性
date: 2014-10-26 23:12:42
comments: false
---

## 为移动设计

面向移动场景的精简设计，有选择的提供 API，抛开桌面浏览器的历史包袱。

```js
// 我们不提供 `each` 方法。
// 因为移动场景对标准的支持较好，直接使用 JavaScript API 是最佳选择：
var members = ['firede', 'treelite', 'redmed', 'zfkun', 'junmer'];
members.every(callbackFn...);
members.some(callbackFn...);
members.forEach(callbackFn...);
members.map(callbackFn...);
members.filter(callbackFn...);

// `Function.prototype.bind` 在 `iOS 5` 与 `PhantomJS` 中不支持。
// 为了向下兼容、单元测试，我们提供了 `bind` 方法：
lang.bind(fn, thisArg, ...args);
```

## 细粒度模块

遵循 AMD 规范，每个模块目标明确，功能专一。

我们为您准备了众多常用模块，供您根据需求，自由组合使用。

```js
// 引入所需的模块
var ajax = require('saber-ajax');
var format = require('saber-string/format');

ajax.get(url).then(
    // success
    function (data) {
        // 格式化字符串
        var greeting = format('Hello, ${name}!', data);
        showGreeting(greeting);
    },
    // failure
    function (err) {
        showError(err);
    }
);
```

当然，您也可以轻松引入其它符合 AMD 标准的第三方模块。

## 单页面应用

在移动场景下，单页面应用 (SPA) 能够获得更流畅的操作体验。

我们提供的 MVP 框架 `saber-firework`，采用 [ETPL](http://ecomfe.github.io/etpl) 做为模板引擎，结合页面转场与路由管理，提供完整的 SPA 解决方案。

```js
var firework = require('saber-firework');

// 加载 index 配置
firework.load({
    path: '/index',
    action: require('./index')
});

// 启动应用
firework.start();
```

## 样式工具库

我们提供了一个基于 `Stylus` 的样式工具库：`rider`。

它提供了 样式初始化、顺时针简写、缓动函数、图片、排版、单位转换、形状、动画、响应式工具 等功能，可以让你的前端样式开发更轻松、更省心。

它的特点是：

* 用 `Autoprefixer` 处理多数兼容性问题，面向 _标准 CSS_ 开发
* 只在调用时才输出 CSS 代码，避免 _样式类_ 污染 _HTML_ 的语义
* 以 `npm package` 的形式管理版本，升级方便

对于设计风格规律、需要快速开发的项目，我们还提供了一套 UI 样式库 `rider-ui`。

## 轻量级组件库

`saber-widget` 是为移动场景设计的轻量级组件库，旨在解决业务中较复杂的通用需求。

它提供了核心的 _组件机制_ 与部分 _通用组件_ (如：LazyLoad、Slider、ImageView、Suggestion、RadioBox 等)。它的 _组件机制_ 提供了 _生命周期_、_事件管理_、_状态管理_ 的模式，为复杂业务控件的开发提供了范本。

在实际业务中，同样的组件，在样式、功能上也可能存在细微差别。因为 `saber-widget` 没有对 `className` 的强耦合，并且拥有 `Widget` 的插件机制，能够在一定程度上应对这种变化。

相比其它 UI 组件库，`saber-widget` 并没有将 `button` 之类的基础元素列入组件范围。因为在业务快速发展的环境下，我们认为此类元素直接操作会是更好的实践，比做成组件更简单、更灵活。

## 项目样板与脚手架

针对最常见的 SPA 项目，我们提供了项目样板 (boilerplate) 与脚手架 (scaffold) 工具。

通过项目样板，您只需要一个命令，即可下载依赖模块、生成基础项目结构与文件：

```sh
# 初始化 SPA 项目
$ edpm init spa
```

通过脚手架，您可以快速为当前项目添加模块，并更新相关配置：

```sh
# 注册 `/list` 路由，并添加对应的 Action、Model、View、Template 文件
$ edpm add /list
```

## 高度工程化

受益于企业级前端应用开发平台 [EDP](https://github.com/ecomfe/edp)，它为项目管理、包管理、调试、构建、代码生成、代码检测、单元测试等各个环节提供解决方案，具备完善的工程化支持。

![EDP](https://cloud.githubusercontent.com/assets/157338/4702265/65c04392-5861-11e4-86db-f0be73d3b5f5.png)

我们为 EDP 增加了 Watch、LiveReload、HTML2JS、Stylus 支持、Weinre 支持等功能，使其与 Saber 无缝对接。
