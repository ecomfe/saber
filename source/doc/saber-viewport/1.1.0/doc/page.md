layout: doc
comments: false
date: 2015-5-18 4:12:59
title: Page
repo: saber-viewport
ref: 1.1.0
---

页面对象

* [Properties](#properties)
* [Methods](#methods)
* [Events](#events)

## Properties

### main

页面的容器元素

`{HTMLElement}`

## Methods

### enter(type[, options])

启动页面转场

* **type** `{boolean|string}` 转场效果，`boolean`参数表示是否启用转场效果，`string`参数表示具体的转场效果
* **options** `{object=}` 转场效果配置
   * **options.duration** `{number=}` 转场动画时长，单位为秒
   * **options.timing** `{string=}` 转场缓动效果，取值请参考CSS3中的[transition-timing-function](http://www.w3.org/TR/css3-transitions/#transition-timing-function-property)
   * **options.transform** `{boolean=}` 是否使用[css transform](http://www.w3.org/TR/css-transforms/)进行转场设置
* _return_ `{Promise}` 表示转场的[Promise](https://github.com/ecomfe/saber-promise)对象

### on(eventName, callback)

事件注册，可选择的`eventName`如下：

* **eventName** `{string}` 事件名称
* **callback** `{Function}` 事件处理函数

## Events

### beforeenter

页面进入前事件

### afterenter

页面进入完成事件

### beforeleave

页面离开前事件

### afterleave

页面离开完成事件