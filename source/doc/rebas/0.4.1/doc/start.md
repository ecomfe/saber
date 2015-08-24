layout: doc
comments: false
date: 2015-7-24 4:8:23
title: Getting Start
repo: rebas
ref: 0.4.1
---

推荐使用 [edpx-mobile](https://github.com/ecomfe/edpx-mobile) 进行项目的初始化及后续的项目管理。

## 安装 edp 

```sh
$ npm install -g edp
```

[edp](https://github.com/ecomfe/edp) 是一个基于 Node.JS 与 NPM 的企业级前端应用的开发平台，从开发、自测、构建等各方面辅助开发人员更愉快、更高效地进行项目开发。

## 始化项目

```sh
edp mobile init iso
```

初次运行 `mobile` 相关命令时会自动安装 [edpx-mobile](https://github.com/ecomfe/edpx-mobile) 插件，为移动开发提供更多便利。`iso` 表示初始化的是同构项目，相应的还有表示单页应用的 `spa` 参数可供选择。

初始化过程中会创建项目的基本文件结构，导入依赖模块，生成默认的文件。

## 添加业务逻辑

使用 `add` 命令能方便的新增业务逻辑

```sh
$ edp mobile add /
```

会对应生成根路径页面的相关文件：

* `lib/index.js` 页面 Presenter
* `lib/indexModel.js` 页面 Model
* `lib/indexView.js` 页面 View
* `lib/index.tpl` 页面模版
* `src/index.styl` 页面样式

每个文件都已包含相关的初始化代码，实际开发中只需要关注具体的业务逻辑就好～ 通过修改 `indexModel.js` 与 `index.tpl` 添加一些简单的逻辑：

```js
// 修改`indexModel.js` 文件中的 `fetch` 方法
// 返回页面渲染需要的数据
config.fetch = function () {
    return Resolver.resloved({name: 'Saber'});
};
```

```
<!-- 修改 `index.tpl` 文件，呈现页面 -->
Hello ${name}
```

## 启动自测服务器

是时候来看看之前修改的效果了，使用 `start` 命令启动自测服务器：

```sh
$ edp mobile start
```

第一次启动服务器可能需要点时间，启动之前会先自动安装缺失的依赖。完成后访问 `http://127.0.0.1:8848` 试试吧～

自测服务器会对相关文件进行实时监控，文件修改后都无需重启服务，直接刷新页面就可以看到效果了

## 了解更多

由[saber-mm](https://github.com/ecomfe/saber-mm) 提供核心的 `MVP` 实现，服务器端由 [rebas](https://github.com/ecomfe/rebas) 驱动，浏览器端由 [saber-firework](https://github.com/ecomfe/saber-firework) 提供运行环境，三者配合辅以各种功能专一的 saber 同构模块共同协作，提供完整的深度响应式应用框架。

* 了解 `MVP` 各部分的配置与API，请参考 [saber-mm 的说明文档](https://github.com/ecomfe/saber-mm#classes)
* 了解详细的浏览器端运行环境配置，请参考 [saber-firework 的说明文档](https://github.com/ecomfe/saber-firework#api)
* 了解详细的服务器端运行环境配置，请参考 [rebas 的说明文档](https://github.com/ecomfe/rebas#api)