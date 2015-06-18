layout: doc
comments: false
date: 2015-5-18 4:13:21
title: FileUpload
repo: saber-widget
ref: 1.4.0
---

文件上传

## Usage

```js
var widget = require('saber-widget');
require('saber-widget/FileUpload');

var fileupload = widget.fileUpload(
    main,
    {
        action: '/fileupload/upload.php',
        // 文件大小上限，单位M
        limit: 5,
        // 透传参数
        params: {
            a: 1
        }
    }
);
fileupload.on('start', function(e, data) {
    console.log('start');
});
fileupload.on('progress', function(e, data) {
    console.log('progress: ' + data);
});
fileupload.on('end', function(e, data) {
    console.log('end');
});
fileupload.on('done', function(e, data) {
    console.log('done: ' + JSON.stringify(data));
});
fileupload.on('fail', function(e, data) {
    console.log('fail: ' + JSON.stringify(data));
});
```