layout: doc
comments: false
date: 2015-5-18 4:12:16
repo: saber-scroll
ref: 0.1.4
---

# scrollbar

滚动条插件

添加属性`scrollbar`，是否启用滚动条，默认为`false`

## Usage

```javascript
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
