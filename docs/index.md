---
home: true
heroImage: /logo.png
# actionText: Get Started →
# actionLink: /guide/
features:
- title: Showdown
  details: Parse markdown text in client side with the power of showdown.js.
- title: Vue component
  details: Wrapped showdown.js as a Vue component, and you can use it easily.
footer: MIT Licensed | vue-showdown
---

## Usage

### NPM

Install via npm / yarn

```sh
npm install vue-showdown
# OR
yarn add vue-showdown
```

Import in your js files

```js
// import via Vue.use() to set default options
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  /**
   * Set default options of showdown.js
   * @see https://github.com/showdownjs/showdown#valid-options
   */
})

// OR: import as a Vue component
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown)
```

Then use `VueShowdown` in your vue SFC

```vue
<VueShowdown markdown="## markdown text"/>
```

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

## Playground

### Input your markdown here:

<textarea
  class="markdown-input"
  placeholder="Input your markdown here"
  :rows="rows"
  v-model="markdownText"/>

### Output HTML here:

<section class="markdown-output">
  <VueShowdown :markdown="markdownText"/>
</section>

<script>
export default {
  data () {
    return {
      markdownText: '### Hello, Vue Showdown! \n\nInput your markdown here and get the HTML right now!'
    }
  },

  computed: {
    contentRows () {
      return this.markdownText.split('\n').length - 1
    },

    rows () {
      return this.contentRows < 3 ? 5 : this.contentRows + 2
    },
  }
}
</script>

<style lang="stylus" scoped>
@import '~@default-theme/styles/config.styl'

.markdown-input
  resize none
  outline none
  width 100%
  padding 15px
  font-size 16px
  background-color #fafbfc
  border 1px solid $borderColor
  border-radius 5px
  box-sizing border-box
  &:focus
    background-color #ffffff
    box-shadow 0 0 1px 1px lighten($accentColor, 50%)
  &::placeholder
    color $textLightColor
.markdown-output
  padding 15px
  margin-bottom 15px
  background-color #fafbfc
  border 1px solid $borderColor
  border-radius 5px
</style>
