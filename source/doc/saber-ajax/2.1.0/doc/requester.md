layout: doc
comments: false
date: 2015-6-15 2:0:11
title: Requester
repo: saber-ajax
ref: 2.1.0
---

请求对象，`ajax.get`，`ajax.post`，`ajax.request` 等方法的返回参数，对异步请求对象的封装，实现了 [Promise](https://github.com/ecomfe/saber-promise) 接口

* [Properties](#properties)
* [Methods](#methods)

## Properties

### url

请求地址

`{string}`

### xhr

原始的异步请求对象，对于浏览器端而言是 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)，而 node 环境对应 [ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest)

`{Object}`

### handleSuccess

是否已处理请求成功的情况

`{boolean}`

### handleFail

是否已处理请求失败的情况

`{boolean}`

## Methods

### then(onFulfill, onReject)

添加请求成功和失败的处理函数，来源于 [Promise.then](https://github.com/ecomfe/saber-promise/blob/master/doc/promise.md#thenonfulfilled-onrejected)

* **onFulfill** `{Function=}` 请求成功处理，回调参数为请求的返回结果
* **onReject** `{Function=}` 请求失败处理，回调参数为错误信息，有四种取值：
    * `'error'` `{string}` 未知错误
    * `'timeout'` `{string}` 请求超时
    * `'abort'` `{string}` 请求中止
    * `HTTP Status Code` `{number}` 其它情况为请求返回的 HTTP 状态码

### success(success)

添加请求成功处理，相当于 `then(success)`

* **success** `{Function}` 成功处理函数

### fail(fail)

添加请求失败处理 相当于 `then(null, fail)`

* **fail** `{Function}` 失败处理函数

### ensure(callback)

添加请求完成处理函数，不论请求是成功还是失败都会被调用，相当于 `then(callback, callback)`

* **callback** `{Function}` 完成处理函数

### abort()

中止请求