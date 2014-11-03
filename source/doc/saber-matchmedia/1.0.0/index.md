layout: doc
comments: false
date: 2014-10-3 2:44:38
title: saber-matchmedia
repo: saber-matchmedia
ref: 1.0.0
---

移动端 [`matchMedia`](http://dev.w3.org/csswg/cssom-view/#dom-window-matchmedia) 支持。

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-matchmedia
```

## Usage

该模块有 **两个版本**：*完整版* 性能高，体积较大；*简化版* 体积小，功能受限；请根据项目需求自由选择。

#### 完整版

默认版本，返回的对象包含 `MediaQueryList` 的所有主要功能：

```js
var matchMedia = require('saber-matchmedia');
```

*完整版* 来自 [`weblinc/media-match`](https://github.com/weblinc/media-match)，性能 (*via [jsperf](http://jsperf.com/matchmedia/11)*) 比 `Native matchMedia` 高，远超 `paulirish/matchMedia.js`。

#### 简化版

该版本 **不支持** `MediaQueryList` 的 `addListener`、`removeListener`：

```js
var matchMedia = require('saber-matchmedia/lite');
```

*简化版* 是 [`paulirish/matchMedia.js`](https://github.com/paulirish/matchMedia.js) 不带 **桌面浏览器** 兼容的版本。

### 屏幕翻转

因为 `orientationchange` 的支持情况不佳，`resize` 又在很多情况下都会触发，所以通常用该模块来判断屏幕翻转：

```javascript
var matchMedia = require('saber-matchmedia');

matchMedia('screen and (orientation: portrait)')
    .addListener(orientationHandler);

function orientationHandler(mql) {
    // do something...
}
```

## API

使用方式与标准的 `window.matchMedia` 一致，请参考 [MDN上的文档](https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia)。

### Methods

#### matchMedia(mediaQueryString)

返回一个 `MediaQueryList` 对象（在不支持原生 `matchMedia` 的设备返回模拟的对象）。

* **mediaQueryString** `{string}` Media Query
* _return_ `{MediaQueryList}`

### Classes

`MediaQueryList` 实例的属性与方法。

#### matches

Media Query 规则匹配则返回 `true`，否则为 `false`。

* _return_ `{boolean}`

#### media

Meida Query 的值。

* _return_ `{string}`

#### addListener(listener)

`MediaQueryList` 对象 **添加** 监听函数的方法。

* **listener** `{Function}` 回调函数

#### removeListener(listener)

`MediaQueryList` 对象 **移除** 监听函数的方法。

* **listener** `{Function}` 回调函数