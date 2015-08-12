'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tbA_FASH table

var advice = new Schema({
	'Advice': String,
	'IdAdvice': Number
});

module.export = advice;