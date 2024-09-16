const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const message = require('./models/message')
const url = require('./models/url')

app.use(bodyParser.json());
// Serve static files (HTML, CSS, JS) from the "public" directory
app.use(express.static(path.join(__dirname, 'view')));


const mongoURI = url

mongoose.connect(mongoURI)
.then(() => {
    console.log('Connect to MongoDB')
}).catch((err) =>{
    console.log('error',err);
})


app.post('/',async(req,res)=>{
    const newmessage = new message(req.body)
    await newmessage.save()
    res.status(200).send({message:'Message sent'});
    console.log(newmessage)
})


app.listen('3000',() =>{
    console.log('app listen on 3000')
})