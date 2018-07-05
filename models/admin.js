'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');	

const AdmiSchema = new Schema({
	email: { type: String, unique:true, lowercase: true},
	nickName: String,
	password: { type: String, select: false},
})

AdmiSchema.pre('save', (next)=>{
	let admi = this
	if (!user.isModified('password')) return next()

	bcrypt.genSalt(10, (err, salt)=>{
		if (err) return next()

		bcrypt.hash(admi.password, salt, null, (err, hash) =>{
			if (err) return next(err)

			admi.password = hash
		})
	})
})

module.exports = mongoose.model('Admi',AdmiSchema);