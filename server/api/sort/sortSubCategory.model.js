'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sortSubCategory = new Schema({
	'IDSortSubCategory': { type: String, required: true, unique: true },
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'SortSubCategory': String
});

module.exports = mongoose.model('SortSubCategory', sortSubCategory);