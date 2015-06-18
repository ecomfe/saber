layout: doc
comments: false
date: 2015-5-18 4:11:38
title: Promise
repo: saber-promise
ref: 2.0.0
---

由[Resolver](resolver.html)对象产生，用于表示一个正在进行的操作

## Methods

### then(onFulfilled[, onRejected])

注册`fulfilled`（操作完成）和`rejected`（操作失败）状态的回调

* **onFulfilled** `{?Function}` `fulfilled`状态回调
* **onRejected** `{Function=}` `rejected`状态回调
* _return_ `{Promise}`