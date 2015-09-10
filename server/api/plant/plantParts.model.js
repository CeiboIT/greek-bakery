'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var plantParts = new Schema({
	'IDPart': { type: String, required: true, unique: true },
	'IDplant': { type: Schema.Types.String, ref: 'Plant' },
	'Part': String,
    'plantPartsSections': Array
});

plantParts.plugin(populatePlugin, {
    plantPartsSections: {
        ref: 'PlantParts',
        foreignKey: 'IDPart',
        localKey: 'IDPart',
        singular: false
    }
});

module.exports = mongoose.model('PlantParts', plantParts);
