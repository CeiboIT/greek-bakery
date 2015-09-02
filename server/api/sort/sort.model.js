'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sort = new Schema({
	'IDSort': { type: String, required: true, unique: true },
	'IDSortStorage': String,
	'SortDescr': String,
	'IDRaw': { type: Schema.Types.String, ref: 'Raw' },
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'IDSortSubCategory': { type: Schema.Types.String, ref: 'SortSubCategory' },
	'IDMUnit': { type: Schema.Types.String, ref: 'Mesurment' },
	'PieceWeithg': Number,
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'SortYield': Number,
	'SortActivate': Boolean,
	'Price': Number,
	'IDSortRecipe': Boolean,
	'IDSortDelete': Boolean,
	'IDSortLoked': Boolean,
	'Icon': String,
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

module.exports = mongoose.model('Sort', sort);
