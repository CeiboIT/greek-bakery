'use strict';

var WPService = require('./WP.service');

exports.index = function(req, res) {
    WPService.getAll()
        .then(function (WPs) {
            return res.status(200).json(WPs);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    WPService.getDetail(req.params.id)
        .then(function (WPDetail) {
            res.json(WPDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
