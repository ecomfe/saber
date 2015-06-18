layout: doc
comments: false
date: 2015-5-18 4:31:58
title: 辅助函数
repo: rider
ref: 2.0.0
---

### file-exists(file)

检测 **文件路径** 是否存在。

相关：[图片](./image.html)，[排版](./typography.html)

```stylus
.header
    $img = '../img/bg.png'
    if file-exists($img)
        background: url($img) cover no-repeat
    else
        background: #369
```

### is-url(url)

检测是否是 URL。

这里的检测并不严格，此函数的目的主要是快速区分 **远程路径** 与 **本地路径**。

相关：[排版](./typography.html)

```stylus
is-url('../font/icon.ttf')
// => false

is-url('http://efe.baidu.com/font/icon.ttf')
// => true
```

### get-retina-src(src, dppx, separator)

获取高分辨率版本的图片地址。

 * `src` - 图片路径
 * `dppx` - 图片尺寸的倍数
 * `separator` _(可选)_ - 分隔符，默认为 `@`

相关：[图片](./image.html)

```stylus
get-retina-src('../img/logo.png', 2)
// => '../img/logo@2x.png'

get-retina-src('../img/logo.png', 3, '-')
// => '../img/logo-3x.png'
```