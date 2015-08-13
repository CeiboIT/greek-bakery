'use strict';

var loadTable = require('../commons');
var Sort = require('./sort.model');
var SortCategory = require('./sortCategory.model');
var SortSalesGroup = require('./sortSalesGroup.model');
var SortSubCategory = require('./sortSubCategory.model');
var SortSuplier = require('./sortSuplier.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'sort/tbSorts.json',
	  		model: Sort});

loadTable({	clean: dropCollection,
	  		jsonFile: 'sort/tbSortCategory.json',
	  		model: SortCategory});

loadTable({	clean: dropCollection,
	  		jsonFile: 'sort/tbSortSalesGroup.json',
	  		model: SortSalesGroup});

loadTable({	clean: dropCollection,
	  		jsonFile: 'sort/tbSortCategorySub.json',
	  		model: SortSubCategory});

loadTable({	clean: dropCollection,
	  		jsonFile: 'sort/tbSortSupliers.json',
	  		model: SortSuplier});


