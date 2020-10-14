const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const emailValidation = require('./src/middleware/emailValidation')

app.get('/', (req, res) => {
    res.send('Welcome to the namnsdags-backend!')
})

const registerUser = require('./src/controllers/addUser')
app.post('/register', emailValidation, registerUser)

const leaveUser = require('./src/controllers/removeUser')
app.post('/leave', emailValidation, leaveUser)

const getUsers = require('./src/controllers/getUsers')
app.get('/users', getUsers)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
