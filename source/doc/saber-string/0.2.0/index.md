layout: doc
comments: false
date: 2014-10-2 10:38:16
repo: saber-string
ref: 0.2.0
---

# saber-string

适合移动端的字符串处理模块

## API

### .encodeHTML( str )

HTML编码

### .decodeHTML( str )

HTML解码

### .format( template, data )

字符串格式化，替换字符串中的${xx}字符，将xx作为data的字段名或者参数，使用返回的结果加以替换

### .camelize( str )

驼峰化，例如将`ui-button`转变化`uiButton`
