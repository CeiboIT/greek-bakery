'use strict';

var JSON_FILES_PATH = '../../../extracted_base/json/';
var StoreSales = require('./storeSale.model');
var chunk = require('lodash-compat/array/chunk');

var operations = {
	prepareAndInsert: function (jsonCollection, model) {
		if (jsonCollection.length > 0) {
			var bulk = model.collection.initializeOrderedBulkOp();
			jsonCollection.forEach(function (element) {
				bulk.insert(element);
			});
			bulk.execute(function (err, result) {
				if (err) {
					console.error('insert error ' +  model.modelName + ' ', err.code);
					console.error('		-> ' , err.errmsg);
					console.error('		-> ' , err.toJSON());
		    	} else {
		    		console.log(model.modelName + ' inserted ', result.nInserted);
		    	}			
			});
		}
	},
	_insertBulk: function (jsonCollection, model) {
		console.log(model.modelName + ' to be inserted ' + jsonCollection.length);
		var subCollections = chunk(jsonCollection, 1000);
		subCollections.forEach(function (subCollection) {
			operations.prepareAndInsert(subCollection, model);
		});
	},
	clean: function (opts, model, callback) {
		if (opts.clean) {
			model.remove({})
				.then(function () {
					callback();		
				}, function (err) {
					if (err) {
						console.error('clean error', err);
						return false;
					}
				});
		}
	}
};

var	loadTable = function (opts) {
	var collection = require(JSON_FILES_PATH + opts.jsonFile);
	operations.clean(opts, opts.model, function () {
		operations._insertBulk(collection, opts.model);
	});
};

loadTable({	clean: true,
	  		jsonFile: 'store/tbStoresSales.json',
	  		model: StoreSales});