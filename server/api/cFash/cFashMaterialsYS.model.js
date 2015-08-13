'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cFashMaterialsYS = new Schema({
	'IDC_FASH': { type: Schema.Types.Number, ref: 'CFash' },
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },	
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'IDC_FASHQuantity': Number,
	'IDC_FASHLoose': Number,
	'IDC_FASHRecipe': Boolean,
	'IDC_FASHDelete': Boolean
});

module.exports = mongoose.model('CFashMaterialsYS', cFashMaterialsYS);