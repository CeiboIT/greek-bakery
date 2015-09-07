'use strict';

var Menu = require('./menu.model');
//var MenuSorts = require('./menuSorts.model');
//var MenuOrders = require('./menuOrders.model');
var operations = {};

operations.getAll = function () {
    return Menu.find()
        //.populate('menuSorts menuOrders')
        .lean().exec();
}

operations.getDetail = function (menuId) {
    return Menu.findById(menuId)
        //.populate('menuSorts menuOrders')
        .lean().exec();
}

module.exports = operations;
