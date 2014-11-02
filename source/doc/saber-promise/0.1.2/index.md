layout: doc
comments: false
date: 2014-10-2 10:37:56
repo: saber-promise
ref: 0.1.2
---

# saber-promise [![Build Status](https://travis-ci.org/ecomfe/saber-promise.png)](https://travis-ci.org/ecomfe/saber-promise)

<del><a href="http://baike.baidu.com/view/8420590.htm" target="_blank">吾王</a>的</del>移动端的[Promise/A+](http://promises-aplus.github.io/promises-spec/)实现，遵循**1.1**规范

## Usage

通过`edp`引入模块

    $ edp import saber-promise

```javascript
var Resolver = require('saber-promise');

function doSomeThing() {
    var resolver = new Resolver();
    doSync(
        function (result) {
            resolver.fulfill(result);
        },
        function () {
            resolver.reject('connect error');
        }
    );
    return resolver.promise();
}

doSomeThing().then(
    function (result) {
        alert(result);
    },
    function (reason) {
        alert(reason);
    }
);
```

### About Exception

规范要求捕获并处理所有的异常[#2.2.7.2](http://promisesaplus.com/#point-50)，在项目开发中可能会经常遇到非预期的异常被自动处理而导致无从跟踪，这些错误基本都是程序级别的书写错误而非可预期的业务逻辑错误，一般都不会有相应的`reject`处理。针对这种情况提供了全局事件：`reject`与`resolve`来监控处理（需要先调用`Resolver.enableGlobalEvent()`启用全局事件），更暴力一些还可以在**debug过程**中使用`Resolver.disableExceptionCapture()`来直接关闭异常处理，方便查找问题。

**警告** 异常相关的API都是**非标准的**，只建议在调试阶段使用，这些API在未来某版本中可能会被废除

## API

### Resolver 实例

有三种状态：`pending`、`fulfilled`、`rejected`。只能从`pending`变为`fulfilled`或者从`pending`变为`rejected`，并且状态只能变更一次

创建`Resolver`实例

```javascript
var resolver = new Resolver();
```

#### resolver.fulfill( data )

将状态由`pending`变更为`fulfilled`，并将`data`作为第一个参数触发所有已注册的`onFulfilled`回调函数

```javascript
var resolver = new Resolver();
resolver.fulfill(100);
```


多次调用处于非`pending`状态的`Resolver`实例的`fulfill`方法是无效的

#### resolver.resolve( data )

完全等同于 `Resolver.fulfill`，改个比较通用的名字...(&gt;_&lt;)...

#### resolver.reject( reason )

将状态由`pending`变更为`rejected`，并将`reason`作为第一个参数触发所有已注册的`onRejected`回调函数

```javascript
var resolver = new Resolver();
resolver.reject('找不到对象');
```

多次调用处于非`pending`状态的`Resolver`实例的`reject`方法是无效的

#### resolver.promise()

返回对应的Promise对象

### Promise 实例

#### promise.then( onFulfilled, onRejected )

注册`fulfilled`和`rejected`状态的回调

* `onFulfilled` `fulfilled`状态回调
* `onRejected` `rejected`状态回调

返回`Promise`实例

### Resolver

#### Resolver.promise( fn )

同步创建`Promise`对象

* `fn` `function(resolver)` 处理函数

```javascript
var promise = Resolver.promise(function (resolver) {
        setTimeout(function () {
            resolver.resolve();
        }, 0);
    });

promise.then(function () {
    ...
});
```

#### Resolver.fulfilled( data )

创建已经处于`fulfilled`状态的`Promise`对象

* `data` `*`

#### Resolver.resolved( data )

与`.fulfilled()` 完全相同

#### Resolver.rejected( reason )

创建已经处于`rejected`状态的`Promise`对象

* `reason` `*`

#### Resolver.all( promises )

关联多个`promise`对象，返回的`promise`在所有`Promise`对象参数都`fulfilled`时达到`fulfilled`状态，如果参数中的有任意`promise`对象`rejected`则立即达到`rejected`状态

* `promises` `Array.<promise> | ...promise` 可以是数组参数或者多个`promise`对象

#### Resolver.enableGlobalEvent( Emitter )

**非标准API** 启动全局事件

* `Emitter` `{Object}` 事件发射器

全局事件是默认关闭的，`saber-promise`不强依赖于`saber-emitter`或者任何事件发射器，所以在开启全局事件时需要传入一个事件发射器来启用自定义事件，建议使用`saber-emitter`，如下：

```javascript
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

#### Resolver.disableExceptionCapture()

**非标准API** 禁用异常处理，默认时启动的。如果全局事件都不想监控了，用这个可以直接关闭异常处理，方便调试，简单粗暴～

#### Resolver.enableExceptionCapture()

**非标准API** 启用异常处理

## Test

使用Promises/A+规范的[Test Suite](https://github.com/promises-aplus/promises-tests)

    $ npm install
    $ npm test

基本性能测试请参考[这里](https://github.com/treelite/promise-perf-tests)

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
