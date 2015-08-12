'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbPlant table

var plantParts = new Schema({
	'IDPart': { type: String, required: true, unique: true },
	'IDplant': { type: Schema.Types.Number, ref: 'Plant' },
	'Part': String
});

// plantParts.virtual('IDPart').get(function () {
// 	return this._id;
// });

// plantParts.virtual('IDPart').set(function (newId) {
// 	this._id = newId;
// });

module.exports = mongoose.model('PlantParts', plantParts);