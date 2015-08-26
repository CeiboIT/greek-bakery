'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bFashMaterials = new Schema({
	'IDB_FASH': { type: Schema.Types.String, ref: 'BFash' },
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'IDB_FASHQuantity': Number,
	'IDB_FASHLoose': Number,
    'IDB_FASHRecipe': Boolean,
    'IDB_FASHDelete': Boolean
});

module.exports = mongoose.model('BFashMaterials', bFashMaterials);
