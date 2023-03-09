require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person.js')

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

morgan.token('data', (req, res) => req.body.length > 0 ? JSON.stringify(req.body) : '')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('build'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(result => {
    response.json(result)
    mongoose.connection.close()
  })
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(x => x.id === id)
  
  if (person)
    response.json(person)
  else
    response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(x => x.id !== id)
  
  response.status(204).end()
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
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
  else if (persons.find(x => x.name.toLowerCase() === request.body.name.toLowerCase()))
    return response.status(400).json({error: 'name must be unique'})
  else {
    let person = { id: nextId(), name: request.body.name, number: request.body.number }
    persons = persons.concat(person)
    response.json(person)
  } 
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})