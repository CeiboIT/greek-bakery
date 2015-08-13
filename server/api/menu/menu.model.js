'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menu = new Schema({
	'IDMenu': { type: Number, required: true, unique: true },
	'Menu': String,
	'DateFinish': Date,
	'DateStart': Date
});

module.exports = mongoose.model('Menu', menu);