'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workesKnowl = new Schema({
	'IdWorkersKnowl': { type: String, required: true, unique: true },
	'WorkersKnowl': String
});

module.exports = mongoose.model('WorkesKnowl', workesKnowl);
