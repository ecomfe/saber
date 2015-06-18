layout: doc
comments: false
date: 2015-5-18 7:53:30
title: Rebas
repo: rebas
ref: 0.4.0
---

[![NPM version](https://img.shields.io/npm/v/rebas.svg?style=flat-square)](https://npmjs.org/package/rebas) [![Build Status](https://img.shields.io/travis/ecomfe/rebas.svg?style=flat-square)](https://travis-ci.org/ecomfe/rebas) [![License](https://img.shields.io/npm/l/rebas.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

Node runtime for [Saber](https://github.com/ecomfe/saber)，base on [Express](http://expressjs.com)

[Saber](https://github.com/ecomfe/saber) 的 node 运行环境，让您在享受 SPA 高內聚、低耦合开发方式的同时拥有优秀的首屏呈现速度与良好的 SEO 。

## How

Rebas 使首屏渲染由服务器端完成，极大地降低了 SPA 首屏的白屏时间并解决了 SEO 问题。借助于 node ，服务器端的渲染逻辑不用额外开发，只需要对现有的 Saber 应用进行小幅修改就能让已有的逻辑同时运行在客户端与服务器端。

Saber 所有的基础组件都进行了同构升级，确保能同时运行在客户端与服务器端。对于业务开发只需聚焦业务逻辑，不用特别关注运行平台，剩下的一切就交给 Saber 与 Rebas 吧～

## Usage

```js
/**
 * @fila app.js 应用启动脚本
 */
var app = require('rebas');

// 加载路由配置
app.load(require('./lib/config'));

// 启动服务
app.start();
```

```sh
$ node app.js
```

更多详情请参考 [Getting start](doc/start.html) ，从零开始快速构建同构应用

## API

* [Methods](#methods)
* [Config](#config)

### Methods

#### start(port, options)

启动服务

* **port** `{number=}` 端口号，默认为 `8000`
* **options** `{Object=}` 配置项
    * **template** `{string=}` 公共模版
    * **templateConfig** `{Object=}` 模版引擎配置信息，`rebas` 使用强复用、灵活、高性能的 [etpl](http://ecomfe.github.io/etpl/) 模版引擎，具体配置请参考 [etpl 配置项](https://github.com/ecomfe/etpl/blob/master/doc/config.html)
    * **templateData** `{Object=}` 全局模版数据
    * **indexFile** `{string=}` 主页面模版文件路径，默认为根目录下的 `index.html`
    * **Presenter** `{Function=}` 自定义 Presenter 基类
    * **View** `{Function=}` 自定义 View 基类
    * **Model** `{Function=}` 自定义 Model 基类

`rebas` 由 [saber-mm](https://github.com/ecomfe/saber-mm) 提供 `MVP` 的实现，`Presenter`、`View`、`Model` 相关的配置与 API 请参考 [saber-mm 的说明文档](https://github.com/ecomfe/saber-mm#classes)

#### load(routes)

加载路由配置

* **routes** `{Object|Array.<Object>}` 路由配置信息，必须包含以下两个必填字段：
    * **path** `{string|RegExp}` 路径，必须是以 `/` 开头的有效路径字符串或者正则表达式，字符串可以包含以`:`开头的参数化路径，例如：`/detail/:id`
    * **action** `{string|Object}` Presenter 配置信息，如果是字符串则表示对应文件的路径（为啥叫`action`而不是`presenter`，嗯... 历史原因...）

#### get(name)

获取存储在 `配置文件夹` 下的 `JSON` 配置信息，`配置文件夹` 的默认路径为 `config`

* **name** `{string}` 配置文件名称，不包含 `.json` 后缀名
* _return_ `{*}` 配置信息

例如需要获取 `config/app.json` 文件中的配置信息可以通过如下方式获得：

```js
var app = require('rebas');

// 获取 `config/app.json` 中的配置信息
app.get('app');
```

可以通过添加应用启动的参数来修改默认的 `配置文件夹` 路径，例如：

```sh
$ node app.js config-dev
```

此时通过 `get` 获取的配置信息就来源于 `config-dev` 文件夹，可以通过此种方式在多种不同环境、不同配置下自由切换

#### before(middleware)

添加在执行页面逻辑前执行的中间件

* **middleware** `{Function}` 中间件，`rebas` 基于 [express](http://expressjs.com/) 提供 Web 服务，兼容 [express middleware](http://expressjs.com/guide/using-middleware.html)，具体请参考 [express API](http://expressjs.com/4x/api.html#app.use)

#### after(middleware)

添加在页面逻辑执行完成后执行的中间件

* **middleware** `{Function}` 中间件

#### use(plugin)

使用插件

* **plugin** `{Object}` 插件对象，插件必须包含 `rebas` 方法用于初始化，具体的方法说明如下：
    * **rebas** `{function(app, ...*)}` 插件初始化方法，第一个参数为 `rebas` 实例，其余参数为调用 `use` 方法时传入的剩余参数

#### setSyncData(name, value)

设置需要前后端同步的数据，设置后前端的运行框架 [saber-firework](https://github.com/ecomfe/saber-firework) 可以通过其 API 获取到对应的数据

* **name** `{string}` 数据名称
* **value** `{*}` 数据值，建议为 `number`、`string` 类型，或者其它任何可以被 `JSON.stringify` 方法序列化的数据类型

### Config

以下所有的配置信息都是以 `JSON` 文件的形式存储在 `配置文件夹` 下，`配置文件夹` 的默认路径为 `config`

#### log

日志配置文件 `log.json` ，`rebas` 使用 [log4js-node](https://github.com/nomiddlename/log4js-node) 提供日志服务，相关配置信息更详细的说明请参考 [log4js-node 的配置说明](https://github.com/nomiddlename/log4js-node/wiki/Appenders)，默认的配置信息如下：

```js
{
    // 是否将日志输出到标准输出(stdout)
    console: false,
    // 日志等级
    level: 'INFO',
    // 日志类型，默认为按时间分割的日志文件
    type: 'dateFile',
    // 日志默认存储在 `log` 目录下，名为 `rebas.log`
    filename: 'log/rebas.log',
    // 日志以小时级别切分
    patter: '-MM-dd-hh',
    alwaysIncludePattern: false,
    // 日志输出格式
    layout: {
        type: 'pattern',
        pattern: '[%d] [%x{pid}] [%p] - %m',
        tokens: {
            pid: process.pid
        }
    }
}
```