layout: doc
comments: false
date: 2015-5-18 4:31:58
title: 顺时针简写
repo: rider
ref: 2.0.0
---

在 `CSS` 语法中，可以通过 `顺时针` 的方式简写属性的值，比如 `padding`、`margin` 等。其规则如下：

    上 右 下 左 => 1 2 3 4
    上 右 下 => 1 2 3 2
    上 右 => 1 2 1 2
    上 => 1 1 1 1

类似的还有 `border-radius` 中，按照 `左上`、`右上`、`右下`、`左下` 顺序的简写方式。

但是，因为不存在代表 **未定义** 的占位符，使用简写后，每个方向都被设置了 **值**。  
为了解决这个问题，我们引入了一个 `_` 占位符，用来表示 **未定义** 的状态。

同时，我们也对一些符合 `顺时针简写` 规律的用法进行了拓展，使其用起来更高效。

### absolute: top right bottom left

将当前容器设为 `absolute`，并设置定位的值。

```stylus
.mask
    absolute: 0
.toolbar
    absolute: 60px 0 _
```

生成的 CSS：

```css
.mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.toolbar {
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
}
```

### fixed: top right bottom left

将当前容器设为 `fixed`，并设置定位的值。

```stylus
.back-to-top
    fixed: _ 0 20px _
    // => position: fixed; right: 0; bottom: 20px;
```

### relative: top right bottom left

将当前容器设为 `relative`，并设置定位的值。

```stylus
.box
    relative: 10px _ _ _
    // => position: relative; top: 10px;
```

### padding: padding-top padding-right padding-bottom padding-left

替换了 CSS 的 `padding`，处理使用了 `_` 占位符的情况。

```stylus
.content
    padding: 20px
    // => padding: 20px;

.content code
    padding: _ 5px
    // => padding-right: 5px; padding-left: 5px;
```

### margin: margin-top margin-right margin-bottom margin-left

替换了 CSS 的 `margin`，处理使用了 `_` 占位符的情况。

```stylus
.main
    margin: _ auto
    // => margin-right: auto; margin-left: auto;
```

### border-color: border-top-color border-right-color border-bottom-color border-left-color

替换了CSS的 `border-color`，处理使用了 `_` 占位符的情况。

```stylus
.box
    border-color: #f7f7f7 _
    // => border-top-color: #f7f7f7; border-bottom-color: #f7f7f7;
```

### border-style: border-top-style border-right-style border-bottom-style border-left-style

替换了CSS的 `border-style`，处理使用了 `_` 占位符的情况。

### border-width: border-top-width border-right-width border-bottom-width border-left-width

替换了CSS的 `border-width`，处理使用了 `_` 占位符的情况。

### clockhand: values, property-prefix, property-suffix, sides

生成符合 **顺时针简写** 规则的属性，以上 Mixin 均是通过它来生成的，很少会直接用到。

```stylus
.test
    clockhand: 1 2 3 4, 'foo', 'bar', (a b c d)
    // => foo-a-bar: 1; foo-b-bar: 2; foo-c-bar: 3; foo-d-bar: 4;
```