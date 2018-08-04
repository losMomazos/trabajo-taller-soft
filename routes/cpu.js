/*
    Este archivo define las routes para trabajar con datos de la cpu
*/

//importacion de dependencias
var router = require('express').Router();
const Gpu = require('../models/gpu'); //model for a colleccion Gpu
const Cpu = require('../models/cpu'); //model for a collection Cpu
const Motherboard = require('../models/motherboard'); //model for a collection Motherboard
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

//el metodo router de express , usa su metodo get , teniendo como parametros una URI y una funcion
//esta funcion resive como parametro un objeto request , un objeto response y un objeto next
router.get('/api/cpu',(req,res,next)=>{
    //atravez del modelo Cpu de mongoose se hacen llamadas a esta colleccion con el metodo find y resive 
    //un json como query y un callback, este ultimo resive un error y las cpus que devuelve el metodo
    var queryParameter = req.query;
    Cpu.find(queryParameter,(err,cpus)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!cpus) return res.status(404).send({msj:" no hay cpu "});
        res.status(200).json(cpus);
    })
})

/*
Este metodo devuelve una cpu especifica pasando una id en la url,revise objetos request ,response y next
*/
router.get('/api/cpu/:id',(req,res,next)=>{
    let id = req.params.id;
    /*
    findById usa una id y un funcion para  busca el elemento en la colleccion cpu devolviendo el elemento
    o un error
     */
    Cpu.findById(id,(err,cpu)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!cpu) return res.status(404).send({msj:"la cpu no existe "});
        res.json(cpu);
    })
})
/*
 * este metodo busca primero una cpu y teniendo esa cpu busca las motherboard que tengan el mismo socket 
 * resive objetos request , response y next
 */
router.get('/api/cpu/compatibilidadmother/:id',(req,res,next)=>{
    let id = req.params.id;
    Cpu.findById(id,(err,cpu)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!cpu) return res.status(404).send({msj:"la cpu no existe "});
        Motherboard.find({socket:cpu.socket},(err,motherboards)=>{
            if(err) return res.status(200).send({msj:"Error en el servidor"});
            if(!motherboards) return res.status(404).send({msj:"Error no hay motherboard compatibles"})
            res.json(motherboards);
        })        
    })
})
/**
 * este metodo usa el metodo post de http , necesita una uri a la cual ingresar y resive
 * un objeto request,responde y next
 */
router.post('/api/cpu',(req,res,next)=>{

    let cpu = new Cpu();
    cpu.name = req.body.name;
    cpu.socket = req.body.socket;
    cpu.category = req.body.category;
    cpu.img = req.body.img;
    cpu.fab = req.body.fab;
    cpu.nucleos = req.body.nucleos;
    cpu.frequency = req.body.frequency;

    cpu.save((err,cpu)=>{
        if(err) res.status(500).send({msj:`Error to save ${err}` })
        res.status(200).send({cpu});
    })
})
router.put('/api/cpu/:id',verifyToken,(req,res,next)=>{
    let id = req.params.id;
    let update = req.body;
    Cpu.findByIdAndUpdate(id,update,(err,cpuUpdate)=>{
        if(err) res.status(500).send({msj:'Erro al conectar con el servidor'})
        res.status(200).send({cpu:cpuUpdate});
    })
})

router.delete('/api/cpu/:id',verifyToken,(req,res,next)=>{
    let id = req.params.id;
    Cpu.findOneAndRemove(id,(err,doc)=>{
        if(err) res.status(500).send({msj:'Erro al eliminar'})
        res.status(200).json(doc);
    })
})
/**
 * exporta el modulo para ser llamado desde el index.js 
 */
module.exports = router;