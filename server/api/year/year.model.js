'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var year = new Schema({
    'IDYear': { type: String, required: true, unique: true },
    'Date': String
});

module.exports = mongoose.model('Year', year);
