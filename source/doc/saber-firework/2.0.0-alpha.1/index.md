layout: doc
comments: false
date: 2015-2-4 3:54:48
title: saber-firework
repo: saber-firework
ref: 2.0.0-alpha.1
---

移动端`SPA`开发框架，基于[MVP](https://github.com/ecomfe/saber-mm)架构，结合[页面转场](https://github.com/ecomfe/saber-viewport)与[路由管理](https://github.com/ecomfe/saber-router)，提供完整的`SPA`解决方案。

## Installation

使用 [edpx-mobile](https://github.com/ecomfe/edpx-mobile) 初始化项目，引入相关模块

```sh
$ edp mobile init spa
```

或者通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
$ edp import saber-firework
```

## Usage

```js
var app = require('saber-firework');

// 加载index配置
app.load({
    path: '/index',
    action: require('./index')
});

// 启动App
app.start();
```

更多内容请参考[使用指南](doc/guide.html)

## API

* [Methods](#methods)
* [Events](#events)
* [Classes](#classes)

### Methods

#### load(route)

加载路由配置信息

* **route** `{Object|Array.<Object>}` 路由配置信息，具体参考[doc/route](doc/route.html)

#### start(ele[, options])

启动应用

* **ele** `{HTMLElement}` 容器元素
* **options** `{Object=}` 全局配置信息，具体参考[doc/config](doc/config.html)

#### addFilter(url, fn)

添加在加载页面前执行的过滤器

* **url** `{string|RegExp=}` filter匹配的url或者url正则表达式，如果不设置则filter对所有url都生效
* **fn** `Function(route, next, jump)` filter，支持异步操作，有四个参数：
    * **route** `{Object}` 路由信息，包括页面URL`path`与查询条件`query`等
    * **next** `{Function}` 执行下一个filter
    * **jump** `{Function}` 跳过后续的filter

最常见的filter有日志统计，权限验证等，例如：

```js
// 对所有`/admin/`路径下的页面添加登录验证
firework.addFilter(/^\/admin\//, function (route, next, jump) {
    if (!isLogin) {
        // 没登录就乖乖去登录
        // 通过直接修改路由信息中的`path`来改变实际加载的页面
        // 同时添加名为`form`的`query`参数，用于登录完成后跳转回之前的页面
        route.query = { from: route.path };
        route.path = '/login';
        // 直接跳过后续的filter
        jump();
    }
    else {
        // 已经登录了
        // 就好好继续执行下一个filter吧
        next();
    }
});
```

#### delCachedAction(path)

删除缓存的Action

* **path** `{string}` 页面路径

#### on(name, fn)

绑定事件

* **name** `{string}` 事件名称，具体请参考[事件说明](#events)
* **fn** `{Function}` 事件处理函数

### Events

#### beforeload

加载页面前事件，有两个参数，`after`待加载页面信息 与 `before`当前页面信息

* **after** `{Object}`  待加载页面信息
    * **route** `{Object}` 待加载页面的路由信息
        * **path** `{string}` 地址
        * **query** `{Object}` 查询条件
        * **url** `{string}` 完整URL
    * **action** `{Action}` 待加载的[Action对象](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)
    * **page** `{Page}` 待加载的[Page对象](https://github.com/ecomfe/saber-viewport#page)
* **before** `{Object}` 当前页面信息
    * **route** `{Object}` 当前页面的路由信息
        * **path** `{string}` 地址
        * **query** `{Object}` 查询条件
        * **url** `{string}` 完整URL
    * **action** `{Action}` 当前的[Action对象](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)
    * **page** `{Page}` 当前的[Page对象](https://github.com/ecomfe/saber-viewport#page)

#### beforetransition

转场动画开始前事件，参数同[beforeload](#beforeload)

#### afterload

页面加载完成事件，参数同[beforeload](#beforeload)

#### error

页面加载失败事件，参数同[beforeload](#beforeload)

### Classes

* [Action](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.html)，页面管理对象
* [View](https://github.com/ecomfe/saber-mm/blob/master/doc/view.html)，视图管理对象
* [Model](https://github.com/ecomfe/saber-mm/blob/master/doc/view.html)，数据管理对象