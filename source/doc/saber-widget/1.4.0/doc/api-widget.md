layout: doc
comments: false
date: 2015-5-18 4:13:21
title: Widget
repo: saber-widget
ref: 1.4.0
---

UI控件的基类。提供了`控件`的如生命周期、状态控制、属性操作、DOM事件等等一系列通用功能。

**控件基类，禁止实例化**

## Constructor

```js
new Widget({
    id: 'id',
    main: document.getElementById('dom')
});
```

* **options** `{Object}` 初始化配置参数
    * **id** `{string}` 控件标识
    * **main** `{HTMLElement}` 控件主元素

## API

### Methods

#### disable()

禁用控件

* _return_ `{Widget}`

#### disablePlugin(pluginName) 

禁用插件

* **pluginName** `{string}` 插件名称
* _return_ `{Widget}`

#### dispose()

销毁控件

#### enable() 

启用控件

* _return_ `{Widget}` 

#### enablePlugin(pluginName[, optionNameopt])

激活插件

* **pluginName** `{string}` 插件名称
* **optionName** `{string}` 插件初始化配置名
* _return_ `{Widget}` 


#### plugin(pluginName)

获取控件激活的指定插件

* **pluginName** `{string}` 插件名称
* _return_ `{Plugin}` 

### Events

* **event** `{Object}` 事件封装
    * **type** `{string}` 事件类型
    * **target** `{Widget}` 触发事件的控件对象

#### afterdispose

#### afterrender

#### beforedispose

#### beforerender

#### disable

#### enable

#### init