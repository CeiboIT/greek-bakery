'use strict';

var loadTable = require('../commons');
var Production = require('./production.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'production/tbPRODUCTION.json',
	  		model: Production});