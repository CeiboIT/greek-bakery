'use strict';

var WP = require('./WP.model');
var operations = {};

operations.getAll = function () {
    return WP.find()
        //.populate('')
        .lean().exec();
}

operations.getDetail = function (WPId) {
    return WP.findById(WPId)
        //.populate('')
        .lean().exec();
}

module.exports = operations;
