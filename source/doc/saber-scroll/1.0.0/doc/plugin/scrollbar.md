layout: doc
comments: false
date: 2015-5-18 4:12:13
title: scrollbar
repo: saber-scroll
ref: 1.0.0
---

滚动条插件

添加属性`scrollbar`，是否启用滚动条，默认为`false`

## Usage

```js
var scroll = require('saber-scroll');
// 引入scrollbar插件
require('saber-scroll/plugin/scrollbar');

var scroller = scroll(
    ele,
    {
        // 启用scrollbar插件
        scrollbar: true
    }
);
```