'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

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
	'ReprasantatorMail': String,
	'damage': Array,
	'maintanceAft': Array,
	'maintancePr': Array,

});

machine.plugin(populatePlugin, {
    IDSection: {
    	ref: 'PlantPartsSections',
    	foreignKey: 'IDSection',
    	localKey: 'IDSection',
        singular: true
    },
    damage: {
    	ref: 'MachineDamage',
    	foreignKey: 'IdMachine',
    	localKey: 'IdMachine',
        singular: false
    },
    maintanceAft: {
    	ref: 'MachineMaintanceAft',
    	foreignKey: 'IdMachine',
    	localKey: 'IdMachine',
        singular: false
    },
    maintancePr: {
    	ref: 'MachineMaintancePr',
    	foreignKey: 'IdMachine',
    	localKey: 'IdMachine',
        singular: false
    }
});

module.exports = mongoose.model('Machine', machine);
