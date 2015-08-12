'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbPlant table

var machine = new Schema({
	'IdMachine': { type: String, required: true, unique: true },
	'Machine': String,
	'IDSection': { type: Schema.Types.String, ref: 'PlantPartsSections' },
	'ConstractionDate': Date,
	'Constractor': String,
	'ConstractorTel': String,
	'ConstractorFax': String,
	'ConstractorMail': String,
	'Reprasantator': String,
	'ReprasantatorContact': String,
	'ReprasantatorTel': String,
	'ReprasantatorFax': String,
	'ReprasantatorMail': String
});

module.exports = mongoose.model('Machine', machine);