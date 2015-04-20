layout: doc
comments: false
date: 2015-3-20 2:25:6
title: saber-storage
repo: saber-storage
ref: 2.0.0-beta.1
---

移动端本地存储模块。使用LocalStorage进行本地存储，提供了存储溢出的事件。

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-storage
```

## Usage

```js
var Storage = require('saber-storage');
var storage = new Storage({
    storageId: 'someNameDomain',    // optional
    memoryCache: false      // optional
});
// 存入
storage.setItem('string', 'this is a string');
storage.setItem('object', {a: 1});
var isSuccess = storage.setItem('array', [1, 2, 3, 4]);

if (isSuccess) {
    // Save success!
} else {
    // Save fail!
}

// 取出
var value = storage.getItem('string');

// 移除某一键值下的数据
storage.removeItem('string');

// 清空全部数据
storage.clear();

//事件派发
storage.on(Storage.Event.OUT_OF_LIMIT, function(error) {
    // 空间存满
} );
```

## API

### Constructor

```js
var storage = new Storage(storageId[, memoryCache]);
```

* **storageId** `{String}`: 存储命名空间，默认存储在 `_SABER` 命名空间下
* **memoryCache** `{Boolean}`: 可选项。是否开启内存级别缓存，即只存储至页面变量中，而不持久化数据。默认 `false`。

### Events

#### _Storage.Event.OUT\_OF\_LIMIT_

通过.on(eventName, callback)方法监听事件。

存储空间溢出事件。当本次存储超出时，会派发该事件。需要提前监听。

常见浏览器支持空间为5M左右。

### Methods

#### isSupport()

判断是否支持本地存储

* _return_ `{Boolean}` 是否支持


#### setItem(key, val)

存入数据

* **key** `{String}` 存储键名
* **val** `{*}` 对应键名下的数据
* _return_ `{Boolean}` 是否存储成功

#### getItem(key)

根据键名返回数据

* **key** `{String}` 存储键名
* _return_ `{*}` 对应键名下的数据


#### removeItem(key)

移除某键名下的数据

* **key** `{String}` 存储键名
* _return_ `{void}`

#### clear()

清空已持久化的数据

* _return_ `{void}`
 
### key()

获得持久化数据的key

* _return_ `{Array}` 键名数组

#### on(eventName:String, callback:Function)

事件绑定。目前只支持 _Storage.Event.OUT\_OF\_LIMIT_ 事件。

* **eventName** `{String}` 事件名 
* **callback** `{Function}` 回调函数
* _return_ `{void}`