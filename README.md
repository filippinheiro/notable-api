#Notable

This is a simple Node API for managing Notes and memos.
It's very simple and easy to use, you can delete, create, update, show details and filter the notes on your app

##Settings for contributing
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