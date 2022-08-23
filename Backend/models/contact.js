const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        require: true
    },
    subject: {
        type: String
    },
    message: {
        type:String
    }
})
module.exports = mongoose.model('contact',contact)