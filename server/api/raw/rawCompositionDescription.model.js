'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compositionDescription = new Schema({
	'IDCompositionDescription': { type: Number, required: true, unique: true },
	'CompositionDescription': String,
	'CompositionDescriptionEnglish': String,
	'CDFrench': String,
	'CDItalian': String,
	'CDSpanish': String,
	'CDDeutch': String,
	'CDPortugese': String,
	'CDSwedish': String,
	'CDAlbanian': String,
	'CDRussian': String,
	'CDSerbian': String,
});

module.exports = mongoose.model('RawCompositionDescription', compositionDescription);