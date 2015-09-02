'use strict';

var TechInfo = require('./techInfo.model');
var SortSubCategory = require('../sort/sortSubCategory.model');
var SortCategory = require('../sort/sortCategory.model');
var operations = {};

operations.getAll = function () {
    return TechInfo.find()
        .populate('IDSortSubCategory.IDCategory')
        .lean().exec();
}

operations.getDetail = function (machineId) {
    return TechInfo.findById(machineId)
        .populate('IDSortSubCategory.IDCategory')
        .lean().exec();
}

module.exports = operations;
