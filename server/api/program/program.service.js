'use strict';

var Program = require('./program.model');
var operations = {};

operations.getAll = function () {
    return Program.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (programId) {
    return Program.findById(programId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
