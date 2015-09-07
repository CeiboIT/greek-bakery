'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var sortSuplier = new Schema({
	'IDAuto': { type: String, required: true, unique: true },
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'Basic': Boolean,
	'IDMarketer':  { type: Schema.Types.String, ref: 'Marketer' },
	'Date': Date,
	'Price': Number,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date
});

sortSuplier.plugin(populatePlugin, {
    IDSort: {
        ref: 'Sort',
        foreignKey: 'IDSort',
        localKey: 'IDSort',
        singular: true
    }
});

module.exports = mongoose.model('SortSuplier', sortSuplier);
