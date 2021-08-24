const express = require('express')
const cors = require('cors')
const controller = require('./controller.js')
const port = process.env.PORT || 5050

const app = express()

app.use(express.static('client'))

app.get('/', controller.home)

app.listen(port, () => console.log('Up and running on 5050!'))