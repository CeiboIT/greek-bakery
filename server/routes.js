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
  app.use('/api/sort', require('./api/sort'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
