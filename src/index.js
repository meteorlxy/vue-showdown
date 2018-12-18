import showdown from 'showdown'
import VueShowdownComponent from './components/vue-showdown'

const VueShowdown = {
  install (Vue, options = {}) {
    for (const [key, value] of Object.entries(options)) {
      showdown.setOption(key, value)
    }
    Vue.component('VueShowdown', VueShowdownComponent)
  },
  VueShowdown: VueShowdownComponent
}

export default VueShowdown

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueShowdown)
}
