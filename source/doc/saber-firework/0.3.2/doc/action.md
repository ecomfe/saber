layout: doc
comments: false
date: 2014-9-31 2:55:11
repo: saber-firework
ref: 0.3.2
---

# Action

## Action 配置信息

`Object`类型，包含以下字段：

* `model` `{Object}` model配置信息，具体请参考[model配置说明](model.md)
* `view` `{Object}` view配置信息，具体请参考[view配置说明](view.md)
* `constructor` `{Object=}` 构造函数，默认为`saber-firework/Action`
* `events` `{Object=}` 事件配置，`key`为事件名称，`value`为事件回调函数，支持直接注册`view`或者`model`的事件比如`{ 'view:add': function () {...} }`，事件回调函数中的`this`指针指向当前的action实例


## Action 实例

可通过给配置信息添加自定义属性的方式添加action的实例方法，实例方法的`this`指针指向当前的Action实例，比如：

```javascript
{
    model: require('./model'),
    view: require('./view'),

    // 自定义方法 add
    add: function (name) {
        this.view.add(name);
    }
}
```

### 属性

* `view` `{View}` view对象
* `model` `{Model}` model对象
* `query` `{Obejct}` action的请求查询条件，如果以`RESTful`风格定义的路由信息，则URL中的参数也会作为action的查询条件
* `url` `string` action的URL

### 事件

* `init` 初始化事件，在创建action实例时触发
* `enter` 加载事件，在进行数据初始化请求、渲染页面前触发，可在此事件中对查询条件进行修正，达到修改model请求参数的效果
* `ready` 加载完成事件，在完成页面渲染、转场操作后触发
* `wakeup` 唤醒事件，如果路由信息配置了缓存，则再次进入action时触发，此时不会触发`enter`与`ready`事件
* `complete` 就绪事件，加载完成或者唤醒后触发，业务逻辑的处理的主要入口
* `sleep` 休眠事件，如果路由信息配置了缓存，在action切换时触发，此时不会触发`leave`事件
* `leave` 离开事件，action切换时触发

### 方法

#### .redirect(url, query, options)

页面跳转

* `url` `{string}` url
* `query` `{?Object}` 查询条件
* `options` `{options=}` 跳转参数
* `options.force` `{boolean=}` 强制跳转（相同的URL默认不跳转）
* `options.noCache` `{boolean=}` 禁用页面的cache

### 重载实例方法

可用通过配置信息重载Action已有的实例方法，达到更进一步的Action自定义，注意重载前请参考原始方法的实现
