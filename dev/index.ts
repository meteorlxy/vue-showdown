import { createApp } from 'vue';
import { showdown, VueShowdownPlugin } from 'vue-showdown';
import Dev from './dev.vue';

showdown.extension('replaceMarkdownByShowdown', () => [
  {
    type: 'lang',
    regex: /markdown/g,
    replace: 'showdown',
  },
]);

const app = createApp(Dev);

app.use(VueShowdownPlugin);

app.mount('#app');
