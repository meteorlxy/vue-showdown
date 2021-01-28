import { resolve } from 'path';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const config: UserConfig = {
  root: resolve(__dirname, 'dev'),
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js',
    'vue-showdown': resolve(__dirname, 'src'),
  },
  plugins: [vue()],
};

export default config;
