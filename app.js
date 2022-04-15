const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const indexRouter = require('./api/routes/index.js')
const usersRouter = require('./api/routes/users.js')
const middlewares = require('./middlewares/middlewares.js')

const app = express()

// view engine setup
app.set('views', path.resolve('api/views'))
app.set('view engine', 'ejs')

// setting up middlewares
app.use(...middlewares)
// logging requests
app.use(logger('dev'))
app.use(express.static(path.resolve('public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
module.exports = app