'use strict';

var loadTable = require('../commons');
var Parapono = require('./parapono.model');
var ParaponoCat = require('./paraponoCat.model');
var ParaponoSort = require('./paraponoSort.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'parapono/tbParapono.json',
	  		model: Parapono});

loadTable({	clean: dropCollection,
	  		jsonFile: 'parapono/tbParaponoCat.json',
	  		model: ParaponoCat});

loadTable({	clean: dropCollection,
	  		jsonFile: 'parapono/tbParaponoSort.json',
	  		model: ParaponoSort});
