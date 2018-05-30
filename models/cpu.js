'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CpuSchema = Schema({
    name:String,
    fab:String,
    frequency:String,
    socket:String,
    category:{type:String,enum:['Cpu']},
    img:String,
    nucleos:Number,
})

module.exports = mongoose.model('Cpu',CpuSchema);