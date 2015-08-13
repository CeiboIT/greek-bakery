'use strict';

var loadTable = require('../commons');
var StoreControl = require('./storeControl.model');
var StoreSale = require('./storeSale.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'store/tbStoreControl.json',
	  		model: StoreControl});

loadTable({	clean: dropCollection,
	  		jsonFile: 'store/tbStoreSales.json',
	  		model: StoreSale});
