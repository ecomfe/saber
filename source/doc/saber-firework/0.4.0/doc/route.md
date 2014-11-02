layout: doc
comments: false
date: 2014-10-2 10:37:23
repo: saber-firework
ref: 0.4.0
---

# 路由配置信息

`Object`类型，包含以下字段

* `path` `{string}` 请求路径
* `action` `{Object}` action配置信息，具体请参考[action配置说明](action.html)
* `cached` `{boolean=}` action缓存设置，缓存的页面在离开时不会被销毁，下次访问会跳过初始化渲染过程
* `transition` `{Object=}` 转场参数，具体请参考[saber-viewprot](https://github.com/ecomfe/saber-viewport)的[全局配置参数说明](https://github.com/ecomfe/saber-viewport#initele-options)

可以随意添加自定义属性，方便后续自定义操作
