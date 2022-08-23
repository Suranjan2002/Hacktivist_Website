const express = require('express')
const { nextTick } = require('process')

const app = express()
app.use(express.json())
const bodyParser = require('body-parser')
//database to be used

const db = require('./conn/conn')

//routes

const auth_users = require('./routes/users');
const contact_form = require('./routes/contact');
const user_details = require('./routes/user_details')
app.use(function(req, res, next){
    // Website we wish wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request method we wish to follow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //Request headers we wish to follow
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use(bodyParser .urlencoded({
    extended: true
}));
//linking with parent
app.use('/user',auth_users)
app.use('/user',user_details)
app.use('/contact',contact_form)
app.listen(process.env.PORT || 8000)