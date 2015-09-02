/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/aFash', require('./api/aFash'));
  app.use('/api/bFash', require('./api/bFash'));
  app.use('/api/cFash', require('./api/cFash'));
  app.use('/api/mesurment', require('./api/mesurment'));
  app.use('/api/plant', require('./api/plant'));
  app.use('/api/sort', require('./api/sort'));
  app.use('/api/machine', require('./api/machine'));
  app.use('/api/marketer', require('./api/marketer'));
  app.use('/api/raw', require('./api/raw'));
  app.use('/api/parapono', require('./api/parapono'));
  app.use('/api/evaluation', require('./api/evaluation'));
  app.use('/api/menu', require('./api/menu'));
  app.use('/api/techInfo', require('./api/techInfo'));
  app.use('/api/worker', require('./api/worker'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
