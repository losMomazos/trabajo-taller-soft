'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotherboardSchema = Schema({
    name:String,
    socket:String,
    chipset:String,
    category:{type:String,enum:['Motherboard']},
    img:String,
    puertos:String,
    fab:String,
    format:String,
})

module.exports = mongoose.model('motherboard',MotherboardSchema);
