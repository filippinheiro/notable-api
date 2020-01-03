const mongoose = require('mongoose')
const connectionString = process.env.DATABASE_URL 


const db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db