'use strict';

var BFash = require('./bFash.model');
var BFashMaterials = require('./bFashMaterials.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var operations = {};

function populate (bFash) {
    return MesurmentUnit.findOne().exec()
            .then(function (mesurmentUnit) {
                bFash.mesurmentUnit = mesurmentUnit;
                return bFash;
            }, function (error) {
                console.error(error);
            });
}

operations.getMaterialsByFash = function (fashId) {
    console.log('Material for ' + fashId);
    return BFashMaterials.find({'IDB_FASH': fashId}).exec();
};

operations.getDetail = function (fashId) {
    return BFash.findById(fashId)
        .then(function (bFash) {
            var bFashObject = bFash.toObject();

            if (!bFash) {
                return null;
            }

            return operations.getMaterialsByFash(bFash.IDB_FASH)
                .then(function (materials) {
                    console.log('adding materials');
                    bFashObject.materials = materials;
                    return bFashObject;
                })
                .then(function () {
                    return populate(bFashObject)
                        .then(function (populatedFash) {
                            console.log('adding MesurmentUnit');
                            return populatedFash;
                        });
                });
        });
}

module.exports = operations;
