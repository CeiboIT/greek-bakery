'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var label = new Schema({
    'IDLabel': { type: String, required: true, unique: true },
    'IDSortStorage': String,
    'SortDescrLabel': String,
    'SubCtegoryLabel': String,
    'Compotiton': String,
    'DateExpiry': String,
    'DateProduction': String,
    'LN': String,
    'Producer': String,
    'Allergies': String,
    'NetWeigth': String,
    'Text2': String,
    'Text3': String,
    'No1': String,
    'No2': String,
    'No3': String,
    'Date1': String,
    'Date2': String,
    'Memo1': String,
    'YesNo1': String,
    'YesNo2': String
});

module.exports = mongoose.model('Label', label);
