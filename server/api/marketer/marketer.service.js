'use strict';

var Marketer = require('./marketer.model');
var MarketerCategory = require('./marketerCategory.model');
var StoreControl = require('../store/storeControl.model');
var SortSuplier = require('../sort/sortSuplier.model');
var StoreSale = require('../store/storeSale.model');
var SalesDate = require('./salesDate.model');
var DromologioPelates = require('./dromologioPelates.model');
var Dromologio = require('./dromologio.model');
// var IDSort = require('../sort/sort.model');
var operations = {};

operations.getAll = function () {
    return Marketer.find()
        .populate('IDMarketerCategory sortSupliers salesDates dromologioPelates.IDDromologio')//   storeSales.IDSort storeControl ')
        .lean().exec();
}

operations.getDetail = function (marketerId) {
    return Marketer.findById(marketerId)
        .populate('IDMarketerCategory sortSupliers salesDates dromologioPelates.IDDromologio')
        .lean().exec();
}

module.exports = operations;
