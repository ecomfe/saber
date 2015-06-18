layout: doc
comments: false
date: 2015-5-18 4:31:58
repo: rider
ref: 2.0.0
---

# 全局配置

`rider` 的 **默认配置** 能够适应大多数场景，但如有需要，我们可以通过 **覆盖全局配置** 对样式工具库进行微调。

建议在样式入口文件的 **最前方** 设置全局配置，以确保调用相关方法时能够生效。

### $-base-font-size

用于设置文档的 **基础** 文字大小。**单位转换** 函数就是根据此配置计算的。

默认值：`16px`

相关：[样式初始化](./initialize.html)，[单位转换](./unit.html)

### $-base-font-family

基础字体族群。

默认值：`'Helvetica Neue', Arial, sans-serif`

相关：[样式初始化](./initialize.html)

### $-code-font-family

代码字体族群。

默认值：`Menlo, Consolas, monospace`

相关：[样式初始化](./initialize.html)

### $-prevent-text-size-adjust

是否 **阻止** 屏幕翻转时，浏览器缩放字体的行为。

默认值：`true`

相关：[样式初始化](./initialize.html)

### $-prevent-tap-highlight

是否 **屏蔽** 移动浏览器中，`a`、`nav` 等标签 **点击触发** 时的高亮效果。

默认值：`true`

相关：[样式初始化](./initialize.html)

### $-image-dppx-range

使用图片工具时，探测设定 DPPX 范围内的 Retina 图片。

默认值：`(2 3)`

相关：[图片](./image.html)

### $-image-dppx-separator

使用图片工具时，拼装带 DPPX 值的路径所用的分隔符。

比如，当该配置为 `@` 时，`./logo.png` 的 `3dppx` 版本图片为 `./logo@3x.png`。

默认值：`@`

相关：[图片](./image.html)

### $-image-dppx-quality-first

使用图片工具时，是否启用 **质量优先** 模式。

该配置启用时，将为比设定值低 `0.5dppx` 以内的设备，使用质量更高的图片。

默认值：`false`

相关：[图片](./image.html)

### $-breakpoint-slice

响应式工具 Breakpoint 所使用的屏幕切片分段。

默认值：`0 400px 600px 800px 1050px`

相关：[响应式工具](./breakpoint.html)

### $-unit-precision

单位转换的精度，小数点后保留的位数。

默认值：`5`

相关：[单位转换](./unit.html)
