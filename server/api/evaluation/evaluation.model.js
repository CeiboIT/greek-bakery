'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evaluation = new Schema({
	'IDSupEvaluation': { type: Number, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.Number, ref: 'Marketer' },
	'IDPart': { type: Schema.Types.Number, ref: 'Plant' },
	'Year': Number,
	'QualPrServ': Number,
	'SpecifPrServ': Number,
	'SystemInternalQC': Number,
	'ProblemSupport': Number,
	'Prices': Number,
	'TimeResponse': Number,
	'Consistensy': Number,
	'Flexibility': Number,
	'History': Number,
	'FameCredibility': Number,
	'BeEvaluate': Boolean,
	'text1': String,
	'text2': String,
	'text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date
});

module.exports = mongoose.model('Evaluation', evaluation);