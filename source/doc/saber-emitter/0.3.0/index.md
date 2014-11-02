layout: doc
comments: false
date: 2014-10-2 10:36:23
title: saber-emitter
repo: saber-emitter
ref: 0.3.0
---

一个适用于移动端的事件发射器。

Usage
---

通过`edp`引入模块：

    edp import saber-emitter

简单使用示例：

```javascript
require( [ 'saber-emitter' ], function( Emitter ) {
    var emitter = new Emitter;

    emitter.on( 'greeting', function( name ) {
        console.log( 'Hello, ' + name + '!' );
    });

    emitter.emit( 'greeting', 'Firede' );
});
```

API
---

### new Emitter

创建`Emitter`实例。

```javascript
var emitter = new Emitter;
```

### Emitter.mixin( obj )

通过`mixin`将`Emitter`混入目标对象。

```javascript
var obj = {};
Emitter.mixin( obj );

obj.emit( 'foo' );
```

### Emitter#on( event, listener )

挂载事件。

```javascript
function listenerFn( name ) {
    console.log( 'Hello ' + name );
}
emitter.on( 'say', listenerFn );
```

### Emitter#once( event, listener )

挂载只执行一次的事件。

```javascript
emitter.once( 'say', listenerFn );
```

### Emitter#off( event, listener )

注销事件与监听器。

* 任何参数都`不传`将注销当前实例的所有事件
* 只传入`event`将注销该事件下挂载的所有监听器
* 传入`event`与`listener`将只注销该监听器

```javascript
emitter.off();
emitter.off( 'say' );
emitter.off( 'say', listenerFn );
```

### Emitter#emit( event, args... )

触发事件。

```javascript
emitter.emit( 'say' );
emitter.emit( 'say', 'hello' );
```

### Emitter#listeners( event )

返回指定事件的监听器列表。

```javascript
var listeners = emitter.listeners( 'say' );
```

### Emitter#setMaxListeners( number )

设置每个事件下，监听器的最大个数。为 `0` 时不限制，默认值是 `10` 。

```javascript
emitter.setMaxListeners( 8 );
```

Notice
---

`saber-emitter` 是为 **移动端** 环境设计的。
如需在 **PC端** 使用，需要重新实现 `Emitter#off` 中的 `indexOf`；在 IE6/7/8 中，不支持 `Array#indexOf`，请[参考MSDN](http://msdn.microsoft.com/zh-cn/library/ff679977\(v=vs.94\).aspx)。