'use strict';

var loadTable = require('../commons');
var Switchboard = require('./switchboard.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbSwitchboard.json',
            model: Switchboard});
