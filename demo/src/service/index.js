import HttpServer from './httpServer.js'
import Methods from './methods.js'

export default {
  install(Vue) {
    Vue.prototype.$HttpServer = HttpServer
    Vue.prototype.$Methods = Methods
  }
}
