'use strict';

var menuService = require('./menu.service');

exports.index = function(req, res) {
    menuService.getAll()
        .then(function (menus) {
            return res.status(200).json(menus);
        }, function (err) {
            handleError(res, err);
        });
};

exports.detail = function(req, res) {
    menuService.getDetail(req.params.id)
        .then(function (menuDetail) {
            res.json(menuDetail);
        }, function (err) {
            console.error(err);
            handleError(res, err);
        });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
