layout: doc
comments: false
date: 2015-9-10 2:21:35
title: saber-widget
repo: saber-widget
ref: 1.4.1
---

适合移动端的UI组件库。

## Installation

通过 [`edp`](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-widget
```

## API

* [主模块 main](./doc/api-main.html)

### 控件

* [基类 Widget](./doc/api-widget.html)
* [懒加载 LazyLoad](./doc/api-widget-lazyload.html)
* [轮播图 Slider](./doc/api-widget-slider.html)
* [图片查看器 ImageView](./doc/api-widget-imageview.html)
* [搜索建议 Suggestion](./doc/api-widget-suggestion.html)
* [单选组 RadioGroup](./doc/api-widget-radiogroup.html)
* [文件上传 FileUpload](./doc/api-widget-fileupload.html)

__注：__ 如果需要使用 [轮播图(Slider)](./doc/api-widget-slider.html) 与 [图片查看器(ImageView)](./doc/api-widget-imageview.html) 请手动引入额外依赖 [hammer](http://hammerjs.github.io/)(&gt;= 2.0.4)，可以使用以下命令引入：

```sh
edp import hammer
```

### 插件

* [基类 Plugin](./doc/api-plugin.html)
* [翻转自适应(轮播图) SliderFlex](./doc/api-plugin-sliderflex.html)
* [翻转自适应(图片查看器) ImageViewFlex](./doc/api-plugin-imageviewflex.html)
* [遮罩 Masker](./doc/api-plugin-masker.html)