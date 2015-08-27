'use strict';

var Raw = require('./raw.model');
var operations = {};

operations.getAll = function () {
	return Raw.find().exec();
}

operations.getDetail = function (rawId) {
	
	return Raw.findById(rawId).exec()
  		.then(function (raw) {
  			return raw;
	  	});
}

module.exports = operations;
