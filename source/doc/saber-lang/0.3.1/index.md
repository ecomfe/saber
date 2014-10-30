title: saber-lang
date: 2014-9-30 13:49:0
layout: page
comments: false
---

适合移动端的 **语言增强** 模块。

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

### Base

`Base` 部分是最基础的语言增强函数，在 `require('saber-lang')` 时加载。

#### .extend( target, ...source )

对象属性拷贝。

#### .inherits( subClass, superClass )

为类型构造器建立继承关系。

#### .curry( fn, ...args )

为函数提前绑定前置参数（[柯里化](http://en.wikipedia.org/wiki/Currying)）。

#### .bind( fn, thisArg, ...args )

为函数绑定this与前置参数。

### Function

`Function` 类的语言增强函数都需要指定完整路径引入，如 `require('saber-lang/function/throttle')`。

#### .throttle( fn, wait [, options] )

函数节流 (忽略指定间隔内的函数调用)

+ `fn` `{Function}` 执行函数
+ `wait` `{number}` 下次执行前需等待的`毫秒`数(即`节流阀值`)
+ `options` `{Object=}` 配置对象
    + `options.leading` `{boolean=}` 是否首次立即执行一次`fn`, 默认`true`
    + `options.trailing` `{boolean=}` 是否停止后延迟执行一次`fn`, 默认`true`
    + `options.context` `{*=}` `fn`执行时的上下文环境, 默认`this`

#### .debounce( fn, wait [, immediate] )

函数去抖 (指定间隔内的调用被延迟到下个间隔执行)

+ `fn` `{Function}` 执行函数
+ `wait` `{number}` 需要延迟等待的间隔(`毫秒`)
+ `immediate` `{boolean=}` 是否延迟启动前先立即调用执行`fn`

#### aspect.mixin( obj )

为指定对象混入`AOP`功能

+ `before`

	```javascript
	obj.before( method, fn[, context] )
	```

	在 `obj` 的 `method` 方法调用前，先调用 `fn` 函数
	
	* `fn` 执行时的 `形参` 与 `obj[ method ]` 的一致
	* `context` 指定时，`fn` 的 `this` 指向 `context`
	* `fn` 返回 `false` 时，`中断`后续的所有调用

+ `after`

	```javascript
	obj.after( method, fn[, context] )
	```

	在 `obj` 的 `method` 方法调用后，调用 `fn` 函数
	
	* `fn` 执行时的 `形参` 与 `obj[ method ]` 的一致
	* `context` 指定时，`fn` 的 `this` 指向 `context`



,

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)