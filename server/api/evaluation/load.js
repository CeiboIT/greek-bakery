'use strict';

var loadTable = require('../commons');
var Evaluation = require('./evaluation.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'evaluation/tbSupEvaluation.json',
	  		model: Evaluation});
