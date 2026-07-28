const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
  author: String,
  text: {
    type: String,
    required: true,
  },
})

quoteSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Quote', quoteSchema)