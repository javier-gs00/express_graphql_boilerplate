require('dotenv').config()
const express = require('express')

const app = express()

app.use('/', require('./routes'))

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
