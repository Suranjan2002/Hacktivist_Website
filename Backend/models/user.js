const mongoose = require('mongoose')

const user = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'user'
    },
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', user)