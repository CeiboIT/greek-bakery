'use strict';

var StoreSale = require('./storeSale.model');
var StoreControl = require('./storeControl.model');

var operations = { sales: {}, control: {} };

operations.sales.getAll = function (request, response) {
	StoreSale.dataTable(request.query, function (error, data) {
		response.send(data);
	});
}

operations.sales.getDetail = function (storeSaleId) {
	return StoreSale.findById(storeSaleId)
			.populate('IDMarketer IDSort').lean().exec()
  		.then(function (sortSale) {
  			return sortSale;
	  	});
}

operations.control.getAll = function () {
	return StoreControl.find().populate('IDMarketer').lean().exec();
}

operations.control.getDetail = function (storeControlId) {
	return StoreSale.findById(storeControlId)
			.populate('IDMarketer').lean().exec()
  		.then(function (storeControl) {
  			return storeControl;
	  	});
}


module.exports = operations;