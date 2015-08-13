'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bFashMaterials = new Schema({
	'IDB_FASH': { type: Schema.Types.Number, ref: 'BFash' },
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },
	'IDB_FASHDelete': Boolean,
	'IDB_FASHRecipe': Boolean,
	'IDB_FASHQuantity': Number,
	'IDB_FASHLoose': Number
});

module.exports = mongoose.model('BFashMaterials', bFashMaterials);