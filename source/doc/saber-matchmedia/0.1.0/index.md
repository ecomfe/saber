layout: doc
comments: false
date: 2015-5-18 4:11:28
repo: saber-matchmedia
ref: 0.1.0
---

# saber-matchmedia

移动端 [`matchMedia`](http://dev.w3.org/csswg/cssom-view/#dom-window-matchmedia) 支持。

## Usage

### 引入模块

通过 `edp` 引入模块：

    edp import saber-matchmedia

该模块有 **两个版本**：*完整版* 性能高，体积较大；*简化版* 体积小，功能受限；请根据项目需求自由选择。

#### 完整版

默认版本，返回的对象包含 `MediaQueryList` 的所有主要功能：

```javascript
var matchMedia = require( 'saber-matchmedia' );
```

*完整版* 来自 [`weblinc/media-match`](https://github.com/weblinc/media-match)，性能 ( *via [jsperf](http://jsperf.com/matchmedia/11)* ) 比 `Native matchMedia` 高，远超 `paulirish/matchMedia.js`。

#### 简化版

该版本 **不支持** `MediaQueryList` 的 `addListener`、`removeListener`：

```javascript
var matchMedia = require( 'saber-matchmedia/lite' );
```

*简化版* 是 [`paulirish/matchMedia.js`](https://github.com/paulirish/matchMedia.js) 去除对 **桌面浏览器** 支持之后的版本。

### 屏幕翻转

因为 `orientationchange` 的支持情况不佳，`resize` 又在很多情况下都会触发，所以通常用该模块来判断屏幕翻转：

```javascript
var matchMedia = require( 'saber-matchmedia' );

matchMedia( 'screen and (orientation: portrait)' )
    .addListener( orientationHandler );

function orientationHandler( mql ) {
    // do something...
}
```

## API

使用方式与标准的 `window.matchMedia` 一致，请参考 [MDN上的文档](https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia)。

### matchMedia( mediaQueryString )

返回一个 `MediaQueryList` 对象（在不支持原生 `matchMedia` 的设备返回模拟的对象）。

### `<boolean>` MediaQueryList.matches

media query 规则匹配则返回 `true`，否则为 `false`。

### `<string>` MediaQueryList.media

meida query 的值。

### MediaQueryList.addListener( listener )

`MediaQueryList` 对象 **添加** 监听函数的方法。

### MediaQueryList.removeListener( listener )

`MediaQueryList` 对象 **移除** 监听函数的方法。
