'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dromologio = new Schema({
	'IDDromologio': { type: String, required: true, unique: true },
	'Dromologio': String,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date,
	'Memo1': String,
	'YesNo1': Boolean,
	'YesNo2': Boolean
});

module.exports = mongoose.model('Dromologio', dromologio);
