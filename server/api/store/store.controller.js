'use strict';

var storeService = require('./store.service');

exports.index = function(req, res) {
	storeService.getAll(req, res);
};