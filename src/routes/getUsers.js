'use strict'
const mockDBCalls = require('../database/index.js')

const getUsersHandler = async (request, response, next) => {
  try {
    const data = await mockDBCalls.getUsers()
    return response.status(200).send(JSON.stringify(data))
  } catch (e) {
    next(e)
  }
}

module.exports = (app) => {
  app.get('/users', getUsersHandler)
}
