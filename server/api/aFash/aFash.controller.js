'use strict';

var AFash = require('./aFash.model');
var MesurmentUnit = require('../mesurment/mesurment.model');

function populate (aFash) {
	console.log('MesurmentUnit to find: ' + aFash.IDMUnit);
	return MesurmentUnit.findOne({'IDMUnit': aFash.IDMUnit})
		.then(function (mesurmentUnit) {
			console.log('\nMesurment unit to populate\n', mesurmentUnit);
			aFash.mesurmentUnit = mesurmentUnit; 
			return aFash;
		});
}

exports.index = function(req, res) {
	AFash.find()
	  	.exec()
	    	.then(function (fashes) {
	        	return res.status(200).json(fashes);
		    }, function (err) {
		    	handleError(res, err); 
		    });
};

exports.detail = function(req, res) {
  	AFash.findById(req.body._id)
  		.then(function (aFash) {
		    if (!aFash) { 
		    	return res.status(404).send('Not Found'); 
	    	}
	    	populate(aFash)
	    		.then(function (populatedFash) {
    				return res.json(populatedFash);
	    		})
	  	}, function (err) {
	  		console.error(err);
	    	handleError(res, err); 
	    });
};


function handleError(res, err) {
    return res.status(500).send(err);
}