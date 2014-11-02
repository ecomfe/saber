layout: doc
comments: false
date: 2014-10-2 10:39:16
repo: saber-widget
ref: 0.2.1
---

# Suggestion

搜索建议控件。


## Usage

``` javascript
var widget = require( 'saber-widget' );
require( 'saber-widget/Suggestion' );

var sug = widget.suggestion( element );
sug.on( 'request', function ( ev, data ) {
    console.log( data );
} );
```

## API

TODO

