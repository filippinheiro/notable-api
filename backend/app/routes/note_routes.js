let ObejctID      = require('mongodb').ObjectID

module.exports = (app, db) => {

    app.get('/notes/:id', (req, res) => { 
        const ID = req.params.id
        const details = {'_id' : new ObejctID(ID)}
        db.collection('notes').findOne(details, (err, item)=>{
            if(err) {
                res.send({'error' : err})
            } else {
                res.send(item)
            }
        }) 
    })

    
    
    app.delete('/notes/:id', (req, res) => { 
        const ID = req.params.id
        const details = {'_id' : new ObejctID(ID)}
        db.collection('notes').remove(details, (err, item)=>{
            if(err) {
                res.send({'error' : err})
            } else {
                res.send(
                    {
                    'result' : 
                    {
                        'message' : `note succesfully deleted`,
                        '_id' : `${ID}`
                    }
                })
            }
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
                res.send('Succes')
            }
        })
    }) 

    app.post('/notes', async (req, res) => {
        const note = {text: req.body.body, title: req.body.title}
        await db.collection('notes').insertOne(note).then(results => {
            res.send({'result' : results.ops[0]}) 
        }) 
    }) 
} 