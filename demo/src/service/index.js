// import Utils from './Utils.js'
import HttpServer from './httpServer.js'

export default {
  install(Vue) {
    Vue.prototype.$HttpServer = HttpServer
  }
}
