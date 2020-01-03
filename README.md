# Notable

This is a simple Node API for managing Notes and memos.
It's very simple and easy to use, you can delete, create, update, show details and filter the notes on your app

## Settings for contributing

(You can use a AtlasDB account as I am doing)

1. Fork the repository
2. rum `npm install` on the project's root folder to install the depencies
3. pull a mongo docker image using `docker pull mongo`
4. create the database config file inside a config folder (Example)

```
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/notableapi', {
    useNewUrlParser: true
})

module.exports = db

```
After that everything should work just fine



For using the api for your app you can find the endpoints on [https://notable-note-api.herokuapp.com/api]



## Endpoints
```
GET /notes return all notes stored on the database, plus info about the pagination

    query: page (return the docs from a specific page (default=1))

    {
  "docs": [
    {
      ...
    }, //The actual notes
    {
      ...
    }
  ],
  //The pagination info
  "total": Number,
  "limit": Number,
  "page": Number,
  "pages": Number
}

GET /notes/search filter notes with an especif keyword that can be found or in the title or body

    query: keyword (required)

    [
        {
            _id: number
            title: string,
            content: string,
            createdAt:  date,
            __v: number
        }
    ]


GET /notes/:id return an especific note to show details on a modal for example

    {
        ...note
    }

POST /notes creates a note 

    The body shoud be a JSON like this one

    {
        title: string,
        content: string
    }

PUT /notes/:id updates a note

    the body can be like the POST one but there is no need to fill all the fields

DELETE /notes/:id deletes a note and return 200 ok
    
    no body needed


It is my first time building an API in node, so it's quite simple, so it's very open to sugsestions and

thank you for reading