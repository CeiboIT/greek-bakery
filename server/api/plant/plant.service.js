'use strict';

var Plant = require('./plant.model');
var PlantPart = require('./plantParts.model');
var PlantPartSection = require('./plantPartsSections.model');
var PlantPartSectionOperation = require('./plantPartsSectionsOperations.model');

var operations = {};

operations.getOperationsBySection = function () {
	return PlantPartSectionOperation.find().exec()
		.then(function (operations) {
			var operationsBySection = {};
			operations.forEach(function (operation) {
				operationsBySection[operation.IDSection] = operationsBySection[operation.IDSection] || [];
				operationsBySection[operation.IDSection].push(operation);
			});
			return operationsBySection;
		});
};

operations.getSectionByPart = function () {
	return operations.getOperationsBySection()
		.then(function (operationsBySection) {
			return PlantPartSection.find().exec()
				.then(function (sections) {
					var sectionsByPart = {};

					sections.forEach(function (section) {
						var sectionObject = section.toObject();
						sectionObject.operations = operationsBySection[section.IDSection];
						sectionsByPart[section.IDPart] = sectionsByPart[section.IDPart] || [];
						sectionsByPart[section.IDPart].push(sectionObject);
					});
					return sectionsByPart;
				});
			});
};

operations.getParts = function () {
	return operations.getSectionByPart()
		.then(function (sectionsByPart) {
			return PlantPart.find().exec()
				.then(function (parts) {
					var partsObjects = [];
					parts.forEach(function (part) {
						var partObject = part.toObject();
						partObject.sections = sectionsByPart[part.IDPart];
						partsObjects.push(partObject);
					});
					return partsObjects;
				});
		});
};
			
operations.getDetail = function () {
	return Plant.find().exec()
  		.then(function (plants) {
  			var plantObject = plants[0].toObject();
	    	return operations.getParts()
		    	.then(function (parts) {
		    		plantObject.parts = parts;
		    		return [plantObject];
		    	})
	  	});
}

module.exports = operations;