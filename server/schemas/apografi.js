'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbApografi table

var apografi = new Schema({
	'IdApografi': Number,
	'ApogYear': Number,
	'IDSort': Number,
	'Apografi': Number
});

module.export = apografi;