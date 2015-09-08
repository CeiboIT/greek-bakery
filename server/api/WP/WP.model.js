'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WP = new Schema({
    'IDWP': { type: String, required: true, unique: true },
    'WP': String,
    'IDSection': String,
    'text1': String,
    'text2': String,
    'text3': String,
    'No1': String,
    'No2': String,
    'No3': String,
    'No4': String,
    'Chek1': String,
    'Chek2': String,
    'Chek3': String,
    'Chek4': String,
    'Date1': String,
    'Date2': String,
    'Date3': String,
    'Date4': String
});

module.exports = mongoose.model('WP', WP);
