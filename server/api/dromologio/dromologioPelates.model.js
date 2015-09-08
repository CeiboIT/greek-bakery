'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var dromologioPelates = new Schema({
	'IDDroml_Pelates': { type: String, required: true, unique: true },
	'IDDromologio': { type: Schema.Types.String, ref: 'Dromologio' },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'Seira': Number,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'Date1': Date,
	'Date2': Date,
	'Memo1': String,
	'YesNo1': Boolean,
	'YesNo2': Boolean
});

dromologioPelates.plugin(populatePlugin, {
    IDDromologio: {
        ref: 'Dromologio',
        foreignKey: 'IDDromologio',
        localKey: 'IDDromologio',
        singular: true
    },
    IDMarketer: {
        ref: 'Marketer',
        foreignKey: 'IDMarketer',
        localKey: 'IDMarketer',
        singular: true
    },
});

module.exports = mongoose.model('DromologioPelates', dromologioPelates);
