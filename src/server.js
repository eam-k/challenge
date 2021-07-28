'use strict'
const express = require('express')
const app = express()
const middlewares = require('./middlewares')
const registerRoutes = require('./routes')

// server config
const port = process.env.PORT || 3000

// register middlewares
middlewares(app)

// register routes
registerRoutes(app)

// create server start method
const start = () => {
  return new Promise((resolve) => {
    // start the server
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`)
      resolve()
    })
  }).catch((error) => {
    console.log(`failed to start server => ${error.message}`)
  })
}

module.exports = start
