'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var cFASH = new Schema({
	'IDC_FASH': { type: String, required: true, unique: true },
	'C_FASH_IDStorage': String,
	'C_FASH': String,
	'C_FASHBasic': Boolean,
	'DateStart': Date,
	'DateFinish': Date,
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'IDSortSubCategory': { type: Schema.Types.String, ref: 'SortSubCategory' },
	'IDMUnit': { type: Schema.Types.String, ref: 'MesurmentUnit' },
	'C_FASHPW': Number,
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'C_FASHYield': Number,
	'C_FASHScrap': Number,
	'C_FASHLezanta': String,
	'C_FASHProcedure': String,
	'C_FASHPrint': Boolean,
	'C_FASHDelete': Boolean,
	'C_FASHGenerLocked': Boolean,
	'DeprPerKg': Number,
	'GenDamPerKg': Number,
	'StoresDamKg': Number,
	'SalesmenDamKg': Number,
	'CarDamKg': Number,
	'PromotionDamKg': Number,
	'SalesDepreciationKg': Number,
	'SpecificationLocked': Boolean,
	'StorageContitions': String,
	'SelfLife': String,
	'ConsuptionGroup': String,
	'ServersDamkg': Number,
	'PH': String,
	'Aw': String,
	'TPC': Number,
	'Mould fungi yeast': Number,
	'E coli': Number,
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
    'materials': Array,
    'materialsYS': Array
});

cFASH.plugin(populatePlugin, {
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
    	ref: 'CFashMaterials',
    	foreignKey: 'IDC_FASH',
    	localKey: 'IDC_FASH',
        singular: false
    },
    materialsYS: {
    	ref: 'CFashMaterialsYS',
    	foreignKey: 'IDC_FASH',
    	localKey: 'IDC_FASH',
        singular: false
    }
});

module.exports = mongoose.model('CFash', cFASH);
