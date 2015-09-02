'use strict';

var CFash = require('./cFash.model');
var IDCategory = require('../sort/sortCategory.model');
var IDSortSubCategory = require('../sort/sortSubCategory.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var IDOperation = require('../plant/plantPartsSectionsOperations.model');
var CFashMaterials = require('./cFashMaterials.model');
var CFashMaterialsYS = require('./cFashMaterialsYS.model');
var IDSort = require('../sort/sort.model');
var operations = {};

operations.getAll = function () {
    return CFash.find()
        .populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort materialsYS.IDSort materialsYS.IDOperation')
        .lean().exec();
}

operations.getDetail = function (cFashId) {
    return CFash.findById(cFashId)
        .populate('IDCategory IDSortSubCategory IDMUnit IDOperation materials.IDSort materialsYS.IDSort materialsYS.IDOperation')
        .lean().exec();
}

module.exports = operations;
