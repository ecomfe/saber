layout: doc
comments: false
date: 2015-5-18 4:10:25
title: Media
repo: saber-env
ref: 1.0.0
---

通过 `require('saber-env/media')` 引入

## API

### Methods

#### canPlay(type)

检测是否支持指定的`音频`或`视频`类型

* **type** `{string}` 媒体类型描述串
* _return_ `{string|boolean}`
    `不支持`时返回`false`, `可能支持`时返回`maybe`，`最有可能支持`时返回`probably`


`type` 为媒体类型描述串，可能的值为：

常用类型

+ `video/ogg`
+ `video/mp4`
+ `video/webm`
+ `audio/mpeg`
+ `audio/ogg`
+ `audio/mp4`

常用值，包括编解码器

+ `video/ogg; codecs="theora, vorbis"`
+ `video/mp4; codecs="avc1.4D401E, mp4a.40.2"`
+ `video/webm; codecs="vp8.0, vorbis"`
+ `audio/ogg; codecs="vorbis"`
+ `audio/mp4; codecs="mp4a.40.5"`

_注：如果包含编解码器，则只会返回 `probably`_