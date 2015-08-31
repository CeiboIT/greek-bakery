'use strict';

var AFash = require('./aFash.model');
var IDCategory = require('../sort/sortCategory.model');
var IDSortSubCategory = require('../sort/sortSubCategory.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var IDOperation = require('../plant/plantPartsSectionsOperations.model');
var AFashMaterials = require('./aFashMaterials.model');
var operations = {};

operations.getAll = function () {
	return AFash.find().populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials').lean().exec();
}

operations.getDetail = function (aFashId) {

	return AFash.findById(aFashId).populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials').exec()
  		.then(function (aFash) {
  			return aFash;
	  	});
}

module.exports = operations;
