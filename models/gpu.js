'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GpuSchema = new Schema({
    name:String,
    puerto:String,
    category:{type:String,enum:['Gpu']},
    img:String
})
module.exports = mongoose.model('Gpu',GpuSchema);