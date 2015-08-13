'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeControl = new Schema({
	'IDStoreControl': { type: Number, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.Number, ref: 'Marketer' },
	'Date': Date,
	'NoApod': Number,
	'Incam': Number
});

module.exports = mongoose.model('StoreControl', storeControl);