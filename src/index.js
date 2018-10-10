'use strict'

const express = require('express')
const {host, port} = require('./config/config')

// App
const app = express()
app.get('/', (req, res) => {
  res.send('Hello world\n')
})

app.listen(port, host)
console.log(`Running on http://${port}:${host}`)
