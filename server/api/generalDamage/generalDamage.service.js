'use strict';

var GeneralDamage = require('./generalDamage.model');
var operations = {};

operations.getAll = function () {
    return GeneralDamage.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (generalDamageId) {
    return GeneralDamage.findById(generalDamageId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
