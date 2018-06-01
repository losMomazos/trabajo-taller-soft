'use strict'
const express = require('express');
const cors =  require('cors');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeMotherboard = require('./routes/motherboard');
const routeCpu = require('./routes/cpu');
const routeGpu = require('./routes/gpu');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'))
app.use('/',routeMotherboard);
app.use('/',routeCpu);
app.use('/',routeGpu);

mongoose.connect('mongodb://localhost:27017/meme',(err,res)=>{
    if(err) return console.log(`Error to connect ${err}`);
    console.log('mongoDB running...');

    app.listen(port,()=>{
        console.log(`Server on port ${port}`);
    });
})