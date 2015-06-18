layout: doc
comments: false
date: 2015-5-18 4:31:58
title: 样式初始化
repo: rider
ref: 2.0.0
---

由于应用场景的多样化，`rider` 提供了三种样式初始化的方式。请根据你的项目特点，选择最合适的方案。

## Normalize

样式归一化，基于 [`normalize.css`](http://necolas.github.io/normalize.css/) 定制的 Stylus 版本。

如果你希望各种元素都有 **可用的默认样式**，并基于此进行开发，那么 `Normalize` 就是为你准备的。这也是社区中 **最流行** 的样式初始化方案。

比如，你的内容区域有 `<em>`、`<strong>` 标签，即使你不去特意的定义它的样式，也能够得到符合寓意的展现。

### normalize()

对全局样式进行归一化。

相关的[全局配置](./setting.html)：

 * `$-base-font-size`
 * `$-base-font-family`
 * `$-code-font-family`
 * `$-prevent-text-size-adjust`
 * `$-prevent-tap-highlight`

如有希望调整的配置，请在调用 Mixin 之前进行声明。

```stylus
// 修改默认的代码字体
$-code-font-family = Monaco, Consolas, monospace

// 进行样式归一化
normalize()
```

### normalize-form()

归一化表单样式。

**注意**：如果已使用 `normalize()` 或 `initialize()` 进行过初始化，请 **不要** 使用这个 Mixin。

## Initialize

以 `CSS reset` 为主，`CSS normalize` 为辅的样式初始化方案。

适合设计中各种 **用户界面元素** 均需要 **精确定义** 的使用场景。

如果网站的每一部分都是精心设计的，默认样式不可能生效，那么 `Initialize` 给你的 **一张白纸** 会让你的创作过程更省心。

### initialize()

对全局样式进行初始化。

相关的[全局配置](./setting.html)：

 * `$-base-font-size`
 * `$-base-font-family`
 * `$-prevent-text-size-adjust`
 * `$-prevent-tap-highlight`

如有希望调整的配置，请在调用 Mixin 之前进行声明。

```stylus
// 修改默认的基础字体大小
$-base-font-size = 14px

// 进行样式初始化
initialize()
```

## 局部 CSS Reset

适合用于运行在第三方环境，需要确保 **不影响外部容器样式** 的初始化方案。

比如在第三方页面投放的广告、在第三方平台运行的应用等，根据需要对 **特定区域** 进行初始化。

注意：在使用了 `normalize()` 或 `initialize()` 的环境中，不推荐使用这些 Mixin。

### reset-font()

重置文字字体、尺寸、样式、垂直对齐方式。

```stylus
.ad-slot
    reset-font()
```

### reset-box-model()

重置盒模型。处于可访问性考虑，不会重置 `outline`。

```stylus
.app-container
    reset-box-model()
```

### reset-list()

重置列表样式。应用于 `ul`、`ol` 类型元素。

```stylus
.menu-list
    reset-list()
```

### reset-table()

重置表格样式。应用于 `table` 类型元素。

```stylus
.data-table
    reset-table()
```

### reset-table-cell()

初始化单元格样式。应用于 `td`、`th` 类型元素。

```stylus
.data-table td
    reset-table-cell()
```