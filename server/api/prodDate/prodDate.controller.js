'use strict';

var prodDateService = require('./prodDate.service');

exports.index = function(req, res) {
    prodDateService.getAll()
        .then(function (prodDates) {
            return res.status(200).json(prodDates);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    prodDateService.getDetail(req.params.id)
        .then(function (prodDateDetail) {
            res.json(prodDateDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
