layout: doc
comments: false
date: 2015-5-18 4:12:31
title: saber-string
repo: saber-string
ref: 1.0.0
---

适合移动端的字符串处理模块。

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-string
```

## Usage

```js
// `saber-string` 的函数是颗粒化的，您可以只引用需要的部分
var format = require('saber-string/format');
var greeting = format('Hello, ${name}!', {name: 'World'});

console.log(greeting); // => Hello, World!
```

## API

### encodeHTML(str)

HTML编码

* **str** `{string}` 待编码字符串
* _return_ `{string}`

```js
string.encodeHTML('<a href="#top">返回首页</a>');
// => &lt;a href=&quot;#top&quot;&gt;返回首页&lt;/a&gt;
```

### decodeHTML(str)

HTML解码

* **str** `{string}` 待解码字符串
* _return_ `{string}`

```js
string.decodeHTML('&lt;b&gt;lo&#45;dash&lt;/b&gt;');
// => <b>lo-dash</b>
```

### format(template, data)

字符串格式化，替换字符串中的 `${xx}` 字符，将 `xx` 作为 `data` 的字段名或者参数，使用返回的结果加以替换

* **template** `{string}` 待解码字符串
* **data** `{Object|Array|Function}` 数据
* _return_ `{string}`

```js
// `data` 为 `Object` 时
string.format('${greeting}, ${name}!', {
    greeting: 'Hello',
    name: 'Saber'
});
// => Hello, Saber!

// `data` 为 `Array` 时
string.format('${1}, ${0}!', ['Hello', 'Saber']);
// => Saber, Hello!

// `data` 为 `Function` 时
string.format('${greeting}, ${name}!', function (key) {
    return key , 'name' ? 'Saber' : 'Hi';
});
// => Hi, Saber!
```

### camelize(str)

驼峰化，例如将 `ui-button` 转变化 `uiButton`

* **target** `{string}` 目标字符串
* _return_ `{string}`

```js
string.camelize('ui-button');
// => uiButton

string.camelize('-webkit-box-shadow');
// => WebkitBoxShadow
```

### dasherize(str)

转换为中线链接命名，例如将 `backgroundColor` 转换为 `background-color`

* **target** `{string}` 目标字符串
* _return_ `{string}`

```js
string.dasherize('fontSize');
// => font-size

string.dasherize('WebkitTransform');
// => -webkit-transform
```