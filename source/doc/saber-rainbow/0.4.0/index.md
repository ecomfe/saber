layout: doc
comments: false
date: 2015-5-18 12:58:42
title: saber-rainbow
repo: saber-rainbow
ref: 0.4.0
---

![Bower version](https://img.shields.io/bower/v/saber-rainbow.svg?style=flat-square) [![License](https://img.shields.io/github/license/ecomfe/saber-rainbow.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

多页面 `MVP` 框架

## Installation

```sh
$ edp import saber-rainbow
```

## Usage

```js
var app = require('saber-rainbow');

// 配置公共模版
app.config({
    template: '<!-- target: common --><h1>Titile</h1>'
});

// 启动index页面
app.boot(require('./index'));
```

## API

* [Methods](#methods)

### Methods

#### config(options)

全局配置

* **options** `{Object=}` 配置项
    * **main** `{HTMLElement=}` 页面容器元素，默认为 `document.body`
    * **template** `{string=}` 公共模版
    * **templateData** `{Object=}` 公共的静态模版数据
    * **templateConfig** `{string=}` etpl 模版引擎配置信息，具体请参考 [etpl 配置参数](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * **renderFirst** `{boolean=}` 是否进行首屏渲染，默认为 `true`
    * **isomorphic** `{boolean=}` 是否启用同构模式，默认为 `false`
    * **Presenter** `{Object=}` Presenter基类
    * **Model** `{Object=}` Model基类
    * **View** `{Object=}` View基类

`saber-rainbow` 由 [saber-mm](https://github.com/ecomfe/saber-mm) 提供 `MVP` 的实现，`Presenter`、`View`、`Model` 相关的配置与 API 请参考 [saber-mm 的说明文档](https://github.com/ecomfe/saber-mm#classes)

#### boot(config[, path])

启动Presenter

* **config** `{Object|string}` Presenter 配置信息，如果是字符串则表示配置文件的加载地址
* **path** `{string=}` 配置的路由地址