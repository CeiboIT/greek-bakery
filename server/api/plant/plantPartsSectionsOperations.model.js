'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var plantPartsSectionsOperations = new Schema({
	'IDOperation': { type: String, required: true, unique: true },
	'IDOperationLoced': Boolean,
	'Operation': String,
	'IDSection': { type: Schema.Types.String, ref: 'PlantPartsSections' },
	'Wh_Productivity': Number,
	'Wh_Cost': Number,
    'works': Array
});

plantPartsSectionsOperations.plugin(populatePlugin, {
    works: {
        ref: 'Work',
        foreignKey: 'IDOperation',
        localKey: 'IDOperation',
        singular: false
    }
});

module.exports = mongoose.model('PlantPartsSectionsOperations', plantPartsSectionsOperations);
