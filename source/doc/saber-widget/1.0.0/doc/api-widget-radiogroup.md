layout: doc
comments: false
date: 2014-10-3 7:47:17
title: RadioGroup
repo: saber-widget
ref: 1.0.0
---

单选组控件。

## Usage

```js
var widget = require('saber-widget');
require('saber-widget/RadioGroup');

var group = widget.radioGroup(element);

group.on('valuechange', function(ev, oldValue, newValue) {
    console.log('valuechange from: ' + oldValue + ', to: ' + newValue);
});

group.on('click', function (ev, oldValue, newValue) {
    console.log('selected value: ' + newValue);
});
```
## API

### Methods

#### initOptions(options)

初始化控件选项

* **options** `{Object}` 选项

#### syncValue(value)

设置选中项

* **value** `{*}` 

#### getItemByValue(value)

根据值获取选项元素

* **value** `{HTMLElement}` 选项元素 

#### repaint()

重绘控件

### Events

请参考[Widget#Events](./api-widget.md#events)事件