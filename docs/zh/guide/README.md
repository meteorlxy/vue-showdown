---
sidebar: auto
---

# 指南 :rocket:

::: warning
当前文档仅适用于 Vue 3 。如果你正在使用 Vue 2 ，前往 [这里](https://github.com/meteorlxy/vue-showdown/tree/v2/docs/zh/guide) 查看对应文档。
:::

## 开始使用

### NPM

通过 npm 安装

```bash
npm install vue-showdown
```

将 vue-showdown 作为 Vue 插件引入：

```js
// 作为 Vue 插件引入
import { createApp } from 'vue';
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp();

// app.use() 的第二个参数是可选的
app.use(VueShowdownPlugin, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
});
```

或者将 vue-showdown 作为 Vue 组件引入：

```js
// 作为 Vue 组件引入
import { createApp } from 'vue';
import { VueShowdown } from 'vue-showdown';

const app = createApp();

app.component('VueShowdown', VueShowdown);
```

接下来，你就可以在你的单文件组件中使用 `<VueShowdown />` 了：

```vue
<!-- 通过 props 来设置 options -->
<VueShowdown
  markdown="## markdown text"
  flavor="github"
  :options="{ emoji: true }"
/>
```

::: tip 提示
同 Vue 一样，vue-showdown 同样提供了 [UMD](https://github.com/umdjs/umd), [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) 和 [ES Module](http://exploringjs.com/es6/ch_modules.html) 版本。查看 [Vue 文档](https://v3.vuejs.org/guide/installation.html#explanation-of-different-builds) 获取更多细节。
:::

### Browser

在 `vue.js` 和 `showdown.js` 后面直接通过 `<script>` 引入。然后可以将 `vue-showdown` 作为 Vue 插件 / 组件使用。

```html
<body>
  <div id="#app">
    <vue-showdown markdown="## markdown text" />
  </div>

  <script src="https://unpkg.com/vue@3.x/dist/vue.global.prod.js"></script>
  <script src="https://unpkg.com/showdown@1.x/dist/showdown.min.js"></script>
  <script src="https://unpkg.com/vue-showdown@3.x/vue-showdown.min.js"></script>

  <script>
    const app = Vue.createApp();

    // 作为 Vue 插件
    app.use(VueShowdownPlugin);

    // 或者作为 Vue 组件
    app.component('VueShowdown', VueShowdown);

    app.mount('#app');
  </script>
</body>
```

## 插件选项

```js
import { createApp } from 'vue';
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp();

app.use(VueShowdownPlugin, {
  // 在这里设置插件选项
});
```

### flavor

设置 showdown 的默认 flavor。查看[文档](https://github.com/showdownjs/showdown#flavors)。

- 类型： `string | null`
- 默认值： `null`
- 可能的值： `'github' | 'original' | 'ghost' | 'vanilla' | 'allOn'`

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

- 类型： `string | null`
- 默认值： `null`

```vue
<VueShowdown markdown="# Hello, world!" />
<!-- 渲染为 -->
<div>
  <h1>Hello, world!</h1>
</div>
```

### tag

用来包裹 Markdown 渲染结果的 HTML 标签。与 [vue-router 的 tag](https://router.vuejs.org/api/#tag) 作用相同。

- 类型： `string`
- 默认值： `'div'`

```vue
<VueShowdown markdown="# Hello, world!" tag="span" />
<!-- 渲染为 -->
<span>
  <h1>Hello, world!</h1>
</span>
```

### flavor

设置 showdown 的 flavor。查看 [文档](https://github.com/showdownjs/showdown#flavors)。

- 类型： `string | null`
- 默认值： `null`
- 可用的值： `'github' | 'original' | 'ghost' | 'vanilla' | 'allOn'`

::: tip
如果你通过 props 设置 `flavor`，那么所有的 options 都会被重置为 flavor 的默认值，这意味着你通过 `app.use()` 设置的默认 options 也将被覆盖。
:::

### options

设置 showdown 的 options。查看 [文档](https://github.com/showdownjs/showdown#valid-options)。

- 类型： `Object`
- 默认值： `{}`

::: tip 提示
通过 props 设置的 options 将会覆盖通过 `app.use()` 设置的默认 options。
:::

### extensions

设置 showdown 的 extensions。查看 [文档](https://github.com/showdownjs/showdown#extensions)。

- 类型： `Array | null`
- 默认值： `null`

::: tip 提示
前往章节 [进阶用法 - Extensions](./#extensions-1) 查看使用细节。
:::

### vueTemplate

将解析后的 HTML 字符串当作 Vue 模板，允许你在 Markdown 中使用 Vue 模板语法。

- 类型： `Boolean`
- 默认值： `false`

::: warning 注意
如果你设置该 prop 为 `true`，你需要使用 Vue 完整版（运行时 + 编译器），因为我们需要在客户端编译模板。查看 [运行时 + 编译器 vs. 只包含运行时](https://v3.vuejs.org/guide/installation.html#runtime-compiler-vs-runtime-only))。

当你有类似 [#5](https://github.com/meteorlxy/vue-showdown/issues/5) 的需求时，可以尝试使用该功能。
:::

### vueTemplateData

定义你在 Vue 模板中可以使用的变量。仅在开启 [vueTemplate](#vuetemplate) 时有效。

- 类型： `Object`
- 默认值： `{}`
- 示例：

```vue
<template>
  <VueShowdown
    markdown="## markdown text {{ message }}"
    :vue-template="true"
    :vue-template-data="{ message }"
  />
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hello, vue template in markdown!')
    return { message };
  },
});
</script>
```

## 进阶用法

### Showdown library

你可以从 `vue-showdown` 中导入 `showdown` ，以便进行进阶配置。

```js
import { createApp } from 'vue';
import { VueShowdownPlugin, showdown } from 'vue-showdown';

const app = createApp();

showdown.setFlavor('github');

app.use(VueShowdownPlugin);
```

### Extensions

根据 [showdown extensions 官方文档](https://github.com/showdownjs/showdown/wiki/extensions)，目前无法设置全局默认 extensions。

所以目前只能通过 `VueShowdown` 组件的 `extensions` prop 来传入 extensions。

```vue
<template>
  <VueShowdown markdown="## markdown text" :extensions="[myExt]" />
</template>

<script>
import { defineComponent } from 'vue';

const myExt = () => [
  {
    type: 'lang',
    regex: /markdown/g,
    replace: 'showdown',
  },
];

export default defineComponent({
  setup() {
    return { myExt };
  },
});
</script>
```

或者，你可以通过 `showdown.extension()` 全局注册 extensions，然后在 `extension` prop 中直接通过注册的名称引入。

```js
import { createApp } from 'vue';
import { VueShowdownPlugin, showdown } from 'vue-showdown';

const app = createApp();

showdown.extension('myExt', () => [
  {
    type: 'lang',
    regex: /markdown/g,
    replace: 'showdown',
  },
]);

app.use(VueShowdownPlugin);
```

```vue
<template>
  <VueShowdown markdown="## markdown text" :extensions="['myExt']" />
</template>
```
