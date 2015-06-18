layout: doc
comments: false
date: 2015-5-18 4:13:23
title: SliderFlex
repo: saber-widget
ref: 1.0.0
---

轮播图翻转自适应插件。

## Usage

``` javascript
var widget = require('saber-widget');
require('saber-widget/plugin/SliderFlex');
require('saber-widget/Slider');

var slider = widget.slider(element);
console.info(slider.plugin('SliderFlex'));
```