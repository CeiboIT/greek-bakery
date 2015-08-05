'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var switchBoardItems = new Schema({
	SwitchboardID: Number,
	ItemNumber: Number,
	ItemText: String,
	Command: Number,
	Argument: String
});	

module.export = switchBoardItems;