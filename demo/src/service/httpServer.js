import axios from 'axios'
let httpServer = axios.create()
httpServer.defaults.timeout = 5000

httpServer.interceptors.request.use(
  config => {
    // config.data = JSON.stringify(config.data)
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
httpServer.interceptors.response.use(
  response => {
    let data = response.data
    if (data.code === 0) {
      return Promise.resolve(data.data)
    } else {
      return Promise.reject(data.data)
    }
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break
        case 401:
          console.log('未授权，请重新登录')
          break
        case 403:
          console.log('拒绝访问')
          break
        case 404:
          console.log('请求错误,未找到该资源')
          break
        case 405:
          console.log('请求方法未允许')
          break
        case 408:
          console.log('请求超时')
          break
        case 500:
          console.log('服务器端出错')
          break
        case 501:
          console.log('网络未实现')
          break
        case 502:
          console.log('网络错误')
          break
        case 503:
          console.log('服务不可用')
          break
        case 504:
          console.log('网络超时')
          break
        case 505:
          console.log('http版本不支持该请求')
          break
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
  }
)

export default httpServer
