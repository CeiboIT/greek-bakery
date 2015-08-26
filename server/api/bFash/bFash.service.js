'use strict';

var BFash = require('./bFash.model');
var BFashMaterials = require('./bFashMaterials.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var operations = {};

function populate (bFash) {
    // TODO este populate manual está porque no puedo hacer funcionar al populate propio de mongoose.
    // El findOne, debería recibir un parametro para buscar por id, desde bFash.IDMUnit, pero no funciona la busqueda por id.
    return MesurmentUnit.findOne().exec()
            .then(function (mesurmentUnit) {
                bFash.mesurmentUnit = mesurmentUnit;
                return bFash;
            }, function (error) {
                console.error(error);
            });
}

operations.getMaterialsByFash = function (fashId) {
    console.log('Materiasl for ' + fashId);
    return BFashMaterials.find({'IDA_FASH': fashId}).exec();
};

operations.getDetail = function (fashId) {
    return BFash.findById(fashId)
        .then(function (bFash) {
            var bFashObject = bFash.toObject();

            if (!bFash) {
                return null;
            }

            return operations.getMaterialsByFash(bFash.IDA_FASH)
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
