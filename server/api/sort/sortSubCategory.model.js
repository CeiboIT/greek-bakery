'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var sortSubCategory = new Schema({
	'IDSortSubCategory': { type: String, required: true, unique: true },
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'SortSubCategory': String
});

sortSubCategory.plugin(populatePlugin, {
    IDCategory: {
        ref: 'SortCategory',
        foreignKey: 'IDCategory',
        localKey: 'IDCategory',
        singular: true
    }
});

module.exports = mongoose.model('SortSubCategory', sortSubCategory);
