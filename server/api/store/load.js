'use strict';

var loadTable = require('../commons');
var StoreControl = require('./storeControl.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'store/tbStoreControl.json',
	  		model: StoreControl});
