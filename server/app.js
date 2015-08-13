/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
	}
);
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

require('./api/plant/load.js');
require('./api/machine/load.js');
require('./api/parapono/load.js');
require('./api/marketer/load.js');
require('./api/worker/load.js');
require('./api/menu/load.js');
require('./api/aFash/load.js');
require('./api/bFash/load.js');
require('./api/cFash/load.js');
require('./api/mesurment/load.js');
require('./api/sort/load.js');
require('./api/raw/load.js');
// Store sales require('./api/store/load.js');
// require('./api/production/load.js');
require('./api/techInfo/load.js');

// Expose app
exports = module.exports = app;
