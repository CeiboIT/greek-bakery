'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbB_FASHMaterials table

var bFashMaterials = new Schema({
	'IDB_FASH': Number,
	'IDSort': Number,
	'IDB_FASHQuantity': Number,
	'IDB_FASHLoose': Number,
	'IDB_FASHRecipe': Boolean,
	'IDB_FASHDelete': Boolean
});

module.export = bFashMaterials;