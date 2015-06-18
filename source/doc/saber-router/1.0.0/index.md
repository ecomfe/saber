layout: doc
comments: false
date: 2015-5-18 4:11:54
title: saber-router
repo: saber-router
ref: 1.0.0
---

适用于移动端的`hash`路由控制

* 支持相对路径 `location.hash = '../somewhere/action'`
* 支持正则表达式控制路径
* 支持`RESTful`
* 使用`~`添加查询条件 `#/action~uid=100&name=saber`

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-router
```

## Usage

```js
var router = require('saber-router');

// 添加路由规则
router.add(
    '/custom/:id', // RESTful风格
    function (path, query, url) {
        console.log(query.id);
    }
);

// 开始路由监听
router.start();
```

## API

### Methods

#### config([options])

全局配置

* **options** `{Object=}` 配置参数
    * **path** `{string=}` 默认路径 默认为`'/'`
    * **index** `{string=}` index文件名 默认为`''`

#### add(path, fn[, thisArg])

添加路由规则

* **path** `{string|RegExp}` 路由路径，如果是空字符串则认为是设置默认路由。在路由处理未找到对应路由规则时，会使用此默认路由进行处理
* **fn** `{function(string, Object, Object)}` 路由处理函数（函数参数分别是：path、查询条件、完整URL、跳转参数，具体请参考[redirect(url, query, options)](#redirecturl-query-options)）
* **thisArg** `{Object=}` 路径处理函数的`this`指针

#### remove(path)

删除路由规则

* **path** `{string}` 需要删除的路由路径

#### clear()

清除所有路由规则

#### reset(url[, query[, options]])

重置当前的URL（不产生新的浏览历史记录）

* **url** `{string}` url
* **query** `{Object=}` 查询条件
* **options** `{Object=}` 重置参数
    * **silent** `{boolean=}` 是否静默重置，如果静默重置则不会触发相应的路由规则处理

#### redirect(url[, query[, options]])

URL跳转

* **url** `{string}` url
* **query** `{Object=}` 查询条件
* **options** `{options=}` 跳转参数
    * **force** `{boolean=}` 是否强制跳转（默认情况下相同URL不跳转）
    * **silent** `{boolean=}` 是否静默跳转，如果静默跳转则不改变当前的URL

#### start()

启动路由监听

#### stop()

停止路由监听