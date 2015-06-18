layout: doc
comments: false
date: 2015-5-18 4:12:8
title: Animation
repo: saber-run
ref: 1.0.0
---

动画对象， 支持链式调用

## Methods

### set(property, value)

设置动画样式属性

* **property** `{string}` 属性名称
* **value** `{string}` 属性值
* _return_ `{Animation}`

```js
var animation = require('saber-run').animation(ele);
animation.set('width', '200px');
```

### duration(time)

设置单次动画的时长，通过[run()](#run)执行动画后会重置为默认设置

* **time** `{number}` 时间，单位`s`
* _return_ `{Animation}`

### delay(time)

设置单次动画的延时，通过[run()](#run)执行动画后会重置为默认设置

* **time** `{number}` 时间，单位`s`
* _return_ `{Animation}`

### ease(name)

设置单次动画的缓动效果，通过[run()](#run)执行动画后会重置为默认设置

* **name** `{string}` 缓动效果名称
* _return_ `{Animation}`

### run()

执行动画

* _return_ `{Animation}`

### end()

结束动画，所有属性立即变为最终值

* _return_ `{Animation}`

### finish(callback)

注册动画执行完成后的回调函数，只针对单次动画有效

* **callback** `{Function}` 回调函数
* _return_ `{Animation}`

### moveTo(x[, y])

移动到确定位置

* **x** `{?number}` X轴坐标
* **y** `{number=}` Y轴坐标
* _return_ `{Animation}`

### move(x[, y])

相对位移

* **x** `{?number}` 横向距离
* **y** `{number=}` 纵向距离
* _return_ `{Animation}`

```js
// 元素原始位置为100, 100
var ele = document.getElementById('target');
var animation = require('saber-run').animation(ele);
animation
    .move(10, 10)
    // 移动到110, 110
    .run()
    .move(10, 10)
    // 最终元素位置为120, 120
    .run();
```

### rotateTo(deg)

旋转到固定角度

* **deg** `{number}` 角度
* _return_ `{Animation}`

### rotate(deg)

相对旋转

* **deg** `{number=}` 角度
* _return_ `{Animation}`

### skewTo(deg)

倾斜到固定角度

* **deg** `{number}` 角度
* _return_ `{Animation}`

### skew(deg)

相对倾斜

* **deg** `{number=}` 角度
* _return_ `{Animation}`

### scaleTo(rate)

放大缩小

* **rate** `{number}` 比例
* _return_ `{Animation}`

### scale(rate)

相对增加缩小

* **rate** `{number=}` 比例
* _return_ `{Animation}`

### dispose()

销毁动画对象