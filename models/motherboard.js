'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
*atravez de un Schema de mongoose se define una estructura basica para una colleccion de MongoDB
*/
const MotherboardSchema = Schema({
    name:String,
    socket:String,
    chipset:String,
    category:{type:String,enum:['Motherboard']},
    img:String,
    puerto:String,
    fab:String,
    format:String,
})

module.exports = mongoose.model('motherboard',MotherboardSchema);
