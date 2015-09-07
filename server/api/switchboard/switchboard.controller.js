'use strict';

var switchboardService = require('./switchboard.service');

exports.index = function(req, res) {
    switchboardService.getAll()
        .then(function (switchboards) {
            return res.status(200).json(switchboards);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    switchboardService.getDetail(req.params.id)
        .then(function (switchboardDetail) {
            res.json(switchboardDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
