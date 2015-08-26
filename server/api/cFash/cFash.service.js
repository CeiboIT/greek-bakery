'use strict';

var CFash = require('./cFash.model');
var CFashMaterials = require('./cFashMaterials.model');
var MesurmentUnit = require('../mesurment/mesurment.model');
var operations = {};

function populate (cFash) {
    // TODO este populate manual está porque no puedo hacer funcionar al populate propio de mongoose.
    // El findOne, debería recibir un parametro para buscar por id, desde cFash.IDMUnit, pero no funciona la busqueda por id.
    return MesurmentUnit.findOne().exec()
            .then(function (mesurmentUnit) {
                cFash.mesurmentUnit = mesurmentUnit;
                return cFash;
            }, function (error) {
                console.error(error);
            });
}

operations.getMaterialsByFash = function (fashId) {
    console.log('Materiasl for ' + fashId);
    return CFashMaterials.find({'IDA_FASH': fashId}).exec();
};

operations.getDetail = function (fashId) {
    return CFash.findById(fashId)
        .then(function (cFash) {
            var cFashObject = cFash.toObject();

            if (!cFash) {
                return null;
            }

            return operations.getMaterialsByFash(cFash.IDA_FASH)
                .then(function (materials) {
                    console.log('adding materials');
                    cFashObject.materials = materials;
                    return cFashObject;
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
