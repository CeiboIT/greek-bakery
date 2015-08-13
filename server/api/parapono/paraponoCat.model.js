'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paraponoCat = new Schema({
	'IdParaponoCat': { type: Number, required: true, unique: true },
	'ParaponoCat': String
});

module.exports = mongoose.model('ParaponoCat', paraponoCat);