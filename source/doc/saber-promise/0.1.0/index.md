layout: doc
comments: false
date: 2014-9-31 2:58:21
repo: saber-promise
ref: 0.1.0
---

# saber-promise

<del><a href="http://baike.baidu.com/view/8420590.htm" target="_blank">吾王</a>的</del>移动端的[Promise/A+](http://promises-aplus.github.io/promises-spec/)实现

## Usage

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

## API

### Resolver

有三种状态：`等待`、`已完成`、`已拒绝`。只能从`等待`变为`已完成`或者从`等待`变为`已拒绝`，并且状态只能变更一次

创建`Resolver`实例

    var resolver = new Resolver();

### Resolver.fulfill(data)

将状态由`等待`变更为`已完成`，并将`data`作为第一个参数触发所有已注册的`onFulfilled`回调函数

    var resolver = new Resolver();
    resolver.fulfill(100);

多次调用处于非`等待`状态的`Resolver`实例的`fulfill`方法是无效的

### Resolver.reject(reason)

将状态由`等待`变更为`已拒绝`，并将`reason`作为第一个参数触发所有已注册的`onRejected`回调函数

    var resolver = new Resolver();
    resolver.reject('找不到对象');

多次调用处于非`等待`状态的`Resolver`实例的`reject`方法是无效的

### Resolver.promise()

返回对应的Promise对象

### Promise

只能通过`Resolver.promise()`创建

### Promise.then(onFulfilled, onRejected)

注册`已完成`和`已拒绝`状态的回调

* `onFulfilled` `已完成`状态回调
* `onRejected` `已拒绝`状态回调

返回`Promise`实例

## Test

使用Promises/A+规范的[Test Suite](https://github.com/promises-aplus/promises-tests)

    npm test

