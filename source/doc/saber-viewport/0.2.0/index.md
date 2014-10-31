layout: doc
comments: false
date: 2014-9-31 3:3:1
repo: saber-viewport
ref: 0.2.0
---

# saber-viewport

移动端页面视口管理，提供页面转场功能

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

### About bar

移动页面顶部或者底部一般都有navigation bar、toolbar之类的，这些部件在页面转场时通常不变化或者特殊变化，通过添加`data-viewport-bar`与`data-name`自定义dom属性来支持。

比如现在有三个页面A、B、C，顶部都有navigation bar，前两页面bar样式相同，最后一个页面为详情页面，bar上添加了“返回”按钮，大体就如下这般：

    <!-- page A -->
    <body>
        <div class="nav" data-viewport-bar="navigation" data-name="main">
            ...
        </div>
    </body>

    <!-- page B -->
    <body>
        <div class="nav" data-viewport-bar="navigation" data-name="main">
            ...
        </div>
    </body>

    <!-- page C -->
    <body>
        <div class="nav" data-viewport-bar="navigation" data-name="detail">
            ...
            <a>返回</a>
        </div>
    </body>

通过`data-viewport-bar`分类页面中不同类型的bar，bar的转场切换只会在同类tab之间进行。`data-name`表示bar的名称，名称相同的bar转场时不会有变化，而类型相同名称不同的bar之前会有转场效果。

示例中从A切换到B时顶部导航条不会有变化（`data-name`相同），而从B切换到C时顶部导航条会进行转场效果（`data-name`不同）。

__注__：`saber-viewport`并不控制bar在页面中的位置、样式，这些还是由页面控制。


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
