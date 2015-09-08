'use strict';

var Label = require('./label.model');
var operations = {};

operations.getAll = function () {
    return Label.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (labelId) {
    return Label.findById(labelId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
