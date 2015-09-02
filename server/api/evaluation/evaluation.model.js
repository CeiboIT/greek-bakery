'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var evaluation = new Schema({
	'IDSupEvaluation': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'IDPart': { type: Schema.Types.String, ref: 'Plant' },
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

evaluation.plugin(populatePlugin, {
    IDMarketer: {
    	ref: 'Marketer',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: true
    },
	IDPart: {
    	ref: 'Plant',
    	foreignKey: 'IDplant',
    	localKey: 'IDPart',
        singular: true
    }
});

module.exports = mongoose.model('Evaluation', evaluation);
