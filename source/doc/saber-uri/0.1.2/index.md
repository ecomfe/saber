layout: doc
comments: false
date: 2014-10-2 5:36:59
repo: saber-uri
ref: 0.1.2
---

# saber-uri [![Build Status](https://travis-ci.org/ecomfe/saber-uri.png)](https://travis-ci.org/ecomfe/saber-uri)

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

## Usage

```javascript
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

### uri( data )

构建`URI`对象

* `data` `{string|Object}`

```javascript
var uri = require('saber-uri');
var url;

// 通过字符串构建
url = uri('www.baidu.com');

// 通过对象构建
url = uri({host: 'www.baidu.com', path: '/search'});
```

### uri.parse( str )

解析`URI`字符串

* `str` `{string}`

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

### uri.resolve( from, to )

resolve path

* `from` `{string}`
* `to` `{string=}`

### URI

`uri()`创建的`URI`对象

#### .set( name, data )

设置组件的值

* `name` `{string=}` 组件名，可省略，省略后就对整个`URI`对象进行设置
* `data` `{*}` 组件值

```javascript
var uri = require('saber-uri');
var url = uri('www.baidu.com');

// www.baidu.com/search
url.set('path', '/search');

// github.com
url.set('github.com');
```

#### .get( name, data )

获取组件值

* `name` `{string}` 组件名

```javascript
var uri = require('saber-uri');
var url = uri('www.baidu.com/search?wd=100');

// /search
url.get('path');

// 100
url.get('query', 'wd');
```

#### .toString( name )

字符串化

* `name` `{string=}` 组件名，可省略，省略后就对整个`URI`对象进行字符串化

```javascript
var uri = require('saber-uri');
var url = uri('www.baidu.com/search?wd=100');

// ?wd=100
url.toString('query');

// www.baidu.com/search?wd=100
url.toString();
```

#### .equal( uri )

判断`URI`是否相等

* `uri` `{string|Object}`

```javascript
var uri = require('saber-uri');
var url1 = uri('www.baidu.com/search');
var url2 = uri('www.baidu.com/search?wd=100');

// true
url1.equal('www.baidu.com/search');

// false
url1.equal(url2);
```

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
