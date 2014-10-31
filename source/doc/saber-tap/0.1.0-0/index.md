layout: doc
comments: false
date: 2014-9-31 3:2:43
repo: saber-tap
ref: 0.1.0-0
---

# saber-tap

一个让移动端支持无延迟点击的小模块，基于 [`FastClick`](https://github.com/ftlabs/fastclick)。

*This project is forked from `ftlabs/fastclick`*

## Precondition

使用 `saber-tap` 之前需要满足下列前提：

- viewport 必须设置了 `user-scalable=no`
- 只支持使用 webkit 内核的手机、平板设备浏览器

## Usage

在满足以上 **前提** 时：

通过 `edp` 引入模块：

    edp import saber-tap

然后：

```javascript
// 引入 `saber-tap` 模块
var Tap = require( 'saber-tap' );

// 特定范围内应用无延迟点击，传入DOM元素或id
Tap.mixin( 'container' );

// 若想全局应用，可在 `domready` 时传入 `body`
window.addEventListener( 'load', function() {
    Tap.mixin( document.body );
});

// 搞定之后绑定的 click 事件就没有延迟了
el.addEventListener( 'click', clickHandler );
```

因为 `Tap` 会在给定的 `layer` 上使用事件委托，为防止大范围的 `tap-highlight` 效果，推荐加上如下样式：

```css
body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
```

局部使用可将 `body` 换为对应的 `layer`。

## API

### .mixin( layer )

将 layer 元素内的点击事件换为无延迟点击。

参数 `layer` 为 `DOM元素 <HTMLElement>` 或 `DOM元素的id <string>`。
