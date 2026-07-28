const express = require('express')
const mongoose = require('mongoose')
const dns = require('dns')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const quotesRouter = require('./controllers/quotes')
const commentsRouter = require('./controllers/comments')
const cors = require('cors')

const app = express()
app.use(cors())

// CONNECTING TO MONGODB

dns.setServers(['8.8.8.8', '8.8.4.4'])
mongoose
  .connect(config.MONGODB_URI, { family: 4 })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.static('dist'))
app.use(express.json())

// USING THE ROUTER
app.use('/api/quotes', quotesRouter)
app.use('/api/comments', commentsRouter)

// ERROR HANDLERS
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// EXPORTING APP
module.exports = app