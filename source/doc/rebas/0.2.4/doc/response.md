layout: doc
comments: false
date: 2015-5-18 4:34:40
title: Response
repo: rebas
ref: 0.2.4
---

HTTP响应对象，基于[Express Response](http://expressjs.com/4x/api.html#response)进行了以下扩展

* [Properties](#properties)

## Properties

### addition

需要渲染到页面的附加数据，页面中使用`<!-- rebas:name -->` 进行占位

```js
exports.get = function (req, res, next) {
    res.addition = {
        name: 'hello rebas';
    };
};
```

```html
<!-- index.html -->
...
<div><!-- rebas:name -->
...
```