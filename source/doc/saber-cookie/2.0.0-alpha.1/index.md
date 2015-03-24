layout: doc
comments: false
date: 2015-2-24 7:35:39
title: saber-cookie
repo: saber-cookie
ref: 2.0.0-alpha.1
---

适合移动端的Cookie封装


## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-cookie
```

## Usage

```javascript
require('saber-cookie', function(Cookie) {
    // create a cookie (page-session)
    Cookie.set('__saber_test', 'saber');
    
    // get a cookie with given name
    var val = Cookie.get('__saber_test');
    console.info(val);
    
    // create a cookie with expires (1 day)
    Cookie.set(
        '__saber_1d',
        '1day',
        {expires: 1 * 24 * 60 * 60 * 1000}
    );
    console.info(Cookie.get('__saber_1d'));
    
    // create a cookie with path
    Cookie.set(
        '__saber_root',
        'root',
        {path: '/'}
    );
    console.info(Cookie.get('__saber_root'));
    
    // create a cookie with domain
    Cookie.set(
        '__saber_host',
        {domain: document.domain}
    );
    console.info(Cookie.get('__saber_host'));
    
    // create a cookie with raw value
    Cookie.set(
        '__saber_raw',
        'hello, saber',
        {raw: true}
    );
    console.info(
        'decoded: %s , raw: %s',
        Cookie.get('__saber_raw'),
        Cookie.get('__saber_raw', {raw: true})
    );
    
    // remove a cookie
    Cookie.set('__saber_remove', 'xx');
    var beforeVal = Cookie.get('__saber_remove');
    Cookie.remove('__saber_remove');
    var afterVal = Cookie.get('__saber_remove');
    console.info('before: %s , after: %s', beforeVal, afterVal);
});
```

## Methods

### get(name [, options])

获取键名为 `name` 的 cookie 值，若 cookie 不存在或 `name` 为空，则返回 `null`


* **name** `{string}` cookie的键名
* **options** `{Object}` 参数可选，支持的配置项:
    * **raw** `{boolean}` 是否不自动解码(`decodeURIComponent`), 为`true`时会获取未经过解码的cookie原始存储值
* _return_ `{string}`

```js
// 获取键名为 mycookie 的 cookie 值
Cookie.get('mycookie');

// 获取键名为 rawcookie 的未解码的 cookie 存储值
Cookie.get('rawcookie', {raw: true});
```

### set(name, value[, options])

设置键名为 `name`，值为 `value` 的新 cookie


* **name** `{string}` cookie的键名
* **value** `{string}` cookie的原始值
* **options** `{Object}` 参数可选，支持的配置项:
    * **expires** `{Date|Number}` cookie的过期时间, 为数字时单位为`毫秒`
    * **domain** `{string}` cookie的域名
    * **path** `{string}` cookie路径
    * **secure** `{boolean}` cookie是否安全传输
    * **raw** `{boolean}` 是否不自动编码(`encodeURIComponent`), 为`true`时参数`value`会以未编码的原始值存储
* _return_ `{void}`

```js
// 默认(session级)的新cookie
Cookie.set('test1', 'session cookie');

// 设置了有1天效期的新cookie
Cookie.set('test2', 'baidu', {
    expires: 1 * 24 * 60 * 60 * 1000
});

// 设置了路径的新cookie
Cookie.set('test3', 'baidu', {path: '/'});

// 设置了域名的新cookie
Cookie.set('test4', 'baidu', {domain: 'baidu.com'});

// 设置了安全传输的新cookie
Cookie.set('test5', 'baidu', {secure: true});

// 禁用自动编码(encodeURIComponent)的cookie
Cookie.set('test6', 'hello, saber', {raw: true});
```

### remove(name[, options])

删除键名为 `name` 的 cookie

* **name** `{string}` cookie的键名
* **options** `{Object}` 参数可选，支持的配置项:
    * **domain** `{string}` cookie的域名
    * **path** `{string}` cookie路径
    * **secure** `{boolean}` cookie是否安全传输
* _return_ `{void}`

```js
// 删除键名为 mycookie 的 cookie
Cookie.remove('mycookie');

// 删除 `baidu.com` 域下，路径为 `/` 的键名为 `othercookie` 的 cookie
Cookie.remove('othercookie', {domain: 'baidu.com', path: '/'});
```