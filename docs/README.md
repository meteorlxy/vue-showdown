---
home: true
heroImage: /logo.png
actions:
  - text: Guide
    link: /guide/
    type: secondary
  - text: Try it →
    link: /playground/
features:
  - title: Showdown
    details: Parse markdown text in client side with the power of showdown.js.
  - title: Vue component
    details: Wrapped showdown.js as a Vue component, and you can use it easily.
footer: MIT Licensed | Copyright © 2018-present meteorlxy
---

## Easy to use

Import and use it:

```js
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

Then use `<VueShowdown />` component in your vue SFC:

```vue
<VueShowdown markdown="`vue-showdown` is easy to use :kissing_heart:" />
```

Result

<VueShowdown markdown="`vue-showdown` is easy to use :kissing_heart:" />

---

See the detailed [guide](./guide/) :point_left:
