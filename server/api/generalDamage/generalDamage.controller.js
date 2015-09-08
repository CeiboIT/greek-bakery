'use strict';

var generalDamageService = require('./generalDamage.service');

exports.index = function(req, res) {
    generalDamageService.getAll()
        .then(function (generalDamages) {
            return res.status(200).json(generalDamages);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    generalDamageService.getDetail(req.params.id)
        .then(function (generalDamageDetail) {
            res.json(generalDamageDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
