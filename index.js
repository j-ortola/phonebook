require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person.js')

morgan.token('data', (req, res) => req.body.length > 0 ? JSON.stringify(req.body) : '')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('build'))

app.get('/api/persons', (request, response) => {
  Person.find({})
    .then(result => response.json(result))
    .catch(error => response.status(501).end())
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  Person.find({ id })
    .then(result => response.json(result))
    .catch(error => response.status(404).end())
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  Person.deleteOne({ id })
    .then(result => response.status(204).end())
    .catch(error => response.status(404).end())
  
  response.status(204).end()
})

app.get('/info', (request, response) => {
  Person.find({})
    .then(result => response.send(`<p>Phonebook has info for ${result.length} people</p><p>${new Date()}</p>`))
    .catch(error => response.status(501).end())
})

app.post('/api/persons', (request, response) => {
  const nextId = () => {
    let id = Math.floor(Math.random() * 100)
    
    while (persons.find(x => x.id === id))
      id = Math.floor(Math.random() * 100)
    return id
  }
  
  if (!request.body.name || !request.body.number)
    return response.status(400).json({error: 'content missing'})
  //else if (persons.find(x => x.name.toLowerCase() === request.body.name.toLowerCase()))
  //  return response.status(400).json({error: 'name must be unique'})
  else {
    const person = new Person({ id: nextId(), name: request.body.name, number: request.body.number })
    person.save()
      .then(result => response.json(result))
      .catch(error => response.status(500).end())
  } 
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})