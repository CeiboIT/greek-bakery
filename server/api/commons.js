'use strict';

var JSON_FILES_PATH = '../../extracted_base/json/';

var operations = {
	_insertBulk: function (jsonCollection, model) {
		console.log(model.modelName + ' to be inserted ' + jsonCollection.length);
		if (jsonCollection.length > 0) {
			var bulk = model.collection.initializeUnorderedBulkOp();
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
}

module.exports = loadTable;