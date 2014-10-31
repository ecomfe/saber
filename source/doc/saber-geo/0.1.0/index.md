layout: doc
comments: false
date: 2014-9-31 2:56:24
repo: saber-geo
ref: 0.1.0
---

# saber-geo [![Build Status](https://travis-ci.org/ecomfe/saber-geo.png)](https://travis-ci.org/ecomfe/saber-geo)

适合移动端的 GeoLocation 封装


## Usage

通过`edp`引入模块：

    edp import saber-geo

简单使用示例：

```javascript
require( [ 'saber-geo' ], function( Geo ) {

	function onSuccess( position ) {
    	var coords = position.coords;
       	console.log( 'latitude,longitude: ', coords.latitude, coords.longitude);
    }
    
    function onError( error ) {
    	console.log( 'Error: ', error.code, error.message );
    }
	
	// 一次性获取
	Geo.get( onSuccess, onError );
    
    // 持续性获取
    var watchId = Geo.watch( onSuccess, onError );
    
    // 停止获取
    Geo.clear( watchId );

});
```


## API

### Base

`Base` 部分是标准的 [HTML5 Geolocation API](http://www.w3.org/TR/geolocation-API) 封装，在 `require( 'saber-geo' )` 时加载。

#### .get( onSuccess[, onError, options] )

`一次性`获取当前`地理位置信息`。

```javascript
Geo.get(
	function ( position ) {
    	console.info( 'Position: ', position );
	},
	function ( error ) {
		console.error( 'Error: ', error );
	}
);
```

+ `onSuccess` `{Function}` 成功回调，参数参考[`Position`](http://www.w3.org/TR/geolocation-API/#position_interface)
+ `onError` `{Function=}` 错误回调，参数参考[`PositionError`](http://www.w3.org/TR/geolocation-API/#position_error_interface)
+ `options` `{Object=}` 配置对象
	+ `highAcuracy` `{boolean=}` 是否使用高精度
	+ `timeout` `{number=}` 超时时长,单位毫秒
	+ `age` `{number=}` 数据缓存时间,单位毫秒,为`0`时每次都执行新的检索

#### .watch( onSuccess[, onError, options] )

`持续性`获取当前`地理位置信息`。

```javascript
Geo.watch(
	function ( position ) {
    	console.info( 'Position: ', position );
	},
	function ( error ) {
		console.error( 'Error: ', error );
	},
	{ timeout: 20000, age: 10000 }
);
```

+ `onSuccess` `{Function}` 成功回调，参数参考[`Position`](http://www.w3.org/TR/geolocation-API/#position_interface)
+ `onError` `{Function=}` 错误回调，参数参考[`PositionError`](http://www.w3.org/TR/geolocation-API/#position_error_interface)
+ `options` `{Object=}` 配置对象
	+ `highAcuracy` `{boolean=}` 是否使用高精度
	+ `timeout` `{number=}` 超时时长,单位毫秒
	+ `age` `{number=}` 数据缓存时间,单位毫秒,为`0`时每次都执行新的检索 

#### .clear( watchId )

停止指定的位置监控。

```javascript
var watchId = Geo.watch( ... );
Geo.clear( watchId );
```

+ `watchId` `{number}` `watch`方法返回的`watchId`


### IP

`在线IP查询服务`的扩展支持，需以 `require( 'saber-geo/ip' )` 引入。

### .callback

查询请求(`JSOP`)附带的`callback`参数的`键值`，默认为`callback`

### .provider

查询服务的`JSONP`服务地址，默认为`http://hendless.duapp.com/addr`

#### .find( callback )

查询当前`IP信息`

```javascript
require( [ 'saber-geo/ip' ], function( IP ) {
	IP.find( function () {
    	console.info( 'IP Info: ', arguments );
	});
});
```

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
