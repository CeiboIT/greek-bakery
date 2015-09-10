'use strict';

var loadTable = require('../commons');
var Label = require('./label.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbLabel.json',
            model: Label});
