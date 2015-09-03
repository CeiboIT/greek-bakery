'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DataTable = require('../../components/mongoose-datatable');
var populatePlugin = require('mongoose-power-populate')(mongoose);

DataTable.configure({ verbose: true, debug : true });

var storeSale = new Schema({
	'IDStoreSales': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'Date': Date,
	'Parastatiko': String,
	'IDSort': { type: Schema.Types.Number, ref: 'Sort' },
	'Price': Number,
	'Quantity': Number,
	'Returns': Number,
	'IDNotEnough': Number
});

storeSale.plugin(populatePlugin, {
    IDMarketer: {
      ref: 'Marketer',
      foreignKey: 'IDMarketer',
      localKey: 'IDMarketer',
      singular: true
    },
    IDSort: {
      ref: 'Sort',
      foreignKey: 'IDSort',
      localKey: 'IDSort',
      singular: true
    }
});

storeSale.plugin(DataTable.init);

module.exports = mongoose.model('StoreSale', storeSale);