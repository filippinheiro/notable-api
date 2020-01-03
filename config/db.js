const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectionString = process.env.DATABASE_URL 
dotenv.config()

const db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db
