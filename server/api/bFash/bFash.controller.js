'use strict';

var bFashService = require('./bFash.service');

exports.index = function(req, res) {
    bFashService.getAll()
        .then(function (fashes) {
            return res.status(200).json(fashes);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    bFashService.getDetail(req.params.id)
        .then(function (bFashDetail) {
            res.json(bFashDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
