layout: doc
comments: false
date: 2014-10-3 4:6:56
repo: saber-dom
ref: 1.0.0
---

# selector

选择器

```js
// 可单独引入模块
var selector = require('saber-dom/selector');
```

## API

### g(id)

根据 id 获取指定的 DOM 元素

* **id** `{string|HTMLElement}` 元素的 id 或 DOM 元素
* _return_ `{HTMLElement|null}` 获取的元素，找不到时返回 null

### query(selector[, context])

根据选择器获取指定 DOM 元素

* **selector** `{string}` 元素的 selector
* **context** `{HTMLElement=}` 上下文
* _return_ `{HTMLElement|null}` 获取的元素，找不到时返回 null

### queryAll(selector[, context])

根据选择器选择 DOM 元素列表

* **selector** `{string}` 元素的 selector
* **context** `{HTMLElement=}` 上下文
* _return_ `{Array}` 获取的元素列表，找不到时为空数组

### matches(element, selector)

判断DOM元素与选择器是否匹配

* **element** `{HTMLElement}` 目标 DOM 元素
* **selector** `{string}` 待判断的 selector
* _return_ `{boolean}` 是否匹配
