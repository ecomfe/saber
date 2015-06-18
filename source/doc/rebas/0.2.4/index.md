layout: doc
comments: false
date: 2015-5-18 4:34:40
title: Rebas
repo: rebas
ref: 0.2.4
---

Node framework for [Saber](https://github.com/ecomfe/saber)，base on [Express](http://expressjs.com)

## Installation

```sh
$ npm install rebas
```

## Usage

```js
var rebas = require('rebas');

var server = rebas(function (app) {
    // 添加自定义处理器
    ...
});

// 启动服务器
server.start();
```

项目目录结构：
```
├──┬  config/ // server配置文件目录
│  ├───  app.json // 应用配置文件
│  ├───  rebas.json // Rebas框架配置文件
├───  dep/  // 前端第三方依赖
├───  lib/  // server开发工作目录
├───  logs/  // 日志文件
├───  node_modules/
├──┬  route/ // 路由配置文件件
│  ├───  config.json // 路由配置文件
├───  src/ // 前端开发工作目录
├──┬  tpl/ // 模版文件目录
│  ├───  config.json // 模版配置文件
├───  app.js // 服务器主入口
├───  edp-build-config.js
├───  edp-webserver-config.js
├───  index.html // 主框架页面
├───  module.conf
├───  package.json
```

## API

* [Configure](#configure)
* [Methods](#methods)
* [Classes](#classes)

### Configure

#### config/app.json

应用配置文件，其中的信息会做为`request`的`appConfig`属性

#### config/rebas.json

框架配置文件，可省略，默认的配置如下：

```js
{
    "port": 8000, // 服务器端口号
    "cluster": 0, // worker进程数，可以直接写'max'，自动取最大值
    "route": "route", // 路由配置文件目录
    "template": "tpl", // 模版文件目录
    "templateCommon": "tpl/common", // 公共模版文件目录
    "action": "lib" // server开发工作目录
}
```

#### 路由配置

每个`JSON`文件存储`Array`类型的一个或者多个路由信息，每项路由信息为`Object`类型，必须包含以下字段：

* **path** `{string}` 路径
* **action** `{string}` Action配置信息文件路径（相对于`lib`目录而言）

例如以下的配置信息

```js
{"path": "/", "action": "index"}
```

表示处理`/`请求的Action配置文件为`lib/index.js`

#### Action配置

Action配置文件中可配置一个或者多个HTTP Methods对应的处理函数，目前支持的HTTP Methods有`GET`、`POST`、`PUT`、`HEAD`、`DELETE`、`OPTIONS`

每个HTTP Method对应的配置可以是一个`function`或者`Array<function>`，比如：

```js
// 注意 这里代表HTTP Method的方法名是小写哟～
exports.get = function (req, res, next) {
    // do business
    ...
};
```
其中处理函数的参数描述如下：

* **req** `{Request}` [HTTP请求对象](doc/request.html)
* **res** `{Response}` [HTTP响应对象](doc/response.html)
* **next** `{function}` 执行下一个处理器

#### 主框架页面

位于根目录的`index.html`，标准的HTML文件。使用占位符`<!-- rebas:xxx -->`方便渲染实际页面时插入动态数据。其中固有的占位符是`<!-- rebas:content -->`，表示后续渲染内容的插入位置，比如：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Startup News</title>

    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" href="/src/common/app.css">
    <script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/1-8-6/esl.js"></script>

    <script>
        // AMD Loader Configure
        require.config({
            ...
        });
    </script>
</head>
<body>
    <div id="viewport">
        <!-- 默认的内容占位符 后续动态渲染的页面会插入此处 -->
        <!-- rebas: content -->
    </div>
    <script>
        // 启动前端代码
        require(['app'], function (app) {
            app.init();
        });
    </script>
</body>
</html>
```

### Methods

#### rebas(fn)

创建[Server实例](doc/server.html)

* **fn** `{function(App)}` server配置函数，参数是[App实例](doc/app.html)
* _return_ `{Server}` [Server实例](doc/server.html)

### Classes

* [Server](doc/server.html)
* [App](doc/app.html)