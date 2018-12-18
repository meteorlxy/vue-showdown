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

const options = {} // set the default showdown options

Vue.use(VueShowdown, options /* optional */)

// OR: import as a Vue component
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown) // set options via props
```

Then use `VueShowdown` in your vue SFC

```vue
<VueShowdown markdown="## markdown text"/>
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

## Props

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
- default: `'vanilla'`
- possible values: `'original', 'vanilla', 'github'`

### options

Options of showdown. Docs [here](https://github.com/showdownjs/showdown#valid-options).

- type: `Object`
- default: `{}`

::: tip
The props `options` will override the default options set by `Vue.use()`.
:::

## Extensions

You can also load extensions of showdown in the `options` object:

- In `Vue.use()` as default options
- In `options` props of `vue-showdown` component

See [official docs about extensions](https://github.com/showdownjs/showdown#extensions)

### Example

```sh
npm install showdown-twitter
# OR
yarn add showdown-twitter
```

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import 'showdown-twitter'

Vue.use(VueShowdown, {
  extensions: ['twitter']
})
```

```vue
<VueShowdown markdown="## markdown text" :options="{ extensions: ['twitter'] }"/>
```
