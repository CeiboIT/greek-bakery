'use strict';

var Marketer = require('./marketer.model');
var marketerService = require('./marketer.service');

exports.index = function(req, res) {
    marketerService.getAll()
        .then(function (marketers) {
            return res.status(200).json(marketers);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    marketerService.getDetail(req.params.id)
        .then(function (marketerDetail) {
            res.json(marketerDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
