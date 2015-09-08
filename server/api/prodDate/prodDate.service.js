'use strict';

var ProdDate = require('./prodDate.model');
var operations = {};

operations.getAll = function () {
    return ProdDate.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (prodDateId) {
    return ProdDate.findById(prodDateId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
