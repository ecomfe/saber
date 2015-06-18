layout: doc
comments: false
date: 2015-5-18 4:13:23
title: ImageView
repo: saber-widget
ref: 1.0.0
---

图片查看器控件。

## Usage

```js
var widget = require('saber-widget');
require('saber-widget/plugin/Masker');
require('saber-widget/ImageView');

var imageview = widget.imageView(element);
console.info(imageview.get('items'));
```

## API

### Methods

#### enable()

激活控件

#### disable()

禁用控件

#### setup(main)

更新数据源为目标元素内的图片

* **main** `{HTMLElement}` 目标容器元素

#### to(index[, isForce])

切换到指定项

* **index** `{number|HTMLImageElement}` 目标项的位置或目标图片元素
* **isForce** `{boolean}` 是否强制切换

#### prev()

切换到上一项

#### next()

切换到下一项

#### zoom(scale)

缩放指定位置的图片

* **scale** `{Number}` 当前的缩放比例

#### reset()

还原缩放

### Events

* **event** `{Object}` 事件封装
    * **type** `{string}` 事件类型
    * **target** `{Widget}` 触发事件的控件对象

基础事件请参考[Widget#Events](./api-widget.md#events)事件

#### resize

#### change

#### zoom

#### reset

#### beforeload

#### afterload