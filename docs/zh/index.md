---
home: true
heroImage: /logo.png
# actionText: 开始使用 →
# actionLink: /guide/
features:
- title: Showdown
  details: 通过showdown.js在客户端解析markdown代码
- title: Vue component
  details: 将showdown.js包装成Vue组件，你可以快速使用它
footer: MIT Licensed | vue-showdown
---

## 使用方法

### NPM

通过 npm / yarn 进行安装

```bash
npm install vue-showdown
# 或者
yarn add vue-showdown
```

在你的 js 文件中引入

```js
// 通过 Vue.use() 可以设置默认配置 options
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  /**
   * 设置 showdown.js 的默认配置
   * @see https://github.com/showdownjs/showdown#valid-options
   */
})

// 或者: 作为 Vue 组件引入
import Vue from 'vue'
import { VueShowdown } from 'vue-showdown'

Vue.component('VueShowdown', VueShowdown)
```

现在，你可以在你的 Vue 单文件组件中使用 `VueShowdown`

```vue
<VueShowdown markdown="## markdown text"/>
```

### 浏览器

通过`<script>`标签，在`vue.js`之后引入

```html
<script src="path/to/dist/vue.min.js"></script>
<script src="path/to/dist/vue-showdown.min.js"></script>
```

然后就可以直接使用`vue-showdown`组件了

```html
<div id="#app">
  <vue-showdown markdown="## markdown text"/>
</div>
```

## Playground

### 输入你的 Markdown 代码：

<textarea class="markdown-input" placeholder="Input your markdown here" :rows="rows" v-model="markdownText"/>

### 输出解析后的 HTML ：

<section class="markdown-output">
  <VueShowdown :markdown="markdownText"/>
</section>

<script>
export default {
  data () {
    return {
      markdownText: '### Hello, Vue Showdown! \n\n输入你的 Markdown 代码，立即得到相应的 HTML ！'
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
