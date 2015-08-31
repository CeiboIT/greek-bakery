'use strict';

var Raw = require('./raw.model');
var RawCompositionDescription = require('./rawCompositionDescription.model');
var operations = {};

operations.getAll = function () {
	return Raw.find().populate('IDCompositionDescription IDCategory').lean().exec();
}

operations.getDetail = function (rawId) {
	
	return Raw.findById(rawId).exec()
  		.then(function (raw) {
  			return raw;
	  	});
}

module.exports = operations;
