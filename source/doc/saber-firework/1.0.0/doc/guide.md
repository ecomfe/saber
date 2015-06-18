layout: doc
comments: false
date: 2015-5-18 4:10:43
title: Guide
repo: saber-firework
ref: 1.0.0
---

## Step 1 配置路由信息

使用`saber-firework`的第一步是进行配置，首先新建`app.js`作为应用的主框架文件，在其中使用`.load()`方法加载路由配置

```js
/**
 * @file app
 */
define(function (require) {

    var app = require('saber-firework');

    app.load([
        // 配置首页
        {path: '/', action: require('./index')}
    ]);

});
```

`.load()`参数支持`Object`或者`Array.<Object>`，配置的关键是`path`与`action`字段，分别表示action的路径与action的配置参数。

路径配置支持`RESTful`风格（`{ path: '/detail/:id', action: require('./detail') }`）与正则表达式（具体请参考了[saber-router](https://github.com/ecomfe/saber-router)）

更多请参考[路由信息配置](route.html)

action配置参数较多,同时为了便于复用，一般都作为一个模块独立存在，此处使用`require('./index')`的方式引用

配置了首页的路由信息，下一步就是配置首页了

## Step 2 配置页面信息

`saber-firework`按照`MVP`的思想将一个页面划分为三个模块：`action`、`view`与`model`，分别控制页面的整体逻辑、视图逻辑、数据逻辑，`action`可以使用自己的`view`与`model`属性引用对应的`view`与`model`对象，`view`与`model`通过事件通知`action`，但`view`与`model`之间不能直接通信。

上一步中配置了`/index`的路由信息，这里添加一个`index.js`来配置对应的Action信息

### Action配置

```js
/**
 * @file index
 */

 define(function (require) {

    var config = {};

    // 配置model
    config.model = require('./indexModel');
    // 配置view
    config.view = require('./indexView');

    return config;

 });
```

action配置中最关键的就是`model`与`view`字段，表明action对应的model与view配置信息，基于与action配置相同的考虑，独立模块书写，使用`require('./xx')`方式引用

更多请参考[Action配置说明](action.md#configure)

接下来新建`indexModel.js`配置对应的`model`

### Model配置

```js
/**
 * @file index model
 */

 define(function (require) {

    var Resolver = require('saber-promise');

    var config = {};

    config.fetch = function () {
        return Resolver.resolved({name: 'saber'});
    };

    return config;

 });
```

关键方法是`.fetch()`，页面会通过它发起数据初始化请求并将请求的返回数据作为视图的渲染数据。

`.fetch()`需要返回一个`Promise`对象，实例中直接使用了`Resolver.resolved()`构造了一个静态数据并返回，实际项目中通常是使用[saber-ajax](https://github.com/ecomfe/saber-ajax)进行异步请求，并返回对应的`Promise`对象

更多请参考[Model配置说明](model.md#configure)

搞定了model接着来新建`indexView.js`配置对应的`view`

### View配置

```js
/**
 * @file index view
 */

define(function () {

    var config = {};

    config.template = 'hello ${name}';

    return config;
});
```

关键配置是`template`模版字符串与`templateMainTarget`视图的主模版名称

在页面加载时框架会用`model.fetch()`获取的数据来渲染`templateMainTarget`指定的模版完成页面的渲染

更多请参考[View配置说明](view.md#configure)

## Step 3 启动应用

搞定了所有配置，接下来就该启动应用啦，继续编辑之前的`app.js`，添加启动逻辑

```js
/**
 * @file app
 */
define(function (require) {

    var firework = require('saber-firework');

    firework.load([
        // 配置首页
        {path: '/', action: require('./index')}
    ]);

	// Engine start ~
    firework.start('viewport');
});
```

启动应用直接`.start()`，第一个参数是主区域DOM元素的id。打完收工，启动server看效果～

`.start()`的第二个参数时全配配置参数，具体请参考[全配置说明](config.html)

完整代码请参见[demo/guide](https://github.com/ecomfe/saber-firework/tree/master/demo/guide)