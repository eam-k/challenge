'use strict'

module.exports = (app) => {
  app.use(function (req, res) {
    res.redirect('/')
  })
}
