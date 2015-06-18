layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 常见问题
repo: rider
ref: 2.0.0
---

### @require 和 @import 用哪个？

根据需求而定，通常使用 `@require`。

`@require` 多次引入同一文件时只会执行一次，`@import` 每次都会执行。

### SPA项目如何组织各视图样式？

可以用 `CSS Class` 做命名空间，配合 `@require` 来拆分文件组织代码。但请注意级别扁平化，避免太多嵌套级别：

```stylus
.view-detail
    @require 'detail'
.view-detail-comment
    @require 'detail-comment'

.view-list
    @require 'list'
```

### 生成的 Media Query 太多怎么办？

Breakpoint 让响应式代码的可读性更好，但会生成较多的 Media Query，建议使用后处理器 [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) 进行优化，注意合并规则中的[顺序问题](https://github.com/hail2u/node-css-mqpacker#known-issues)。

### 其他问题？

欢迎给我们 [提 issue](https://github.com/ecomfe/rider/issues/new)。