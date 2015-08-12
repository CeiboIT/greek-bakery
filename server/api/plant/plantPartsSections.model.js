'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbPlant table

var plantPartsSections = new Schema({
	'IDSection': { type: String, required: true, unique: true },
	'IDPart': { type: Schema.Types.String, ref: 'PlantParts' },
	'Section': String
});

// plantPartsSections.virtual('IDSection').get(function () {
// 	return this._id;
// });

// plantPartsSections.virtual('IDSection').set(function (newId) {
// 	this._id = newId;
// });

module.exports = mongoose.model('plantPartsSections', plantPartsSections);