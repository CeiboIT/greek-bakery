'use strict';

var workerService = require('./worker.service');

exports.index = function(req, res) {
    workerService.getAll()
        .then(function (workers) {
            return res.status(200).json(workers);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    workerService.getDetail(req.params.id)
        .then(function (workerDetail) {
            res.json(workerDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
