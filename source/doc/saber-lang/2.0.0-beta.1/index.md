layout: doc
comments: false
date: 2015-3-16 23:30:34
title: saber-lang
repo: saber-lang
ref: 2.0.0-beta.1
---

适合移动端的 **语言增强** 模块。

## Installation

通过 `edp` 引入模块：

    edp import saber-lang

## Usage

```js
require(['saber-lang'], function(lang) {
    var targetObj = {x: 1, y: 2};
    var sourceObj = {y: 3, z: 4};
    lang.extend(targetObj, sourceObj);

    console.log(targetObj); // {x: 1, y: 3, z: 4}
});
```

## API

`Base` 部分是最基础的语言增强函数，在 `require('saber-lang')` 时加载。

### Methods

#### extend(target, ...source)

对象属性拷贝。

* **target** `{Object}` 目标对象
* **source** `{...Object}` 源对象
* _return_ `{Object}`

#### inherits(subClass, superClass)

为类型构造器建立继承关系。

* **subClass** `{Function}` 子类构造器
* **superClass** `{Function}` 父类构造器
* _return_ `{Function}`

#### curry(fn[, ...args])

为函数提前绑定前置参数（[柯里化](http://en.wikipedia.org/wiki/Currying)）。

* **fn** `{Function}` 要绑定的函数
* **args** `{...*=}` 函数执行时附加到执行时函数前面的参数
* _return_ `{Function}`

#### bind(fn, thisArg[, ...args])

为函数绑定this与前置参数。

* **fn**  `{Function}` 要绑定的函数
* **thisArg** `{Object}` 需要绑定的this
* **args** `{...*=}` 函数执行时附加的前置绑定参数
* _return_ `{Function}`

### Optional

可选模块使用时需要单独引用。

* [Type](./doc/type.html)
* [Function](./doc/function.html)