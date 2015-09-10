'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var plant = new Schema({
	'IDplant': { type: String, required: true, unique: true },
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
	'Date3': Date,
	'plantParts': Array
});

plant.plugin(populatePlugin, {
    plantParts: {
    	ref: 'PlantParts',
    	foreignKey: 'IDplant',
    	localKey: 'IDplant',
        singular: false
    }
});

module.exports = mongoose.model('Plant', plant);
