'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesDate = new Schema({
	'IDSalesDate': { type: Number, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.Number, ref: 'Marketer' },
	'SalesDate': Date,
	'SalesPrint': Boolean
});

module.exports = mongoose.model('SalesDate', salesDate);