'use strict';

var caloriesService = require('./calories.service');

exports.index = function(req, res) {
    caloriesService.getAll()
        .then(function (caloriess) {
            return res.status(200).json(caloriess);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    caloriesService.getDetail(req.params.id)
        .then(function (caloriesDetail) {
            res.json(caloriesDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
