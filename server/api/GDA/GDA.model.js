'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GDA = new Schema({
    'Salt': String,
    'IDGDA': String,
    'KCal': String,
    'Proteins': String,
    'Carbohydrates': String,
    'Sugars': String,
    'Fats': String,
    'SatFats': String,
    'Fibres': String,
    'Sodium': String
});

module.exports = mongoose.model('GDA', GDA);
