const Router = require('express').Router
const router = Router()
const usersRouter = require('./users')
const sexesRouter = require('./sex')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.use('/users', usersRouter)
router.use('/sexes', sexesRouter)

module.exports = router
