const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
<<<<<<< HEAD
    description: {type: String, required: true},
    done: { type: Boolean, required: true, default: false},
=======
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
>>>>>>> ff7171c80f660100bf2fe862fc9e9926ff0cfa39
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)