layout: doc
comments: false
date: 2015-3-7 2:8:15
title: URI
repo: saber-uri
ref: 1.0.6
---

## Methods

### set(name, data)

设置组件的值

* **name** `{string=}` 组件名，可省略，省略后就对整个`URI`对象进行设置
* **data** `{*}` 组件值

```js
var uri = require('saber-uri');
var url = uri('www.baidu.com');

// www.baidu.com/search
url.set('path', '/search');

// github.com
url.set('github.com');
```

### get(name, data)

获取组件值

* **name** `{string}` 组件名
* _return_ `{string}`

```javascript
var uri = require('saber-uri');
var url = uri('www.baidu.com/search?wd=100');

// /search
url.get('path');

// 100
url.get('query', 'wd');
```

### toString(name)

字符串化

* **name** `{string=}` 组件名，可省略，省略后就对整个`URI`对象进行字符串化
* _return_ `{string}`

```js
var uri = require('saber-uri');
var url = uri('www.baidu.com/search?wd=100');

// ?wd=100
url.toString('query');

// www.baidu.com/search?wd=100
url.toString();
```

### equal(uri)

判断`URI`是否相等

* **uri** `{string|URI}`
* _return_ `{boolean}`

```js
var uri = require('saber-uri');
var url1 = uri('www.baidu.com/search');
var url2 = uri('www.baidu.com/search?wd=100');

// true
url1.equal('www.baidu.com/search');

// false
url1.equal(url2);
```