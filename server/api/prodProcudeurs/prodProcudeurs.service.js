'use strict';

var ProdProcudeurs = require('./prodProcudeurs.model');
var operations = {};

operations.getAll = function () {
    return ProdProcudeurs.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (prodProcudeursId) {
    return ProdProcudeurs.findById(prodProcudeursId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
