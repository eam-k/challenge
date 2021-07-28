'use strict'
const _ = require('lodash')
const db = require('./db.js')

/**
 * Simulates an asynchronous database call.
 * @param {} dataAccessMethod
 * @returns
 */
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataAccessMethod())
    }, 500)
  })
}

/**
 * Return a collection of user information
 * @returns {Promise<Array<{ username: string, age: number }>>} User info.
 */
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo)
  return mockDBCall(dataAccessMethod)
}

/**
 * Return a collection of users that use a specified item.
 * @param {string} item
 * @returns {Promise<Array<string>>}
 */
const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    const usersUsingItem = Object.keys(db.itemsOfUserByUsername).filter(
      (name) => {
        return db.itemsOfUserByUsername[name].indexOf(item) !== -1
      }
    )
    return usersUsingItem
  }
  return mockDBCall(dataAccessMethod)
}

/**
 * Return a collection of unique items used by users.
 *
 * @returns {Promise<Array<string>>} List of unique items used by users.
 */
const getAvailableItems = () => {
  const dataAccessMethod = () => {
    const items = new Set()
    Object.keys(db.itemsOfUserByUsername).forEach((name) => {
      db.itemsOfUserByUsername[name].forEach((item) => items.add(item))
    })
    return [...items]
  }
  return mockDBCall(dataAccessMethod)
}

module.exports = {
  getAvailableItems,
  getListOfAgesOfUsersWith,
  getUsers,
}
