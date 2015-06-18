layout: doc
comments: false
date: 2015-5-18 4:31:55
title: DEMO与单元测试
repo: rider
ref: 2.0.0-alpha.1
---

发布版是不包含 `demo` 和 `test` 的，所以需要先将仓库 clone 到本地：

```shell
$ git clone https://github.com/ecomfe/rider.git
```

之后进入项目根目录，安装依赖的 package：

```shell
$ npm install
```

## DEMO

在仓库根目录执行：

```shell
$ npm run demo
```

访问网址：

    http://localhost:8888

## 测试用例

执行测试：

```shell
$ npm test
```

测试用例在 `test/cases` 目录中，`.styl` 文件与同名的 `.css` 文件对应。