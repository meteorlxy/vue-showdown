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
footer: MIT Licensed | Copyright © 2018-present meteorlxy
---

## 快速使用

引入并使用 vue-showdown

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  emoji: true
})
```

在你的 Vue 单文件组件中使用 `VueShowdown`

```vue
<VueShowdown markdown="`vue-showdown` 可以快速使用 :kissing_heart:"/>
```

Result

<VueShowdown markdown="`vue-showdown` 可以快速使用 :kissing_heart:" :options="{ emoji: true }"/>

---

查看详细[使用指南](./guide/) :point_left:
