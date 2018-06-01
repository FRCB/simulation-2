require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , controller = require('./controller')

const app = express();

let { SERVER_PORT, SESSION_SECRET } = process.env;

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// first step - set BodyParder
app.use(bodyParser.json())

// Setup session here
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//Setup middleware here
app.get('/api/houses', controller.getAll)
app.post('/api/houses', controller.addNewHouse)
app.delete('/api/houses', controller.deleteHouse)

//Setup register endpoint here

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})