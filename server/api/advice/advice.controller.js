'use strict';

var adviceService = require('./advice.service');

exports.index = function(req, res) {
    adviceService.getAll()
        .then(function (advices) {
            return res.status(200).json(advices);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    adviceService.getDetail(req.params.id)
        .then(function (adviceDetail) {
            res.json(adviceDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
