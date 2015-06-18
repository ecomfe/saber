layout: doc
comments: false
date: 2015-5-18 4:10:39
title: 路由配置信息
repo: saber-firework
ref: 2.0.0-alpha.2
---

`Object`类型，包含以下字段

* **path** `{string}` 请求路径
* **action** `{Object|string}` action配置信息，具体请参考[配置说明](https://github.com/ecomfe/saber-mm/blob/master/doc/presenter.md#configure)。是字符串则表示配置文件的加载地址，会在后续实际访问时进行异步加载
* **cached** `{boolean=}` action缓存设置，缓存的页面在离开时不会被销毁，下次访问会跳过初始化渲染过程
* **transition** `{Object=}` 转场参数，具体请参考[saber-viewprot](https://github.com/ecomfe/saber-viewport)的[全局配置参数说明](https://github.com/ecomfe/saber-viewport#initele-options)

可以随意添加自定义属性，方便后续自定义操作