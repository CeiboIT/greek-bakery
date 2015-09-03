'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var advice = new Schema({
    'Advice': String,
    'IdAdvice': { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Advice', advice);
