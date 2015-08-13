'use strict';

var loadTable = require('../commons');
var Menu = require('./menu.model');

var dropCollection = true;

loadTable({	clean: dropCollection,
	  		jsonFile: 'menu/tbMenu.json',
	  		model: Menu});