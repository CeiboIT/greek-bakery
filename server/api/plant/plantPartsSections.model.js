'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var plantPartsSections = new Schema({
	'IDSection': { type: String, required: true, unique: true },
	'IDPart': { type: Schema.Types.String, ref: 'PlantParts' },
	'Section': String,
    'plantPartsSectionsOperations': Array,
    'machines': Array
});

plantPartsSections.plugin(populatePlugin, {
    plantPartsSectionsOperations: {
        ref: 'PlantPartsSectionsOperations',
        foreignKey: 'IDSection',
        localKey: 'IDSection',
        singular: false
    },
    machines: {
        ref: 'Machine',
        foreignKey: 'IDSection',
        localKey: 'IDSection',
        singular: false
    }
});

module.exports = mongoose.model('PlantPartsSections', plantPartsSections);
