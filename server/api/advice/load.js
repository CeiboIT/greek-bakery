'use strict';

var loadTable = require('../commons');
var Advice = require('./advice.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbAdvice.json',
            model: Advice});
