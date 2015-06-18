layout: doc
comments: false
date: 2015-5-18 4:9:18
title: 动画
repo: rider
ref: 2.0.0
---

### animate: name, duration, fill-mode

快速添加来自 `Animate.css` 的动画。

应用于 CSS 根节点时，只生成动画的 `@keyframes`。  
应用于 CSS 选择器时，生成动画的 `@keyframes` 与 `animation` 相关属性。

同一个动画，`@keyframes` 只会被引入一次。

支持的动画有：

`bounce` `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight`
`bounceInUp` `bounceOut` `bounceOutDown` `bounceOutLeft`
`bounceOutRight` `bounceOutUp` `fadeIn` `fadeInDown` `fadeInDownBig`
`fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig`
`fadeInUp` `fadeInUpBig` `fadeOut` `fadeOutDown` `fadeOutDownBig`
`fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig`
`fadeOutUp` `fadeOutUpBig` `flash` `flip` `flipInX` `flipInY`
`flipOutX` `flipOutY` `hinge` `lightSpeedIn` `lightSpeedOut` `pulse`
`rollIn` `rollOut` `rotateIn` `rotateInDownLeft` `rotateInDownRight`
`rotateInUpLeft` `rotateInUpRight` `rotateOut` `rotateOutDownLeft`
`rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight`
`rubberBand` `shake` `slideInDown` `slideInLeft` `slideInRight`
`slideOutLeft` `slideOutRight` `slideOutUp` `swing` `tada` `wobble`
`zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` `zoomOut`
`zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp`

各种动画的效果可参考 [Animate.css](http://daneden.github.io/animate.css/)，使用示例如下：

```stylus
// 在根节点使用
animate('flash')

// 在选择器中使用
.box
    animate('pulse', .5s)
```

生成的 CSS：

```css
/* 在根节点使用，只生成 @keyframes */
@keyframes flash {
    0%, 50%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: 0;
    }
}

/* 在选择器中使用，生成 @keyframes 与 animation 相关属性 */
.box {
    animation-name: pulse;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}
@keyframes pulse {
    0% {
        transform: scale3d(1, 1, 1);
    }
    50% {
        transform: scale3d(1.05, 1.05, 1.05);
    }
    100% {
        transform: scale3d(1, 1, 1);
    }
}
```