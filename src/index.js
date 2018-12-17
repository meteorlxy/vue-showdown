import showdown from 'showdown'
import VueShowdownComponent from './components/vue-showdown'

const VueShowdown = {
  install (Vue, options = {}) {
    for (const opt of Object.entries(options)) {
      const [name, value] = opt

      showdown.setOption(name, value)
    }
    Vue.component('VueShowdown', VueShowdownComponent)
  },
  VueShowdown: VueShowdownComponent
}

export default VueShowdown

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueShowdown)
}
