'use strict';

var Marketer = require('./marketer.model');
var MarketerCategory = require('./marketerCategory.model');
var StoreControl = require('../store/storeControl.model');
var SortSuplier = require('../sort/sortSuplier.model');
var StoreSale = require('../store/storeSale.model');
var SalesDate = require('./salesDate.model');
var DromologioPelates = require('./dromologioPelates.model');
var Dromologio = require('./dromologio.model');

var operations = {};

function populate (marketer) {
    return MarketerCategory.findOne().exec()
            .then(function (category) {
                marketer.category = category;
                return marketer;
            }, function (error) {
                console.error(error);
            });
}

operations.getStoreControlByMarketer = function (marketerId) {
    console.log('Store Control for ' + marketerId);
    return StoreControl.find({'IdMarketer': marketerId}).exec();
};

operations.getSortSuplierByMarketer = function (marketerId) {
    console.log('Sort Suplier for ' + machineId);
    return SortSuplier.find({'IdMarketer': marketerId}).exec();
};

operations.getStoreSaleByMarketer = function (marketerId) {
    console.log('Store Sale for ' + marketerId);
    return StoreSale.find({'IdMarketer': marketerId}).exec();
};

operations.getSalesDateByMarketer = function (marketerId) {
    console.log('Sales Date for ' + marketerId);
    return salesDate.find({'IdMarketer': marketerId}).exec();
};

operations.getDromologioPelatesByMarketer = function (marketerId) {
    console.log('Dromologio Pelates for ' + marketerId);
    return dromologioPelates.find({'IdMarketer': marketerId}).exec();
};

operations.getDetail = function (marketerId) {
    return Marketer.findById(marketerId)
        .then(function (marketer) {
            var marketerObject = marketer.toObject();

            if (!marketer) {
                return null;
            }

            // add Store Controls to Marketer
            return operations.getStoreControlByMarketer(marketer.IDMarketer)
                .then(function (storeControls) {
                    console.log('adding store controls');
                    marketerObject.storeControl = storeControls;
                    //console.log(marketerObject);
                    return marketerObject;
                })

            // add Sort Supliers to Marketer
                .then(function() {
                    return operations.getSortSuplierByMarketer(marketer.IDMarketer)
                        .then(function (sortSupliers) {
                            console.log('adding sort supliers');
                            marketerObject.sortSupliers = sortSupliers;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Store Sales to Marketer
                .then(function() {
                    return operations.getStoreSaleByMarketer(marketer.IDMarketer)
                        .then(function (storeSales) {
                            console.log('adding store sales');
                            marketerObject.storeSales = storeSales;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Sales Dates to Marketer
                .then(function() {
                    return operations.getSalesDateByMarketer(marketer.IDMarketer)
                        .then(function (salesDates) {
                            console.log('adding sales dates');
                            marketerObject.salesDates = salesDates;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Dromologio Pelates to Marketer
                .then(function() {
                    return operations.getDromologioPelatesByMarketer(marketer.IDMarketer)
                        .then(function (dromologioPelates) {
                            console.log('adding dromologio pelates');
                            marketerObject.dromologioPelates = dromologioPelates;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Marketer Category to Marketer
                .then(function () {
                    return populate(marketerObject)
                        .then(function (populatedMarketer) {
                            console.log('adding category');
                            return populatedMarketer;
                        });
                });
        });
}

module.exports = operations;
