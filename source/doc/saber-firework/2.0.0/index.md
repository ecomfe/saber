layout: doc
comments: false
date: 2015-5-18 7:6:16
title: saber-firework
repo: saber-firework
ref: 2.0.0
---

![Bower version](https://img.shields.io/bower/v/saber-firework.svg?style=flat-square) [![Build Status](https://img.shields.io/travis/ecomfe/saber-firework.svg?style=flat-square)](https://travis-ci.org/ecomfe/saber-firework) [![License](https://img.shields.io/github/license/ecomfe/saber-firework.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

移动端`SPA`开发框架，基于[MVP](https://github.com/ecomfe/saber-mm)架构，结合[页面转场](https://github.com/ecomfe/saber-viewport)与[路由管理](https://github.com/ecomfe/saber-router)，提供完整的`SPA`解决方案。

## Installation

使用 [edpx-mobile](https://github.com/ecomfe/edpx-mobile) 初始化项目，引入相关模块

```sh
$ edp mobile init spa
```

或者通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
$ edp import saber-firework
```

## Usage

```js
var app = require('saber-firework');

// 加载index配置
app.load({
    path: '/index',
    action: require('./index')
});

// 启动App
app.start();
```

更多内容请参考[使用指南](doc/guide.html)

从 2.0 开始，`saber-firework` 能支持同构的移动端项目了～ 只需要引入同构的插件就能让 `saber-firework` 作为同构项目的浏览器端运行环境来工作：

```js
var app = require('saber-firework');

// 引入同构插件
require('saber-firework/extension/isomorphic');

// 欢迎进入同构的世界～
...
```

## API

* [Methods](#methods)
* [Events](#events)

### Methods

#### start(ele[, options])

启动应用

* **ele** `{HTMLElement}` 容器元素
* **options** `{Object=}` 全局配置信息
    * `path` `{string=}` 默认路径，默认为 `'/'`
    * `index` `{string=}` index文件名称，默认为 `''`，如果设置为 `'index'` 则 `'/'` 与 `'/index'` 认为是相同路径
    * `template` `{string|Array.<string>=}` 公共模版字符串，预编译的template，主要用于在启动App时提前编译全局公用的 template，比如母版等，默认为空
    * `templateConfig` `{Object=}` 模版配置信息，具体请参考 [etpl 配置参数](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * `templateData` `{Object=}` 全局模版数据
    * `Presenter` `{Object=}` 自定义 Presenter 基类
    * `Model` `{Object=}` 自定义 Model 基类
    * `View` `{Object=}` 自定义 View 基类
    * `router` `{Object=}` 路由器，默认为 `hash` 路由
    * `timeout` `{number=}` 页面加载超时时间，单位ms，超时后框架可以响应其它页面的切换请求，默认为 `300`
    * `processor` `{Object=}` 附加处理器，作用于特定时刻调整框架行为，具体请参考[附加处理器说明](doc/processor)
    * `viewport` `{Object=}` 转场相关配置，具体请参考 [saber-viewprot](https://github.com/ecomfe/saber-viewport) 的[全局配置参数说明](https://github.com/ecomfe/saber-viewport#initele-options)，默认为`{ transition: false }` 关闭转场效果

`saber-firework` 由 [saber-mm](https://github.com/ecomfe/saber-mm) 提供 `MVP` 的实现，`Presenter`、`View`、`Model` 相关的配置与 API 请参考 [saber-mm 的说明文档](https://github.com/ecomfe/saber-mm#classes)

#### load(route)

加载路由配置信息

* **route** `{Object|Array.<Object>}` 路由配置信息
    * **path** `{string}` 请求路径
    * **action** `{Object|string}` Presenter 配置信息，如果是字符串则表示配置文件的加载地址，会在后续实际访问时进行异步加载
    * **cached** `{boolean=}` Presenter 缓存设置，缓存的页面在离开时不会被销毁，下次访问会跳过初始化渲染过程
    * **transition** `{Object=}` 转场参数，具体请参考 [saber-viewprot](https://github.com/ecomfe/saber-viewport) 的[全局配置参数说明](https://github.com/ecomfe/saber-viewport#initele-options)

#### getSyncData(name)

获取后端同步的数据，只针对同构的项目，关于同构的相关信息请参考 [rebas](https://github.com/ecomfe/rebas)

* **name** `{string}` 数据名称
* _return_ `{*}` 数据内容

#### delCachedAction(path)

删除缓存的Action

* **path** `{string}` 页面路径

#### on(name, fn)

绑定事件

* **name** `{string}` 事件名称，具体请参考[事件说明](#events)
* **fn** `{Function}` 事件处理函数

### Events

#### beforeload

加载页面前事件，有两个参数，`after`待加载页面信息 与 `before`当前页面信息

* **after** `{Object}`  待加载页面信息
    * **route** `{Object}` 待加载页面的路由信息
        * **path** `{string}` 地址
        * **query** `{Object}` 查询条件
        * **url** `{string}` 完整 URL
    * **action** `{Action}` 待加载的 [Presenter 对象](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)
    * **page** `{Page}` 待加载的 [Page 对象](https://github.com/ecomfe/saber-viewport#page)
* **before** `{Object}` 当前页面信息
    * **route** `{Object}` 当前页面的路由信息
        * **path** `{string}` 地址
        * **query** `{Object}` 查询条件
        * **url** `{string}` 完整 URL
    * **action** `{Action}` 当前的 [Presenter 对象](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)
    * **page** `{Page}` 当前的 [Page 对象](https://github.com/ecomfe/saber-viewport#page)

#### beforetransition

转场动画开始前事件，参数同 [beforeload](#beforeload)

#### afterload

页面加载完成事件，参数同 [beforeload](#beforeload)

#### error

页面加载失败事件，参数同 [beforeload](#beforeload)