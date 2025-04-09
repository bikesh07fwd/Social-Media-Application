const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const requirelogin = require('../middlwares/requirelogin');
const POST = mongoose.model('POST')

router.post('/createPost',requirelogin,(req,res)=>{
    const {title, body} = req.body;

    if(!title || !body){
        res.status(422).json({error:"Please add all the fields"})
    }
    req.user
    const post = new POST({
        title,
        body,
        postedBy: req.user
    })
    post.save().then((result) =>{
        return res.json({post: result})
    }).catch(err => {console.log(err)})

})

module.exports = router;