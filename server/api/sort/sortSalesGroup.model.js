'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sortSalesGroup = new Schema({
	'IdSalesGroup': { type: Number, required: true, unique: true },
	'IDCategory': { type: Schema.Types.String, ref: 'SortCategory' },
	'SalesGroup': String
});

module.exports = mongoose.model('SortSalesGroup', sortSalesGroup);