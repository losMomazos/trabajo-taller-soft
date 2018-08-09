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
const url = 'mongodb://localhost:27017/meme';
const User = require('./models/user_ss');


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

app.post('/api/register',(req,res,next)=>{


	let user = new User();
	console.log('name: ',req.body.username,'  name:',req.body.name,'  pass: ',req.body.password)
    user.username = req.body.username;
    user.name = req.body.name;
	user.password = req.body.password;
	console.log('Usuario nuevo con los siguientes parametros')
	console.log(user)

    user.save((err,user)=>{
        if(err) res.send({msj:`Error to save ${err}` })
		res.json(user);
    })
})

app.get('/api/register',(req,res,next)=>{
    //atravez del modelo user de mongoose se hacen llamadas a esta colleccion con el metodo find y resive
    //un json como query y un callback, este ultimo resive un error y las cpus que devuelve el metodo
    var queryParameter = req.query;
    User.find(queryParameter,(err,Users)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!Users) return res.status(404).send({msj:" no hay usuarios creados!! "});
        res.status(200).json(Users);
    })
})

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
})

//app.use(express.static(path.join(__dirname,'dist/client')))
//conecto to mongoDb
mongoose.connect('mongodb://anti:Damaris27@ds059471.mlab.com:59471/meme',(err,res)=>{
    if(err) return console.log(`Error to connect ${err}`);
    console.log('mongoDB running...');
    //run de server
    app.listen(port,()=>{
        console.log(`Server on port ${port}`);
    });
})
