'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var bFASH = new Schema({
	'IDB_FASH': { type: String, required: true, unique: true },
	'B_FASH_IDStorage': String,
	'B_FASH': String,
	'B_FASHBasic': Boolean,
	'DateStart': Date,
	'DateFinish': Date,
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'IDSortSubCategory': { type: Schema.Types.String, ref: 'SortSubCategory' },
	'IDMUnit': { type: Schema.Types.String, ref: 'MesurmentUnit' },
	'B_FASHPW': Number,
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'B_FASHYield': Number,
	'B_FASHScrap': Number,
	'B_FASHProcedure': String,
	'B_FASHPrint': Boolean,
	'B_FASHDelete': Boolean,
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
	'YesNo2': Boolean,
    'materials': Array
});

bFASH.plugin(populatePlugin, {
    IDSortSubCategory: {
    	ref: 'SortSubCategory',
    	foreignKey: 'IDSortSubCategory',
    	localKey: 'IDSortSubCategory',
        singular: true
    },
    IDMUnit: {
    	ref: 'MesurmentUnit',
    	foreignKey: 'IDMUnit',
    	localKey: 'IDMUnit',
        singular: true
    },
    IDOperation: {
    	ref: 'PlantPartsSectionsOperations',
    	foreignKey: 'IDOperation',
    	localKey: 'IDOperation',
        singular: true
    },
    materials: {
    	ref: 'BFashMaterials',
    	foreignKey: 'IDB_FASH',
    	localKey: 'IDB_FASH',
        singular: false
    },
});

module.exports = mongoose.model('BFash', bFASH);
