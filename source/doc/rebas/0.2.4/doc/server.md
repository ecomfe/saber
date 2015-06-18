layout: doc
comments: false
date: 2015-5-18 4:34:40
title: Server
repo: rebas
ref: 0.2.4
---

服务器实例

## API

### start()

启动Server

### getConfig([name])

获取配置信息，会根据名称获取`config`目录下的配置信息

* **name** `{string=}` 配置文件名称，如果省略则返回`Server`的配置
* _return_ `{*}`