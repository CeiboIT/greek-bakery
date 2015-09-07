'use strict';

var node_cj = require('node-csv-json'),
    fs = require('fs'),
    JSON_FILES_PATH = 'json/referenceValues/',
    CSV_FILES_PATH = 'csv/referenceValues/';

var convert = function (inputName) {
    var outputName = JSON_FILES_PATH + inputName.substr(0, inputName.lastIndexOf('.')) + '.json';
        inputName = CSV_FILES_PATH + inputName;

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


fs.readdir(CSV_FILES_PATH, function (err, files){
    if(err) {
        throw err;
    }

    files.forEach(function (file) {
        convert(file);
    });
 });
