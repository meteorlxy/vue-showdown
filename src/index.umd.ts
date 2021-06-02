import type { Plugin, Component } from 'vue';
import { VueShowdownPlugin, VueShowdown } from './index';

export * from './index';

declare global {
  interface Window {
    VueShowdownPlugin: Plugin;
    VueShowdown: Component;
  }
}

if (typeof window !== 'undefined') {
  window.VueShowdownPlugin = VueShowdownPlugin;
  window.VueShowdown = VueShowdown;
}
