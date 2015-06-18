layout: doc
comments: false
date: 2015-5-18 4:12:13
title: saber-scroll
repo: saber-scroll
ref: 1.0.0
---

为移动端页面提供区域滚动功能

提供元素内容垂直、水平滚动。颗粒化功能，以插件形式提供增强功能，方便组合，文件大小可控

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-scroll
```

## Usage

```js
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

* [Methods](#methods)
* [Classes](#classes)
* [Plugins](#plugins)

### Methods

#### scroll(ele[, options])

使元素内容可滚动

* **ele** `{HTMLElemnt}` 内容需要滚动的元素或者对应的id
* **options** `{Object=}` 初始化参数
    * **horizontal** `{boolean=}` 是否可以水平滚动，默认为`true`
    * **vertical** `{boolean=}` 是否可以垂直滚动，默认为`true`
    * **overflow** `{boolean=}` 是否可以超出滚动范围，默认为`true`
* _return_ `{Scroller}` [Scroller](doc/scroller.html)滚动对象

滚动条是以插件形式实现的，在使用时除了设置`options.scrollbar`外，还需要引入`saber-scroll/plugin/scrollbar`模块

### Classes

* [Scroller](doc/scroller.html) [scroll()](#scrollele-options)创建的滚动对象

### Plugins

* [scrollbar](doc/plugin/scrollbar.html) 为滚动区域添加滚动条
* [overflowHint](doc/plugin/overflowHint.html) 提供到达或者超出滚动范围的提示样式

插件用于丰富功能，需要额外引入并设置相应的属性，例如：

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