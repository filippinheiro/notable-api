const express = require('express')
const cors = require('cors') 
const mongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')


const db = require('./config/db')
const routes = require('./app/routes')
const PORT = 5000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))


mongoClient.connect(db.url, (err, database) => {
    if(err) return console.log('erro de conexao', err.message)
    const notable = database.db('notable')
    routes(app, notable)
    app.listen(PORT, () => {
        console.log(`We're live on port ${PORT}`)
    }) 
}) 

app.use(cors())