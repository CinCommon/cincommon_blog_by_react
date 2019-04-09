const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/blog-api', {
      target: 'http://localhost:8081/',
      pathRewrite: function(reg) {
        return reg.replace('/blog-api', '')
      }
    })
  )
}
