'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mesurment = new Schema({
	'IDMUnit': { type: String, required: true, unique: true },
	'MesurmentUnit': String
});

module.exports = mongoose.model('MesurmentUnit', mesurment);