layout: doc
comments: false
date: 2015-5-18 4:34:30
title: Model
repo: saber-mm
ref: 0.2.0
---

数据管理对象

* [Configure](#configure)
* [Properties](#properties)
* [Methods](#methods)

## Configure

`saber-mm`通过配置信息构建Model对象，配置信息为`Object`类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，默认为[saber-mm/Model](../src/Model.js)
* **events** `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，`this`指针指向Model实例

除以上固有配置项外，还可通过给配置信息添加自定义属性的方式添加model的实例方法，实例方法的`this`指针指向当前的Model实例

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

初始化事件，在创建View实例时触发

## Methods

### fetch(query, url)

获取数据，**虚方法**，使用时需要具体实现。presenter加载时会调用此方法进行数据初始化，并将结果作为视图渲染数据

* **query** `{Object}` 查询条件
* **url** `{string}` 当前的URL
* _return_ `{Promise}` [Promise对象](https://github.com/ecomfe/saber-promise/blob/master/doc/promise.html)