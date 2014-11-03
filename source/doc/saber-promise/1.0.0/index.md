layout: doc
comments: false
date: 2014-10-3 3:10:48
title: saber-promise
repo: saber-promise
ref: 1.0.0
---

<del><a href="http://baike.baidu.com/view/8420590.htm" target="_blank">吾王</a>的</del>移动端的[Promise/A+](http://promises-aplus.github.io/promises-spec/)实现，遵循**1.1**规范

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
$ edp import saber-promise
```

## Usage

```js
var Resolver = require('saber-promise');

function doSomeThing() {
    var resolver = new Resolver();
    // 做一些异步操作
    doSync(
        function (result) {
            // 异步操作成功了
            resolver.fulfill(result);
        },
        function () {
            // 异步操作失败了
            resolver.reject('connect error');
        }
    );
    // 返回Promise对象
    return resolver.promise();
}

doSomeThing()
    // 对异步结果进行处理
    .then(
        // 处理成功的情况
        function (result) {
            console.log(result);
        },
        // 处理失败的情况
        function (reason) {
            console.log(reason);
        }
    )
    // 不管成功还是失败都提示操作成功
    .then(function () {
        console.log('操作完成')
    });
```

### About Exception

规范要求捕获并处理所有的异常[#2.2.7.2](http://promisesaplus.com/#point-50)，在项目开发中可能会经常遇到非预期的异常被自动处理而导致无从跟踪，这些错误基本都是程序级别的书写错误而非可预期的业务逻辑错误，一般都不会有相应的`reject`处理。针对这种情况提供了全局事件：`reject`与`resolve`来监控处理（需要先调用`Resolver.enableGlobalEvent()`启用全局事件），更暴力一些还可以在**debug过程**中使用`Resolver.disableExceptionCapture()`来直接关闭异常处理，方便查找问题。

**警告** 异常相关的API都是**非标准的**，只建议在调试阶段使用，这些API在未来某版本中可能会被废除

## API

* [Methods](#methods)
* [Events](#events)
* [Classes](#classes)

### Methods

#### promise(fn)

创建`Promise`对象

* **fn** `{Function}` 构造函数，第一个参数是[Resolver](doc/resolver.html)对象
* _return_ `{Promise}` [Promise](doc/promise.html)对象

```js
var promise = Resolver.promise(function (resolver) {
    setTimeout(function () {
        resolver.resolve();
    }, 0);
});

promise.then(function () {
    ...
});
```

#### fulfilled(data)

创建已经处于`fulfilled`状态的[Promise](doc/promise.html)对象

* **data** `{*}` 数据
* _return_ `{Promise}` [Promise](doc/promise.html)对象

#### resolved(data)

创建已经处于`fulfilled`状态的[Promise](doc/promise.html)对象，与[fulfilled](#fulfilleddata)完全相同，别名而已...

* **data** `{*}` 数据
* _return_ `{Promise}` [Promise](doc/promise.html)对象

#### rejected(reason)

创建已经处于`rejected`状态的`Promise`对象

* **reason** `{*}` 失败原因
* _return_ `{Promise}` [Promise](doc/promise.html)对象

#### all(promises)

关联多个[Promise](doc/promise.html)对象并返回一个新的`Promise`对象，返回的`Promise`在所有被关联的`Promise`对象都`fulfilled`时达到`fulfilled`状态，如果参数中的有任意`promise`对象`rejected`则立即达到`rejected`状态

* **promises** `{Array.<promise>|...promise}` 待关联的`Promise`对象，可以是数组参数或者多个`promise`对象
* _return_ `{Promise}` [Promise](doc/promise.html)对象

#### enableGlobalEvent(Emitter)

**非标准API** 启动全局事件

* **Emitter** `{Object}` 事件发射器

全局事件是默认关闭的，`saber-promise`不强依赖于[saber-emitter](https://github.com/ecomfe/saber-emitter)或者任何其它事件发射器，所以在开启全局事件时需要传入一个事件发射器来启用自定义事件，建议使用[saber-emitter](https://github.com/ecomfe/saber-emitter)，如下：

```js
var Emitter = require('saber-emitter');
Resolver.enableGlobalEvent(Emitter);

// resolved事件
Resolver.on('resolve', function (data) {
    ...
});

// rejected事件
Resolver.on('reject', function (reason) {
    ...
});
```

#### disableExceptionCapture()

**非标准API**

禁用异常处理，默认时启动的。如果全局事件都不想监控了，用这个可以直接关闭异常处理，方便调试，简单粗暴～

#### enableExceptionCapture()

**非标准API**

启用异常处理

### Events

注册任何全局事件前需要先启用全局事件，具体请参考[enableGlobalEvent(Emitter)](#enableglobaleventemitter)

#### resolve

resolved事件 任何[Resolver](doc/resolver.html)对象处于`fulfilled`时触发

* **data** `{*}` 数据

#### reject

rejected事件 任何[Resolver](doc/resolver.html)对象处于`rejected`时触发

* **reason** `{*}` 失败原因

### Classes

* [Resolver](doc/resolver.html) 操作的状态保持对象，用于产生[Promise](promise.html)对象
* [Promise](doc/promise.html) 由[Resolver](resolver.html)对象产生，用于表示一个正在进行的操作

## Test

使用Promises/A+规范的[Test Suite](https://github.com/promises-aplus/promises-tests)

    $ npm install
    $ npm test

基本性能测试请参考[这里](https://github.com/treelite/promise-perf-tests)