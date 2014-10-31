layout: doc
comments: false
date: 2014-9-31 2:48:26
repo: rider
ref: 0.4.0
---

# DEMO与单元测试

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
$ node demo/server.js
```

访问网址：

    http://localhost:8888

## 测试用例

执行测试：

```shell
$ npm test
```

测试用例在 `test/cases` 目录中，`.styl` 文件与同名的 `.css` 文件对应。
