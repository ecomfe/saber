layout: doc
comments: false
date: 2014-9-31 2:55:4
repo: saber-firework
ref: 0.4.2
---

# View

## View 配置信息

`Object`类型，包含以下字段：

* `template` `{string|Array.<string>}` 模版字符串
* `templateMainTarget` `{string}` 模版主target名称 用于初始化视图，注意模版引擎是全局单例的，所以target也是全局唯一的，target重复会导致模版编译错误
* `constructor` `{Object=}` 构造函数，默认为`saber-firework/View`
* `className` `{string=}` 容器元素附加的className
* `events` `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，`this`指针指向View实例
* `domEvents` `{Object=}` dom事件配置，`key`为事件名称＋元素选择器(以':'分割)，`value`为事件回调函数，比如`{ 'click: .add-btn' : function (el, e) {...} }`。回调函数的第一个参数为事件绑定的Dom元素，第二个参数为事件参数(`event`)，`this`指针指向View实例


## View 实例

可通过给配置信息添加自定义属性的方式添加View的实例方法，实例方法的`this`指针指向当前的View实例，比如：

```javascript
{
    template: '<!--target: main -->hello ${name}',
    templateMainTarget: 'main',
    // 自定义add方法
    add: function (name) {
        this.query('.placehodler').innerHTML = name;
    }
}
```

### 属性

* `main` `{HTMLElement}` 容器元素
* `template` `Object` 模版引擎，具体请参考[etpl](https://github.com/ecomfe/etpl)

### 事件

* `beforerender` 渲染前事件，回调函数的第一个参数是视图渲染数据（可修改）
* `ready` 就绪事件，可在此事件中进行注册DOM事件等操作
* `wakeup` 唤醒事件
* `sleep` 休眠事件
* `leave` 离开事件

### 方法

#### .query(selector, context)

查找视图中的DOM元素

* `selector` `{string}` 元素选择器
* `context` `{string=}` 上下文，可选，默认为View的主元素
* `{HTMLElement}` 返回DOM元素

#### .queryAll(selector, context)

查找视图中所有符合的DOM元素

* `selector` `{string}` 元素选择器
* `context` `{string=}` 上下文，可选，默认为View的主元素
* `{Array.<HTMLElement>}` 返回DOM元素数组

#### .addDomEvent(ele, type, selector, fn)

注册DOM事件

* `ele` `{HTMLElement}` DOM元素
* `type` `{string}` 事件名称
* `selector` `{string=}` 元素选择器，可选
* `fn` `{Function(ele, e)}` 事件处理函数，`this`指向View实例

#### .removeDomEvent(ele, type, selector, fn)

卸载DOM事件

* `ele` `{HTMLElement}` DOM元素
* `type` `{string}` 事件名称
* `selector` `{string=}` 元素选择器，可选
* `fn` `{Function(ele, e)}` 事件处理函数

#### .attachEvent(ele, type, selector, fn)

__已废弃 可能在以后版本中删除__ 请使用[addDomEvent](#adddomeventele-type-selector-fn)

注册DOM事件

* `ele` `{HTMLElement}` DOM元素
* `type` `{string}` 事件名称
* `selector` `{string=}` 元素选择器，可选
* `fn` `{Function(e)}` 事件处理函数 `this`指向事件绑定元素

#### .detachEvent(ele, type, selector, fn)

__已废弃 可能在以后版本中删除__ 请使用[removeDomEvent](#removedomeventele-type-selector-fn)

卸载DOM事件

* `ele` `{HTMLElement}` DOM元素
* `type` `{string}` 事件名称
* `selector` `{string=}` 元素选择器，可选
* `fn` `{Function(e)}` 回调函数

### 重载实例方法

可用通过配置信息重载View已有的实例方法，达到更进一步的View自定义，注意重载前请参考原始方法的实现
