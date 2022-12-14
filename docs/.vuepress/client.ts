import { defineClientConfig, resolvers } from '@vuepress/client';
import VueShowdownPlugin from 'vue-showdown';

export default defineClientConfig({
  enhance({ app }) {
    resolvers.resolvePageHeadTitle = (page, siteLocale) =>
      [page.title, siteLocale.title].filter((item) => !!item).join(' | ');

    app.use(VueShowdownPlugin, {
      options: {
        emoji: true,
      },
    });
  },
});
