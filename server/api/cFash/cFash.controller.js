'use strict';

var cFashService = require('./cFash.service');

exports.index = function(req, res) {
    cFashService.getAll()
        .then(function (fashes) {
            return res.status(200).json(fashes);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    cFashService.getDetail(req.params.id)
        .then(function (cFashDetail) {
            res.json(cFashDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
