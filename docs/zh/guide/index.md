---
sidebar: auto
---

# 指南 :rocket:

## 开始使用

### NPM

通过 npm 或 yarn 安装

```bash
npm install vue-showdown
# 或者
yarn add vue-showdown
```

在你的 JS 文件中引入

```js
// 作为 Vue 插件引入
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, options /* 可选参数 */) // 可以在这里设置默认 options

// 或者： 作为 Vue 组件引入
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown) // 在使用时通过 props 设置 options
```

接下来，你就可以在你的单文件组件中通过`VueShowdown`来使用了

```vue
<VueShowdown markdown="## markdown text"/>
```

::: tip 提示
同 vue 一样，vue-showdown 同样提供了 [UMD](https://github.com/umdjs/umd), [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) 和 [ES Module](http://exploringjs.com/es6/ch_modules.html) 版本。查看 [Vue 文档](https://vuejs.org/v2/guide/installation.html#Terms) 获取更多细节。
:::


### Browser

在 `vue.js` 后面直接通过 `<script>` 引入

```html
<script src="path/to/dist/vue.min.js"></script>
<script src="path/to/dist/vue-showdown.min.js"></script>
```

然后可以直接作为 Vue 组件使用 `vue-showdown`

```html
<div id="#app">
  <vue-showdown markdown="## markdown text"/>
</div>
```

## Props

### markdown

输入的原始 markdown 代码。

- 类型： `string`
- 默认值： `null`

```vue
<VueShowdown markdown="# Hello, world!"/>
<!-- 渲染为 -->
<div>
  <h1>Hello, world!</h1>
</div>
```

### tag

用来包裹 markdown 渲染结果的 HTML 标签。与 [vue-router 的 tag](https://router.vuejs.org/api/#tag) 作用相同。

- 类型： `string`
- 默认值： `'div'`

```vue
<VueShowdown markdown="# Hello, world!" tag="span"/>
<!-- 渲染为 -->
<span>
  <h1>Hello, world!</h1>
</span>
```

### flavor

设置 showdown 的 flavor。查看 [文档](https://github.com/showdownjs/showdown#flavors).

- 类型： `string`
- 默认值： `'vanilla'`
- 可用的值： `'original', 'vanilla', 'github'`

### options

设置 showdown 的 options。查看 [文档](https://github.com/showdownjs/showdown#valid-options).

- 类型： `Object`
- 默认值： `{}`

::: tip 提示
通过 props 设置的 options 将会覆盖通过 `Vue.use()` 设置的默认 options。
:::

#### extensions

TO BE TRANSLATED
