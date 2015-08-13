'use strict';

var loadTable = require('../commons');
var Raw = require('./raw.model');
var RawCompositionDescription = require('./rawCompositionDescription.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'raw/tbRaw.json',
	  		model: Raw});

loadTable({	clean: dropCollection,
	  		jsonFile: 'raw/tbRCompotitionDescription.json',
	  		model: RawCompositionDescription});
