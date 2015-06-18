layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 单位转换
repo: rider
ref: 2.0.0
---

### rem(value)

将 `value` 转换成单位为 `rem` 的值。

`value` 支持以 `px` 或 `rem` 为单位的数值。默认单位为 `px`。

相关的[全局配置](./setting.html)：

 * `$-base-font-size`

```stylus
// 当基础字体大小为 16px 时：
.box
    font-size: rem(20)
    // => font-size: 1.25rem;
    font-size: rem(14px)
    // => font-size: 0.875rem;
    font-size: rem(2rem)
    // => font-size: 2rem;
```

### px(value)

将 `value` 转换成单位为 `px` 的值。

`value` 支持以 `rem` 或 `px` 为单位的数值。默认单位为 `px`。

相关的[全局配置](./setting.html)：

 * `$-base-font-size`

```stylus
.box
    width: px(1rem)
    // => width: 16px;
    width: px(1.5rem)
    // => width: 24px;
    width: px(20)
    // => width: 20px;
```

### em(value, upper-value)

根据继承自上级元素字体大小，将 `value` 转换成单位为 `em` 的值。

`value` 支持以 `rem` 或 `px` 为单位的数值。默认单位为 `px`。  
`upper-value` 是手动传入的继承自上级元素的字体大小（默认值：`$-base-font-size`）。

相关的[全局配置](./setting.html)：

 * `$-base-font-size`

```stylus
.box
    foo: em(20)
    // => foo: 1.25em;
    foo: em(16, 10)
    // => foo: 1.6em;
    foo: em(1rem, 10)
    // => foo: 1.6em;
```