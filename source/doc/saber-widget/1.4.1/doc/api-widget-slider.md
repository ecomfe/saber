layout: doc
comments: false
date: 2015-9-10 2:21:35
title: Slider
repo: saber-widget
ref: 1.4.1
---

轮播图控件

## Usage

``` javascript
var widget = require('saber-widget');
require('saber-widget/Slider');

var slider = widget.slider(element);
console.info(slider.get('main'));
```
## API

### Methods

#### enable()

激活控件

#### disable()

禁用控件

#### repaint([changes])

重新渲染视图

* **changes** `{Object}` 变更过的属性的集合

#### sync()

数据同步

此方法供用户在对`切换项`做了`添加`或`删除`后同步修改使用

#### start(isForce)

启动自动切换

* **isForce** `{boolean}` 是否强制启动


#### stop(isForce)

停止自动切换

* **isForce** `{boolean}` 是否强制停止


#### pause()

暂停自动切换

#### resume()

恢复自动切换

#### to(index)

切换到指定项

* **index** `{number}` 目标项的位置

#### prev()

切换到上一项

#### next()

切换到下一项

### Events

基础事件请参考[Widget#Events](./api-widget.md#events)事件

#### resize

#### change