'use strict';

var labelService = require('./label.service');

exports.index = function(req, res) {
    labelService.getAll()
        .then(function (labels) {
            return res.status(200).json(labels);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    labelService.getDetail(req.params.id)
        .then(function (labelDetail) {
            res.json(labelDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
