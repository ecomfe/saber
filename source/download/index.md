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
