'use strict';

var loadTable = require('../commons');
var GeneralDamage = require('./generalDamage.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbGeneralDamage.json',
            model: GeneralDamage});
