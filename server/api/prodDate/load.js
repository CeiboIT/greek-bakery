'use strict';

var loadTable = require('../commons');
var ProdDate = require('./prodDate.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbProdDate.json',
            model: ProdDate});
