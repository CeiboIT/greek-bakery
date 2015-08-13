'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aFASH = new Schema({
	'IDA_FASH': { type: Number, required: true, unique: true },
	'A_FASH_IDStorage': String,
	'A_FASH': String,
	'A_FASHBasic': Boolean,
	'DateStart': Date,
	'DateFinish': Date,
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'IDSortSubCategory': { type: Schema.Types.String, ref: 'SortSubCategory' },
	'IDMUnit': { type: Schema.Types.Number, ref: 'MesurmentUnit' },
	'A_FASH_PW': Number,
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'A_FASHYield': Number,
	'A_FASHScrap': Number,
	'A_FASHProcedure': String,
	'A_FASHPrint': Boolean,
	'A_FASHDelete': Boolean,
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
});

module.exports = mongoose.model('AFash', aFASH);