'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parapono = new Schema({
	'IdParapono': { type: Number, required: true, unique: true },
	'DateRecive': Date,
	'DateFinal': Date,
	'Parapono': String,
	'IdParaponoCat': { type: Schema.Types.Number, ref: 'ParaponoCat' },
	'LiptisParaponou': String,
	'CustomerKind': String,
	'Remarks': String,
	'Actions': String
});

module.exports = mongoose.model('Parapono', parapono);