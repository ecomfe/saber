date: 2014-9-31 1:17:25
layout: page
comments: false
---

# saber-cookie [![Build Status](https://travis-ci.org/ecomfe/saber-cookie.png)](https://travis-ci.org/ecomfe/saber-cookie)

适合移动端的Cookie封装



## Usage

### 通过`edp`引入模块

    edp import saber-cookie

### 使用示例:

```javascript
require( 'saber-cookie', function( Cookie ) {
    // create a cookie (page-session)
    Cookie.set( '__saber_test', 'saber' );
    
    // get a cookie with given name
    var val = Cookie.get( '__saber_test' );
    console.info( val );
    
    // create a cookie with expires (1 day)
    Cookie.set(
        '__saber_1d',
        '1day',
        { expires: 1 * 24 * 60 * 60 * 1000 }
    );
    console.info( Cookie.get( '__saber_1d' ) );
    
    // create a cookie with path
    Cookie.set(
        '__saber_root',
        'root',
        { path: '/' }
    );
    console.info( Cookie.get( '__saber_root' ) );
    
    // create a cookie with domain
    Cookie.set(
        '__saber_host',
        { domain: document.domain }
    );
    console.info( Cookie.get( '__saber_host' ) );
    
    // create a cookie with raw value
    Cookie.set(
        '__saber_raw',
        'hello, saber',
        { raw: true }
    );
    console.info(
        'decoded: %s , raw: %s',
        Cookie.get( '__saber_raw' ),
        Cookie.get( '__saber_raw', { raw: true } )
    );
    
    // remove a cookie
    Cookie.set( '__saber_remove', 'xx' );
    var beforeVal = Cookie.get( '__saber_remove' );
    Cookie.remove( '__saber_remove' );
    var afterVal = Cookie.get( '__saber_remove' );
    console.info( 'before: %s , after: %s', beforeVal, afterVal );
});
```

## API

### Cookie.get( name [, options] )

获取键名为`name`的cookie值, 若cookie不存在或`name`为空，则返回`null`

#### 参数

`name` {string} cookie的键名

`options` {Object} 参数可选，支持的配置项:

* `raw` {boolean} 是否不自动解码(`decodeURIComponent`), 为`true`时会获取未经过解码的cookie原始存储值

#### 示例

```javascript
// 获取键名为 mycookie 的cookie值
Cookie.get( 'mycookie' );

// 获取键名为 rawcookie 的未解码的cookie存储值
Cookie.get( 'rawcookie', { raw: true } );
```

### Cookie.set( name, value [, options] )

设置键名为`name`,值为`value`的新cookie

#### 参数

`name` {string} cookie的键名

`value` {string} cookie的原始值

`options` {Object} 参数可选，支持的配置项:

* `expires` {Date|Number} cookie的过期时间, 为数字时单位为`毫秒`
* `domain` {string} cookie的域名
* `path` {string} cookie路径
* `secure` {boolean} cookie是否安全传输
* `raw` {boolean} 是否不自动编码(`encodeURIComponent`), 为`true`时参数`value`会以未编码的原始值存储

#### 示例

```javascript
// 默认(session级)的新cookie
Cookie.set( 'test1', 'session cookie' );

// 设置了有1天效期的新cookie
Cookie.set( 'test2', 'baidu', {
    expires: 1 * 24 * 60 * 60 * 1000
});

// 设置了路径的新cookie
Cookie.set( 'test3', 'baidu', { path: '/' });

// 设置了域名的新cookie
Cookie.set( 'test4', 'baidu', { domain: 'baidu.com' });

// 设置了安全传输的新cookie
Cookie.set( 'test5', 'baidu', { secure: true });

// 禁用自动编码(encodeURIComponent)的cookie
Cookie.set( 'test6', 'hello, saber', { raw: true } );
```

### Cookie.remove( name [, options] )

删除键名为`name`的cookie

#### 参数

`name` {string} cookie的键名

`options` {Object} 参数可选，支持的配置项:

* `domain` {string} cookie的域名
* `path` {string} cookie路径
* `secure` {boolean} cookie是否安全传输

#### 示例

```javascript
// 删除键名为 mycookie 的cookie
Cookie.remove( 'mycookie' );

// 删除 `baidu.com`域下，路径为 `/` 的键名为 `othercookie` 的cookie
Cookie.remove( 'othercookie', { domain: 'baidu.com', path: '/' } );
```

## Test

使用 `edp webserver` 启动 Web Server

    edp ws start

访问

    http://localhost:8848/test/runner.html

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
