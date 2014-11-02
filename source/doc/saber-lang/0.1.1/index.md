layout: doc
comments: false
date: 2014-10-2 5:36:5
repo: saber-lang
ref: 0.1.1
---

# saber-lang

适合移动端的**语言增强**模块。

## Usage

通过`edp`引入模块：

    edp import saber-lang

```javascript
require( [ 'saber-lang' ], function( lang ) {
    var targetObj = { x: 1, y: 2 };
    var sourceObj = { y: 3, z: 4 };
    lang.extend( targetObj, sourceObj );

    console.log( targetObj ); // { x: 1, y: 3, z: 4 }
});
```

## API

### .extend( target, ...source )

对象属性拷贝。

### .inherits( subClass, superClass )

为类型构造器建立继承关系。

### .curry( fn, ...args )

为函数提前绑定前置参数（[柯里化](http://en.wikipedia.org/wiki/Currying)）。
