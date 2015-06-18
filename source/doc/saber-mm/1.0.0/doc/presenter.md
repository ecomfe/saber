layout: doc
comments: false
date: 2015-5-18 4:34:24
title: Presenter
repo: saber-mm
ref: 1.0.0
---

页面管理对象

* [Configure](#configure)
* [Properties](#properties)
* [Methods](#methods)
* [Events](#events)

## Configure

`saber-mm` 通过配置信息构建 Presenter 对象，配置信息为 `Object` 类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，可以通过自定义该配置项来改变基类
* **model** `{Object}` model配置信息，具体请参考 [Model 配置说明](model.md#configure)
* **view** `{Object}` view配置信息，具体请参考 [Presenter 配置说明](view.md#configure)
* **events** `{Object=}` 事件配置，`key` 为事件名称，`value` 为事件回调函数，支持直接注册 `view` 或者 `model` 的事件比如 `{ 'view:add': function () {...} }`，事件回调函数中的 `this` 指针指向当前的 Presenter 实例

除以上固有配置项外，还可通过给配置信息添加自定义属性的方式添加 Presenter 的实例方法，实例方法的 `this` 指针指向当前的 Presenter 实例

配置实例如下：

```js
{
    model: require('./model'),
    view: require('./view'),
    events: {
        'ready': function () {
            // ready事件处理
        },
        'view:success': function () {
            // 处理view的success事件
        }
    },
    // 自定义方法 add
    add: function (name) {
        this.view.add(name);
    }
}
```

## Properties

### view

[View对象](view.html)

`{View}`

### model

[Model对象](model.html)

`{Model}`

### path

页面路径

`{string}`

### options

来到此页面的跳转参数，详见[.redirect()方法](#redirecturl-query-options)

`{Object}`

## Methods

**注：**可用通过配置信息重载 Presenter 已有的实例方法，达到更进一步的自定义，重载前请参考原始方法的实现

### .redirect(url[, query[, options]])

页面跳转，实际功能是由 [全局配置项](../README.md#configoptions) 中 router 提供的

* **url** `{string}` url
* **query** `{Object=}` 查询条件
* **options** `{options=}` 跳转参数
    * **force** `{boolean=}` 强制跳转（相同的 URL 默认不跳转）
    * **noCache** `{boolean=}` 禁用页面的 cache

## Events

### init

初始化事件，在创建 Presenter 实例时触发

### enter

加载事件，在进行数据初始化请求、渲染页面前触发

### ready

加载完成事件，在完成页面渲染、转场操作后触发

### wakeup

唤醒事件，如果路由信息配置了缓存，则再次进入presenter时触发，对应于正常流程的 [enter](#enter) 事件

### revived

唤醒完成事件，对应于正常流程的 [ready](#ready) 事件

### complete

就绪事件，加载完成或者唤醒后触发，业务逻辑的处理的主要入口

### leave

离开事件，页面切换时触发

### sleep

休眠事件，如果路由信息配置了缓存，在presenter切换时触发，对应于正常流程的 [leave](#leave) 事件