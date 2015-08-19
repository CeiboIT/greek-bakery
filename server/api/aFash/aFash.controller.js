'use strict';

var AFash = require('./aFash.model');

exports.index = function(req, res) {
  AFash.find().exec()
      .then(function (fashes) {
          return res.status(200).json(fashes);
      }, handleError);
};

function handleError(res, err) {
    return res.status(500).send(err);
}