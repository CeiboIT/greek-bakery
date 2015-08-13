'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var production = new Schema({
	'IDProduction': { type: Number, required: true, unique: true },
	'Date': Date,
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },
	'Quantity': Number,
	'Program': Number,
	'Scrap': Number
});

module.exports = mongoose.model('Production', production);