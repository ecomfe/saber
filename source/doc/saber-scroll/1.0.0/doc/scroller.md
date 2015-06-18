layout: doc
comments: false
date: 2015-5-18 4:12:13
title: Scroller
repo: saber-scroll
ref: 1.0.0
---

滚动对象

* [Methods](#methods)
* [Events](#events)

## Methods

### on(eventName, callback)

为滚动对象事件，具体事件请参考[事件说明](#events)

* **eventName** `{string}` 事件名称
* **callback** `{Function}` 事件处理函数

### disable()

禁用区域滚动

### enable()

启动区域滚动

### destroy()

销毁滚动

### repaint()

重绘滚动区域，在滚动区域大小修改后使用，重新计算可滚动区域

### scrollTo(top[, left][, duration])

滚动到确定位置

* **top** `{number}` 垂直滚动距离
* **left** `{number=}` 水平滚动距离
* **duration** `{number=}` 缓动时间；单位为秒，默认为`0`

### scrollToElement(element[, duration])

滚动都内部某元素位置

* **element** `{HTMLElement}` DOM元素
* **duration** `{number=}` 缓动时间；单位为秒，默认为`0`

### getScrollLeft()

获取水平滚动位移

* _return_ `{number}`

### getScrollTop()

获取垂直滚动位移

* _return_ `{number}`

## Events

### change

滚动事件

* **e** `{Object}` 事件参数
    * **top** `{number}` 垂直方向位置
    * **left** `{number}` 水平方向位置