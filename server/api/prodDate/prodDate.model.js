'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodDate = new Schema({
    'IDProdDate': { type: String, required: true, unique: true },
    'PrDateSxolia': String,
    'Date': String,
    'Print': String
});

module.exports = mongoose.model('ProdDate', prodDate);
