'use strict';

var Dromologio = require('./dromologio.model');
var DromologioPelates = require('./dromologioPelates.model');
var Marketer = require('../marketer/marketer.model');
var operations = {};

operations.getAll = function () {
    return DromologioPelates.find()
        .populate('IDDromologio IDMarketer')
        .lean().exec();
}

operations.getDetail = function (dromologioId) {
    return DromologioPelates.findById(dromologioId)
        .populate('IDDromologio IDMarketer')
        .lean().exec()
            .then(function(data) {
                console.log(data);
            })
}

module.exports = operations;
