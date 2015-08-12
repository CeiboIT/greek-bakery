'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var maintance = new Schema({
	'IdMaintance': { type: Number, required: true, unique: true },
	'Maintance': String
});

module.exports = mongoose.model('Maintance', maintance);