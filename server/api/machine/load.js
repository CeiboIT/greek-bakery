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
	  		jsonFile: 'machine/tbMachine.json',
	  		model: Machine});

loadTable({ clean: dropCollection,
	  		jsonFile: 'machine/tbMachineDamage.json',
	  		model: MachineDamage});

loadTable({ clean: dropCollection,
	  		jsonFile: 'machine/tbMachineMaintancePr.json',
	  		model: MachineMaintancePr});

loadTable({ clean: dropCollection,
	  		jsonFile: 'machine/tbMachineMaintanceAft.json',
	  		model: MachineMaintanceAft});

loadTable({ clean: dropCollection,
	  		jsonFile: 'machine/tbMaintance.json',
	  		model: Maintance});