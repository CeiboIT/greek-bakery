'use strict';

var loadTable = require('../commons');
var GDA = require('./GDA.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbGDA.json',
            model: GDA});
