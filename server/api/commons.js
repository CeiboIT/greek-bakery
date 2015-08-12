'use strict';

var mongoose = require('mongoose');

var operations = {
	_insert: function (collection, model) {
		console.log(model.modelName + ' to be inserted ' + collection.length);
		var inserted = 0;
		collection.forEach(function (item) {
			model.create(item)
				.then(function () {
					inserted += 1;
					if (inserted === collection.length) {
						console.log(model.modelName + ' inserted ' + collection.length);
					}
				}, function (err) {
	        		console.error('insert error ' +  model.modelName, err);
	        	});
		});
	},
	_insertBulk: function (jsonCollection, model) {
		console.log(model.modelName + ' to be inserted ' + jsonCollection.length);
		var bulk = model.collection.initializeUnorderedBulkOp();
		jsonCollection.forEach(function (element) {
			bulk.insert(element);
		});
		bulk.execute(function (err, result) {
			if (err) {
				console.error('insert error ' +  model.modelName, err);
	    	} else {
	    		console.log(model.modelName + ' inserted ', result.nInserted);
	    	}			
		});

		// model.collection.insert(collection, {}, function (err, res) {
		// 	if (err) {
		// 		console.error('insert error ' +  model.modelName, err);
	 //    	} else {
	 //    		console.log(res.result);
	 //    	}
		// });
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
	var collection = require('../../extracted_base/json/' + opts.jsonFile);
	operations.clean(opts, opts.model, function () {
		operations._insertBulk(collection, opts.model);
	});
}

module.exports = loadTable;