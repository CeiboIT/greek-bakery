'use strict';

var rawService = require('./raw.service');

exports.index = function(req, res) {
	rawService.getAll()
    	.then(function (raws) {
        	return res.status(200).json(raws);
	    }, function (err) {
	    	handleError(res, err); 
	    });
};

exports.detail = function(req, res) {
	rawService.getDetail(req.params.id)
		.then(function (rawDetail) {
			res.json(rawDetail);
		}, function (err) {
	  		console.error(err);
	    	handleError(res, err); 
	    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}