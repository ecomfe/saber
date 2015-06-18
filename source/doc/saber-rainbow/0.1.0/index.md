layout: doc
comments: false
date: 2015-5-18 4:34:22
title: saber-rainbow
repo: saber-rainbow
ref: 0.1.0
---

多页面`MVP`框架

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
    * **renderFirst** `{boolean=}` 是否进行首屏渲染，默认为`true`
    * **template** `{string=}` 公共模版
    * **templateData** `{Object=}` 公共的静态模版数据
    * **templateConfig** `{string=}` etpl模版引擎配置信息，参考[etpl配置参数](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * **Presenter** `{Object=}` Presenter基类
    * **Model** `{Object=}` Model基类
    * **View** `{Object=}` View基类

#### boot(config)

启动Presenter

* **config** `{Object}` Presenter配置项，具体[请参考这里](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)