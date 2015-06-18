layout: doc
comments: false
date: 2015-5-18 4:10:3
title: saber-emitter
repo: saber-emitter
ref: 2.0.0-alpha.1
---

一个适用于移动端的事件发射器。

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-emitter
```

## Usage

```js
require(['saber-emitter'], function(Emitter) {
    var emitter = new Emitter();

    emitter.on('greeting', function(name) {
        console.log('Hello, ' + name + '!');
    });

    emitter.emit('greeting', 'Firede');
});
```

## API

创建 `Emitter` 实例

* _return_ `{Emitter}`

```js
var Emitter = require('saber-emitter');
var emitter = new Emitter();
```

### Methods

#### mixin(obj)

通过 `mixin` 将 `Emitter` 混入目标对象

* **obj** `{Object}` 目标对象
* _return_ `{Object}` 混入 Emitter 后的目标对象

```js
var obj = {};
Emitter.mixin(obj);

obj.emit('foo');
```

### Classes

#### on(event, listener)

挂载事件

* **event** `{string}` 事件名
* **listener** `{Function}` 监听器
* _return_ `{Emitter}`

```js
function listenerFn(name) {
    console.log('Hello ' + name);
}
emitter.on('say', listenerFn);
```

#### once(event, listener)

挂载只执行一次的事件

* **event** `{string}` 事件名
* **listener** `{Function}` 监听器
* _return_ `{Emitter}`

```js
emitter.once('say', listenerFn);
```

#### off([event[, listener]])

注销事件与监听器

* **event** `{string=}` 事件名
* **listener** `{Function=}` 监听器
* _return_ `{Emitter}`

```js
// `不传参数` 将注销当前实例的所有事件
emitter.off();

// 只传入 `event` 将注销该事件下挂载的所有监听器
emitter.off('say');

// 传入 `event` 与 `listener` 将只注销该监听器
emitter.off('say', listenerFn);
```

#### emit(event[, ...args])

触发事件

* **event** `{string}` 事件名
* **args** `{...*}` 传递给监听器的参数，可以有多个
* _return_ `{Emitter}`

```js
emitter.emit('say');
emitter.emit('say', 'hello');
emitter.emit('say', 'hello', 'world');
```

#### listeners(event)

返回指定事件的监听器列表

* **event** `{string}` 事件名
* _return_ `{Array}` 监听器列表

```js
var listeners = emitter.listeners('say');
```

#### setMaxListeners(number)

设置每个事件下，监听器的最大个数。为 `0` 时不限制，默认值是 `10`

* **number** `{number}` 监听器个数
* _return_ `{Emitter}`

```js
emitter.setMaxListeners(8);
```