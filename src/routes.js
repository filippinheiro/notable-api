const express = require('express')
const routes = express.Router()
const NoteController = require('./controllers/NoteController')

routes.get('/notes', NoteController.index)
routes.get('/notes/search', NoteController.filter)
routes.get('/notes/:id', NoteController.show)
routes.post('/notes', NoteController.store)
routes.put('/notes/:id', NoteController.update)
routes.delete('/notes/:id', NoteController.destroy)

module.exports = routes