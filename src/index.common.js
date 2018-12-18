import VueShowdown from './index'

export default VueShowdown

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueShowdown)
}
