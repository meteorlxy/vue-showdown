import { resolve } from 'path';
import vuePlugin from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'dev'),
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      'vue-showdown': resolve(__dirname, 'src'),
    },
  },
  plugins: [vuePlugin()],
});
