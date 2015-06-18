layout: doc
comments: false
date: 2015-5-18 4:13:21
title: ImageViewFlex
repo: saber-widget
ref: 1.4.0
---

图片查看器翻转自适应插件。

## Usage

``` javascript
var widget = require('saber-widget');
require('saber-widget/plugin/ImageViewFlex');
require('saber-widget/ImageView');

var iv = widget.imageView(element, {flex: true});
console.info(iv.plugin('ImageViewFlex'));
```