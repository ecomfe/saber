layout: doc
comments: false
date: 2015-2-5 9:50:6
title: Resolver
repo: saber-promise
ref: 2.0.0-alpha.2
---

操作的状态保持对象，用于产生[Promise](promise.html)对象，Resolver对象有三种状态：`pending`、`fulfilled`、`rejected`。只能从`pending`变为`fulfilled`或者从`pending`变为`rejected`，并且状态只能变更一次

创建`Resolver`实例

```js
var Resolver = require('saber-promise');
var resolver = new Resolver();
```

## Methods

### fulfill([data])

将状态由`pending`变更为`fulfilled`，并将`data`作为第一个参数触发所有已注册的`onFulfilled`回调函数

* **data** `{*=}` 数据

```js
var resolver = new Resolver();
resolver.fulfill(100);
```

多次调用处于非`pending`状态的`Resolver`实例的`fulfill`方法是无效的

### resolve([data])

完全等同于 [fulfill](#fulfilldata)，改个比较通用的名字...(&gt;_&lt;)...

* **data** `{*=}` 数据

### reject([reason])

将状态由`pending`变更为`rejected`，并将`reason`作为第一个参数触发所有已注册的`onRejected`回调函数

* **reason** `{*=}` 错误原因

```js
var resolver = new Resolver();
resolver.reject('找不到对象');
```

多次调用处于非`pending`状态的`Resolver`实例的`reject`方法是无效的

### promise()

返回对应的Promise对象

* _return_ `{{Promise}`