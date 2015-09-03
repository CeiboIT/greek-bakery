'use strict';

var storeService = require('./store.service');

var sales = {};

sales.index = function(req, res) {
	storeService.sales.getAll(req, res);
};

sales.detail = function(req, res) {
	storeService.sales.getDetail(req.params.id)
		.then(function (storeSaleDetail) {
			res.json(storeSaleDetail);
		}, function (err) {
	  		console.error(err);
	    	handleError(res, err); 
	    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}

module.exports = { sales: sales };
