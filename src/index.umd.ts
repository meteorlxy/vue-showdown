import { VueShowdownPlugin, VueShowdown } from './index';

export * from './index';

declare global {
  interface Window {
    VueShowdownPlugin: typeof VueShowdownPlugin;
    VueShowdown: typeof VueShowdown;
  }
}

if (typeof window !== 'undefined') {
  window.VueShowdownPlugin = VueShowdownPlugin;
  window.VueShowdown = VueShowdown;
}
