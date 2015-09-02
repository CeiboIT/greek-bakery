'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var parapono = new Schema({
	'IdParapono': { type: String, required: true, unique: true },
	'DateRecive': Date,
	'DateFinal': Date,
	'Parapono': String,
	'IdParaponoCat': { type: Schema.Types.String, ref: 'ParaponoCat' },
	'LiptisParaponou': String,
	'CustomerKind': String,
	'Remarks': String,
	'Actions': String,
    'paraponoSort': Array
});

parapono.plugin(populatePlugin, {
    IdParaponoCat: {
        ref: 'ParaponoCat',
        foreignKey: 'IdParaponoCat',
        localKey: 'IdParaponoCat',
        singular: true
    },
    paraponoSort: {
        ref: 'ParaponoSort',
        foreignKey: 'IdParapono',
        localKey: 'IdParapono',
        singular: false
    }
});

module.exports = mongoose.model('Parapono', parapono);
