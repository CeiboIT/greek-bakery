'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var program = new Schema({
    'IDProgram': { type: String, required: true, unique: true },
    'Date': String,
    'Print': String
});

module.exports = mongoose.model('Program', program);
