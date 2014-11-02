layout: doc
comments: false
date: 2014-10-2 10:38:12
repo: saber-run
ref: 0.2.0
---

# saber-run [![Build Status](https://travis-ci.org/ecomfe/saber-run.png?branch=master)](https://travis-ci.org/ecomfe/saber-run)

移动端动画效果支持

## Usage

```javascript
var runner = require('saber-run');
var ele = document.getElmentById('saber');

var animation = runner.animation(ele);

animation
    // x、y轴各移动10像素
    .move(10, 10)
    // 设置动画时长为700ms
    .duration(0.7)
    // 同时再旋转60度
    .rotate(60)
    // 跑起来～
    .run()
    // 动画完后再干点啥
    .finish(function () {
        alert('Surprise')
    })
    // 再来一次 歪个脖
    .skew(10)
    .run();
```

## API

### .animation( ele, options )

创建动画对象, 返回`Animation`实例

* `ele` `{HTMLElement}` 需要进行动画的DOM元素
* `options` `{Object=}` 默认动画配置参数
* `options.duration` `{number=}` 默认动画时长
* `options.delay` `{number=}` 默认动画延时
* `options.ease` `{string=}` 默认缓动效果

缓动效果如下 参考[move.js](https://github.com/visionmedia/move.js)：

```javascript
{
    'default': 'ease',
    'in': 'ease-in',
    'out': 'ease-out',
    'in-out': 'ease-in-out',
    'snap': 'cubic-bezier(0,1,.5,1)',
    'linear': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'ease-in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    'ease-in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    'ease-in-quart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    'ease-in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    'ease-in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    'ease-in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
    'ease-in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    'ease-out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    'ease-out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    'ease-out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    'ease-out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'ease-out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    'ease-out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    'ease-in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    'ease-in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    'ease-in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
    'ease-in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
    'ease-in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
    'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
    'ease-in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
}
```

### Animation 实例

支持链式调用

#### .set( property, value )

设置动画样式属性

* `property` `{string}` 属性名称
* `value` `{string}` 属性值

```javascript
var animation = require('saber-run').animation(ele);
animation.set('width', '200px');
```

#### .duration( time )

设置单次动画的时长，通过`.run()`执行动画后会重置为默认设置

* `time` `{number}` 时间，单位`s`

#### .delay( time )

设置单次动画的延时，通过`.run()`执行动画后会重置为默认设置

* `time` `{number}` 时间，单位`s`

#### .ease( name )

设置单次动画的缓动效果，通过`.run()`执行动画后会重置为默认设置

* `name` `{string}` 缓动效果名称

#### .run()

执行动画

#### .end()

结束动画，所有属性立即变为最终值

#### .finish( callback )

注册动画执行完成后的回调函数，只针对单次动画有效

* `callback` `{Function}` 回调函数

#### .moveTo( x, y )

移动到确定位置

* `x` `{number=}` X轴坐标
* `y` `{number=}` Y轴坐标

#### .move( x, y )

相对位移

* `x` `{number=}` 横向距离
* `y` `{number=}` 纵向距离

```javascript
// 元素原始位置为100, 100
var ele = document.getElementById('target');
var animation = require('saber-run').animation(ele);
animation
    .move(10, 10)
    // 移动到110, 110
    .run()
    .move(10, 10)
    // 最终元素位置为120, 120
    .run();
```

#### .rotateTo( deg )

旋转到固定角度

* `deg` `{number}` 角度

#### .rotate( deg )

相对旋转

* `deg` `{number=}` 角度

#### .skewTo( deg )

倾斜到固定角度

* `deg` `{number}` 角度

#### .skew( deg )

相对倾斜

* `deg` `{number=}` 角度

#### .scaleTo( rate )

放大缩小

* `rate` `{number}` 比例

#### .scale( rate )

相对增加缩小

* `rate` `{number=}` 比例

### transition

#### .transition( ele, properties, options )

设置元素transition效果

* `ele` `{HTMLElement}` DOM元素
* `properties` `{Object}` 变化的样式属性
* `options` `{Object}` 配置参数
* `options.duration` `{number=}` 时长
* `options.delay` `{number=}` 延时
* `options.ease` `{string=}` 缓动效果

#### .stopTransition( ele )

停止元素的transition效果，所有属性立即变为最终值

* `ele` `{HTMLElement}` DOM元素

#### .onTransitionEnd( ele, callback, useCapture )

监听transitionend事件

* `ele` `{HTMLElement}` DOM元素
* `callback` `{Function}` 回调函数

#### .unTransitionEnd( ele, callback, useCapture )

取消监听transitionend事件

* `ele` `{HTMLElement}` DOM元素
* `callback` `{Function}` 回调函数

#### .oneTransitionEnd( ele, callback, useCapture )

只监听一次transitionend事件

* `ele` `{HTMLElement}` DOM元素
* `callback` `{Function}` 回调函数

### util

#### .requestAnimationFrame( callback )

添加动画帧

* `callback` `{Function}` 回调函数

#### .cancelAnimationFrame( idenity )

取消已添加的动画帧

* `idenity` `{number}` 动画帧标示，由`.requestAnimationFrame()`返回

#### .now()

获取当前的时间戳

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
