const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()

const Person = require('./models/people')

app.use(cors())
app.use(express.json())
app.use(express.static('/public'))

app.get('/api/getall', (req,res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
    .catch(error => {
      console.error(error.message)
    })
})

app.get('/api/:id',(req,res) => {
  Person.findById(req.params.id)
    .then(person => {
      if(person){
        res.json(person)
      } else {
        res.status(404).json({ error: 'Person not found' })
      }
    })
    .catch(error => {
      console.error(error)
    })
})

app.post('/api/add',(req,res) => {
  const body = req.body
  console.log("Request Body:", body);
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Name and number are required' });
  }
  if(body.name.length < 3) {
    return res.status(400).json({ error: `Person validation failed: "${body.name}" is shorter than 3 symbols (allowed length)` })
  }
  const person = new Person({
    name: body.name,
    number: body.number,
    id: body.id
  })

  person.save()
    .then(savedPerson => {
      res.status(201).json(savedPerson)
    })
    .catch(error => {
      if(error.name === 'ValidationError'){
        res.status(400).json({ error:error.message })
      }
    })

})

app.put('/api/update/:id',(req,res) => {
  const { name, number } = req.body
  Person.findByIdAndUpdate(req.params.id, { name,number }, { new: true, runValidators:true, context:'query' } )
    .then(updatedPerson => {
      if(updatedPerson){
        res.json(updatedPerson)
      }
    })
    .catch(error => {
      console.error(error.message)
    })
})

app.delete('/api/delete/:id',(req,res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(deletedPerson => {
      res.status(200).json(deletedPerson)
    })
    .catch(error => {
      console.error(error.message)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} port`)
})