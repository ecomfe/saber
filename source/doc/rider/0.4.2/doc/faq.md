layout: doc
comments: false
date: 2014-10-2 10:36:51
repo: rider
ref: 0.4.2
---

# 常见问题

## `@require` 和 `@import` 用哪个？

尽量使用 `@require`。`@require` 多次引入同一文件时只会执行一次，`@import` 每次都会执行。

## RIA项目如何组织各视图样式？

可以用 `CSS Class` 做命名空间，配合 `@require` 来拆分文件组织代码。但要让级别扁平化，避免多级嵌套：

```haml
.view-detail
    @require 'detail'
.view-detail-comment
    @require 'detail-comment'

.view-list
    @require 'list'
```
