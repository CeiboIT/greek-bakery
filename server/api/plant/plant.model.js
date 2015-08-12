'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbPlant table

var plant = new Schema({
	'IDplant': { type: Number, required: true, unique: true },
	'PlantDescription': String,
	'EAN': String,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date,
	'Date3': Date
});

// plant.virtual('IDplant').get(function () {
// 	return this._id;
// });

// plant.virtual('IDplant').set(function (newId) {
// 	this._id = newId;
// });

module.exports = mongoose.model('Plant', plant);