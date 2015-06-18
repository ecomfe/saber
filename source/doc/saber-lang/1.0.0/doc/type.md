layout: doc
comments: false
date: 2015-5-18 4:11:18
title: Type
repo: saber-lang
ref: 1.0.0
---

`Type` 部分是较常用的类型检查方法，需指定完整路径引入 `require('saber-lang/type')`。

## API

### Methods

#### type(obj)

获取变量类型。支持的返回值:

* `boolean`
* `number`
* `string`
* `function`
* `array`
* `date`
* `regexp`
* `object`
* `error`

#### isPlainObject(obj)

检测变量是否为简单对象。

#### isEmptyObject(obj)

检测变量是否为空的简单对象。

#### isEmpty(obj)

检测变量是否为空值类型。 注: `{}`、`[]` 也属于空值类型。