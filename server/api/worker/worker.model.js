'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worker = new Schema({
	'IdWorker': { type: String, required: true, unique: true },
	'IdWorkersKnowl': { type: Schema.Types.String, ref: 'WorkesKnowl' },
	'Name': String,
	'Fname': String,
	'Mname': String,
	'WHname': String,
	'DateBirth': Date,
	'LocalBirth': String,
	'Adress': String,
	'Tel': String,
	'Nation': String,
	'Passport': String,
	'afm': String,
	'DOY': String,
	'FamiliarStatus': String,
	'Children': Number,
	'ProtectionPersons': Number,
	'AM_IKA': String,
	'IKA_Before1_1_93': Boolean,
	'DateEmployment': Date,
	'Part': String,
	'Leave': Number,
	'DateRetirement': Date,
	'ReasonRetirement': String,
	'Remarks': String,
	'Print': Boolean
});

module.exports = mongoose.model('Worker', worker);