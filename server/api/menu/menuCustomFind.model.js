'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuCustomFind = new Schema({
	'IDMenuCustFind': { type: Number, required: true, unique: true },
	'MenuCustFind': String
});

module.exports = mongoose.model('MenuCustomFind', menuCustomFind);