const jwt = require('jsonwebtoken')
const {jwt_secret} = require('../keys.js')
const mongoose = require('mongoose')
const USER = mongoose.model('USER')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(422).json({error:"You must have logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,jwt_secret,(err,payload)=>{
        if(err){
            res.status(401).json({error:"You must have logged in 2"})
        }
        const {_id} = payload;
        USER.findById(_id).then(userData=>{
            // console.log(userData)
            req.user = userData
            next()
        })
    })
    
}