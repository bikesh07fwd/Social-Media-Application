const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose')
const {mongoUrl} = require('./keys')
const cors = require('cors')
app.use(cors())

require('./models/model')
require('./models/post.js')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/createpost'))


mongoose.connect(mongoUrl);



 
mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to mongodb");
})

mongoose.connection.on("error",()=>{
    console.log("Not connected to mongodb");
})


app.listen(port,()=>{
    console.log('server is running '+ port)
})