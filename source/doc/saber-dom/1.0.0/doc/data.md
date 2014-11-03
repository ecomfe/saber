layout: doc
comments: false
date: 2014-10-3 4:6:56
repo: saber-dom
ref: 1.0.0
---

# data

数据

```js
// 可单独引入模块
var data = require('saber-dom/data');
```

## API

### getData(element, key)

获取目标元素 `data-[key]` 的值

* **element** `{HTMLElement}` 目标元素
* **key** `{string}` data 名
* _return_ `{string|null}` data 值

### setData(element, key, value)

设置目标元素 `data-[key]` 属性的值

* **element** `{HTMLElement}` 目标元素
* **key** `{string}` data 名
* **value** `{string}` data 值

### removeData(element, key)

删除目标元素的 `data-[key]` 属性

* **element** `{HTMLElement}` 目标元素
* **key** `{string}` data 名
