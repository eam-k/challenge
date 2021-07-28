'use strict'
const express = require('express')
const app = express()
const initSetup = require('./middlewares/setup')
const errorHandling = require('./middlewares/error')
const registerRoutes = require('./routes')

// Server config
const port = process.env.PORT || 3000

// Register middlewares
initSetup(app)

// Register routes
registerRoutes(app)

// Basic error handler
errorHandling(app)

// Create server start method
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
