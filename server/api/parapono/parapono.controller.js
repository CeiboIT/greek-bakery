'use strict';

var paraponoService = require('./parapono.service');

exports.index = function(req, res) {
    paraponoService.getAll()
        .then(function (paraponos) {
            return res.status(200).json(paraponos);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    paraponoService.getDetail(req.params.id)
        .then(function (paraponoDetail) {
            res.json(paraponoDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
