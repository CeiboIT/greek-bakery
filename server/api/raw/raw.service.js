'use strict';

var Raw = require('./raw.model');
var RawCompositionDescription = require('./rawCompositionDescription.model');
var IDCategory = require('../sort/sortCategory.model');
var operations = {};

operations.getAll = function () {
	return Raw.find().populate('IDCompositionDescription IDCategory').lean().exec();
}

operations.getDetail = function (rawId) {

	return Raw.findById(rawId).populate('IDCompositionDescription IDCategory').lean().exec()
  		.then(function (raw) {
  			return raw;
	  	});
}

module.exports = operations;
