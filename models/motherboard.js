'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotherboardSchema = Schema({
    name:String,
    socket:String,
    category:{type:String,enum:['Motherboard','Cpu','Gpu']}
})

module.exports = mongoose.model('product',MotherboardSchema);
