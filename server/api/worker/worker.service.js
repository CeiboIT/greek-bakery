'use strict';

var Worker = require('./worker.model');
var WorkerKnowl = require('./WorkerKnowl.model');
var operations = {};

operations.getAll = function () {
    return Worker.find()
        .populate('IdWorkersKnowl')
        .lean().exec();
}

operations.getDetail = function (workerId) {
    return Worker.findById(workerId)
        .populate('IdWorkersKnowl')
        .lean().exec();
}

module.exports = operations;
