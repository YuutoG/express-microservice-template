import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './api/routes/index.mjs'
import usersRouter from './api/routes/users.mjs'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
// view engine setup
app.set('views', path.resolve('api/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
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
export default app
