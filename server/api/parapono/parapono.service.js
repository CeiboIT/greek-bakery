'use strict';

var Parapono = require('./parapono.model');
var ParaponoCat = require('./paraponoCat.model');
var ParaponoSort = require('./paraponoSort.model');
var operations = {};

operations.getAll = function () {
    return Parapono.find()
        .populate('IdParaponoCat paraponoSort')
        .lean().exec();
}

operations.getDetail = function (paraponoId) {
    return Parapono.findById(paraponoId)
        .populate('IdParaponoCat paraponoSort')
        .lean().exec();
}

module.exports = operations;
