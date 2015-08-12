'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbA_FASH table

var fash = new Schema({
	'IDA_FASH': Number,
	'A_FASH_IDStorage': String,
	'A_FASH': String,
	'A_FASHBasic': Boolean,
	'DateStart': Date,
	'DateFinish': Date,
	'IDCategory': String,
	'IDSortSubCategory': String,
	'IDMUnit': Number,
	'A_FASH_PW': Number,
	'IDOperation': String,
	'A_FASHYield': Number,
	'A_FASHScrap': Number,
	'A_FASHProcedure': String, // very large
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
	'YesNo2': Boolean
});	

module.export = fash;