'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var storeSale = new Schema({
	'IDStoreSales': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'Date': Date,
	'Parastatiko': String,
	'IDSort': { type: Schema.Types.String, ref: 'Sort' },
	'Price': Number,
	'Quantity': Number,
	'Returns': Number,
	'IDNotEnough': Number
});

storeSale.plugin(populatePlugin, {
    IDSort: {
        ref: 'Sort',
        foreignKey: 'IDSort',
        localKey: 'IDSort',
        singular: true
    }
});

module.exports = mongoose.model('StoreSale', storeSale);
