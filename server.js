const mongoose = require('mongoose')
const express = require('express')
const requireDir = require('require-dir')
const cors = require('cors') 

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/notableapi', {
    useNewUrlParser: true
})




requireDir('./src/models')
const Note = mongoose.model('Note')


app.use('/api', require('./src/routes'))
app.listen(PORT)
console.log(`We're online on port > ${PORT}`) 