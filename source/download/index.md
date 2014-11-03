title: 下载
date: 2014-10-27 00:55:57
comments: true
---

## 如何下载 JavaScript 模块

`saber` 的所有 JavaScript 模块，均通过 [**EDP**](https://github.com/ecomfe/edp) 提供的 **包管理** 功能下载。如果你已经有了 `node` 环境，先安装 `EDP`：

    npm install -g edp

现在，你就可以下载你需要的 JavaScript 模块了，比如：

    edp import saber-ajax

以上命令将下载 `saber-ajax` 模块，以及该模块所依赖的 `saber-emitter`、`saber-lang`、`saber-promise` 模块。

`saber` 框架采用了细粒度的模块划分。受惠于此的同时，也会面临维护模块间依赖、模块升级、模块打包的问题，所以我们采用 [**配套工具**(EDP)](https://github.com/ecomfe/edp) 来帮您自动完成这些工作，让您无后顾之忧。

## 如何下载 CSS 样式工具库 rider

`rider` 是一个标准的 `stylus` 插件，可以直接通过 `npm` 直接安装。

在 `edp` 环境下，我们提供了专门的支持插件 [`edp-provider-rider`](https://github.com/ecomfe/edp-provider-rider)。

如果是使用 `edpx-mobile` 生成的项目，已经默认安装好了 `rider`，可以直接使用。

了解更多信息，请参考 `rider` 的[文档](http://github.com/ecomfe/rider)。

## 单页面应用

创建 SPA 命令，两个命令即可搞定，安装依赖的工具：

    npm install -g edp edpx-mobile

在 **目标目录** 创建一个新项目：

    edpm init spa

现在，依赖的 JavaScript 模块与 CSS 样式工具库都已经就绪了。

## JavaScript 模块状态

Package | Build Status | Dependencies Status
--- | --- | ---
[saber-ajax](https://github.com/ecomfe/saber-ajax) | [![Build Status](https://travis-ci.org/ecomfe/saber-ajax.png)](https://travis-ci.org/ecomfe/saber-ajax) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-ajax.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-ajax)
[saber-cookie](https://github.com/ecomfe/saber-cookie) | [![Build Status](https://travis-ci.org/ecomfe/saber-cookie.png)](https://travis-ci.org/ecomfe/saber-cookie) | 无依赖
[saber-dom](https://github.com/ecomfe/saber-dom) | [![Build Status](https://travis-ci.org/ecomfe/saber-dom.png)](https://travis-ci.org/ecomfe/saber-dom) | 无依赖
[saber-emitter](https://github.com/ecomfe/saber-emitter) | [![Build Status](https://travis-ci.org/ecomfe/saber-emitter.png)](https://travis-ci.org/ecomfe/saber-emitter) | 无依赖
[saber-env](https://github.com/ecomfe/saber-env) | [![Build Status](https://travis-ci.org/ecomfe/saber-env.png)](https://travis-ci.org/ecomfe/saber-env) | 无依赖
[saber-fastbutton](https://github.com/ecomfe/saber-firework) | - | 无依赖
[saber-firework](https://github.com/ecomfe/saber-firework) | [![Build Status](https://travis-ci.org/ecomfe/saber-firework.png)](https://travis-ci.org/ecomfe/saber-firework) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-firework.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-firework)
[saber-geo](https://github.com/ecomfe/saber-geo) | [![Build Status](https://travis-ci.org/ecomfe/saber-geo.png)](https://travis-ci.org/ecomfe/saber-geo) | 无依赖
[saber-lang](https://github.com/ecomfe/saber-lang) | [![Build Status](https://travis-ci.org/ecomfe/saber-lang.png)](https://travis-ci.org/ecomfe/saber-lang) | 无依赖
[saber-log](https://github.com/ecomfe/saber-log) | [![Build Status](https://travis-ci.org/ecomfe/saber-log.png)](https://travis-ci.org/ecomfe/saber-log) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-log.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-log)
[saber-matchmedia](https://github.com/ecomfe/saber-matchmedia) | - | 无依赖
[saber-promise](https://github.com/ecomfe/saber-promise) | [![Build Status](https://travis-ci.org/ecomfe/saber-promise.png)](https://travis-ci.org/ecomfe/saber-promise) | 无依赖
[saber-router](https://github.com/ecomfe/saber-router) | [![Build Status](https://travis-ci.org/ecomfe/saber-router.png)](https://travis-ci.org/ecomfe/saber-router) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-router.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-router)
[saber-run](https://github.com/ecomfe/saber-run) | [![Build Status](https://travis-ci.org/ecomfe/saber-run.png)](https://travis-ci.org/ecomfe/saber-run) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-run.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-run)
[saber-scroll](https://github.com/ecomfe/saber-scroll) | - | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-scroll.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-scroll)
[saber-storage](https://github.com/ecomfe/saber-storage) | [![Build Status](https://travis-ci.org/ecomfe/saber-storage.png)](https://travis-ci.org/ecomfe/saber-storage) | 无依赖
[saber-string](https://github.com/ecomfe/saber-string) | [![Build Status](https://travis-ci.org/ecomfe/saber-string.png)](https://travis-ci.org/ecomfe/saber-string) | 无依赖
[saber-tap](https://github.com/ecomfe/saber-tap) | - | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-tap.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-tap)
[saber-uri](https://github.com/ecomfe/saber-uri) | [![Build Status](https://travis-ci.org/ecomfe/saber-uri.png)](https://travis-ci.org/ecomfe/saber-uri) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-uri.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-uri)
[saber-viewport](https://github.com/ecomfe/saber-viewport) | - | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-viewport.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-viewport)
[saber-widget](https://github.com/ecomfe/saber-widget) | [![Build Status](https://travis-ci.org/ecomfe/saber-widget.png)](https://travis-ci.org/ecomfe/saber-widget) | [![Dependency Status](http://edp-api.baidu.com/d/e/ecomfe/saber-widget.png)](http://edp-api.baidu.com/d/e/ecomfe/saber-widget)
