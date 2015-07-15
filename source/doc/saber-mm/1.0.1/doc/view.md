layout: doc
comments: false
date: 2015-6-15 2:16:59
title: View
repo: saber-mm
ref: 1.0.1
---

视图管理对象

* [Configure](#configure)
* [Properties](#properties)
* [Methods](#methods)
* [Events](#events)

## Configure

`saber-mm` 通过配置信息构建 View 对象，配置信息为 `Object` 类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，可以通过自定义该配置项来改变基类
* **template** `{string|Array.<string>}` 模版字符串，具体请参考 [etpl 的模版语法](https://github.com/ecomfe/etpl/blob/master/doc/syntax.html)
* **templateMainTarget** `{string=}` 模版主 [target](https://github.com/ecomfe/etpl/blob/master/doc/syntax.md#target) 名称，用于初始渲染视图，如果不设置则默认为模版中的第一个 target
* **className** `{string=}` 容器元素附加的className
* **events** `{Object=}` 事件配置，`key` 为事件名称，`value` 为事件回调函数，`this` 指针指向 View 实例
* **domEvents** `{Object=}` DOM 事件配置，`key` 为事件名称＋元素选择器(以':'分割)，`value` 为事件回调函数，比如 `{ 'click: .add-btn' : function (el, e) {...} }` 。回调函数的第一个参数为事件绑定的 DOM 元素，第二个参数为事件参数(`event`)，`this` 指针指向View实例

除以上固有配置项外，还可通过给配置信息添加自定义属性的方式添加 View 的实例方法，实例方法的 `this` 指针指向当前的 View 实例

配置实例如下：

```js
{
    className: 'test',
    template: 'hello ${name}',
    domEvents: {
        // 绑定.btn元素的click事件
        'click:.btn': function (ele, e) {
            // do something
        }
    }
    // 自定义add方法
    add: function (name) {
        this.query('.placehodler').innerHTML = name;
    }
}
```

## Properties

### main

容器元素

`{HTMLElement}`

### template

模版引擎对象，可以通过该对象的 `render` 方法进行模版的渲染，具体请参考 [etpl 的API说明](https://github.com/ecomfe/etpl/blob/master/doc/api.html)

## Methods

**注：**可用通过配置信息重载 View 已有的实例方法，达到更进一步的自定义，重载前请参考原始方法的实现

### query(selector[, context])

查找视图中的 DOM 元素

* **selector** `{string}` 元素选择器
* **context** `{string=}` 上下文，可选，默认为 View 的容器元素
* _return_ `{?HTMLElement}` DOM 元素

### queryAll(selector[, context])

查找视图中所有符合的 DOM 元素

* **selector** `{string}` 元素选择器
* **context** `{string=}` 上下文，可选，默认为 View 的容器元素
* _return_ `{Array.<HTMLElement>}` DOM 元素数组

### redirect(url[, query[, options]])

页面跳转，实际功能是由 [全局配置项](../README.md#configoptions) 中 router 提供的

* **url** `{string}` url
* **query** `{Object=}` 查询条件
* **options** `{options=}` 跳转参数
    * **force** `{boolean=}` 强制跳转（相同的 URL 默认不跳转）
    * **noCache** `{boolean=}` 禁用页面的 cache

### addDomEvent(ele, type[, selector], fn)

注册DOM事件

* **ele** `{HTMLElement}` DOM 元素
* **type** `{string}` 事件名称
* **selector** `{string=}` 元素选择器，可选
* **fn** `{Function}` 事件处理函数，`this` 指向 View 实例

### removeDomEvent(ele, type[, selector], fn)

卸载DOM事件

* **ele** `{HTMLElement}` DOM 元素
* **type** `{string}` 事件名称
* **selector** `{string=}` 元素选择器，可选
* **fn** `{Function}` 事件处理函数

## Events

### init

初始化事件，在创建 View 实例时触发

### beforerender

渲染前事件，事件参数是即将用于视图渲染的数据

* **data** `{Object}` 渲染数据

### afterrender

渲染后事件，事件参数是用于视图渲染的数据

* **data** `{Object}` 渲染数据

### ready

就绪事件，此时页面已完成渲染，可在此事件中进行 DOM 事件注册等操作

### leave

离开事件

### revived

唤醒事件，进入缓存的页面时触发，对应于正常情况的 [ready](#ready) 事件

### sleep 

休眠事件，离开缓存的页面时触发，对应于正常情况的 [leave](#leave) 事件