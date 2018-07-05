const router = require('express').Router();
const Gpu = require('../models/gpu');
const Cpu = require('../models/cpu');
const Motherboard = require('../models/motherboard');


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

router.put('/api/gpu/:id',(req,res,next)=>{
    let id = req.params.id;
    let update = req.body;
    Gpu.findByIdAndUpdate(id,update,(err,gpuUpdate)=>{
        if(err) res.status(500).send({msj:'Erro al conectar con el servidor'})
        res.status(200).send({gpu:gpuUpdate});
    })
})
router.delete('/api/gpu/:id',(req,res,next)=>{
    let id = req.params.id;
    Gpu.findById(id,(err,gpu)=>{
        if(err) res.status(500).send({msj:'Erro al conectar con el servidor'})
        motherboard.remove(err=>{
            if(err) res.status(500).send({msj:"Error del servidor"});
            res.status(200).send({msj:'gpu borrada'})
        })
    })
})

module.exports = router;