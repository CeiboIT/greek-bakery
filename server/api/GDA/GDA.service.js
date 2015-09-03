'use strict';

var GDA = require('./GDA.model');
var operations = {};

operations.getAll = function () {
    return GDA.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (GDAId) {
    return GDA.findById(GDAId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
