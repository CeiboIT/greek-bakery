'use strict';

var loadTable = require('../commons');
var BFash = require('./bFash.model');
var BFashMaterials = require('./bFashMaterials.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'bFash/tbB_FASH.json',
	  		model: BFash});

loadTable({	clean: dropCollection,
	  		jsonFile: 'bFash/tbB_FASHMaterials.json',
	  		model: BFashMaterials});
