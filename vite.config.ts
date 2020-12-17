import { join } from 'path';
import { cachedRead } from 'vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  root: __dirname,
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js',
    'vue-showdown': '/src/index.ts',
  },
  configureServer: ({ app }) => {
    app.use(async (ctx, next) => {
      await next();

      if (ctx.url === '/index.html') {
        await cachedRead(ctx, join(__dirname, 'dev/index.html'));
        ctx.status = 200;
      }
    });
  },
};

export default config;
