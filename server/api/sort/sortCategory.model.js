'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sortCategory = new Schema({
	'IDCategory': { type: String, required: true, unique: true },
	'Category': String,
});

module.exports = mongoose.model('SortCategory', sortCategory);