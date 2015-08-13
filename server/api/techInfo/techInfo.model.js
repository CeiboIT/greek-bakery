'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techInfo = new Schema({
	'IdTecInf':  { type: Number, required: true, unique: true },
	'Refresh': Boolean,
	'IDSortSubCategory': { type: Schema.Types.String, ref: 'SortSubCategory' },
	'StorageContitions': String,
	'SelfLife': String,
	'ConsuptionGroup': String,
	'PH': String,
	'Aw': String,
	'TPC': Number,
	'Mould fungi yeast': Number,
	'E coli': Number
});

module.exports = mongoose.model('TechInfo', techInfo);