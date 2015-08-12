'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbSorts table

var sorts = new Schema({
	'IDSort': Number,
	'IDSortStorage': String,
	'SortDescr': String,
	'IDRaw': Number,
	'IDCategory': String,
	'IDSortSubCategory': String,
	'IDMUnit': Number,
	'PieceWeithg': Number,
	'IDOperation': String,
	'SortYield': Number,
	'SortActivate': Boolean,
	'Price': Number,
	'IDSortRecipe': Boolean,
	'IDSortDelete': Boolean,
	'IDSortLoked': Boolean,
	'Icon': String, // file image name
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

module.export = sorts;