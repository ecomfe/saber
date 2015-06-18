layout: doc
comments: false
date: 2015-5-18 4:11:26
title: saber-log
repo: saber-log
ref: 0.1.0
---

saber框架监控日志模块

## Usage

通过`edp`引入模块：

    edp import saber-log

## API

### .setLogUrl( url )

设置日志发送域名。

### .setDefaultLog( options )

设置日志默认参数。这些参数在每次发送时都会被带上，因此常用来设置基本不变的值，例如和应用相关的信息。

常用值有：

* `options.fr` `string` 区分一个产品线下不同的日志来源，如PC端，移动端等等
* `options.pid` `string|number` 区分日志id，用以区别不同产品线
* `options.pvid` `string` 记录一次pv的唯一id，一个页面上所有pvid相同，通常取页面载入时的时间戳或由后端提供
* `options.page` `string` 当前页面url
* `options.refer` `string` 当前页面访问的referer

### .sendLog( options )

手动发送一条日志。参数`options`会与和`.setDefaultLog`的参数合并，如果相同以`.sendLog`为准。  
常用来发送pv日志。点击日志由属性`data-log`,`data-click`等自行识别发送，不需要手动调用发送。

### .on()

为当前document.body绑定点击(`click`)事件，用以自行识别并发送日志。  
对于普通应用，在新页面载入时调用一次。  
对于单页应用(如`saber`)，全局调用一次即可。  

### .un()

为当前document.body解绑点击(`click`)事件。

## Test

启动测试服务器

    $ node test/server.js

默认端口为`8848`，可以通过参数修改：

    $ node test/server.js 8080

访问`http://localhost:8848/test/runner.html`


,

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)