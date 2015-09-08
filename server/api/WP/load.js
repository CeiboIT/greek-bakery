'use strict';

var loadTable = require('../commons');
var WP = require('./WP.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbWP.json',
            model: WP});
