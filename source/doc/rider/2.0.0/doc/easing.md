layout: doc
comments: false
date: 2015-5-18 4:31:58
title: 缓动函数
repo: rider
ref: 2.0.0
---

CSS默认提供的缓动函数有限，我们通过贝塞尔曲线对缓动函数进行了扩充。

### easing(type)

生成 **指定类型** 的缓动函数。

支持的类型有：

`in-sine` `out-sine` `in-out-sine`
`in-quad` `out-quad` `in-out-quad`
`in-cubic` `out-cubic` `in-out-cubic`
`in-quart` `out-quart` `in-out-quart`
`in-quint` `out-quint` `in-out-quint`
`in-expo` `out-expo` `in-out-expo`
`in-circ` `out-circ` `in-out-circ`
`in-back` `out-back` `in-out-back`

各缓动函数的效果可以参考 [easings.net](http://easings.net/zh-cn)，使用示例如下：

```stylus
.box
    transition: all 1s easing('in-sine')
    // => transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);
```