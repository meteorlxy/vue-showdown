import showdown from 'showdown'
import VueShowdownComponent from './components/vue-showdown'

const VueShowdown = {
  install (Vue, {
    flavor = null,
    options = {},
  } = {}) {
    // set default flavor
    if (flavor !== null) {
      showdown.setFlavor(flavor)
    }

    // set default options (override flavor)
    for (const key in options) {
      showdown.setOption(key, options[key])
    }

    // register vue-showdown component globally
    Vue.component('VueShowdown', VueShowdownComponent)
  },

  // export
  VueShowdown: VueShowdownComponent,

  showdown: showdown,
}

export {
  VueShowdown as default,
  VueShowdownComponent as VueShowdown,
  showdown,
}
