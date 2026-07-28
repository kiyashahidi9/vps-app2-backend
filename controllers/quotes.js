const quotesRouter = require('express').Router()
const Quote = require('../models/quote')

quotesRouter.get('/', async (request, response) => {
  const quotes = await Quote.find({})
  response.json(quotes)
})

quotesRouter.get('/:id', async (request, response) => {
  const quote = await Quote.findById(request.params.id)
  response.json(quote)
})

quotesRouter.post('/', async (request, response) => {
  const { author, text } = request.body

  const newQuote = new Quote({
    author: author ? author : 'Unknown',
    text: text,
  })

  const savedQuote = await newQuote.save()
  response.json(savedQuote)
})

quotesRouter.delete('/:id', async (request, response) => {
  const deletedQuote = await Quote.findByIdAndDelete(request.params.id)
  response.json(deletedQuote)
})

quotesRouter.delete('/delete/all', async (request, response) => {
  await Quote.deleteMany({})
  response.json({'success': 'everything is gone :D'})
})


module.exports = quotesRouter