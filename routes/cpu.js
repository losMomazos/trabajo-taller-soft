var router = require('express').Router();
const Gpu = require('../models/gpu');
const Cpu = require('../models/cpu');
const Motherboard = require('../models/motherboard');


router.get('/api/cpu',(req,res,next)=>{
    Cpu.find({},(err,cpus)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!cpus) return res.status(404).send({msj:" no hay cpu "});
        res.status(200).json(cpus);
    })
})
router.get('/api/cpu/:id',(req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    Cpu.findById(id,(err,cpu)=>{
        if(err) return res.status(500).send({msj:"Error al realizar la peticion "});
        if(!cpu) return res.status(404).send({msj:"la cpu no existe "});
        res.json(cpu);
    })
})
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
router.post('/api/cpu',(req,res,next)=>{
    let cpu = new Cpu();
    cpu.name = req.body.name;
    cpu.socket = req.body.socket;
    cpu.category = req.body.category;
    cpu.img = req.body.img;
    cpu.fab = req.body.fab;
    cpu.nucleos = req.body.nucleos;
    cpu.frequency = req.body.frequency;

    cpu.save((err,cpuStore)=>{
        if(err) res.status(500).send({msj:`Error to save ${err}` })
        res.status(200).send({cpuStore});
    })
})

module.exports = router;