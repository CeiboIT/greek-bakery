'use strict';

var Year = require('./year.model');
var operations = {};

operations.getAll = function () {
    return Year.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (yearId) {
    return Year.findById(yearId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
