layout: doc
comments: false
date: 2014-9-31 2:59:30
repo: saber-scroll
ref: 0.1.4
---

# overflowHint

滚动范围提示，在滚动达到或者超出范围时给主元素添加额外的样式，用于视觉上的提示

添加`overflowHint`属性，非空表示启用提示，也可以是`Object`，进行详细设置：

* `className` 提示样式名前缀，默认为`scroll-overflow`，向上滚动超出范围时会添加`scroll-overflow-top`样式，相应的还有`scroll-overflow-left`，`scroll-overflow-right`，`scroll-overflow-bottom`

## Usage

```javascript
var scroll = require('saber-scroll');
// 引入overflowHint插件
require('saber-scroll/plugin/overflowHint');

var scroller = scroll(
        ele,
        {
            // 启用overflowHint插件
            overflowHint: {
                // 自定义样式前缀
                clasName: 'x-overflow'
            }
        }
    );
```
