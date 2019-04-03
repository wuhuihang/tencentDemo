module.exports = {
  devServer: {
    // host: "0.0.0.0",
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
