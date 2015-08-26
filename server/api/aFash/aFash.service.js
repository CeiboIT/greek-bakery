'use strict';

var AFash = require('./aFash.model');
var AFashMaterials = require('./aFashMaterials.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var operations = {};

function populate (aFash) {
	// TODO este populate manual está porque no puedo hacer funcionar al populate propio de mongoose.
	// El findOne, debería recibir un parametro para buscar por id, desde aFash.IDMUnit, pero no funciona la busqueda por id.
	return MesurmentUnit.findOne().exec()
			.then(function (mesurmentUnit) {
				aFash.mesurmentUnit = mesurmentUnit;
				return aFash;
			}, function (error) {
				console.error(error);
			});
}

operations.getMaterialsByFash = function (fashId) {
	console.log('Material for ' + fashId);
	return AFashMaterials.find({'IDA_FASH': fashId}).exec();
};

operations.getDetail = function (fashId) {
	return AFash.findById(fashId)
  		.then(function (aFash) {
  			var aFashObject = aFash.toObject();

		    if (!aFash) {
		    	return null;
	    	}

	    	return operations.getMaterialsByFash(aFash.IDA_FASH)
		    	.then(function (materials) {
		    		console.log('adding materials');
		    		aFashObject.materials = materials;
		    		return aFashObject;
		    	})
		    	.then(function () {
		    		return populate(aFashObject)
			    		.then(function (populatedFash) {
		    				console.log('adding MesurmentUnit');
		    				return populatedFash;
			    		});
		    	});
	  	});
}

module.exports = operations;
