import type { ClientAppEnhance } from '@vuepress/client';
import VueShowdownPlugin from 'vue-showdown';

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(VueShowdownPlugin, {
    options: {
      emoji: true,
    },
  });
};

export default clientAppEnhance;
