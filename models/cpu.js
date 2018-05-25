'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CpuSchema = Schema({
    name:String,
    socket:String,
    category:{type:String,enum:['Cpu']},
    img:String
})

module.exports = mongoose.model('CpuSchema',CpuSchema);