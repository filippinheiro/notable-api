const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://filip:notable@notable-n7aon.gcp.mongodb.net/test?retryWrites=true&w=majority'

const db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db