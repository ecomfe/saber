layout: doc
comments: false
date: 2014-10-3 2:39:38
title: saber-fastbutton
repo: saber-fastbutton
ref: 1.0.0
---

解决移动端 `300ms` 点击延迟与点击穿透问题。该模块是基于 [Google FastButton](https://developers.google.com/mobile/articles/fast_buttons) 的实现。

_注：仅适用于移动设备。_

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-fastbutton
```

## Usage

```js
// 引入模块
var FastButton = require('saber-fastbutton');

// 目标元素
var target = document.getElementById('btn');

// 事件处理函数
function tapHandler(ev) {
    alert('tap!');
}

// 实例化
var btn = new FastButton(target, tapHandler);

// 在需要时销毁
btn.dispose();
```

## API

创建 `FastClick` 实例

`FastClick` 本身没提供事件委托，如需要可根据 `handler` 中传入的事件对象自己实现

* **element** `{HTMLElement}` 目标元素
* **handler** `{Function}` 处理函数，第一个参数为事件对象
* _return_ `{FastClick}`

### Classes

#### dispose()

销毁 `FastClick` 实例

## Comparison

`saber-fastbutton` 的特点是：

* 手动调用、管理
* 体积小

`saber-tap` 的特点是：

* 自动处理，对使用者透明
* 体积大

这两个模块解决的问题相似，请根据实际场景选择。