layout: doc
comments: false
date: 2015-5-18 4:13:18
repo: saber-viewport
ref: 0.1.0
---

# saber-viewport

移动端页面视口管理，提供页面转场功能

__注：__开发中，相关依赖暂时需要手动安装

## Usage

    var viewport = require('saber-viewport');
    var page;

    // 初始化视口
    viewport.init('viewport');
    // 加载页面
    page = viewport.load(url);
    // 渲染页面
    ....
    // 使用淡入淡出效果转场页面
    page.enter('fadeInOut');

## API

### init(ele, options)

初始化视口，`ele`为DOM元素或者id，`options`为可选配置参数：

* `options.transition` `string` 默认转场效果，目前支持`slide`滑动转场，`fadeInOut`淡入淡出转场
* `options.duration` `number` 默认转场动画时长，单位为秒
* `options.timing` `string` 默认转场过渡速度，取值请参考CSS3中的`transition-timing-function`

### load(string)

创建新页面的容器，返回`Page`对象。页面的具体渲染需要通过`Page.main`属性获取容器元素后自行完成

### Page

页面对象，由`load()`方法创建、返回

#### Page.main

页面的容器元素

#### Page.enter(type, options)

页面转场，`type`转场效果，可选；`options`转场效果配置参数，可选

#### Page.on(eventName, callback)

注册页面事件，可选择`eventName`如下：

* `enter` 转场前事件
* `afterenter` 转场完成事件
* `leave` 页面移除前事件
* `afterleave` 页面移除后事件
