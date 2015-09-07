'use strict';

var GDAService = require('./GDA.service');

exports.index = function(req, res) {
    GDAService.getAll()
        .then(function (GDAs) {
            return res.status(200).json(GDAs);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    GDAService.getDetail(req.params.id)
        .then(function (GDADetail) {
            res.json(GDADetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
