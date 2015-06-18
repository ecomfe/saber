layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 形状
repo: rider
ref: 2.0.0
---

### size: width, height

绘制矩形，快速设置容器的 **宽度** 和 **高度**。

 * `width` - 宽度，默认单位为 `px`
 * `height` _(可选)_ - 高度，默认单位为 `px`，留空为绘制正方形

```stylus
.square
    size: 5em
.rectangle
    size: 100 20
```

生成的 CSS：

```css
.square {
    width: 5em;
    height: 5em;
}
.rectangle {
    width: 100px;
    height: 20px;
}
```

### circle: width, height

绘制圆形。

 * `width` - 宽度，默认单位为 `px`
 * `height` _(可选)_ - 高度，默认单位为 `px`，留空为绘制正圆形

```stylus
.avatar
    circle: 30px
.bubble
    circle: 100px 80px
```

生成的 CSS：

```css
.avatar {
    border-radius: 30px;
    width: 30px;
    height: 30px;
}
.bubble {
    border-radius: 100px/80px;
    width: 100px;
    height: 80px;
}
```

### triangle: direction, size, color

绘制三角形。

 * `direction` - 方向，取值范围为 `top`、`right`、`bottom`、`left`
 * `size` - 尺寸
 * `color` - 颜色

```stylus
.box:after
    // 通常在 :before, :after 选择器下
    // 与 absolute, content 配合使用
    triangle: top 5px #369
```

生成的 CSS：

```css
.box:after {
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #369;
}
```