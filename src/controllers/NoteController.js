const mongoose = require('mongoose')
const Note = mongoose.model('Note')

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query
        const notes = await Note.paginate({}, {page, limit : 6})
        return response.json(notes)
    },

    async show(request, response) {
        const note = await Note.findById(request.params.id)
        return response.json(note)
    },

    async filter(request, response) {
        const {keyword} = request.query
        var regex = new RegExp(keyword, 'i')
        const notes = await Note.find({$or: [{content: regex}, {title: regex}]}, (error, query) => query)
        return response.json(notes)
    },

    async store(request, response) {
        const newNoteInfo = request.body
        const newNoteObject = await Note.create(newNoteInfo)
        return response.json(newNoteObject)
    },

    async update(request, response) {
        const uptadedNoteInfo = request.body
        const updatedNote = await Note.findByIdAndUpdate(request.params.id, uptadedNoteInfo, {new:true})
        return response.json(updatedNote)
    },

    async destroy(request, response) {
        await Note.findByIdAndRemove(request.params.id)
        return response.send()
    }

}