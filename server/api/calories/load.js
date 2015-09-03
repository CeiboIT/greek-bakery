'use strict';

var loadTable = require('../commons');
var Calories = require('./calories.model');

var dropCollection = true;

loadTable({ clean: dropCollection,
            jsonFile: 'referenceValues/tbCalories.json',
            model: Calories});
