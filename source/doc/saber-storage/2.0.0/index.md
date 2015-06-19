layout: doc
comments: false
date: 2015-5-19 0:23:44
title: saber-storage
repo: saber-storage
ref: 2.0.0
---

![Bower version](https://img.shields.io/bower/v/saber-storage.svg?style=flat-square) [![NPM version](https://img.shields.io/npm/v/saber-storage.svg?style=flat-square)](https://npmjs.org/package/saber-storage) [![Build Status](https://img.shields.io/travis/ecomfe/saber-storage.svg?style=flat-square)](https://travis-ci.org/ecomfe/saber-storage) [![License](https://img.shields.io/npm/l/saber-storage.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

移动端本地存储模块，提供 `memory`、`session` 与 `local` 三种存储模式，并且兼容 node 环境

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
$ edp import saber-storage
```

或者在 node 环境下使用 `npm` 引入模块：

```sh
$ npm install saber-storage --save
```

## Usage

```js
var Storage = require('saber-storage');

// 使用localStorage进行本地存储
var storage = new Storage('local');

// 存入
storage.setItem('string', 'this is a string');
storage.setItem('object', {a: 1});

// {a: 1}
storage.getItem('object');
```

## API

### Constructor

#### Storage(type)

* **type** `{string=}` 存储类型，支持以下取值：
    * **memory** 内存存储
    * **session** `sessionStorage` 存储
    * **local** `localStorage` 存储

node 环境下目前支持 `memory` 内存存储，可以做为 [rebas](https://github.com/ecomfe/rebas) 的插件提供基于内存的 `session` 数据存储

### Methods

#### setItem(key, val)

存入数据

* **key** `{String}` 存储键名
* **val** `{*}` 对应键名下的数据

#### getItem(key)

根据键名返回数据

* **key** `{String}` 存储键名
* _return_ `{*}` 对应键名下的数据

#### removeItem(key)

移除某键名下的数据

* **key** `{String}` 存储键名
* _return_ `{void}`

#### clear()

清空已持久化的数据

* _return_ `{void}`
 
#### key()

获得持久化数据的key

* _return_ `{Array}` 键名数组

#### getAllItems()

获取所有存储的数据

* _return_ `{Object}` 存储的数据