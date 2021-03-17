const jwt = require('jsonwebtoken')
const {secretOrKey} = require('../config/keys')
const mongoose = require('mongoose')
//const User = mongoose.model("User")
const User = require("../models/User");
//const User = require("../models/User");
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    //console.log(req.headers)
    if(!authorization){
        
       return res.status(401).json({error:"you must be logged in" })
    }
    const token = authorization.replace("Bearer ","")

    jwt.verify(token,secretOrKey,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }
        console.log(payload)
        const {id} = payload
        User.findById(id).then(userdata=>{
            req.user = userdata
            console.log()
            next()
        })
        
        
    })
}