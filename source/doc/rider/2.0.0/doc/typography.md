layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 排版
repo: rider
ref: 2.0.0
---

### clearfix()

清除浮动。

参考：[A new micro clearfix hack](http://h5bp.com/q)

```stylus
.container
    clearfix()
```

生成的 CSS：

```css
.container:after,
.container:before {
    content: ' ';
    display: table;
}
.container:after {
    clear: both;
}
```

### hide-text()

隐藏容器内的文字。

参考：[Update CSS image replacement technique](https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757c9e03dda4e463fb0d4db5a5f82d7)

```stylus
.banner
    hide-text()
```

生成的 CSS：

```css
.banner {
    color: transparent;
    font: 0/0 a;
    text-shadow: none;
}
```

### ellipsis(line)

溢出文本显示省略号。

**多行截断** 仅在 `webkit` 内核下有生效，且要保证容器上下的 `padding` 为 `0`，否则本该被截断的文字会溢出。

 * `line` _(可选)_ - 想要截断的行数，留空则默认为 **单行截断**。

```stylus
.title
    ellipsis()
.desc
    ellipsis(3)
```

生成的 CSS：

```css
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
```

### font-face: font-family, font-path, font-weight, font-style

快速引入本地路径的字体。

通过检测 `font-path` 对应的各种 **字体格式** 是否存在，生成最合适的配置。

若需要引入远程路径的字体，请直接手写 `@font-face`。

 * `font-family` - 字体名
 * `font-path` - 字体路径，指字体 **去掉后缀** 之后的部分
 * `font-weight` _(可选)_ - 字重，默认为 `normal`
 * `font-style` _(可选)_ - 字体样式，默认为 `normal`

检测的字体格式有：

 * eot
 * woff
 * woff2
 * ttf
 * svg

```stylus
// 对应路径下有 ttf, woff 两种格式的字体
font-face('Open Sans', '../font/open-sans-bold', 700)
```

生成的 CSS：

```css
@font-face {
    font-family: 'Open Sans';
    src: url("../font/open-sans-bold.woff") format('woff'),
         url("../font/open-sans-bold.ttf") format('truetype');
    font-weight: 700;
    font-style: normal;
}
```