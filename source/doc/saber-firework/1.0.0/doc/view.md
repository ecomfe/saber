layout: doc
comments: false
date: 2014-10-3 8:12:33
title: View
repo: saber-firework
ref: 1.0.0
---

页面视图管理

* [Configure](#configure)
* [Properties](#properties)
* [Methods](#methods)
* [Events](#events)

## Configure

`saber-firework`通过配置信息构建View对象，配置信息为`Object`类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，默认为[saber-firework/View](../src/View.js)
* **template** `{string|Array.<string>}` 模版字符串，具体请参考[etpl的模版语法](https://github.com/ecomfe/etpl/blob/master/doc/syntax.html)
* **templateMainTarget** `{string=}` 模版主target名称，用于初始渲染视图，如果不设置则默认模版中的第一个target
* **className** `{string=}` 容器元素附加的className
* **events** `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，`this`指针指向View实例
* **domEvents** `{Object=}` dom事件配置，`key`为事件名称＋元素选择器(以':'分割)，`value`为事件回调函数，比如`{ 'click: .add-btn' : function (el, e) {...} }`。回调函数的第一个参数为事件绑定的Dom元素，第二个参数为事件参数(`event`)，`this`指针指向View实例

除以上固有配置项外，还可通过给配置信息添加自定义属性的方式添加view的实例方法，实例方法的`this`指针指向当前的View实例

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

模版引擎，具体请参考[etpl的API说明](https://github.com/ecomfe/etpl/blob/master/doc/api.html)

## Methods

**注：**可用通过配置信息重载View已有的实例方法，达到更进一步的View自定义，重载前请参考原始方法的实现

### query(selector[, context])

查找视图中的DOM元素

* **selector** `{string}` 元素选择器
* **context** `{string=}` 上下文，可选，默认为View的主元素
* _return_ `{?HTMLElement}` DOM元素

### queryAll(selector[, context])

查找视图中所有符合的DOM元素

* **selector** `{string}` 元素选择器
* **context** `{string=}` 上下文，可选，默认为View的主元素
* _return_ `{Array.<HTMLElement>}` DOM元素数组

### redirect(url[, query[, options]])

页面跳转

* **url** `{string}` url
* **query** `{Object=}` 查询条件
* **options** `{options=}` 跳转参数
    * **force** `{boolean=}` 强制跳转（相同的URL默认不跳转）
    * **noCache** `{boolean=}` 禁用页面的cache

### addDomEvent(ele, type[, selector], fn)

注册DOM事件

* **ele** `{HTMLElement}` DOM元素
* **type** `{string}` 事件名称
* **selector** `{string=}` 元素选择器，可选
* **fn** `{Function}` 事件处理函数，`this`指向View实例

### removeDomEvent(ele, type[, selector], fn)

卸载DOM事件

* **ele** `{HTMLElement}` DOM元素
* **type** `{string}` 事件名称
* **selector** `{string=}` 元素选择器，可选
* **fn** `{Function}` 事件处理函数

## Events

### beforerender

渲染前事件，事件参数是即将用于视图渲染的数据

* **data** `{Object}` 渲染数据

### afterrender

渲染后事件，事件参数是用于视图渲染的数据

* **data** `{Object}` 渲染数据

### ready

就绪事件，此时页面已完成渲染，可在此事件中进行注册DOM事件等操作

### leave

离开事件

### wakeup

唤醒事件，进入缓存的页面时触发，此情况下不会触发`ready`事件

* **data** `{Object}` 唤醒数据

### sleep 

休眠事件，离开缓存的页面时触发，此情况下不会触发`sleep`事件