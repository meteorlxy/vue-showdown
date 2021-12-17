import type { Component, Plugin } from 'vue';
import { VueShowdown, VueShowdownPlugin } from './index';

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
