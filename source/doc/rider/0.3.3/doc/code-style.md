layout: doc
comments: false
date: 2014-9-31 2:48:31
repo: rider
ref: 0.3.3
---

# 代码风格

`stylus` 自由度很高，代码风格很容易差异化。为了团队协作与代码的可读性，请在开发时遵守本约定。

## 命名规则

### 变量

变量以 `$` 开头，字母全部 **小写**，多个单词用中线 `-` 连接，如：

    $box-width

如果是全局变量，以 `$-` 开头，作为区分，如：

    $-base-font-family

### Mixin

Mixin 字母全小写，多个单词用 `-` 连接，如：

    relative
    border-width

*说明：Mixin 的命名规则，是为了与 CSS 风格保持一致，以便对 CSS 进行增强。*

## 整体风格

通常，`rider` 推荐的代码风格是这样的：

```haml
// 当 Mixin 为空时，加括号执行
initialize()

.box
    // 在给属性赋值、给 Mixin 传参数时，**用** `:`（冒号）分隔
    // 语句的结尾 **不加** `;`（分号）
    display: block
    size: 80px 60px
    box-shadow: 2px 2px 5px #999
    // 使用 Function 时，加括号传递参数
    font-size: rem(14)

// 当 Mixin 应用于 CSS root 时，加括号执行
font-face('rider-icon', 'font/rider-icon')
```

