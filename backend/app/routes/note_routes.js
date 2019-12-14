let ObejctID      = require('mongodb').ObjectID

module.exports = (app, db) => {
    
    app.get('/notes/:id', (req, res) => { 
        const ID = req.params.id
        const details = {'_id' : new ObejctID(ID)}
        db.collection('notes').findOne(details, (err, item)=>{
            if(err) {
                res.send({'error' : err})
                console.info('A note was fetched')
            } else {
                res.send(item)
            }
        }) 
    })

    app.get('/notes', (req, res) => {
        db.collection('notes').find({}, {limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
        if (e) {
            return next(e)
        }
        if(results.length == 0) {
            res.send({"error" : "404"})
            return
        }
        res.send(results)
        console.info('Notes were fetched')
        })
    }) 

    app.delete('/notes/:id', (req, res) => { 
        const ID = req.params.id
        const details = {'_id' : new ObejctID(ID)}
        db.collection('notes').deleteOne(details, (err, item)=>{
            if(err) {
                res.send({'error' : err})
            } else {
                res.send({'code' : '200'})
                console.info(`Note ${ID} deleted`)
            }
        })
    })

    app.delete('/notes', (req, res) => {
        db.collection('notes').deleteMany({})
        res.send({
            "message" : "all notes deleted"
        })
    })
    
    app.put('/notes/:id', (req, res) => { 
          const ID = req.params.id
          const details = {'_id' : new ObejctID(ID)}
          const note = {text: req.body.body, title: req.body.title}
        db.collection('notes').update(details, note, (err, result) => {
            if(err) {
                res.send({'error': 'oppsie daisy'})
            } else {
                console.info(`Note ${ID} updated`)
                res.send({'code':'200'})
            }
        })
    }) 

    app.post('/notes', async (req, res) => {
        const note = {text: req.body.body, title: req.body.title}
        await db.collection('notes').insertOne(note).then(results => {
            console.info('note saved')
            res.send({'code':'200'})
        }) 
    }) 
} 