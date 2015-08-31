'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var cFashMaterials = new Schema({
	'IDC_FASH': { type: Schema.Types.String, ref: 'CFash' },
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'IDC_FASHSxolia': String,
	'IDC_FASHQuantity': Number,
	'IDC_FASHLoose': Number,
	'IDC_FASHRecipe': Boolean,
	'IDC_FASHDelete': Boolean
});

cFashMaterials.plugin(populatePlugin, {
    IDSort: {
        ref: 'Sort',
        foreignKey: 'IDSort',
        localKey: 'IDSort',
        singular: true
    }
});

module.exports = mongoose.model('CFashMaterials', cFashMaterials);
