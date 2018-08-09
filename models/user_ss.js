const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var jwt = require('jsonwebtoken');

// create a schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
}, { collection : 'user' });

const User = mongoose.model('User', userSchema);

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    name: this.name,
    password: this.password,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
  });
};

module.exports = User;