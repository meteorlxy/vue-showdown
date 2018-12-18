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

// Vue.use() 的第二个参数是可选的
Vue.use(VueShowdown, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
})

// 或者： 作为 Vue 组件引入
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown)
```

接下来，你就可以在你的单文件组件中通过`VueShowdown`来使用了

```vue
<!-- 通过 props 来设置 options -->
<VueShowdown
  markdown="## markdown text"
  flavor="github"
  :options="{ emoji: true }"/>
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

## 插件选项

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  // 在这里设置插件选项
})
```

### flavor

设置 showdown 的默认 flavor。查看[文档](https://github.com/showdownjs/showdown#flavors)。

- 类型： `string`
- 默认值： `null`
- 可能的值： `'original', 'vanilla', 'github'`

::: tip
这里的 `flavor` 将会通过 `showdown.setFlavor()` 设置为全局 flavor。
:::

### options

设置 showdown 的默认 options。查看[文档](https://github.com/showdownjs/showdown#valid-options)。

- type: `Object`
- default: `{}`

::: tip
这里的 `options` 将会通过 `showdown.setOption()` 设置为全局 options。

注意这里的 `showdown.setOption()` 将会在 `showdown.setFlavor()` 之后调用，意味着将会覆盖 flavor 本身的默认配置。
:::

## 组件 Props

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

设置 showdown 的 flavor。查看 [文档](https://github.com/showdownjs/showdown#flavors)。

- 类型： `string`
- 默认值： `null`
- 可用的值： `'original', 'vanilla', 'github'`

::: tip
如果你通过 props 设置 `flavor`，那么所有的 options 都会被重置为 flavor 的默认值，这意味着你通过 `Vue.use()` 设置的默认 options 也将被覆盖。
:::

### options

设置 showdown 的 options。查看 [文档](https://github.com/showdownjs/showdown#valid-options)。

- 类型： `Object`
- 默认值： `{}`

::: tip 提示
通过 props 设置的 options 将会覆盖通过 `Vue.use()` 设置的默认 options。
:::

### extensions

设置 showdown 的 extensions。查看 [文档](https://github.com/showdownjs/showdown#extensions)。

- 类型： `[Object, Array]`
- 默认值： `null`

::: tip 提示
前往章节 [进阶用法 - Extensions](./#extensions-2) 查看使用细节。
:::

## 进阶用法

### Showdown library

你可以从 `vue-showdown` 中导入 `showdown` ，以便进行进阶配置。

```js
import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'

showdown.setFlavor('github')

Vue.use(VueShowdown)
```

### Extensions

根据 [showdown extensions 官方文档](https://github.com/showdownjs/showdown/wiki/extensions)，目前无法设置全局默认 extensions。

所以目前只能通过 `VueShowdown` 组件的 `extensions` prop 来传入 extensions。

```vue
<template>
  <VueShowdown
    markdown="## markdown text"
    :extensions="[this.myExt]"/>
</template>

<script>
export default {
  data () {
    return {
      myExt: () => [{
        type: 'lang',
        regex: /markdown/g,
        replace: 'showdown',
      }],
    }
  },
}
</script>
```

或者，你可以通过 `showdown.extension()` 全局注册 extensions，然后在 `extension` prop 中直接通过注册的名称引入。

```js
import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'

showdown.extension('myext', () => [{
  type: 'lang',
  regex: /markdown/g,
  replace: 'showdown',
}])

Vue.use(VueShowdown)
```

```vue
<template>
  <VueShowdown
    markdown="## markdown text"
    :extensions="['myext']"/>
</template>
```
