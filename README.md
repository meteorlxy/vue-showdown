# vue-showdown

> A very simple vue component for `showdown.js`

## Usage

### Get started

#### Import via `npm`

```bash
npm install --save vue-showdown
```

#### Register component

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
Vue.component('VueShowdown', VueShowdown)
```

#### Template

```html
<vue-showdown>{{ markdownText }}</vue-showdown>
```
or
```html
<vue-showdown :markdown="markdownText" />
```

### Parameters

```js
props: {
  markdown: {
    type: String,
    default: null,
  },
  display: {
    type: String,
    default: 'block',
  },
},
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
