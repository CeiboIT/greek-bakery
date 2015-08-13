'use strict';

var loadTable = require('../commons');
var CFash = require('./cFash.model');
var CFashMaterials = require('./cFashMaterials.model');
var CFashMaterialsYS = require('./cFashMaterialsYS.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'cFash/tbC_FASH.json',
	  		model: CFash});

loadTable({	clean: dropCollection,
	  		jsonFile: 'cFash/tbC_FASHMaterials.json',
	  		model: CFashMaterials});

loadTable({	clean: dropCollection,
	  		jsonFile: 'cFash/tbC_FASHMaterialsYS.json',
	  		model: CFashMaterialsYS});
