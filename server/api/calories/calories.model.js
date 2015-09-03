'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var calories = new Schema({
    'Cal': String,
    'IDCal': { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Calories', calories);
