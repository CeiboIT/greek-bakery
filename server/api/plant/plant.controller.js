'use strict';

var plantService = require('./plant.service');

exports.index = function(req, res) {
	plantService.getDetail()
		.then(function (plantDetail) {
			res.json(plantDetail);
		}, function (err) {
	  		console.error(err);
	    	handleError(res, err); 
	    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}