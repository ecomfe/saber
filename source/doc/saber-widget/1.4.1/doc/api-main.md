layout: doc
comments: false
date: 2015-9-10 2:21:35
title: main
repo: saber-widget
ref: 1.4.1
---

控件主模块。提供`控件`及`控件实例`的管理功能。

## Usage

```js
var widget = require('saber-widget');
widget.add(someWidget);
```

## API

### Methods

#### config(info)

配置控件库全局配置

* **info** `{Object}` 控件库配置信息对象


#### getConfig(name)

获取配置项

* **nama** `{string}` 配置项名称
* _return_ `{Object}` 配置项值

#### getGUID([prefix])

生成全局唯一id

* **prefix** `{string}` prefix 前缀
* _return_ `{string}` 新唯一id字符串

#### dispose(widget)

清理已初始化的控件实例

* **widget** `{string|Widget|HTMLElement}` widget 控件实例或控件实例id或DOM元素，不传则销毁全部
    * 传入`控件id`时,销毁`id`对应的控件
    * 传入`控件实例`时,销毁之
    * 传入`DOM元素`时,销毁`DOM元素`内的所有控件

#### find(element)

获取指定DOM元素内的所有控件实例

* **element** `{HTMLElement}` 被检索的DOM元素
* _return_ `{Array.<Widget>}` 查找到的控件实例

#### add(widget)

存储控件实例

* **widget** `{Widget}` 待加控件实例

#### remove(widget)

移除控件实例

* **widget** `{Widget}` 待移除控件实例

#### get(id)

通过id获取控件实例

* **id** `{string}` 控件id
* _return_ `{Widget}` 根据id获取的控件实例

#### register(component)

注册控件类
通过类的`prototype.type`识别控件类型信息

* **component** `{Function}` 控件类

#### registerPlugin(plugin)

注册插件类
通过类的`prototype.type`识别插件类型信息

* **plugin** `{Function}` 插件类

#### enablePlugin(widget[, pluginName, options])

启用插件

* **widget** `{Widget}` 目标控件实例
* **pluginName** `{String}` 待激活插件名
* **options** `{Object}` 插件配置项


#### disablePlugin(widget[, pluginName])

禁用插件

* **widget** `{Widget}` 目标控件实例
* **pluginName** `{String|Array}` pluginName 待禁用插件名
    * 单个禁用传入插件名, 批量禁用传入数组, 全部禁用不传入

#### disposePlugin(widget[, pluginName])

* **widget** `{Widget}` 目标控件实例
* **pluginName** `{String|Array}` pluginName 待销毁插件名
    * 单个删除传入插件名, 批量删除传入数组, 全部删除不传入