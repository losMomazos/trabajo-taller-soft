const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token==='null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token,'secretkey');
    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}
router.post('/api/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error);
        }else{
            let payload = {subject:registeredUser._id};
            let token = jwt.sign(payload,'secretkey');
            res.status(200).send({token});
        }
    })
})
router.post('/api/login',(req,res)=>{
    let userData = req.body;
    console.log('asdasdasd',userData)
    User.findOne({username:userData.username},(error,user)=>{
        console.log('kaaa')
        if(error){
            console.log('aqui llego')
            console.log(error);
        }else{
            if(!user){
                console.log('11111')
                res.status(401).send('Invalid email');
            }else{
                if(user.password!==userData.password){
                    res.status(401).send('Invalid password')
                }else{
                    let payload = {subject:user._id};
                    let token = jwt.sign(payload,'secretkey') 
                    res.status(200).send({token});
                }
            }
        }
    })
})
router.get('/api/events',(req,res)=>{
    res.json({message:"Ruta Normal"})
})
router.get('/api/special',verifyToken,(req,res)=>{
    res.json({message:"Ruta Privada"})
})
module.exports = router;