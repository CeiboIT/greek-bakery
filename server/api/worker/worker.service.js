'use strict';

var WorkerModel = require('./worker.model');
var WorkerKnowl = require('./workerKnowl.model');
var operations = {};

operations.getAll = function () {
    return WorkerModel.find()
        //.populate('IdWorkersKnowl')
        .lean().exec();
}

operations.getDetail = function (workerId) {
    return WorkerModel.findById(workerId)
        //.populate('IdWorkersKnowl')
        .lean().exec();
}

module.exports = operations;
