const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
<<<<<<< HEAD
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
=======

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`backend is running on port ${port}.`)
>>>>>>> ff7171c80f660100bf2fe862fc9e9926ff0cfa39
})

module.exports = server