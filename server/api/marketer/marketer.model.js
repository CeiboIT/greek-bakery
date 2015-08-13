'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marketer = new Schema({
	'IDMarketer': { type: Number, required: true, unique: true },
	'IDMarketer1': Number,
	'IDMarketerCategory': { type: Schema.Types.Number, ref: 'MarketerCategory' },
	'CompanyName': String,
	'AccountableSurName': String,
	'AccountableName': String,
	'Country': String,
	'Part': String,
	'City': String,
	'Section': String,
	'Address': String,
	'Telefon1': String,
	'Telefon2': String,
	'Telefon3': String,
	'Fax': String,
	'e-mail': String,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'No4': Number,
	'Date1': Date,
	'Date2': Date,
	'Memo1': String,
	'YesNo1': Boolean,
	'YesNo2': Boolean
});

module.exports = mongoose.model('Marketer', marketer);