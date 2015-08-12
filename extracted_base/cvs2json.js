'use strict';

var node_cj = require('node-csv-json'),
    fs = require('fs');
  

var convert = function (inputName) {
    var outputName = 'json/' + inputName.substr(0, inputName.lastIndexOf('.')) + '.json';
    inputName = 'csv/' + inputName;

    console.log('inputName: ' + inputName);
    console.log('outputName: ' + outputName);

    node_cj({
        input: inputName, 
        output: outputName
    }, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('ok');
        }
  });
};


fs.readdir('csv/', function (err, files){
    if(err) {
        throw err;
    }

    files.forEach(function (file) {
        convert(file);
    });
 });
