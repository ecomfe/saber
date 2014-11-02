layout: doc
comments: false
date: 2014-10-2 10:38:26
repo: saber-scroll
ref: 0.1.3
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
