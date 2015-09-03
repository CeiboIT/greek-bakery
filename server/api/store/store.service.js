'use strict';

var StoreSale = require('./storeSale.model');
var operations = { sales: {} };

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

module.exports = operations;