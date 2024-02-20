import VueShowdownPlugin from 'vue-showdown';
import { defineClientConfig, resolvers } from 'vuepress/client';

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
