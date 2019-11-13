const express     = require('express')
const mongoClient = require('mongodb').MongoClient
const bodyParser  = require('body-parser')
const db          = require('./config/db')
const app         = express()
const routes      = require('./app/routes')
const PORT = 8000

app.use(bodyParser.urlencoded({extended: true}))

mongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err)
    const notable = database.db('notable')
    routes(app, notable)
    app.listen(PORT, () => {
        console.log(`We're live on port ${PORT}`)
    }) 
})