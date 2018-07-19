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
const passport = require('passport');
const path = require('path');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/passport') (passport);

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'))
app.use(cookieParser());
app.use(session({
    secret: 'angelo',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes of apiRest
app.use('/',routeMotherboard);
app.use('/',routeCpu);
app.use('/',routeGpu);
require('./routes/routes')(app, passport);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//conecto to mongoDb 
mongoose.connect('mongodb://localhost:27017/meme',(err,res)=>{
    if(err) return console.log(`Error to connect ${err}`);
    console.log('mongoDB running...');
    //run de server
    app.listen(port,()=>{
        console.log(`Server on port ${port}`);
    });
})