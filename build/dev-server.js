var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use(['/skus','/spus'], proxy({
  target: ' https://www.smartisan.com/product',
  changeOrigin: true
  })
)

app.listen(8080)
