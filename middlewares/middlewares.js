const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const express = require('express')
const middlewares = [
  dotenv.config(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true })
]

module.exports = middlewares
