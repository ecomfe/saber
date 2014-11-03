layout: doc
comments: false
date: 2014-10-3 3:43:55
title: saber-uri
repo: saber-uri
ref: 1.0.0
---

`URI`处理

依照[RFC3986](http://tools.ietf.org/html/rfc3986)，将一个完整的`URI`按顺序（从左至右）依次划分为以下组件：

* `scheme` 协议
* `username` 用户名
* `password` 密码
* `host` 主机名
* `port` 端口号
* `path` 路径
* `query` 查询条件
* `fragment` 片段

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-uri
```

## Usage

```js
var uri = require('saber-uri');

// 构建URI对象
var url = uri('www.baidu.com');

// 添加query
url.query.add({wd: ['10', '11'], from: 'github'});

// 字符串化
// 返回'www.baidu.com?wd=10&wd=11&from=github'
console.log(url.toString())
```

## API

* [Methods](#methods)
* [Classes](#classes)

### Methods

#### uri(data)

构建`URI`对象

* **data** `{string|Object}`
* _return_ `{URI}` 创建的[URI](doc/uri.html)对象

```js
var uri = require('saber-uri');
var url;

// 通过字符串构建
url = uri('www.baidu.com');

// 通过对象构建
url = uri({host: 'www.baidu.com', path: '/search'});
```

#### parse(str)

解析`URI`字符串

* **str** `{string}`
* _return_ `{Object}`

```javascript
var uri = require('saber-uri');
// 输出
// {
//     scheme: 'maileto', username: undefined, password: undefined,
//     host: undefined, port: undefined, path: 'c.xinle@gmail.com', 
//     query: undefined, fragment: undefined
// }
uri.parse('mailto:c.xinle@gmail.com');
```

#### resolve(from, to)

resolve path

* **from** `{string}`
* **to** `{string=}`
* _return_ `{string}`

### Classes

* [URI](doc/uri.html)