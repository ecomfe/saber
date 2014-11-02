layout: doc
comments: false
date: 2014-10-2 5:36:42
repo: saber-router
ref: 0.1.0-beta.1
---

# saber-router

适用于移动端的`hash`路由控制

* 支持相对路径 `location.hash = '../somewhere/action'`
* 支持正则表达式控制路径
* 使用`~`添加查询条件 `#/action~uid=100&name=saber`

## Usage

```javascript
var router = require('saber-router');

// 添加路由规则
router.add(
    '/add',
    function (url, query) {
        ...
    }
);

// 开始路由监听
router.start();
```

## API

### .index

根路径，默认为`/`

### .add( path, fn, thisArg )

添加路由规则

* `path` `{string|RegExp}` 路由路径
* `fn` `{function(string, Object)}` 路由处理函数
* `thisArg` `{Object}` 路径处理函数的`this`指针

### .remove( path )

删除路由规则

### .clear()

清除所有路由规则

### .redirect( url, force )

URL跳转

* `url` `{string}` url
* `force` `{boolean}` 是否强制跳转

删除路由规则

### .start()

启动路由监听

### .stop()

停止路由监听

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
