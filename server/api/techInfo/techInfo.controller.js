'use strict';

var techInfoService = require('./techInfo.service');

exports.index = function(req, res) {
    techInfoService.getAll()
        .then(function (techInfos) {
            return res.status(200).json(techInfos);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    techInfoService.getDetail(req.params.id)
        .then(function (techInfoDetail) {
            res.json(techInfoDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
