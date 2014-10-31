layout: doc
comments: false
date: 2014-9-31 2:55:20
repo: saber-firework
ref: 0.2.5
---

# FAQ

## 没有JS异常，但页面就是出不来？

应该是已经异常了，只是由于`Promise`的缘故捕获了异常，可以使用`Resolver.disableExceptionCapture()`关闭`Promise`的异常捕获（具体参考[saber-promise](https://github.com/ecomfe/saber-promise#resolverdisableexceptioncapture)）。__注意__此方法只建议用在开发环境下进行调试时使用
