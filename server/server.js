require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/post/getUserPost:${id}', ctrl.getUserPost)
app.get('/api/post/searchForPosts', ctrl.searchForPosts)






app.listen(SERVER_PORT, () => console.log(`002 Server ready on port ${SERVER_PORT}`))