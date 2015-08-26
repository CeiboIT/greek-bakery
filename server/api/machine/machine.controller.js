'use strict';

var Machine = require('./machine.model');
var machineService = require('./machine.service');

exports.index = function(req, res) {
    Machine.find()
        .exec()
            .then(function (machines) {
                return res.status(200).json(machines);
            }, function (err) {
                handleError(res, err);
            });
};

exports.detail = function(req, res) {
    machineService.getDetail(req.params.id)
        .then(function (machineDetail) {
            res.json(machineDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
