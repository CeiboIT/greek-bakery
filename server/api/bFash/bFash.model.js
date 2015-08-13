'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bFASH = new Schema({
	'IDB_FASH': { type: Number, required: true, unique: true },
	'B_FASH_IDStorage': String,
	'B_FASH': String,
	'B_FASHBasic': Boolean,
	'DateStart': Date,
	'DateFinish': Date,
	'IDCategory': String,
	'IDSortSubCategory': String,
	'IDMUnit': Number,
	'B_FASHPW': Number,
	'IDOperation': String,
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
	'YesNo2': Boolean
});

module.exports = mongoose.model('BFash', bFASH);