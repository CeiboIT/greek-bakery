'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paraponoSort = new Schema({
	'IDparaponoSort': { type: Number, required: true, unique: true },
	'IdParapono': { type: Schema.Types.Number, ref: 'Parapono' },
	'IDSort': Number,
	'LotNumber': String,
	'Remarks': String
});

module.exports = mongoose.model('ParaponoSort', paraponoSort);