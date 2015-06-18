layout: doc
comments: false
date: 2015-5-18 4:10:35
title: 附加处理器
repo: saber-firework
ref: 2.0.0-beta.2
---

作用于特定时刻，调整框架行为，目前支持以下的附加处理器：

### transition

转场参数处理器，用于在转场操作前处理转场效果参数（参数具体字段请参考[saber-viewprot](https://github.com/ecomfe/saber-viewport)的[全局配置参数说明](https://github.com/ecomfe/saber-viewport#initele-options)）

`Function(route, oldRoute):Object`

* **router** `{Object}` 待转场页面的路由配置信息
* **oldRoute** `{Object}` 待转出页面的路由配置信息
* _return_ `{Object}` 返回转场参数

比如需要根据路由配置改变转场效果时长：

```javascript
{
    processor: {
        transition: function (route, oldRoute) {
            return {
                // 根据自定义路由属性`index`设置转场效果时长
                duration: router.index > oldRoute.index ? 0.3 : 0.5;
            };
        }
    }
}
```