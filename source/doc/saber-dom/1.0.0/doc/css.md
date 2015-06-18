layout: doc
comments: false
date: 2015-5-18 4:10:14
repo: saber-dom
ref: 1.0.0
---

# css

样式

```js
// 可单独引入模块
var css = require('saber-dom/css');
```

## API

### getStyle(element, property)

获取样式

* **element** `{HTMLElement}` 目标元素
* **property** `{string}` 属性
* _return_ `{string|null}`

### setStyle(element, property, value)

设置样式

* **element** `{HTMLElement}` 目标元素
* **property** `{string}` 属性
* **value** `{string}` 值

### show(element)

显示DOM元素

* **element** `{HTMLElement}` 目标元素

### hide(element)

隐藏DOM元素

* **element** `{HTMLElement}` 目标元素

### addClass(element, className)

为目标元素添加 className

* **element** `{HTMLElement}` 目标元素
* **className** `{string}` 要添加的 className
* _return_ `{HTMLElement}`

### removeClass(element, className)

移除目标元素的 className

* **element** `{HTMLElement}` 目标元素
* **className** `{string}` 要移除的 className
* _return_ `{HTMLElement}`

### hasClass(element, className)

判断元素是否拥有指定的 className

* **element** `{HTMLElement}` 目标元素
* **className** `{string}` 要判断的 className
* _return_ `{boolean}`

### toggleClass(element, className[, isForce])

反转目标元素的 className

若指定 `isForce` 参数为 `true` 时，则添加 className，为 `false` 时，则移除 className

* **element** `{HTMLElement}` 目标元素
* **className** `{string}` 要反转的 className
* **isForce** `{boolean=}` 强制指定添加或移除
* _return_ `{HTMLElement}`

### position(element, offsetEle)

获取元素的相对位置，如果省略 `offsetEle` 参数，则是相对于页面（[Initial Containing Block](http://www.w3.org/TR/CSS2/visudet.html)）的位置

* **element** `{HTMLElement}` 目标元素
* **offsetEle** `{HTMLElement=}` 相对元素
* _return_ `{Object}`
    * **left** `{number}` 左侧坐标
    * **top** `{number}` 顶部坐标
