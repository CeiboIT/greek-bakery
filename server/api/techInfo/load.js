'use strict';

var loadTable = require('../commons');
var TechInfo = require('./techInfo.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'techInfo/tbETOIMATechInform.json',
	  		model: TechInfo});