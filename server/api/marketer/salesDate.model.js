'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesDate = new Schema({
	'IDSalesDate': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'SalesDate': Date,
	'SalesPrint': Boolean
});

module.exports = mongoose.model('SalesDate', salesDate);
