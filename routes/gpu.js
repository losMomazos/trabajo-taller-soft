const router = require('express').Router();
const Gpu = require('../models/gpu');
const Cpu = require('../models/cpu');
const Motherboard = require('../models/motherboard');


router.get('/api/gpu',(req,res,next)=>{
    Gpu.find({},(err,gpus)=>{
        if(err) res.status(500).send({msj:"Error on server"})
        res.json(gpus);
    });
});
router.get('/api/gpu/:id',(req,res,next)=>{
    let id = req.params.id;
    Gpu.findById((err,gpu)=>{
        if(err) throw err;
        if(!gpu) return res.status(404).send({msj:"Erro la gpu no existe "});
        res.json(gpu); 
    })
})
router.post('/api/gpu',(req,res,next)=>{
    let gpu = new Gpu();
    gpu.name =  req.body.name;
    gpu.puerto =  req.body.puerto;
    gpu.category =  req.body.category;
    gpu.img =  req.body.img;
    gpu.save((err,gpuSaved)=>{
        if(err) throw err;
        res.json(gpuSaved);
    })
})


module.exports = router;