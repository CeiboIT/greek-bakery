'use strict';

var Machine = require('./machine.model');
var MachineDamage = require('./machineDamage.model');
var MachineMaintanceAft = require('./machineMaintanceAft.model');
var MachineMaintancePr = require('./machineMaintancePr.model');
var Maintance = require('./maintance.model');
var PlantPartsSections = require('../plant/plantPartsSections.model');
var operations = {};

operations.getAll = function () {
    return Machine.find()
        .populate('IDSection damage maintanceAft.IdMaintanceAfter maintancePr.IdMaintance')
        .lean().exec();
}

operations.getDetail = function (machineId) {
    return Machine.findById(machineId)
        .populate('IDSection damage maintanceAft.IdMaintanceAfter maintancePr.IdMaintance')
        .lean().exec();
}

module.exports = operations;
