import Vue from 'vue'
import axios from 'axios'
import { Loading } from 'element-ui'

let httpServer = axios.create()
let axiosGet = httpServer.get
let loading
let startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
let endLoading = () => {
  loading.close()
}
let needLoadingRequestCount = 0
let showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

let tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

httpServer.defaults.timeout = 30000
httpServer.interceptors.request.use(
  config => {
    if (!config.notShowLoading) {
      showFullScreenLoading()
    }
    const token = sessionStorage.getItem('HH_BLOG_TOKEN')
    if (token) {
      // Bearer是JWT的认证头部信息
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
httpServer.interceptors.response.use(
  response => {
    let data = response.data
    if (!response.config.notShowLoading) {
      tryHideFullScreenLoading()
    }
    if (data.code === 0) {
      return Promise.resolve(data.data)
    } else {
      Vue.prototype.$message({
        type: 'error',
        message: data.msg
      })
      return Promise.reject(data)
    }
  },
  err => {
    let msg = ''
    if (!err.response.config.notShowLoading) {
      tryHideFullScreenLoading()
    }
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          msg = '错误请求'
          break
        case 401:
          msg = '未授权或登录超时，请重新登录'
          break
        case 403:
          msg = '拒绝访问'
          break
        case 404:
          msg = '请求错误,未找到该资源'
          break
        case 405:
          msg = '请求方法未允许'
          break
        case 408:
          msg = '请求超时'
          break
        case 500:
          msg = '服务器端出错'
          break
        case 501:
          msg = '网络未实现'
          break
        case 502:
          msg = '网络错误'
          break
        case 503:
          msg = '服务不可用'
          break
        case 504:
          msg = '网络超时'
          break
        case 505:
          msg = 'http版本不支持该请求'
          break
        default:
          msg = `连接错误${err.response.status}`
      }
    } else {
      msg = '连接到服务器失败'
    }
    Vue.prototype.$message({
      type: 'error',
      message: msg
    })
    return Promise.reject(err.response)
  }
)
httpServer.get = (url, params, config) =>
  axiosGet(url, Object.assign({ params }, config))
export default httpServer
