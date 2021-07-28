'use strict'

const healthCheckHandler = async (request, response, next) => {
  try {
    response.status(200).send('OK')
  } catch (e) {
    next(e)
  }
}

module.exports = (app) => {
  app.get('/healthcheck', healthCheckHandler)
}
