layout: doc
comments: false
date: 2014-10-2 10:37:26
repo: saber-firework
ref: 0.3.2
---

# Model

## Model 配置信息

* `fetch` `{Function(Object):Promise}` 默认数据请求方法，参数为查询条件，返回`Promise`对象，action加载时会调用此方法进行数据初始化，并将请求的结果作为视图渲染数据
* `constructor` `{Object=}` 构造函数，默认为`saber-firework/Model`
* `events` `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，`this`指针指向Model实例

## Model 实例

可通过给配置信息添加自定义属性的方式添加Model的实例方法，实例方法的`this`指针指向当前的Model实例，比如：

```javascript
{
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
