layout: doc
comments: false
date: 2015-9-10 2:21:35
title: ImageViewFlex
repo: saber-widget
ref: 1.4.1
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