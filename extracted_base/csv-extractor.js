'use strict';

var fs = require('fs');
var mdb = require('mdb');
var fruit = mdb('tables_AnalysisV2.2.mdb');

var createFile = function (tableName, content) {
	// El directorio tables/ tiene que estar creado
	console.log('table name:', tableName);
	fs.writeFile('tables/' + tableName + '.csv', content, function(err) {
    	if(err) {
        	return console.log(err, tableName);
    	}
    });
};

fruit.tables(function(err, tables) {
  	tables.forEach(function(table) {
    	fruit.toCSV(table, function(err, csv) {
    		createFile(table, csv);
    	});
  	});
});