'use strict';

var loadTable = require('../commons');
var Plant = require('./plant.model');
var PlantPart = require('./plantParts.model');
var PlantPartSections = require('./plantPartsSections.model');
var PlantPartsSectionsOperations = require('./plantPartsSectionsOperations.model');

// Load all plant related records and insert into db

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'tbPlant.json',
	  		model: Plant});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbPlantParts.json',
	  		model: PlantPart});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbPlantPartsSections.json',
	  		model: PlantPartSections});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbPlantPartsSectionsOperation.json',
	  		model: PlantPartsSectionsOperations});
