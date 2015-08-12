'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var machineMaintanceAft = new Schema({
	'IdMachineMaintanceAfter': { type: Number, required: true, unique: true },
	'IdMaintanceDate': Date,
	'IdMachine': { type: Schema.Types.String, ref: 'Machine' },
	'IdMaintanceAfter': { type: Schema.Types.Number, ref: 'Maintance' }
});

module.exports = mongoose.model('MachineMaintanceAft', machineMaintanceAft);