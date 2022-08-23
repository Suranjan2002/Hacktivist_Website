const mongoose = require('mongoose')
const url = "";
mongoose.connect(url,{ useNewUrlParser : true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected')
})

module.exports = con