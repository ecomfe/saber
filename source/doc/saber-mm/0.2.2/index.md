layout: doc
comments: false
date: 2015-5-18 4:34:28
title: saber-mm
repo: saber-mm
ref: 0.2.2
---

适用于移动端的`MVP`实现。并不包含完整的路由功能和生命周期管理，如需要可直接使用的`MVP`框架请考虑以下的模块：

* [saber-firework](https://github.com/ecomfe/saber-firework)，实现`MVP`的`SPA`框架
* [saber-rainbow](https://github.com/ecomfe/saber-rainbow)，实现`MVP`的多页面框架

模版引擎使用[etpl](http://ecomfe.github.io/etpl/)，相关模版语法请参考[这里](https://github.com/ecomfe/etpl/blob/master/doc/syntax.html)

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
    * **templateConfig** `{Object=}` 模版配置信息，具体请参考[etpl的配置参数](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * **router** `{Object}` 路由器

#### create(config)

创建Presenter对象

* **config** `{Object}` [Presenter配置信息](doc/presenter.md#configure)
* _return_ `{Promise}` [Promise对象](https://github.com/ecomfe/saber-promise/blob/master/doc/promise.html)

### Classes

* [Presenter](doc/presenter.html) 页面行为管理对象
* [Model](doc/model.html) 数据管理对象
* [View](doc/view.html) 视图管理对象