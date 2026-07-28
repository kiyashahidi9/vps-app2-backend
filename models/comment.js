const config = require('../utils/config')
console.log(config.PG_PASSWORD)
const { Pool } = require('pg')

const Comment = new Pool({
  user: config.PG_USER,
  host: config.PG_HOST,
  database: config.PG_DATABASE,
  password: config.PG_PASSWORD,
  port: config.PG_PORT,
})

Comment.on('error', (error) => {
  console.error('Unexpected PostgreSQL error', error)
})

module.exports = Comment