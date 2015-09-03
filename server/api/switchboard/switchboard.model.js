'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var switchboard = new Schema({
    'SwitchboardID': { type: String, required: true, unique: true },
    'Argument': String,
    'ItemNumber': String,
    'ItemText': String,
    'Command': String
});

module.exports = mongoose.model('Switchboard', switchboard);
