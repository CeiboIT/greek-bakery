'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbA_FASHMaterials table

var fashMaterials = new Schema({
	'IDA_FASHMaterials': Number,
	'IDA_FASH': Number,
	'IDSort': Number,
	'Sxolia': String,
	'IDA_FASHQuantity': Number,
	'IDA_FASHLoose': Number,
	'IDA_FASHRecipe': Boolean,
	'IDA_FASHDelete': Boolean
});

module.export = fashMaterials;