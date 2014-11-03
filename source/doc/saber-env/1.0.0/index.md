layout: doc
comments: false
date: 2014-10-3 3:41:47
title: saber-env
repo: saber-env
ref: 1.0.0
---

移动端浏览器环境检测

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-env
```

## Usage

```js
require('saber-env', function(env) {
    // detect os info
    console.info(env.os);

    // detect browser info
    console.info(env.browser);
});
```

返回值结构：

```js
{
    os: {
        phone: true,
        tablet: false,
        ios: true,
        iphone: true,
        version: '7.0.5'
        ...
    },

    browser: {
        chrome: true,
        safari: true,
        version: '31.0'
        ...
    }
}
```

* _return_ `{Object}`
    * **os** `{Object}` 系统信息对象
    * **browser** `{Object}` 浏览器信息对象

## API

### Methods

#### os

系统信息对象，包含的可能项：

+ `version`

`通用平台类型`

+ `phone`
+ `tablet`

`特定系统类型`

+ `ios`
+ `android`
+ `wp`
+ `blackberry`
+ `bb10`
+ `rimtabletos`

`特定平台类型`

+ `iphone`
+ `ipod`
+ `ipad`
+ `touchpad`
+ `kindle`
+ `webos`


#### browser

浏览器信息对象，支持的返回值：

+ `version`

`通用类型`

+ `chrome`
+ `safari`
+ `firefox`
+ `webview`
+ `ie`
+ `silk`
+ `playbook`

`国产加壳类型`，检测值为以下列表时`version`取值为`浏览器壳`的版本号

+ `wechat`
+ `baidu`
+ `qq`
+ `uc`
+ `sogou`
+ `xiaomi`
+ `liebao`
+ `mercury`

`特殊类型`

+ `standalone` 浏览器全屏状态

### Optional Modules

* [Media](./doc/media.html)
* [Connection](./doc/connection.html)