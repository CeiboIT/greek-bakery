'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workerKnowl = new Schema({
	'IdWorkersKnowl': { type: String, required: true, unique: true },
	'WorkersKnowl': String
});

module.exports = mongoose.model('WorkerKnowl', workerKnowl);