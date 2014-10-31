layout: doc
comments: false
date: 2014-9-31 2:43:33
title: saber-emitter
repo: saber-emitter
ref: 0.4.0
---

一个适用于移动端的事件发射器。

Usage
---

通过`edp`引入模块：

    edp import saber-emitter

简单使用示例：

```javascript
require( [ 'saber-emitter' ], function( Emitter ) {
    var emitter = new Emitter();

    emitter.on( 'greeting', function( name ) {
        console.log( 'Hello, ' + name + '!' );
    });

    emitter.emit( 'greeting', 'Firede' );
});
```

API
---

### Emitter

#### new Emitter

创建`Emitter`实例。

```javascript
var emitter = new Emitter();
```

#### Emitter.mixin( obj )

通过`mixin`将`Emitter`混入目标对象。

```javascript
var obj = {};
Emitter.mixin( obj );

obj.emit( 'foo' );
```

#### Emitter#on( event, listener )

挂载事件。

```javascript
function listenerFn( name ) {
    console.log( 'Hello ' + name );
}
emitter.on( 'say', listenerFn );
```

#### Emitter#once( event, listener )

挂载只执行一次的事件。

```javascript
emitter.once( 'say', listenerFn );
```

#### Emitter#off( event, listener )

注销事件与监听器。

* 任何参数都`不传`将注销当前实例的所有事件
* 只传入`event`将注销该事件下挂载的所有监听器
* 传入`event`与`listener`将只注销该监听器

```javascript
emitter.off();
emitter.off( 'say' );
emitter.off( 'say', listenerFn );
```

#### Emitter#emit( event, args... )

触发事件。

```javascript
emitter.emit( 'say' );
emitter.emit( 'say', 'hello' );
```

#### Emitter#listeners( event )

返回指定事件的监听器列表。

```javascript
var listeners = emitter.listeners( 'say' );
```

#### Emitter#setMaxListeners( number )

设置每个事件下，监听器的最大个数。为 `0` 时不限制，默认值是 `10` 。

```javascript
emitter.setMaxListeners( 8 );
```

### AspectEmitter

提供了 `AOP` 支持的事件发射器。

它的使用方式与 `Emitter` 相同，只是在 `emit` 增加了对 `:before`、`:after` 事件的支持。

注：在事件 `on`、`off`、`once` 时，带 `:before`/`:after` 的事件与普通事件无区分，均需手工管理。

```javascript
var AspectEmitter = require('saber-emitter/aspect');

var emitter = new AspectEmitter();

// 绑定 before、after 事件
emitter.on('foo', doSomething);
emitter.on('foo:before', doSomething);
emitter.on('foo:after', doSomething);

emitter.emit('foo');
// => 按 foo:before, foo, foo:after 顺序触发

emitter.emit('foo:before');
// => 单独触发 foo:before 事件

// 手工解绑事件
emitter.off('foo');
emitter.off('foo:before');
emitter.off('foo:after');
```

Browser Support
---

已测试通过的浏览器：

* iOS Safari: 5.0, 5.1, 6.0, 6.1, 7.0
* Android Browser: 2.2, 2.3.3, 4.1
* IE Mobile: 10

,

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)