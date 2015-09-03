'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var machineMaintancePr = new Schema({
	'IdMachineMaintancePr': { type: String, required: true, unique: true },
	'IdMachine': { type: Schema.Types.String, ref: 'Machine' },
	'IdMaintance': { type: Schema.Types.String, ref: 'Maintance' },
	'text1': String,
	'MMainFrequency': Number
});

machineMaintancePr.plugin(populatePlugin, {
    IdMaintance: {
        ref: 'Maintance',
        foreignKey: 'IdMaintance',
        localKey: 'IdMaintance',
        singular: true
    }
});

module.exports = mongoose.model('MachineMaintancePr', machineMaintancePr);
