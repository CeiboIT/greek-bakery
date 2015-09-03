'use strict';

var Calories = require('./calories.model');
var operations = {};

operations.getAll = function () {
    return Calories.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (caloriesId) {
    return Calories.findById(caloriesId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
