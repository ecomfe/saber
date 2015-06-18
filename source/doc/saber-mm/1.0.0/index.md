layout: doc
comments: false
date: 2015-5-18 4:34:24
title: saber-mm
repo: saber-mm
ref: 1.0.0
---

![Bower version](https://img.shields.io/bower/v/saber-mm.svg?style=flat-square) [![NPM version](https://img.shields.io/npm/v/saber-mm.svg?style=flat-square)](https://npmjs.org/package/saber-mm) [![Build Status](https://img.shields.io/travis/ecomfe/saber-mm.svg?style=flat-square)](https://travis-ci.org/ecomfe/saber-mm) [![License](https://img.shields.io/npm/l/saber-mm.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

适用于移动端的 [MVP](https://zh.wikipedia.org/wiki/Model_View_Presenter) 实现。并不包含完整的路由功能和生命周期管理，如需要可直接使用的 `MVP` 框架请考虑以下的模块：

* [saber-firework](https://github.com/ecomfe/saber-firework)，浏览器端的 `SPA` 运行环境
* [saber-rainbow](https://github.com/ecomfe/saber-rainbow)，浏览器端的多页面运行环境
* [rebas](https://github.com/ecomfe/rebas)，node 运行环境，可与 `saber-firework` 或者 `saber-rainbow` 配合完成同构化的应用开发

模版引擎使用 [etpl] (http://ecomfe.github.io/etpl/)，相关模版语法请参考[这里](https://github.com/ecomfe/etpl/blob/master/doc/syntax.html)

## Usage

```js
var mm = require('saber-mm');
var router = require('saber-router');

// 配置路由器
mm.config({router: router});

// 创建Presenter对象
mm.create().then(function (presenter) {
    ...
});
```

## API

* [Methods](#methods)
* [Classes](#classes)

### Methods

#### config(options)

配置

* **options** `{Object}` 配置信息
    * **template** `{string|Array.<string>=}` 公共模版
    * **templateConfig** `{Object=}` 模版配置信息，具体请参考 [etpl 的配置参数](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * **templateData** `{Object=}` 全局模版数据
    * **router** `{Object}` 路由器，必须含有 `redirect` 方法，用于为 `Presenter` 与 `View` 提供页面跳转功能
    * **basePath** `{string=}` 动态加载 Presenter 的根路径

#### create(config)

创建Presenter对象

* **config** `{Object|string}` [Presenter 配置信息](doc/presenter.md#configure) 或者配置信息的加载地址
* _return_ `{Promise}` [Promise 对象](https://github.com/ecomfe/saber-promise/blob/master/doc/promise.html)

### Classes

* [Presenter](doc/presenter.html) 页面行为管理对象
* [Model](doc/model.html) 数据管理对象
* [View](doc/view.html) 视图管理对象