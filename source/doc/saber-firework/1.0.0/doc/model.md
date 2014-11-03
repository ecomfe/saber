layout: doc
comments: false
date: 2014-10-3 8:12:33
title: Model
repo: saber-firework
ref: 1.0.0
---

页面数据管理

## Configure

`saber-firework`通过配置信息构建Model对象，配置信息为`Object`类型，包含以下字段：

* **constructor** `{Function=}` 构造函数，默认为[saber-firework/Model](../src/Model.js)
* **events** `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，`this`指针指向Model实例
* **fetch** `{Function(Object):Promise}` 默认数据请求方法，参数为查询条件，返回`Promise`对象，action加载时会调用此方法进行数据初始化，并将请求的结果作为视图渲染数据
* **refetch** `{Function(Object):Promise}` 默认数据更新方法，参数为查询条件，返回`Promise`对象，被缓存的action被唤醒时会调用此方法并将返回的数据交给view进行唤醒页面的渲染

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