'use strict';

var loadTable = require('../commons');
var Program = require('./program.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbProgram.json',
            model: Program});
