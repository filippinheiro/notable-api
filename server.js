const mongoose = require('mongoose')
const express = require('express')
const requireDir = require('require-dir')
const cors = require('cors') 
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

require('./config/db')

requireDir('./src/models')
const Note = mongoose.model('Note')


app.use('/api', require('./src/routes'))
app.listen(PORT)
console.log(`We're online on port > ${PORT}`) 