import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { json, urlencoded } from 'express'

export const middlewares = [
  dotenv.config(),
  cookieParser(),
  json(),
  urlencoded({ extended: true })
]
