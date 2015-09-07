'use strict';

var evaluationService = require('./evaluation.service');

exports.index = function(req, res) {
    evaluationService.getAll()
        .then(function (evaluations) {
            return res.status(200).json(evaluations);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    evaluationService.getDetail(req.params.id)
        .then(function (evaluationDetail) {
            res.json(evaluationDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
