'use strict';

var loadTable = require('../commons');
var Dromologio = require('./dromologio.model');
var DromologioPelates = require('./dromologioPelates.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbDromologio.json',
	  		model: Dromologio});

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbDromol_Pelates.json',
	  		model: DromologioPelates});
