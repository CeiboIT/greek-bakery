'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var machineDamage = new Schema({
	'IdMachineDamage': { type: String, required: true, unique: true },
	'IdMachine': { type: Schema.Types.String, ref: 'Machine' },
	'DamageDate': Date,
	'Damage': String,
	'DamageTechnical': String,
	'DamageCost': Number,
	'DamageRemarks': String
});

module.exports = mongoose.model('MachineDamage', machineDamage);
