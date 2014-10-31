layout: doc
comments: false
date: 2014-9-31 2:43:5
title: saber-dom
repo: saber-dom
ref: 0.3.1
---

一个适用于移动端，静态函数风格的DOM工具库。

Usage
---

通过`edp`引入模块：

    edp import saber-dom

简单使用示例：

```javascript
require( [ 'saber-dom' ], function( dom ) {
    var el = dom.g( 'element-id' );
    var title = dom.query( '.element-class' );
    var list = dom.queryAll( '.list-item' );

    dom.addClass( el, 'el-class-name' );
});
```

API
---

### 选择器

#### .g( id )

根据id获取指定的DOM元素。

#### .query( selector )

根据选择器获取指定DOM元素。

#### .queryAll( selector )

根据选择器选择DOM元素列表。

#### .matches( element, selector )

判断DOM元素与选择器是否匹配。

### 样式

#### .getStyle( element, property )

获取样式。

#### .setStyle( element, property, value )

设置样式。

#### .show( element )

显示DOM元素。

#### .hide( element )

隐藏DOM元素。

#### .addClass( element, className )

为目标元素添加className。

#### .removeClass( element, className )

移除目标元素的className。

#### .hasClass( element, className )

判断元素是否拥有指定的className。

#### .position( element, offsetEle )

获取元素的相对位置，如果省略`offsetEle`参数，则是相对于`body`的相对位置。

### 遍历

#### .children( element )

获取元素的子节点。

#### .closest( element, selector, context )

查找第一个匹配条件的祖先元素。

,

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)