const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const NoteSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    }, content: {
        type: String,
        required: true,
    }, createdAt: {
        type: Date,
        default: Date.now
    }
})

NoteSchema.plugin(mongoosePaginate)
mongoose.model('Note', NoteSchema)