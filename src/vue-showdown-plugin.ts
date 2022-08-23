import showdown from 'showdown';
import type { Plugin } from 'vue';
import { VueShowdown } from './vue-showdown';

/**
 * The VueShowdown plugin
 *
 * @example
 * ```ts
 * import { createApp } from 'vue';
 * import { VueShowdownPlugin } from 'vue-showdown';
 *
 * const app = createApp();
 * app.use(VueShowdownPlugin);
 * ```
 *
 * @public
 */
export const VueShowdownPlugin: Plugin = {
  install(app, { flavor = null, options = {} } = {}) {
    // set default flavor
    if (flavor !== null) {
      showdown.setFlavor(flavor);
    }

    // set default options (override flavor)
    Object.entries(options).forEach(([key, value]) => {
      showdown.setOption(key, value);
    });

    // register vue-showdown component globally
    // eslint-disable-next-line vue/match-component-file-name
    app.component('VueShowdown', VueShowdown);
  },
};
