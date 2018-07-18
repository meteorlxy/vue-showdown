---
home: true
heroImage: /logo.png
actionText: 试一下 →
actionLink: /zh/playground/
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
