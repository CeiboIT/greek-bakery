'use strict';

var loadTable = require('../commons');
var Plant = require('./plant.model');
var PlantPart = require('./plantParts.model');
var PlantPartSections = require('./plantPartsSections.model');
var PlantPartsSectionsOperations = require('./plantPartsSectionsOperations.model');
var Work = require('./work.model');

// Load all plant related records and insert into db

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'plant/tbPlant.json',
	  		model: Plant});

loadTable({ clean: dropCollection,
	  		jsonFile: 'plant/tbPlantParts.json',
	  		model: PlantPart});

loadTable({ clean: dropCollection,
	  		jsonFile: 'plant/tbPlantPartsSections.json',
	  		model: PlantPartSections});

loadTable({ clean: dropCollection,
	  		jsonFile: 'plant/tbPlantPartsSectionsOperation.json',
	  		model: PlantPartsSectionsOperations});

loadTable({ clean: dropCollection,
	  		jsonFile: 'plant/tbWork.json',
	  		model: Work});
