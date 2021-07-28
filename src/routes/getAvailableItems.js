'use strict'
const mockDBCalls = require('../database/index.js')

const getAvailableItems = async (request, response, next) => {
  try {
    const data = await mockDBCalls.getAvailableItems()
    return response.json({ data })
  } catch (e) {
    next(e)
  }
}

module.exports = (app) => {
  app.get('/items', getAvailableItems)
}
