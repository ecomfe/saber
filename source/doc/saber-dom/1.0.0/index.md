layout: doc
comments: false
date: 2015-5-18 4:10:14
title: saber-dom
repo: saber-dom
ref: 1.0.0
---

一个适用于移动端，静态函数风格的DOM工具库。

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-dom
```

## Usage

```js
var dom = require('saber-dom');

var el = dom.g('element-id');
var title = dom.query('.element-class');
var list = dom.queryAll('.list-item');

dom.addClass(el, 'el-class-name');
```

## API

* [selector](./doc/selector.html)
* [css](./doc/css.html)
* [traversal](./doc/traversal.html)
* [data](./doc/data.html)