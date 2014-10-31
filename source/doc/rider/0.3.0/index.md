layout: doc
comments: false
date: 2014-9-31 2:48:36
title: rider
repo: rider
ref: 0.3.0
---

`rider` 是一个基于 [`stylus`](https://github.com/LearnBoost/stylus)、专注于 **移动 Web** 的 CSS 样式库。

配合 edp 使用
---

`edp` 的用户请移步这里 [`edp-provider-rider`](https://github.com/ecomfe/edp-provider-rider)，查看安装与配置说明。

安装
---

`rider` 是一个 `npm` 包，可以在项目中直接安装：

    npm install rider --save

依赖信息会自动保存在项目的 `package.json` 中。

配置
---

`rider` 是一个标准的 `stylus` 插件，可以方便的与 `connect`/`express` 等框架结合：

```js
var connect = require('connect');
var stylus = require('stylus');
var rider = require('rider');

var server = connect();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(rider());
}

server.use(stylus.middleware({
    src: __dirname,
    compile: compile
}));
```

`rider` 是 **无侵入** 风格的 CSS 库，加载后如不调用相关功能，不会生成任何 CSS 代码。
默认情况下，它会 **隐式加载** 整个 CSS 库，但我们也提供了配置项关掉这个功能：

```js
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(rider({
            implicit: false
        }));
}
```

如果你这么做了，那就需要在使用时手动加载 `rider`：

```stylus
@require 'rider'

initialize()

// etc...
```

DEMO
---

发布至 `npm` 的版本是不包含 `demo` 和 `test` 的，所以需要先将仓库 clone 到本地。

在根目录执行：

```shell
$ node demo/server.js
```

访问网址：

    http://localhost:8848