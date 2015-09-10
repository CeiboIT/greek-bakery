'use strict';

var programService = require('./program.service');

exports.index = function(req, res) {
    programService.getAll()
        .then(function (programs) {
            return res.status(200).json(programs);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    programService.getDetail(req.params.id)
        .then(function (programDetail) {
            res.json(programDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
