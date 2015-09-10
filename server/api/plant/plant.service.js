'use strict';

var Plant = require('./plant.model');
var PlantPart = require('./plantParts.model');
var PlantPartSection = require('./plantPartsSections.model');
var PlantPartSectionOperation = require('./plantPartsSectionsOperations.model');
var operations = {};

operations.getAll = function () {
    return Plant.find()
        .populate('plantParts.plantPartsSections.plantPartsSectionsOperations.works plantParts.plantPartsSections.machines')
        .lean().exec();
}

operations.getDetail = function (plantId) {
    return Plant.findById(plantId)
        .populate('plantParts.plantPartsSections.plantPartsSectionsOperations.works plantParts.plantPartsSections.machines')
        .lean().exec();
}

module.exports = operations;
