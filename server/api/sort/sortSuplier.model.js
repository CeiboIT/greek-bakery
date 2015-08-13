'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sortSuplier = new Schema({
	'IDAuto': { type: Number, required: true, unique: true },	
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },
	'Basic': Boolean,
	'IDMarketer':  { type: Schema.Types.Number, ref: 'Marketer' },
	'Date': Date,
	'Price': Number,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date
});

module.exports = mongoose.model('SortSuplier', sortSuplier);