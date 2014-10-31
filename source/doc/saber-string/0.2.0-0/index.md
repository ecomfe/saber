layout: doc
comments: false
date: 2014-9-31 3:2:34
repo: saber-string
ref: 0.2.0-0
---

# saber-string

适合移动端的字符串处理模块。

## Usage

通过 `edp` 引入模块：

    edp import saber-string

简单的使用示例：

```javascript
// `saber-string` 的函数是颗粒化的，您可以只引用需要的部分
var format = require( 'saber-string/format' );
var greeting = format( 'Hello, ${name}!', { name: 'World' } );

console.log( greeting ); // => Hello, World!
```

## API

### .encodeHTML( str )

HTML编码。

```javascript
string.encodeHTML( '<a href="#top">返回首页</a>' );
// => &lt;a href=&quot;#top&quot;&gt;返回首页&lt;/a&gt;
```

### .decodeHTML( str )

HTML解码。

```javascript
string.decodeHTML( '&lt;b&gt;lo&#45;dash&lt;/b&gt;');
// => <b>lo-dash</b>
```

### .format( template, data )

字符串格式化，替换字符串中的 `${xx}` 字符，将 `xx` 作为 `data` 的字段名或者参数，使用返回的结果加以替换。

```javascript
string.format( '${greeting}, ${name}!', {
    greeting: 'Hello',
    name: 'Saber'
});
// => Hello, Saber!

string.format( '#{1}, #{0}!', [ 'Hello', 'Saber' ] );
// => Saber, Hello!
```

### .camelize( str )

驼峰化，例如将`ui-button`转变化`uiButton`。

```javascript
string.camelize( 'ui-button' );
// => uiButton

string.camelize( '-webkit-box-shadow' );
// => WebkitBoxShadow
```

===

[![Saber](https://f.cloud.github.com/assets/157338/1485433/aeb5c72a-4714-11e3-87ae-7ef8ae66e605.png)](http://ecomfe.github.io/saber/)
