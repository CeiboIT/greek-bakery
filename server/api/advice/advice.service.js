'use strict';

var Advice = require('./advice.model');
var operations = {};

operations.getAll = function () {
    return Advice.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (adviceId) {
    return Advice.findById(adviceId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
