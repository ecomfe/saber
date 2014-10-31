layout: doc
comments: false
date: 2014-9-31 2:59:33
repo: saber-scroll
ref: 0.1.3
---

# saber-scroll

为移动端页面提供区域滚动功能

提供元素内容垂直、水平滚动。颗粒化功能，以插件形式提供增强功能，方便组合，文件大小可控

## Usage

通过`edp`引入模块

    edp import saber-scroll

```javascript
var scroll = require('saber-scroll');
var scroller = scroll(document.getElementById('wrapper'));
scroller.on('change', function (e) {
    console.log(e.left, e.top);
});
```

__只滚动区域的第一个子元素__，如果想让区域中的所有元素都能滚动请添加包裹元素，比如这样：

```html
<div class="content">
    <div class="wrapper">
        ...
    </div>
</div>
```

## API

### scroll(ele, options)

使元素内容可滚动

* `ele` 内容需要滚动的元素或者对应的id
* `options` 初始化参数
* `options.horizontal` 是否可以水平滚动，默认为`true`
* `options.vertical` 是否可以垂直滚动，默认为`true`
* `options.overflow` 是否可以超出滚动范围，默认为`true`

滚动条是以插件形式实现的，在使用时除了设置`options.scrollbar`外，还需要引入`saber-scroll/plugin/scrollbar`模块

### Scroller

`scroll()`创建的滚动对象

#### .destroy()

销毁滚动

#### .on(eventName, callback)

为滚动对象事件，目前支持以下事件

* `change`：滚动事件，事件参数包含`top`、`left`属性，表示滚动的位移

#### .disable()

禁用区域滚动

#### .enable()

启动区域滚动

#### .repaint()

重绘滚动区域，在滚动区域大小修改后使用，重新计算可滚动区域

#### .scrollTo(args, duration)

滚动到确定位置

* `args` 滚动位置；变长参数，如果是双向滚动，则为`top`, `left`两参数
* `duration` 缓动时间；单位为秒，默认为`0`

#### .scrollToElement(element, duration)

滚动都内部某元素位置

* `element` DOM元素
* `duration` 缓动时间；单位为秒，默认为`0`

#### .getScrollLeft()

获取水平滚动位移

#### .getScrollTop()

获取垂直滚动位移

## Plugins

插件需要额外引入并设置相应的属性，例如：

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

目前支持以下插件：

* [scrollbar](doc/plugin/scrollbar.md) 为滚动区域添加滚动条
* [overflowHint](doc/plugin/overflowHint.md) 提供到达或者超出滚动范围的提示样式

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
