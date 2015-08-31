'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var raw = new Schema({
	'IDRaw': { type: Number, required: true, unique: true },
	'Choice': Boolean,
	'Raw': String,
	'IDCompositionDescription': { type: Schema.Types.String, ref: 'RawCompositionDescription' },
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'Carbohydrt': Number,
	'Sugars': Number,
	'OrganicsAcid': Number,
	'Polyols': Number,
	'Alcohol': Number,
	'Fats': Number,
	'Protein': Number,
	'Ash': Number,
	'Fiber_': Number,
	'Calcium': Number,
	'Iron': Number,
	'Magnesium': Number,
	'Phosphorus': Number,
	'Potassium': Number,
	'Sodium': Number,
	'Zinc': Number,
	'Copper': Number,
	'Manganese': Number,
	'FA_Sat': Number,
	'FA_Mono': Number,
	'FA_Poly': Number,
	'Cholestrl': Number,
	'Emulsifiers': Number,
	'Stabilizers': Number,
	'CocosButter': Number,
	'MilkFats': Number,
	'Presevatives': Number,
	'Flavors': Number,
	'Colors': Number
});

raw.plugin(populatePlugin, {
    IDCompositionDescription: {
      ref: 'RawCompositionDescription',
      foreignKey: 'IDCompositionDescription',
      localKey: 'IDCompositionDescription',
      singular: true
    },
    IDCategory: {
    	ref: 'SortCategory',
    	foreignKey: 'IDCategory',
    	localKey: 'IDCategory',
        singular: true
    }
});

module.exports = mongoose.model('Raw', raw);