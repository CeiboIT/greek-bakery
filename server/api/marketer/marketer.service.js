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
    return StoreControl.find({'IDMarketer': marketerId}).exec();
};

operations.getSortSuplierByMarketer = function (marketerId) {
    return SortSuplier.find({'IDMarketer': marketerId}).exec();
};

operations.getStoreSaleByMarketer = function (marketerId) {
    return StoreSale.find({'IDMarketer': marketerId}).exec();
};

operations.getSalesDateByMarketer = function (marketerId) {
    return SalesDate.find({'IDMarketer': marketerId}).exec();
};

operations.getDromologioPelatesByMarketer = function (marketerId) {
    return DromologioPelates.find({'IDMarketer': marketerId}).exec()
        .then(function (dromologioPelates) {
            var dromologioPelatesObjects = [];
            dromologioPelates.forEach(function (dromologioPelate) {
                var dromologioPelateObject = dromologioPelate.toObject();
                dromologioPelateObject.IDDromologio = Dromologio.find({'IDDromologio': dromologioPelate.IDDromologio});
                dromologioPelatesObjects.push(dromologioPelateObject);
            });
            return dromologioPelatesObjects;
        })
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
                    marketerObject.storeControl = storeControls;
                    //console.log(marketerObject);
                    return marketerObject;
                })

            // add Sort Supliers to Marketer
                .then(function() {
                    return operations.getSortSuplierByMarketer(marketer.IDMarketer)
                        .then(function (sortSupliers) {
                            marketerObject.sortSupliers = sortSupliers;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Store Sales to Marketer
                .then(function() {
                    return operations.getStoreSaleByMarketer(marketer.IDMarketer)
                        .then(function (storeSales) {
                            marketerObject.storeSales = storeSales;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Sales Dates to Marketer
                .then(function() {
                    return operations.getSalesDateByMarketer(marketer.IDMarketer)
                        .then(function (salesDates) {
                            marketerObject.salesDates = salesDates;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Dromologio Pelates to Marketer
                .then(function() {
                    return operations.getDromologioPelatesByMarketer(marketer.IDMarketer)
                        .then(function (dromologioPelates) {
                            marketerObject.dromologioPelates = dromologioPelates;
                            //console.log(marketerObject);
                            return marketerObject;
                        })
                })

            // add Marketer Category to Marketer
                .then(function () {
                    return populate(marketerObject)
                        .then(function (populatedMarketer) {
                            return populatedMarketer;
                        });
                });
        });
}

module.exports = operations;
