'use strict';

var prodProcudeursService = require('./prodProcudeurs.service');

exports.index = function(req, res) {
    prodProcudeursService.getAll()
        .then(function (prodProcudeurss) {
            return res.status(200).json(prodProcudeurss);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    prodProcudeursService.getDetail(req.params.id)
        .then(function (prodProcudeursDetail) {
            res.json(prodProcudeursDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
