const express = require('express')
const bcrypt = require('bcrypt')
const user  = require('../models/user')
const { request } = require('express')
const router = express.Router()

async function save_user(req, res){
    const hash_password = await bcrypt.hash(req.body.password, 3)
    const json = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hash_password
    }

    const a = await new user(json)

    try{
        const b = await a.save()
        res.json({ msg:b}).status(201)
    }
    catch(e){
        res.json({ msg: e }).status(500)
    }
}



router.post('/createuser',async(req, res) => {
    user.findOne({email : req.body.email}, async(err,result) =>{
        if(err)
        {
            res.json({ msg:err })
        }
        else{
           if(req.body.name=="" || req.body.category=="" || req.body.email=="" || req.body.password=="")
            {
                res.json({ msg: "Please Fill out all the fields"})
            }
            else
            {
                if(!result)
                {
                    save_user(req, res)
                }
                else{
                    res.json({ msg: "An account with same email exist"})
                }
            }
        }
    })
})

router.post('/authenticate', async(req, res) => {
    user.findOne({ email: req.body.email }, async(err, result) => {
        if (err) {
            res.json({ msg: err })
        } else {
            if(req.body.email=="" || req.body.password=="")
            {
                res.json({ msg: "Please Fill out all the fields"})
            }
            else
            {
                if (!result) {
                    res.json({ msg: "email id is not registered" })
                } 
                else {
                    if (await bcrypt.compare(req.body.password, result.password)) {
                        res.json({ msg: "Login successful", data: result })
                    } else {
                        res.json({ msg: "Password not match" })
                    }
                }
            }
        }
    })
})

module.exports = router;