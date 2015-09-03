'use strict';

var StoreSale = require('./storeSale.model');
var operations = {};

operations.getAll = function (request, response) {
	StoreSale.dataTable(request.query, function (error, data) {
		response.send(data);
	});
}

module.exports = operations;

