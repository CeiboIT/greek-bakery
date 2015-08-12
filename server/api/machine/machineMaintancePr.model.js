'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var machineMaintancePr = new Schema({
	'IdMachineMaintancePr': { type: Number, required: true, unique: true },
	'IdMachine': { type: Schema.Types.String, ref: 'Machine' },
	'IdMaintance': { type: Schema.Types.Number, ref: 'Maintance' },
	'text1': String,
	'MMainFrequency': Number
});

module.exports = mongoose.model('MachineMaintancePr', machineMaintancePr);