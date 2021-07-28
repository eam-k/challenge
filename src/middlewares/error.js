module.exports = (app) => {
  app.use(function (err, req, res, next) {
    console.log('Never gets here')
    console.error('Error [Service ABC] : ', err)
    res.status(500)
    res.json({ errorMsg: "We're sorry, we can't complete this call" })
    next(err)
  })
}
