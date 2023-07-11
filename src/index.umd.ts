import type { Component, Plugin } from 'vue';
import { VueShowdown, VueShowdownPlugin } from './index';

export * from './index';

declare global {
  interface Window {
    VueShowdown: Component;
    VueShowdownPlugin: Plugin;
  }
}

if (typeof window !== 'undefined') {
  window.VueShowdown = VueShowdown;
  window.VueShowdownPlugin = VueShowdownPlugin;
}
