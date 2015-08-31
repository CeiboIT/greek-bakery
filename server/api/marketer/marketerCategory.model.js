'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marketerCategory = new Schema({
	'IDMarketerCategory': { type: String, required: true, unique: true },
	'MarketerCategory': String,
});

module.exports = mongoose.model('MarketerCategory', marketerCategory);
