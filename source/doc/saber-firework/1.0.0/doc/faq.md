layout: doc
comments: false
date: 2014-10-3 8:31:18
title: FAQ
repo: saber-firework
ref: 1.0.0
---

## 没有JS异常，但页面就是出不来？

应该是已经异常了，只是由于`Promise`的缘故捕获了异常，可以使用`Resolver.disableExceptionCapture()`关闭`Promise`的异常捕获（具体参考[saber-promise](https://github.com/ecomfe/saber-promise#resolverdisableexceptioncapture)）。__注意__此方法只建议用在开发环境下进行调试时使用