'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var machineMaintanceAft = new Schema({
	'IdMachineMaintanceAfter': { type: String, required: true, unique: true },
	'IdMaintanceDate': Date,
	'IdMachine': { type: Schema.Types.String, ref: 'Machine' },
	'IdMaintanceAfter': { type: Schema.Types.String, ref: 'Maintance' }
});

machineMaintanceAft.plugin(populatePlugin, {
    IdMaintanceAfter: {
        ref: 'Maintance',
        foreignKey: 'IdMaintance',
        localKey: 'IdMaintanceAfter',
        singular: true
    }
});

module.exports = mongoose.model('MachineMaintanceAft', machineMaintanceAft);
