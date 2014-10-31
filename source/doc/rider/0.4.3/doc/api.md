layout: doc
comments: false
date: 2014-9-31 2:48:22
repo: rider
ref: 0.4.3
---

# API

## 全局配置

`默认值` 能够适应大多数场景。如有特殊需要，可覆盖全局配置。

变量名 | 默认值 | 说明
---|---|---
`$-base-font-size` | `16px` | 用于设置默认文字大小、常用单位的转换
`$-base-font-family` | `'Helvetica Neue', sans-serif` | 默认字体
`$-prevent-user-select` | `false` | 屏蔽用户选择文本的能力，通常用在 Hybrid App 场景
`$-prevent-text-size-adjust` | `true` | 屏蔽屏幕翻转时，浏览器缩放字体的行为
`$-prevent-tap-highlight` | `true` | 屏蔽 `a` 标签的点击高亮效果
`$-image-dppx` | `2` | 图片每像素的点数，用于支持 retina 设备
`$-breakpoint-slice` | `0 400px 600px 800px 1050px` | 响应式Web设计屏幕尺寸的划分


## 样式初始化

由于 `Webkit` 内核浏览器整体差异较小，可根据情况决定 **样式初始化** 的方式。

对于规模较大、样式定制化程度较高的移动端项目，可以采用 `initialize()` 进行整体样式初始化，这样会比较彻底。

对于需求较简单、样式定制化程度底的项目，也可采用 `normalize-form()` 初始化表单，采用 `reset-box-model()`、`reset-font()` 等方法初始化特定部分。

### initialize()

网站样式自动初始化。

考虑到移动端屏幕受限，除正文区域外自定义的性质较强，采用 `reset` 为主 `normalize` 为辅的方式处理。

使用 `initialize()` 之后，下面的样式初始化方式通常就不会用到了。

**使用方法**

```haml
initialize()
```

### reset-font()

重置文字字体、尺寸、样式、垂直对齐方式。

**使用方法**

```haml
.box
    reset-font()
```

### reset-box-model()

重置盒模型。处于可访问性考虑，不会重置 `outline`。

**使用方法**

```haml
body
    reset-box-model()
```

### reset-list()

重置列表样式。应用于 `ul`、`ol` 类型元素。

**使用方法**

```haml
.menu-list
    reset-list()
```

### reset-table()

重置表格样式。应用于 `table` 类型元素。

**使用方法**

```haml
.data-table
    reset-table()
```

### reset-table-cell()

初始化单元格样式。应用于 `td`、`th` 类型元素。

**使用方法**

```haml
.data-table td
    reset-table-cell()
```

### normalize-form()

初始化表单样式。

**使用方法**

```haml
normalize-form()
```


## 顺时针简写

在 `CSS` 语法中，可以通过 `顺时针` 的方式简写属性的值，比如 `padding`、`margin` 等。其规则如下：

    上 右 下 左 => 1 2 3 4
    上 右 下 => 1 2 3 2
    上 右 => 1 2 1 2
    上 => 1 1 1 1

**顺时针简写** 增加了 `_` 占位符来表示 **不定义** 的状态，下面的文档中会有示例。

### absolute: top right bottom left

将当前容器设为 `absolute`，并设置定位的值。

**使用方法**

```haml
.box
    absolute: 0
    // => position: absolute; top: 0; right: 0; bottom: 0; left: 0;

    absolute: _ 10px 20px
    // => position: absolute; right: 10px; bottom: 20px; left: 10px;
```

### fixed: top right bottom left

将当前容器设为 `fixed`，并设置定位的值。

**使用方法**

```haml
.box
    fixed: _ 20px 0 _
    // => position: fixed; right: 20px; bottom: 0;
```

### relative: top right bottom left

将当前容器设为 `relative`，并设置定位的值。

**使用方法**

```haml
.box
    relative: 10px _ _ _
    // => position: relative; top: 10px;
```

### padding: padding-top padding-right padding-bottom padding-left

替换了CSS的 `padding`，处理使用了 `_` 占位符的情况。

**使用方法**

```haml
.box
    padding: 20px
    // => padding: 20px;

    padding: 5px _
    // => padding-top: 5px; padding-bottom: 5px;
```

### margin: margin-top margin-right margin-bottom margin-left

替换了CSS的 `margin`，处理使用了 `_` 占位符的情况。

**使用方法**

```haml
.box
    margin: _ 5px
    // => margin-right: 5px; margin-left: 5px;
```

### border-color: border-top-color border-right-color border-bottom-color border-left-color

替换了CSS的 `border-color`，处理使用了 `_` 占位符的情况。

**使用方法**

```haml
.box
    border-color: _ red
    // => border-right-color: red; border-left-color: red;
```

### border-style: border-top-style border-right-style border-bottom-style border-left-style

替换了CSS的 `border-style`，处理使用了 `_` 占位符的情况。

### border-width: border-top-width border-right-width border-bottom-width border-left-width

替换了CSS的 `border-width`，处理使用了 `_` 占位符的情况。

### clockhand: values, property-prefix, property-suffix, sides

生成符合 **顺时针简写** 规则的属性，很少会直接用到。

**使用方法**

```haml
.test
    clockhand: 1 2 3 4, 'foo', 'bar', (a b c d)
    // => foo-a-bar: 1; foo-b-bar: 2; foo-c-bar: 3; foo-d-bar: 4;
```


## 缓动函数

### easing(type)

CSS默认提供的缓动函数有限，我们通过贝塞尔曲线对缓动函数进行了扩充。

各缓动函数的效果可以参考 [easings.net](http://easings.net/zh-cn)。

支持的缓动函数类型有：

    'in-sine' 'out-sine' 'in-out-sine'
    'in-quad' 'out-quad' 'in-out-quad'
    'in-cubic' 'out-cubic' 'in-out-cubic'
    'in-quart' 'out-quart' 'in-out-quart'
    'in-quint' 'out-quint' 'in-out-quint'
    'in-expo' 'out-expo' 'in-out-expo'
    'in-circ' 'out-circ' 'in-out-circ'
    'in-back' 'out-back' 'in-out-back'

**使用方法**

```haml
.box
    transition: all 1s easing('in-sine')
    // => transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);
```

## 图片

从现在移动端的场景来看，retina 设备已经占了绝大多数，所以采用默认使用高清图片的方案。

纯移动端下将不再使用 `原图 + @2x图` 的方式对 retina 做支持。

### bg: path, width, height, dppx

设置背景图片。宽与高默认会读取本地文件自动获取，请注意 `build/webserver` 的 log，若获取失败需手动填写。

**参数说明**

+ `path` 图片路径
+ `width` `(可选)` 图片宽度，默认会尝试读取本地文件宽度，取不到设为 `auto`
+ `height` `(可选)` 图片高度，默认会尝试读取本地文件高度，取不到设为 `auto`
+ `dppx` `(可选)` 图片真实尺寸的倍数，默认值为全局配置 `$-image-dppx = 2`

注：当 `width` 为 `cover` 或 `contain` 时，`height` 将始终为空。

**使用方法**

stylus:

```haml
// 图片实际大小为 150px * 88px，自动获取时根据 dppx 进行缩放
.test-1
    bg: 'img/logo.png'
// 手工指定尺寸
.test-2
    bg: 'img/banner.png' 100px 50px
```

css:

```css
.test-1 {
    background: url("img/logo.png") no-repeat;
    background-size: 75px 44px;
}
.test-2 {
    background: url("img/banner.png") no-repeat;
    background-size: 100px 50px;

}
```

### ir: path, x, y, width, height, dppx

替换图片。设置背景图片与坐标，并隐藏容器中的文字。宽高会尝试自动获取。

**参数说明**

+ `path` 图片路径
+ `x` x轴位置
+ `y` `(可选)` y轴位置
+ `width` `(可选)` 图片宽度，同 `bg()`
+ `height` `(可选)` 图片高度，同 `bg()`
+ `dppx` `(可选)` 图片真实尺寸的倍数，同 `bg()`

**使用方法**

stylus:

```haml
.test
    ir: 'img/logo.png' -10px -20px 100px
```

css:

```css
.test {
    background: url("img/logo.png") no-repeat;
    background-size: 100px auto;
    background-position: -10px -20px;
    color: transparent;
    font: 0/0 a;
    text-shadow: none;
}
```

## 排版

### clearfix()

清除浮动。

**使用方法**

stylus:

```haml
.test
    clearfix()
```

css:

```css
.test:after,
.test:before {
    content: ' ';
    display: table;
}
.test:after {
    clear: both;
}
```

### hide-text()

隐藏容器内的文字。

**使用方法**

stylus:

```haml
.test
    hide-text()
```

css:

```css
.test {
    color: transparent;
    font: 0/0 a;
    text-shadow: none;
}
```

### ellipsis(line)

溢出文本显示省略号。

不填行号默认为 **单行截断**。

**多行截断** 功能仅在 `webkit` 内核下有效，且要保证容器上下的 `padding` 为零（否则会溢出）。

**使用方法**

stylus:

```haml
.test-s
    ellipsis()
.test-m
    ellipsis(3)
```

css:

```css
.test-s {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.test-m {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```

### font-face: font-family, font-path, version-suffix

快速引入字体。

**参数说明**

+ `font-family` 字体名
+ `font-path` 字体路径，是字体去掉后缀名之后的部分
+ `version-suffix` `(可选)` 版本后缀，用来更新字体版本

**使用方法**

stylus:

```haml
font-face('rider-icon', 'font/rider-icon', '88')
```

```css
@font-face {
    font-family: 'rider-icon';
    src: url("font/rider-icon.woff?88") format('woff'), url("font/rider-icon.ttf?88") format('truetype');
    font-weight: normal;
    font-style: normal;
}
```

## 单位转换

### rem(value)

转换成单位为 `rem` 的值，`value` 支持的单位有 `rem` 与 `px`，不带单位默认为 `px`。

**使用方法**

```haml
.box
    font-size: rem(20)
    // => font-size: 1.25rem;
    font-size: rem(14px)
    // => font-size: 0.875rem;
    font-size: rem(2rem)
    // => font-size: 2rem;
```

### px(value)

转换成单位为 `px` 的值，`value` 支持的单位有 `rem` 与 `px`，不带单位默认为 `px`。

**使用方法**

```haml
.box
    width: px(1rem)
    // => width: 16px;
    width: px(1.5rem)
    // => width: 24px;
    width: px(20)
    // => width: 20px;
```

### em(value, upper-value)

转换成单位为 `em` 的值，`upper-value` 是手动传入的继承自上层元素的值（默认为 `$-base-font-size`）。

`value` 支持的单位有 `rem` 与 `px`，不带单位默认为 `px`。

**使用方法**

```haml
.box
    foo: em(20)
    // => foo: 1.25em;
    foo: em(16, 10)
    // => foo: 1.6em;
    foo: em(1rem, 10)
    // => foo: 1.6em;
```

## 形状

### size: width, height

绘制矩形，快速设置 **宽度** 和 **高度**。

**参数说明**

+ `width` 宽度，默认单位为 `px`
+ `height` `(可选)` 高度，默认单位为 `px`，若不填则为绘制正方形

**使用方法**

```haml
.box
    size: 10em
    // => width: 10em; height: 10em;
    size: 100 20
    // => width: 100px; height: 20px;
```

### triangle: direction, size, color

绘制三角形。

**参数说明**

+ `direction` 方向，取值范围为 `top`、`right`、`bottom`、`left`
+ `size` 尺寸
+ `color` 颜色

**使用方法**

stylus:

```haml
.test
    triangle: top 5px #369
```

css:

```css
.test {
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #369;
}
```

## 动画

### animate: name, duration, fill-mode

快速应用 `animate.css` 中的动画。

当应用在 `CSS root` 时，只生成动画的 `@keyframes`。

只有在用了当前动画时，才会生成动画的 `@keyframes`，并且同一动画效果只生成一次。

支持的动画有：

    bounce bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp
    bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp
    fadeIn fadeInDown fadeInLeft fadeInRight fadeInUp fadeOut fadeOutDown
    fadeOutLeft fadeOutRight fadeOutUp flash flip flipInX flipInY
    flipOutX flipOutY hinge lightSpeedIn lightSpeedOut pulse rollIn rollOut
    rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight
    rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft
    rotateOutUpRight rubberBand shake slideInDown slideInLeft slideInRight
    slideOutLeft slideOutRight slideOutUp swing tada wobble

动画效果可以参考 [Animate.css](http://daneden.github.io/animate.css/)

**参数说明**

+ `name` 动画名称，支持的动画见上表
+ `duration` `(可选)` 持续时间，默认为 `1s`
+ `fill-mode` `(可选)` 播放后的状态，默认为 `both`

**使用方法**

stylus:

```haml
// root
animate('flash')

// mixin
.test
    animate('bounce', 0.5s)
```

css:

```css
@keyframes flash {
    0%, 50%, 100% {
        opacity: 1;
    }

    25%, 75% {
        opacity: 0;
    }
}
.test {
    animation-name: bounce;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}
```

## Breakpoint

`Breakpoint` 是支持 **响应式布局** 的工具，作为 `block mixin` 调用。

在实现 **响应式布局** 时，可以按照屏幕宽度分为几个范围，这几个范围用数字来表明：

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2          3          4          5

这样可以使用 `切片` 编号直接指定样式应用范围。

范围分组根据 `$-breakpoint-slice` 的配置决定。

为确保边界值正常，当使用切片定义 `min-width` 时，会自动加 `1px`，不使用切片时不做处理。

这种思路来自 [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer)。

因为 `@media` 标签无法嵌套使用，`rider` 在其思路的基础上实现了规则的组合，以便适应复杂场景。

### +retina()

限定高清设备。`dppx` 在 `1.3` 以上即认为是 `retina` 设备。

**使用方法**

stylus:

```haml
.test
    +retina()
        foo: bar
```

css:

```css
@media (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 125dpi) {
    .test {
        foo: bar;
    }
}
```

### +below(value)

限定低于目标尺寸或 **切片** 边界值。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2         3           4          5
                ·                   ·         · below(3) ·           ·
                <────────────────────────────────────────┤


`value` 带单位时为具体的值，不带单位时根据 **切片** 边界值配置。

**使用方法**

stylus:

```haml
+below(3)
    .test
        foo: bar
```

css:

```css
@media (max-width: 800px) {
    .test {
        foo: bar;
    }
}
```

### +above(value)

限定高于目标尺寸或 **切片** 边界值。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2         3           4          5
                ·                   ·         · above(3) ·           ·
                                              ├───────────────────────────────>

`value` 带单位时为具体的值，不带单位时根据 **切片** 边界值配置。

**使用方法**

stylus:

```haml
+above(3)
    .test
        foo: bar
```

css:

```css
@media (min-width: 601px) {
    .test {
        foo: bar;
    }
}
```

### +at(value)

限定指定 **切片** 范围。`value` 为切片编号。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2         3           4          5
                ·                   ·         ·   at(3)  ·           ·
                                              ├──────────┤

**使用方法**

stylus:

```haml
+at(3)
    .test
        foo: bar
```

css:

```css
@media (min-width: 601px) and (max-width: 800px) {
    .test {
        foo: bar;
    }
}
```

### +between(from-value, to-value)

限定目标尺寸或 **切片** 边界值的区间。

    Breakpoint: 0                 400px     600px     800px       1050px
                ├───────────────────┼─────────┼──────────┼───────────┼────────>
    切片 #:               1              2         3           4          5
                ·                   ·     between(3)     ·           ·
                                    ├────────────────────┤

`value` 带单位时为具体的值，不带单位时根据 **切片** 边界值配置。

**使用方法**

stylus:

```haml
+between(2, 3)
    .test
        foo: bar
```

css:

```css
@media (min-width: 401px) and (max-width: 800px) {
    .test {
        foo: bar;
    }
}
```

### +breakpoint()

`breakpoint()` 允许在参数中传入以上限定条件，以及 `media type`、`orientation` 类型条件，组合限定范围。

支持的 `media type`：

    'all' 'screen' 'print' 'tv' 'braille' 'embossed'
    'handheld' 'projection' 'speech' 'tty'

支持的 `orientation`：

    'portrait' 'landscape'

**使用方法**

stylus:

```haml
.test-1
    +breakpoint('screen', 'portrait', between(2 3))
        foo: bar

.test-2
    +breakpoint('retina', at(3))
        foo: bar
```

css:

```css
@media screen and (orientation: portrait) and (min-width: 401px) and (max-width: 800px) {
    .test-1 {
        foo: bar;
    }
}
@media (min-width: 601px) and (max-width: 800px) and (-webkit-min-device-pixel-ratio: 1.3), (min-width: 601px) and (max-width: 800px) and (min-resolution: 125dpi) {
    .test-2 {
        foo: bar;
    }
}
```
