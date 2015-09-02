'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var work = new Schema({
	'IDWork': { type: String, required: true, unique: true },
	'Date': Date,
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'Hours': Number
});

module.exports = mongoose.model('Work', work);