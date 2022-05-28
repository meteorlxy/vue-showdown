import { defineClientConfig } from '@vuepress/client';
import VueShowdownPlugin from 'vue-showdown';

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueShowdownPlugin, {
      options: {
        emoji: true,
      },
    });
  },
});
