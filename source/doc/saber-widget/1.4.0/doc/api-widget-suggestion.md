layout: doc
comments: false
date: 2015-5-18 4:13:21
title: Suggestion
repo: saber-widget
ref: 1.4.0
---

搜索建议控件。

## Usage

```js
var widget = require('saber-widget');
require('saber-widget/Suggestion');

var sug = widget.suggestion(element);
sug.on('request', function (ev, data) {
    console.log(data);
});
```

## API

### Methods

#### show()

显示推荐列表

#### hide()

隐藏推荐列表