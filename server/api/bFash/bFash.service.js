'use strict';

var BFash = require('./bFash.model');
var IDCategory = require('../sort/sortCategory.model');
var IDSortSubCategory = require('../sort/sortSubCategory.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var IDOperation = require('../plant/plantPartsSectionsOperations.model');
var BFashMaterials = require('./bFashMaterials.model');
var IDSort = require('../sort/sort.model');
var operations = {};

operations.getAll = function () {
    return BFash.find()
        .populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort')
        .lean().exec();
}

operations.getDetail = function (bFashId) {
    return BFash.findById(bFashId)
        .populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort')
        .lean().exec();
}

module.exports = operations;
