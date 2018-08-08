'use strict'

//import of dependencies

const express = require('express');
const cors =  require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeMotherboard = require('./routes/motherboard');
const routeCpu = require('./routes/cpu');
const routeGpu = require('./routes/gpu');
const routeUser = require('./routes/user');
const path = require('path');
const port = process.env.PORT || 3000;
//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'))
//routes of apiRest
app.use('/',routeMotherboard);
app.use('/',routeCpu);
app.use('/',routeGpu);
app.use('/',routeUser);

app.use(express.static(path.join(__dirname,'dist/client')))
//conecto to mongoDb
mongoose.connect('mongodb://localhost:27017/meme',(err,res)=>{
    if(err) return console.log(`Error to connect ${err}`);
    console.log('mongoDB running...');
    //run de server
    app.listen(port,()=>{
        console.log(`Server on port ${port}`);
    });
})
