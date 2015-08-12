'use strict';

var loadTable = require('../commons');
var Machine = require('./machine.model');
var MachineDamage = require('./machineDamage.model');
var MachineMaintanceAft = require('./machineMaintanceAft.model');
var MachineMaintancePr = require('./machineMaintancePr.model');
var Maintance = require('./maintance.model');

// Load all machine related records and insert into db

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'tbMachine.json',
	  		model: Machine});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbMachineDamage.json',
	  		model: MachineDamage});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbMachineMaintancePr.json',
	  		model: MachineMaintancePr});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbMachineMaintanceAft.json',
	  		model: MachineMaintanceAft});

loadTable({ clean: dropCollection,
	  		jsonFile: 'tbMaintance.json',
	  		model: Maintance});