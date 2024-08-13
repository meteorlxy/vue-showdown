---
home: true
heroImage: /logo.png
actions:
  - text: 指南
    link: /zh/guide/
    type: secondary
  - text: 试一下 →
    link: /zh/playground/
features:
  - title: Showdown
    details: 通过showdown.js在客户端解析markdown代码
  - title: Vue component
    details: 将showdown.js包装成Vue组件，你可以快速使用它
footer: MIT Licensed | Copyright © 2018-present meteorlxy
---

## 快速使用

引入并使用：

```ts
import { createApp } from 'vue';
import { VueShowdownPlugin } from 'vue-showdown';
import App from './App.vue';

const app = createApp(App);

app.use(VueShowdownPlugin, {
  options: {
    emoji: true,
  },
});
```

在你的 Vue 单文件组件中使用 `VueShowdown` 组件：

```vue
<VueShowdown markdown="`vue-showdown` 可以快速使用 :kissing_heart:" />
```

Result

<VueShowdown markdown="`vue-showdown` 可以快速使用 :kissing_heart:" />

---

查看详细[使用指南](./guide/) :point_left:
