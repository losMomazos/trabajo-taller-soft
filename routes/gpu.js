const router = require('express').Router();
const Gpu = require('../models/gpu');
const Cpu = require('../models/cpu');
const Motherboard = require('../models/motherboard');
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

router.get('/api/gpu',(req,res,next)=>{
    var queryParameter = req.query;
    Gpu.find(queryParameter,(err,gpus)=>{
        if(err) res.status(500).send({msj:"Error on server"})
        res.json(gpus);
    });
});

router.get('/api/gpu/:id',(req,res,next)=>{
    let id = req.params.id;
    Gpu.findById(id,(err,gpu)=>{
        if(err) throw err;
        if(!gpu) return res.status(404).send({msj:"Erro la gpu no existe "});
        res.json(gpu); 
    })
})
router.get('/api/gpu/compatibilidadmother/:id',(req,res,next)=>{
    let id = req.params.id;
    Gpu.findById(id,(err,gpu)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!gpu) return res.status(404).send({msj:"la gpu no existe "});
        Motherboard.find({puerto:gpu.puerto},(err,motherboards)=>{
            if(err) return res.status(200).send({msj:"Error en el servidor"});
            if(!motherboards) return res.status(404).send({msj:"Error no hay motherboard compatibles"})
            res.json(motherboards);
        })        
    })
})

router.post('/api/gpu',(req,res,next)=>{
    let gpu = new Gpu();
    
    gpu.name =  req.body.name;
    gpu.puerto =  req.body.puerto;
    gpu.category =  req.body.category;
    gpu.img =  req.body.img;
    gpu.fab = req.body.fab;
    gpu.memory = req.body.memory;

    gpu.save((err,gpuSaved)=>{
        if(err) throw err;
        res.json(gpuSaved);
    })
})
router.put('/api/gpu/:id',verifyToken,(req,res,next)=>{
    let id = req.params.id;
    let update = req.body;
    Gpu.findByIdAndUpdate(id,update,(err,gpuUpdate)=>{
        if(err) res.status(500).send({msj:'Erro al conectar con el servidor'})
        res.status(200).send({motherboard:gpuUpdate});
    })
})
router.delete('/api/gpu/:id',verifyToken,(req,res,next)=>{
    let id = req.params.id;
    Gpu.findOneAndRemove(id,(err,doc)=>{
        if(err) res.status(500).send({msj:'Erro al eliminar'})
        res.status(200).json(doc);
    })
})

module.exports = router;