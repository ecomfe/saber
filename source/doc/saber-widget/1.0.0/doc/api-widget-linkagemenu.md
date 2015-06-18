layout: doc
comments: false
date: 2015-5-18 4:13:23
title: LinkageMenu
repo: saber-widget
ref: 1.0.0
---

联动菜单

## Usage

```js
var widget = require('saber-widget');
require('saber-widget/LinkageMenu');

var menu = widget.linkageMenu(
    main,
    {
        datasource: [
            {
                name: '北京',
                value: 1,
                children: [
                    {
                        name: '北京',
                        value: 11,
                        children: [
                            {
                                name: '海淀区',
                                value: 111
                            },

                            {
                                name: '朝阳区',
                                value: 112
                            }
                        ]
                    
                ]
            },
            {
                name: '广东',
                value: 2,
                children: [
                    {
                        name: '广州市',
                        value: 21,
                        children: [
                            {
                                name: '番禺区',
                                value: 211
                            },
                            {
                                name: '天河区',
                                value: 212
                            },
                            {
                                name: '白云区',
                                value: 213
                            }
                        ]
                    },
                    {
                        name: '揭阳市',
                        value: 22,
                        children: [
                            {
                                name: '惠来县',
                                value: 221
                            },
                            {
                                name: '榕城',
                                value: 222
                            }
                        ]
                    }
                ]
            }
        ],
        // 默认选中值
        // 数组，按联动菜单的层级顺序排列
        values: []
    }
);
menu.on('select', function(ev, data) {
    console.log(data);
});
```