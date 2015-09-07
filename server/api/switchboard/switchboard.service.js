'use strict';

var Switchboard = require('./switchboard.model');
var operations = {};

operations.getAll = function () {
    return Switchboard.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (switchboardId) {
    return Switchboard.findById(switchboardId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
