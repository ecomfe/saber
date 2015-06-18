layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 特性
repo: rider
ref: 2.0.0
---

## 高效工作流

`rider` 通过前后处理器混合的方式，提供了更高效的工作流。

    DSL(Stylus) → 标准 CSS → 生产环境 CSS

通过 **预处理器** 处理样式层的抽象、复用，减少冗余；通过 **后处理器** 处理兼容性问题、优化输出。

在写 Stylus 时，只需面向 **标准 CSS** 开发；在后处理阶段，自动将 **标准 CSS** 转换为对目标浏览器优化后的 **生产环境 CSS**。

### 工作流的三个阶段

**DSL(Stylus)：**

```stylus
.navbar
    fixed: _ 0 0
    display: flex
    box-sizing: border-box
```

**标准 CSS：**

```css
.navbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    box-sizing: border-box;
}
```

**生产环境 CSS：**

```css
.navbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
```

## 无侵入风格

在预处理阶段，`rider` 的各种功能均通过 `Mixin`, `Function` 或 `Block Mixin` 的方式提供，只有在主动调用时才输出代码。

我们不提供直接给 HTML 调用的类名，不会用「样式类」污染 HTML 代码的语义。

所以，您能在享受 `rider` 各种便捷工具的同时，写出干净且符合语义的 HTML 代码。

### Bootstrap 风格与无侵入风格的对比

**Bootstrap 风格：**

```html
<!-- 被样式类污染的 HTML 结构 -->

<div class="col-xs-6 col-md-4">
    <p class="text-danger">...</p>
    <button class="btn btn-danger btn-xs" type="button">...</button>
</div>
```

```css
/* 无论是否用到，都输出所有样式 */

.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2,
.col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3,
.col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5,
.col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6,
.col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8,
.col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9,
.col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11,
.col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12,
.col-md-12, .col-lg-12 {
    /* 通用样式 */
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4,
.col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8,
.col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    /* 另一组通用样式 */
}
.text-danger {
    /* ... */
}
/* 更多没有被用到的样式 */
```

**无侵入风格：**

```html
<!-- 一目了然，语义化的 HTML 结构 -->

<div class="order">
    <p class="total-prices">...</p>
    <button class="pay" type="button">...</button>
</div>
```

```css
/* 无调用，不输出 */

.order {
    /* 通过 Mixin, Function 生成样式 */
}
.order .total-prices {
    /* ... */
}
.order .pay {
    /* ... */
}
```