layout: doc
comments: false
date: 2015-5-18 4:31:55
title: 常见问题
repo: rider
ref: 2.0.0-alpha.1
---

## @require 和 @import 用哪个？

根据需求而定，通常使用 `@require`。

`@require` 多次引入同一文件时只会执行一次，`@import` 每次都会执行。

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