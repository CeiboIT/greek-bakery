'use strict';

var loadTable = require('../commons');
var Marketer = require('./marketer.model');
var MarketerCategory = require('./marketerCategory.model');
var Dromologio = require('./dromologio.model');
var DromologioPelates = require('./dromologioPelates.model');
var StoreControl = require('./storeControl.model');

// Load all plant related records and insert into db

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbMarketers.json',
	  		model: Marketer});

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbMarketerCategory.json',
	  		model: MarketerCategory});

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbDromologio.json',
	  		model: Dromologio});

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbDromol_Pelates.json',
	  		model: DromologioPelates});

loadTable({	clean: dropCollection,
	  		jsonFile: 'marketer/tbStoreControl.json',
	  		model: StoreControl});
