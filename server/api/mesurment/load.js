'use strict';

var loadTable = require('../commons');
var Mesurment = require('./mesurment.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'mesurment/tbMesurmentUnit.json',
	  		model: Mesurment});