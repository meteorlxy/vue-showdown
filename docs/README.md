---
home: true
heroImage: /logo.png
actionText: Try it →
actionLink: /playground/
features:
- title: Showdown
  details: Parse markdown text in client side with the power of showdown.js.
- title: Vue component
  details: Wrapped showdown.js as a Vue component, and you can use it easily.
footer: MIT Licensed | Copyright © 2018-present meteorlxy
---

## Easy to use

Import and use it

```js
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  options: {
    emoji: true
  }
})
```

Then use `VueShowdown` in your vue SFC

```vue
<VueShowdown markdown="`vue-showdown` is easy to use :kissing_heart:"/>
```

Result

<VueShowdown markdown="`vue-showdown` is easy to use :kissing_heart:" :options="{ emoji: true }"/>

---

See the detailed [guide](./guide/) :point_left:
