import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Service from './service'
import Components from './components'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.use(Service)
Vue.use(Components)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
