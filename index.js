'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeMotherboard = require('./routes/motherboard');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routeMotherboard);

mongoose.connect('mongodb://localhost:27017/meme',(err,res)=>{
    if(err) return console.log(`Error to connect ${err}`);
    console.log('mongoDB running...');

    app.listen(port,()=>{
        console.log(`Server on port ${port}`);
    });
})