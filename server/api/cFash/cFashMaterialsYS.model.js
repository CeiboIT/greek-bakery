'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var cFashMaterialsYS = new Schema({
	'IDC_FASH': { type: Schema.Types.String, ref: 'CFash' },
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'IDOperation': { type: Schema.Types.String, ref: 'PlantPartsSectionsOperations' },
	'IDC_FASHQuantity': Number,
	'IDC_FASHLoose': Number,
	'IDC_FASHRecipe': Boolean,
	'IDC_FASHDelete': Boolean
});

cFashMaterialsYS.plugin(populatePlugin, {
    IDSort: {
        ref: 'Sort',
        foreignKey: 'IDSort',
        localKey: 'IDSort',
        singular: true
    },
    IDOperation: {
        ref: 'PlantPartsSectionsOperations',
        foreignKey: 'IDOperation',
        localKey: 'IDOperation',
        singular: true
    }
});

module.exports = mongoose.model('CFashMaterialsYS', cFashMaterialsYS);
