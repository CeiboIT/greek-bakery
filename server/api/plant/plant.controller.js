'use strict';

var plantService = require('./plant.service');

exports.index = function(req, res) {
    plantService.getAll()
        .then(function (plants) {
            return res.status(200).json(plants);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    plantService.getDetail(req.params.id)
        .then(function (plantDetail) {
            res.json(plantDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
