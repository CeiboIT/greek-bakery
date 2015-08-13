'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSale = new Schema({
	'IDStoreSales': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.Number, ref: 'Marketer' },
	'Date': Date,
	'Parastatiko': String,
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },
	'Price': Number,
	'Quantity': Number,
	'Returns': Number,
	'IDNotEnough': Number
});

module.exports = mongoose.model('StoreSale', storeSale);