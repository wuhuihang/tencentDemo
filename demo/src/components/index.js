import FormItem from './form-item'
import vMessage from './Message'

export default {
  install(Vue) {
    Vue.use(vMessage)
    Vue.component('hh-form-item', FormItem)
  }
}
