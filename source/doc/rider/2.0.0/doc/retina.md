layout: doc
comments: false
date: 2015-5-18 4:9:18
title: Retina 支持
repo: rider
ref: 2.0.0
---

### +retina(dppx)

用于限定仅在 Retina 屏幕生效的样式代码，屏幕密度依靠 `dppx` 单位描述。

 * `dppx` - 每像素包含的点数，默认值为 `1.5`。

```stylus
.box
    color: #f00
    +retina()
        color: #0f0
    +retina(2)
        color: #00f
```

生成的 CSS：

```css
.box {
    color: #f00;
}
@media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
    .box {
        color: #0f0;
    }
}
@media (min-resolution: 2dppx), (min-resolution: 192dpi) {
    .box {
        color: #00f;
    }
}
```