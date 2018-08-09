const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    password:String
}, { collection : 'usuarios' });

module.exports = mongoose.model('usuarios',userSchema);