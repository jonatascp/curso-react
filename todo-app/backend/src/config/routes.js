const express = require('express')

module.exports = function(server) {

<<<<<<< HEAD
    // API Routes
=======
    //API Routes
>>>>>>> ff7171c80f660100bf2fe862fc9e9926ff0cfa39
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
<<<<<<< HEAD
    todoService.register(router, '/todos')   
=======
    todoService.register(router, '/todos')

>>>>>>> ff7171c80f660100bf2fe862fc9e9926ff0cfa39
}