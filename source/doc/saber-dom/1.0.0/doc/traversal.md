layout: doc
comments: false
date: 2014-10-3 4:6:56
repo: saber-dom
ref: 1.0.0
---

# traversal

遍历

```js
// 可单独引入模块
var traversal = require('saber-dom/traversal');
```

## API

### children(element)

获取元素的子节点

* **element** `{HTMLElement}` 目标元素
* _return_ `{Array.<HTMLElement>}` 子节点

### closest(element, selector, context)

查找第一个匹配条件的祖先元素

* **element** `{HTMLElement}` 目标元素
* **selector** `{string}` 查询条件
* **context** `{HTMLElement}` 遍历范围
* _return_ `{HTMLElement|null}` 匹配到的节点，找不到时返回 null
