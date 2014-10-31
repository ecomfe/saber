layout: doc
comments: false
date: 2014-9-31 2:47:46
repo: saber-ajax
ref: 0.1.3
---

# saber-ajax [![Build Status](https://travis-ci.org/ecomfe/saber-ajax.png)](https://travis-ci.org/ecomfe/saber-ajax)

适用于移动端、promise风格的ajax封装，支持[XMLHttpRequest2](http://www.w3.org/TR/XMLHttpRequest2/)

<del>以<a href="http://baike.baidu.com/view/8420590.htm" target="_blank">吾王</a>之名~</del>

## Usage

通过`edp`引入模块

    $ edp import saber-ajax

```javascript
var request = ajax.get(url);
request.then(
    // 请求完成
    // data为responseText
    function (data) {
        renderData(data);
    },

    // 请求失败
    // error参数可能为以下三种情况
    // * 请求超时: 'timeout'
    // * 请求中止: 'abort'
    // * 其它情况: HTTP Status Code
    function (error) {
        showError(error);
    }
);
```

## API

### get( url )

发起异步GET请求，返回`Request`对象

### post( url, data )

发起异步POST请求，返回`Request`对象

`data` 请求的参数，可以为以下类型：

* `string` 不会对参数进行任何处理，需要注意自行进行`encodeURIComponent`处理
* `Object` 会自动进行URL参数序列化并对各`value`进行`encodeURIComponent`处理，**注意** 暂时只支持单一层级序列化，不支持多层级，比如`{date: {begin: '2012', end: '2013'}}`


### request( url, options )

发起请求，`options`配置项参数为可选

* `options.method` `string` 请求方式，默认为`'GET'`
* `options.data` `string|Object` 请求参数，支持[FormData](http://www.w3.org/TR/XMLHttpRequest2/#interface-formdata)
* `options.stringify` `boolean` 是否自动序列化请求参数，默认为`true`
* `options.async` `boolean` 是否异步请求，默认为`true`
* `options.headers` `Object` 需要额外设置的请求头
* `options.timeout` `number` 请求超时时间，单位ms，只有异步请求才有效
* `options.username` `string` 用户名
* `options.password` `string` 密码
* `options.responseType` `string` 返回的[数据类型](http://www.w3.org/TR/XMLHttpRequest2/#xmlhttprequestresponsetype)，默认为空。`text`与`arraybuffer`各浏览器的支持力度较好，其它选项使用前请多多思量~

### Requester

`ajax.get`，`ajax.post`，`ajax.request`的返回参数，对`XMLHttpReqeust`的封装，实现了[Promise](https://github.com/ecomfe/saber-promise)接口

#### Requester.url

请求地址

#### Requester.getXHR()

获取原始的`XMLHttpRequest`对象

#### Requester.then( onFulfill, onReject )

请参考[Promise.then](https://github.com/ecomfe/saber-promise)

* `onFulfill` `Function` 请求成功处理
* `onReject` `Function` 请求失败处理 第一个参数有三种取值：

* `'timeout'` `string` 请求超时
* `'abort'` `string` 请求中止
* `HTTP Status Code`: `number` 其它情况为响应请求的HTTP状态码

#### Requester.success( success )

* `success` `Function` 请求成功处理 相当于`.then(success)`

#### Requester.fail( fail )

* `fail` `Function` 请求失败处理 相当于`.then(null, fail)`

#### Requester.ensure( callback )

* `callback` `Function` 请求完成处理，不论请求是否成功，相当于`.then(callback, callback)`

#### Requester.abort()

中止请求

## Test

启动测试服务器

    $ node test/server.js

默认端口为`8848`，可以通过参数修改：

    $ node test/server.js 8080

访问`http://localhost:8848/test/runner.html`

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
