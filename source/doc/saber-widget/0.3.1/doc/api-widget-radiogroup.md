layout: doc
comments: false
date: 2015-5-18 4:13:28
repo: saber-widget
ref: 0.3.1
---

# RadioGroup

单选组控件。


## Usage

``` javascript
var widget = require( 'saber-widget' );
require( 'saber-widget/RadioGroup' );

var group = widget.radioGroup( element );

group.on( 'valuechange', function( ev, oldValue, newValue ) {
    console.log( 'valuechange from: ' + oldValue + ', to: ' + newValue );
});

group.on( 'click', function ( ev, oldValue, newValue ) {
    console.log( 'selected value: ' + newValue );
});
```

## API

TODO

