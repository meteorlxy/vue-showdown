---
sidebar: auto
---

# Guide :rocket:

## Getting Started

### NPM

Install via npm / yarn

```bash
npm install vue-showdown
# OR
yarn add vue-showdown
```

Import in your js files

```js
// import as a Vue plugin
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

// the second parameter of Vue.use() is optional
Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
})

// OR: import as a Vue component
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown)
```

Then use `VueShowdown` in your vue SFC

```vue
<!-- set options via props -->
<VueShowdown
  markdown="## markdown text"
  flavor="github"
  :options="{ emoji: true }"/>
```

::: tip
vue-showdown also provides [UMD](https://github.com/umdjs/umd), [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) and [ES Module](http://exploringjs.com/es6/ch_modules.html) builds as vue does. Go to the [Vue document](https://vuejs.org/v2/guide/installation.html#Terms) for more details.
:::


### Browser

Direct `<script>` import after `vue.js`

```html
<script src="path/to/dist/vue.min.js"></script>
<script src="path/to/dist/vue-showdown.min.js"></script>
```

Then use `vue-showdown` as a vue component directly

```html
<div id="#app">
  <vue-showdown markdown="## markdown text"/>
</div>
```

## Plugin Options

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  // Plugin options here
})
```

### flavor

Default flavor of showdown. Docs [here](https://github.com/showdownjs/showdown#flavors).

- type: `string`
- default: `null`
- possible values: `'original', 'vanilla', 'github'`

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

- type: `string`
- default: `null`

```vue
<VueShowdown markdown="# Hello, world!"/>
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
<VueShowdown markdown="# Hello, world!" tag="span"/>
<!-- renders as -->
<span>
  <h1>Hello, world!</h1>
</span>
```

### flavor

Flavor of showdown. Docs [here](https://github.com/showdownjs/showdown#flavors).

- type: `string`
- default: `null`
- possible values: `'original', 'vanilla', 'github'`

::: tip
If you set `flavor` via props, all the options will be reset to the flavor's options, which will override the default options you set by `Vue.use()`.
:::

### options

Options of showdown. Docs [here](https://github.com/showdownjs/showdown#valid-options).

- type: `Object`
- default: `{}`

::: tip
The `options` prop will override the default options set by `Vue.use()`.

If you also set `flavor` prop, the `options` prop will override the flavor's options, too.
:::

### extensions

Extensions of showdown. Docs [here](https://github.com/showdownjs/showdown#extensions).

- type: `[Object, Array]`
- default: `null`

::: tip
Check the [Advance - Extensions](./#extensions-2) section for details.
:::

## Advance

### Showdown library

You can also import `showdown` itself from `vue-showdown` for advance usages.

```js
import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'

showdown.setFlavor('github')

Vue.use(VueShowdown)
```

### Extensions

According to the [official docs about extensions](https://github.com/showdownjs/showdown/wiki/extensions), there is no way to set default extensions globally for now.

So the only way to set extensions is via the `extensions` prop of the `VueShowdown` component.

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

Alternatively, you can register extensions globally via `showdown.extension()`, and reference it in the `extension` prop directly by the name that you registered.

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
