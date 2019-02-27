module.exports = {
  devServer: {
    port: '8080', //代理端口
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
