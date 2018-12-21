import Vue, {
  ComponentOptions,
  PluginFunction,
  PluginObject,
} from 'vue'

import showdown, {
  ShowdownOptions,
} from 'showdown'

export interface VueShowdownUseOptions {
  flavor?: string
  options?: showdown.ShowdownOptions
}

export class VueShowdownObject implements PluginObject<VueShowdownUseOptions> {
  install: PluginFunction<VueShowdownUseOptions>
  showdown: typeof showdown
  VueShowdown: ComponentOptions<Vue>
}

declare const VueShowdown: VueShowdownObject

export default VueShowdown
