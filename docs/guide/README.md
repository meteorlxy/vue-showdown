---
sidebar: auto
---

# Guide :rocket:

::: warning
This guide is for Vue 3 only. If you're using Vue 2, please check out the docs [here](https://github.com/meteorlxy/vue-showdown/tree/v2/docs/guide).
:::

## Getting Started

### NPM

Install via npm / yarn

```bash
npm install vue-showdown
# OR
yarn add vue-showdown
```

Import vue-showdown as a vue plugin:

```js
// import as a Vue plugin
import { createApp } from 'vue';
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp();

// the second parameter of app.use() is optional
app.use(VueShowdownPlugin, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
});
```

Or import vue-showdown as a vue component:

```js
// import as a Vue component
import { createApp } from 'vue';
import { VueShowdown } from 'vue-showdown';

const app = createApp();

app.component('VueShowdown', VueShowdown);
```

Then use `<VueShowdown />` in your vue SFC:

```vue
<!-- set options via props -->
<VueShowdown
  markdown="## markdown text"
  flavor="github"
  :options="{ emoji: true }"
/>
```

::: tip
vue-showdown also provides [UMD](https://github.com/umdjs/umd), [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) and [ES Module](http://exploringjs.com/es6/ch_modules.html) builds as vue does. Go to the [Vue document](https://v3.vuejs.org/guide/installation.html#explanation-of-different-builds) for more details.
:::

### Browser

Direct `<script>` import after `vue.js` and `showdown.js`. Then use `vue-showdown` as a vue plugin / component.

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

    // as vue plugin
    app.use(VueShowdownPlugin);

    // OR: as vue component
    app.component('VueShowdown', VueShowdown);

    app.mount('#app');
  </script>
</body>
```

## Plugin Options

```js
import { createApp } from 'vue';
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp();

app.use(VueShowdownPlugin, {
  // Plugin options here
});
```

### flavor

Default flavor of showdown. Docs [here](https://github.com/showdownjs/showdown#flavors).

- type: `string | null`
- default: `null`
- possible values: `'github' | 'original' | 'ghost' | 'vanilla' | 'allOn'`

::: tip
The `flavor` here will be set globally by `showdown.setFlavor()`.
:::

### options

Default options of showdown. Docs [here](https://github.com/showdownjs/showdown#valid-options).

- type: `Object`
- default: `{}`

::: tip
The `options` here will be set globally by `showdown.setOption()` after `showdown.setFlavor()`, which will override the flavor's options.
:::

## Component Props

### markdown

The raw markdown content to parse.

- type: `string | null`
- default: `null`

```vue
<VueShowdown markdown="# Hello, world!" />
<!-- renders as -->
<div>
  <h1>Hello, world!</h1>
</div>
```

### tag

The HTML tag of the markdown wrapper. Similar to [vue-router's tag](https://router.vuejs.org/api/#tag).

- type: `string`
- default: `'div'`

```vue
<VueShowdown markdown="# Hello, world!" tag="span" />
<!-- renders as -->
<span>
  <h1>Hello, world!</h1>
</span>
```

### flavor

Flavor of showdown. Docs [here](https://github.com/showdownjs/showdown#flavors).

- type: `string | null`
- default: `null`
- possible values: `'github' | 'original' | 'ghost' | 'vanilla' | 'allOn'`

::: tip
If you set `flavor` via props, all the options will be reset to the flavor's options, which will override the default options you set by `app.use()`.
:::

### options

Options of showdown. Docs [here](https://github.com/showdownjs/showdown#valid-options).

- type: `Object`
- default: `{}`

::: tip
The `options` prop will override the default options set by `app.use()`.

If you also set `flavor` prop, the `options` prop will override the flavor's options, too.
:::

### extensions

Extensions of showdown. Docs [here](https://github.com/showdownjs/showdown#extensions).

- type: `Array | null`
- default: `null`

::: tip
Check the [Advance - Extensions](./#extensions-1) section for details.
:::

### vueTemplate

Treat the parsed HTML string as vue template. This will allow you to use vue template syntax in your markdown.

- type: `Boolean`
- default: `false`

::: warning ATTENSION
If you set it to `true`, you have to use the full (runtime + compiler) build of Vue, as we need to compile templates on the client. See [Runtime + Compiler vs. Runtime-only](https://v3.vuejs.org/guide/installation.html#runtime-compiler-vs-runtime-only).

If you have similar request as [#5](https://github.com/meteorlxy/vue-showdown/issues/5), you can enable this feature.
:::

## Advance

### Showdown library

You can also import `showdown` itself from `vue-showdown` for advance usages.

```js
import { createApp } from 'vue';
import { VueShowdownPlugin, showdown } from 'vue-showdown';

const app = createApp();

showdown.setFlavor('github');

app.use(VueShowdownPlugin);
```

### Extensions

According to the [official docs about extensions](https://github.com/showdownjs/showdown/wiki/extensions), there is no way to set default extensions globally for now.

So the only way to set extensions is via the `extensions` prop of the `VueShowdown` component.

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

Alternatively, you can register extensions globally via `showdown.extension()`, and reference it in the `extension` prop directly by the name that you registered.

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
