layout: doc
comments: false
date: 2014-9-31 2:55:11
repo: saber-firework
ref: 0.3.2
---

# saber-firework [![Build Status](https://travis-ci.org/ecomfe/saber-firework.png)](https://travis-ci.org/ecomfe/saber-firework)

移动端`MVP`开发框架，使用[etpl](https://github.com/ecomfe/etpl)作为模版引擎，结合[页面转场](https://github.com/ecomfe/saber-viewport)与[路由管理](https://github.com/ecomfe/saber-router)，提供完整的`SPA`解决方案。

## Usage

```javascript
var firework = require('saber-firework');

// 加载index配置
firework.load({
    path: '/index',
    action: require('./index')
});

// 启动App
firework.start();
```

参考[使用指南](doc/guide.md)

## API

### .load(route)

加载路由配置信息

* `route` `{Object|Array.<Object>}` 路由配置信息，具体参考[doc/route](doc/route.md)

### .start(ele, options)

启动App

* `ele ` `{HTMLElement}` 容器元素
* `options` `{Object}` 全局配置信息，具体参考[doc/config](doc/config.md)

## Events

### beforeload

加载页面前事件，有两个参数，`after`待转加载页面信息 与 `before`当前页面信息

* `{Object}` after 待转加载页面信息
* `{Action}` after.action 待转加载的[action对象](doc/action.md)
* `{Page}` after.page 待转加载的[page对象](https://github.com/ecomfe/saber-viewport#page)
* `{Object}` before 当前页面信息
* `{Action}` before.action 当前的[action对象](doc/action.md)
* `{Page}` before.page 当前的[page对象](https://github.com/ecomfe/saber-viewport#page)

### afterload

页面加载完成事件，有两个参数，`after`当前已加载的页面信息 与 `before`之前的页面信息

* `{Object}` after 当前已加载的页面信息
* `{Action}` after.action 当前已加载的[action对象](doc/action.md)
* `{Page}` after.page 当前已加载的[page对象](https://github.com/ecomfe/saber-viewport#page)
* `{Object}` before 之前的页面信息
* `{Action}` before.action 之前的[action对象](doc/action.md)
* `{Page}` before.page 之前的[page对象](https://github.com/ecomfe/saber-viewport#page)

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
