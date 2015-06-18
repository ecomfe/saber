layout: doc
comments: false
date: 2015-5-18 4:34:24
title: Model
repo: saber-mm
ref: 1.0.0
---

数据管理对象

* [Configure](#configure)
* [Properties](#properties)
* [Methods](#methods)

## Configure

`saber-mm` 通过配置信息构建 Model 对象，配置信息为 `Object` 类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，可以通过自定义该配置项来改变基类
* **events** `{Object=}` 事件配置，`key `为事件名称，`value` 为事件回调函数，回调函数执行时的 `this` 指针指向当前的 Model 实例

除以上固有配置项外，还可通过给配置信息添加自定义属性的方式添加 Model 的实例方法，实例方法运行时的 `this` 指针指向当前的 Model 实例

配置实例如下：

```js
{
    fetch: function (query) {
        // do something

        // return Promise
        return Resolver.resolved(data);
    },

    update: function (id, name) {
        return ajax.post(
            'xxx', 
            {
                id: id,
                name: name
            }
        );
    }
}
```

## Events

### init

初始化事件，在创建 Model 实例时触发

## Methods

### fetch(query, url)

获取数据，**虚方法**，使用时需要具体实现。Presenter 加载时会调用此方法进行数据初始化，并将结果作为渲染视图的数据

* **query** `{Object}` 查询条件
* _return_ `{Promise}` [Promise 对象](https://github.com/ecomfe/saber-promise/blob/master/doc/promise.html)

### set(name, value)

设置 model 的数据

* **name** `{string}` 数据名称
* **value** `{*}` 数据内容，建议为 `number`、`string` 类型，或者其它任何可以被 `JSON.stringify` 方法序列化的数据类型

在使用 rebas 时，框架会将所有使用 `set` 设置的数据从服务器端自动同步到浏览器端，所以在同构项目中对于在服务器获取并且希望在浏览器端也能继续使用的数据，请使用 `set` 方法进行设置。

### get(name)

获取 model 的数据，`set` 方法的逆操作

* **name** `{string}` 数据名称
* _return_ `{*}` 数据内容

### del(name)

删除数据

* **name** `{string}` 数据名称
* _return_ `{*}` 被删除的数据