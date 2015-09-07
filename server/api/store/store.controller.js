'use strict';

var storeService = require('./store.service');

var sales = {};
var control = {};

control.index = function (req, res) {
	storeService.control.getAll()
    	.then(function (storeControls) {
        	return res.status(200).json(storeControls);
	    }, function (err) {
	    	handleError(res, err); 
	    });

};

control.detail = function (req, res) {
	storeService.control.getDetail(req.params.id)
		.then(function (storeControlDetail) {
			res.json(storeControlDetail);
		}, function (err) {
	  		console.error(err);
	    	handleError(res, err); 
	    });
};

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

module.exports = { sales: sales, control: control };
