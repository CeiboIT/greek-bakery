'use strict';

var BFash = require('./bFash.model');
var bFashService = require('./bFash.service');

exports.index = function(req, res) {
    BFash.find()
        .exec()
            .then(function (fashes) {
                return res.status(200).json(fashes);
            }, function (err) {
                handleError(res, err);
            });
};

exports.detail = function(req, res) {
    bFashService.getDetail(req.params.id)
        .then(function (bFashDetail) {
            res.json(bFashDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}