const express = require('express')
const contact = require('../models/contact')
const { request } = require('express')
const router = express.Router()

router.post('/contact_us', async(req, res) => {
    const json ={
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }

    const a = new contact(json)
    try{
        b = await a.save()
        res.json({ msg: 'Thanks for contacting us', data: b})
    } catch(e){
        res.json({ 'msg': 'error', data: e })
    }
})

module.exports = router;