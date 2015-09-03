'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var techInfo = new Schema({
	'IdTecInf':  { type: String, required: true, unique: true },
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

techInfo.plugin(populatePlugin, {
    IDSortSubCategory: {
    	ref: 'SortSubCategory',
    	foreignKey: 'IDSortSubCategory',
    	localKey: 'IDSortSubCategory',
        singular: true
    }
});

module.exports = mongoose.model('TechInfo', techInfo);
