const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')


  })
  .catch((error) => {
    console.error('error connecting to Mongo', error)
  })

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    minLength: 3,
    required: true
  },
  number:{
    type: String,
    minLength:8,
    required: true
  }
})

const Person = mongoose.model('Person', personSchema, 'people')

module.exports = Person