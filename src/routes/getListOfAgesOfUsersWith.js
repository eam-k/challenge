'use strict'
const mockDBCalls = require('../database/index.js')

const getListOfAgesOfUsersWithHandler = (request, response, next) => {
  const { item } = request.params

  if (typeof item !== 'string' || item.length < 0) {
    return response.json({ data: [] })
  }

  Promise.all([
    mockDBCalls.getUsers(),
    mockDBCalls.getListOfAgesOfUsersWith(item),
  ])
    .then(([allUsersInfo, usersUsingItem]) => {
      const ageAndCount = {}
      usersUsingItem.forEach((name) => {
        const userInfo = allUsersInfo.find((info) => info.username === name)
        if (ageAndCount[userInfo.age] === undefined) {
          ageAndCount[userInfo.age] = 1
        } else {
          ageAndCount[userInfo.age] += 1
        }
      })
      const groups = Object.entries(ageAndCount).map(([age, count]) => {
        return { age, count }
      })
      return response.json({ data: groups })
    })
    .catch((err) => {
      console.error('Calling next')
      next(err)
    })
}

module.exports = (app) => {
  app.get('/users/age/:item', getListOfAgesOfUsersWithHandler)
}
