'use strict';

var dromologioService = require('./dromologio.service');

exports.index = function(req, res) {
    dromologioService.getAll()
        .then(function (dromologios) {
            return res.status(200).json(dromologios);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    dromologioService.getDetail(req.params.id)
        .then(function (dromologioDetail) {
            res.json(dromologioDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
