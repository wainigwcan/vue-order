const express = require('express')
const app = express()

var goods = require('./src/data/goods.json')
var ratings = require('./src/data/ratings.json')
var seller = require('./src/data/seller.json')

var apiRoutes = express.Router()

app.use('/api', apiRoutes)

module.exports = {
    // baseUrl:
    devServer: {
        before: function (app) {
            //可请求   api/data
            app.get('/api/goods', function (req, res) {
                res.json({code: 0, data: goods})
            })
            app.get('/api/ratings', function (req, res) {
                res.json({code: 0, data: ratings})
            })
            app.get('/api/seller', function (req, res) {
                res.json({code: 0, data: seller})
            })
        }
    }
}