require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const PG_USER = process.env.PG_USER
const PG_HOST = process.env.PG_HOST
const PG_DATABASE = process.env.PG_DATABASE
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_PORT = process.env.PG_PORT

module.exports = {
  PORT,
  MONGODB_URI,
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_PASSWORD,
  PG_PORT,
}