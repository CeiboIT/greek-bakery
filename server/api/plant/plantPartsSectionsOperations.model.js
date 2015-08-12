'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbPlant table

var plantPartsSectionsOperations = new Schema({
	'IDOperation': { type: String, required: true, unique: true },
	'IDOperationLoced': Boolean,
	'Operation': String,
	'IDSection': { type: Schema.Types.String, ref: 'PlantPartsSections' },
	'Wh_Productivity': Number,
	'Wh_Cost': Number
});

module.exports = mongoose.model('PlantPartsSectionsOperations', plantPartsSectionsOperations);