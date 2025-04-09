const express = require('express');

const router = express.Router();
const mongoose = require("mongoose")
const USER = mongoose.model("USER")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {jwt_secret}= require("../keys.js");
const requirelogin = require('../middlwares/requirelogin.js');

router.get('/',(req,res)=>{
    res.send("hello");
})



router.post("/signup",(req,res)=>{
    const{name,userName,email,password} = req.body;

    if(!name || !email || !userName || !password){
        return res.status(422).json({error:"Please add more fields"})  // we add status so that when some one does not give complete data it can give status as unprocessable
    }

    USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            res.status(422).json({error:"user already exists with this email or username"})
        }

        bcrypt.hash(password,13).then((hashpassword)=>{
            const user = new USER({  //new user schema
                name,
                userName,
                email,
                password:hashpassword
            })
        
            user.save()  //to save in database
        
            .then(user =>{res.json({message: "Registered successfully"})})
            .catch(err=>{console.log(err)})
        })
            

      
    })

    

})

router.post('/signin',(req,res)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return res.status(422).json({error:"Please add more fields"}); 
    }
    USER.findOne({email:email}).then((savedUser) => {
        if(!savedUser){
            res.status(422).json({error:"Invalid email"})
        }
        bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                // res.status(200).json({message:"Successfully signed in"})
                const token = jwt.sign({_id:savedUser.id},jwt_secret)
                console.log(token)
            }
            else{
                res.status(422).json({error:"Invalid password"})
            }
        })
    })
})


module.exports = router;