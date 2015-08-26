'use strict';

var CFash = require('./cFash.model');
var CFashMaterials = require('./cFashMaterials.model');
var CFashMaterialsYS = require('./cFashMaterialsYS.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var operations = {};

function populate (cFash) {
    return MesurmentUnit.findOne().exec()
            .then(function (mesurmentUnit) {
                cFash.mesurmentUnit = mesurmentUnit;
                return cFash;
            }, function (error) {
                console.error(error);
            });
}

operations.getMaterialsByFash = function (fashId) {
    console.log('Material for ' + fashId);
    return CFashMaterials.find({'IDC_FASH': fashId}).exec();
};

operations.getMaterialsYSByFash = function (fashId) {
    console.log('MaterialYS for ' + fashId);
    return CFashMaterialsYS.find({'IDC_FASH': fashId}).exec();
};

operations.getDetail = function (fashId) {
    return CFash.findById(fashId)
        .then(function (cFash) {
            var cFashObject = cFash.toObject();

            if (!cFash) {
                return null;
            }

            return operations.getMaterialsByFash(cFash.IDC_FASH)
                .then(function (materials) {
                    console.log('adding materials');
                    cFashObject.materials = materials;
                    //console.log(cFashObject);
                    return cFashObject;
                })
                .then(function() {
                    return operations.getMaterialsYSByFash(cFash.IDC_FASH)
                        .then(function (materialsYS) {
                            console.log('adding materialsYS');
                            cFashObject.materialsYS = materialsYS;
                            //console.log(cFashObject);
                            return cFashObject;
                        })
                })
                .then(function () {
                    return populate(cFashObject)
                        .then(function (populatedFash) {
                            console.log('adding MesurmentUnit');
                            return populatedFash;
                        });
                });
        });
}

module.exports = operations;
