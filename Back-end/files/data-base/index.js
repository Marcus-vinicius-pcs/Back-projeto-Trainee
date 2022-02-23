const express = require('express')
const app = express()
const data = require('./data-routes/data.routes')
app.use('/', data)
module.exports = app