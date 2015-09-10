'use strict';

var loadTable = require('../commons');
var ProdProcudeurs = require('./prodProcudeurs.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbProdProcudeurs.json',
            model: ProdProcudeurs});
