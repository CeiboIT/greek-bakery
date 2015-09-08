'use strict';

var yearService = require('./year.service');

exports.index = function(req, res) {
    yearService.getAll()
        .then(function (years) {
            return res.status(200).json(years);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    yearService.getDetail(req.params.id)
        .then(function (yearDetail) {
            res.json(yearDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
