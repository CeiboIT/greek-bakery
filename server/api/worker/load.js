'use strict';

var loadTable = require('../commons');
var WorkerModel = require('./worker.model');
var WorkerKnowl = require('./workerKnowl.model');

// Load all plant related records and insert into db

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'worker/tbWorkes.json',
	  		model: WorkerModel});

loadTable({	clean: dropCollection,
	  		jsonFile: 'worker/tbWorkersKnowl.json',
	  		model: WorkerKnowl});
