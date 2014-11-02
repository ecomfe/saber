layout: doc
comments: false
date: 2014-10-2 10:37:0
repo: rider
ref: 0.3.2
---

# 在 connect/express 环境使用

## 安装

`rider` 是一个 `npm` 包，可以在项目中直接安装：

    npm install rider --save

依赖信息会自动保存在项目的 `package.json` 中。

## 配置

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
