const express = require('express')
const { request } = require('express')
const router = express.Router()
const user = require('../models/user')
router.post('/user_details', async(req, res) => {
    const a = await user.findById( req.body.id )
    res.json({ msg: "done", data: a })
})
module.exports = router;