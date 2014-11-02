layout: doc
comments: false
date: 2014-10-2 10:36:25
title: saber-emitter
repo: saber-emitter
ref: 0.1.0
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

### Emitter#on( event, listener )

挂载事件。

### Emitter#once( event, listener )

挂载只执行一次的事件。

### Emitter#off( event, listener )

注销事件与监听器。

* 任何参数都`不传`将注销当前实例的所有事件
* 只传入`event`将注销该事件下挂载的所有监听器
* 传入`event`与`listener`将只注销该监听器

### Emitter#emit( event, args... )

触发事件。

### Emitter#listeners( event )

返回指定事件的监听器列表。