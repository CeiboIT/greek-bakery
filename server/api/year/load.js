'use strict';

var loadTable = require('../commons');
var Year = require('./year.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbYear.json',
            model: Year});
