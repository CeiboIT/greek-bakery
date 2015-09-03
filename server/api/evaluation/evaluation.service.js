'use strict';

var Evaluation = require('./evaluation.model');
var Marketer = require('../marketer/marketer.model');
var Plant = require('../plant/plant.model');
var operations = {};

operations.getAll = function () {
    return Evaluation.find()
        .populate('IDMarketer IDPart')
        .lean().exec();
}

operations.getDetail = function (evaluationId) {
    return Evaluation.findById(evaluationId)
        .populate('IDMarketer IDPart')
        .lean().exec();
}

module.exports = operations;
