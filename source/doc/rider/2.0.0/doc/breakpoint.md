layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 响应式工具
repo: rider
ref: 2.0.0
---

`rider` 提供的响应式工具叫 `Breakpoint`（思路来自 [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer)），以 `Block Mixin` 的方式调用。

在做 **响应式布局** 时，按照 **屏幕宽度** 的范围，划分成几个 **切片**：

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3          4          5

以上面的划分方式为例，我们可以使用 **切片** 的编号来表示宽度的区间。

切片的划分与 **设计** 强相关，每个项目的划分方式可能是不同的。  
**建议** 在项目开始时，先通过全局配置 `$-breakpoint-slice` 定义好切片的划分方式。

生成 Media Query 阶段，如果是根据 **切片** 设置 `min-width`，会自动加 `1px` 错开上一个区间，以确保边界值正常。

**注意**：因为新版 Stylus 对 `@media` 标签嵌套已有较好的支持，`rider` 2.0 之前的版本的 **规则组合** 能力现已移除。

相关的[全局配置](./setting.html)：

 * `$-breakpoint-slice`

### +below(value)

限定低于目标尺寸或 **切片** 边界值。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3           4          5
                ·                   ·         · below(3) ·           ·
                <────────────────────────────────────────┤

`value` 带单位时为具体的值，不带单位时为对应 **切片** 的值。

```stylus
.test
    // 直接使用
    +below(3)
        foo: bar

    // 与 +retina() 嵌套使用
    +retina()
        +below(3)
            bar: baz
```

生成的 CSS：

```css
@media (max-width: 800px) {
    .test {
        foo: bar;
    }
}

@media (min-resolution: 1.5dppx) and (max-width: 800px), (min-resolution: 144dpi) and (max-width: 800px) {
    .test {
        bar: baz;
    }
}
```

### +above(value)

限定高于目标尺寸或 **切片** 边界值。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3           4          5
                ·                   ·         · above(3) ·           ·
                                              ├───────────────────────────────>

`value` 带单位时为具体的值，不带单位时为对应 **切片** 的值。

stylus:

```stylus
// Block Mixin 与选择器的嵌套可按逻辑顺序书写
// 最终生成的 @media 将会提至最顶层
+above(3)
    .test
        foo: bar

// 也可以直接指定具体的值
+above(681px)
    .tablet
        color: #f00
```

生成的 CSS：

```css
@media (min-width: 601px) {
    .test {
        foo: bar;
    }
}

@media (min-width: 681px) {
    .tablet {
        color: #f00;
    }
}
```

### +at(value)

限定指定 **切片** 范围。`value` 为切片编号。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3           4          5
                ·                   ·         ·   at(3)  ·           ·
                                              ├──────────┤

```stylus
.test
    foo: bar
    +at(3)
        bar: baz
```

生成的 CSS：

```css
.test {
    foo: bar;
}
@media (min-width: 601px) and (max-width: 800px) {
    .test {
        bar: baz;
    }
}
```

### +between(from-value, to-value)

限定目标尺寸或 **切片** 边界值的区间。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3           4          5
                ·                   ·     between(3)     ·           ·
                                    ├────────────────────┤

`value` 带单位时为具体的值，不带单位时为对应 **切片** 的值。

```stylus
// breakpoint 可与 @media 嵌套使用
@media (orientation: landscape)
    .test
        +between(2, 3)
            foo: bar
```

生成的 CSS：

```css
@media (orientation: landscape) and (min-width: 401px) and (max-width: 800px) {
    .test {
        foo: bar;
    }
}
```

### +breakpoint(from-value, to-value)

以上 `Block Mixin` 的底层实现，现用法同 `+between()`，**不建议** 直接使用。