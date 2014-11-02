layout: doc
comments: false
date: 2014-10-2 5:36:30
title: saber-storage
repo: saber-storage
ref: 0.1.1
---

移动端本地存储模块。

## Usage

```javascript
var Storage = require( 'saber-storage' );
var storage = new Storage({
    storageId: 'someNameDomain',    // optional
    memoryCache: false    // optional
});
// 存入
storage.setItem( 'string', 'this is a string' );
storage.setItem( 'object', { a: 1 } );
var isSuccess = storage.setItem( 'array', [1, 2, 3, 4] );

if (isSuccess) {
    // Save success!
} else {
    // Save fail!
}

// 取出
var value = storage.getItem( 'string' );

// 移除某一键值下的数据
storage.removeItem( 'string' );

// 清空全部数据
storage.clear();

//事件派发
storage.on( Storage.Event.OUT_OF_LIMIT, function( error ) {
    // 空间存满
} );
```

## API

### Constructor

```javascript
Storage({
    [optional] storageId:String,
    [optional] memoryCache=false:Boolean
});
```

+ `storageId`: 存储命名空间，默认存储在 `_SABER` 命名空间下
+ `memoryCache`: 是否开启内存级别缓存，即只存储至页面变量中，而不持久化数据。默认 `false`。

### Events

__Storage.Event.OUT_OF_LIMIT__

存储空间溢出事件。当本次存储超出时，会派发该事件。需要提前监听。

常见浏览器支持空间为5M左右。

### Methods

__.isSupport():Boolean__

判断是否支持本地存储

__.setItem( key:String, val:\* ):Boolean__

存入数据

__.getItem( key:String ):\*__

根据key返回数据

__.removeItem( key:String ):void__

移除某键位下的数据

__.clear():void__

清空已持久化的数据
 
__.key():Array__

获得持久化数据的key

__.on(eventName:String, callback:Function):void__

事件绑定。目前只支持 *Storage.Event.OUT_OF_LIMIT* 事件。