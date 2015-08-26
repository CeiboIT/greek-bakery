'use strict';

var Machine = require('./machine.model');
var MachineDamage = require('./machine/machineDamage.model');
var MachineMaintanceAft = require('./machine/machineMaintanceAft.model');
var MachineMaintancePr = require('./machine/machineMaintancePr.model');
var operations = {};

function populate (machine) {
    // TODO este populate manual está porque no puedo hacer funcionar al populate propio de mongoose.
    // El findOne, debería recibir un parametro para buscar por id, desde machine.IDMUnit, pero no funciona la busqueda por id.
    return MesurmentUnit.findOne().exec()
            .then(function (mesurmentUnit) {
                machine.mesurmentUnit = mesurmentUnit;
                return machine;
            }, function (error) {
                console.error(error);
            });
}

operations.getDamageByMachine = function (machineId) {
    console.log('Damage for ' + machineId);
    return MachineDamage.find({'IdMachine': machineId}).exec();
};

operations.getMaintanceAftByMachine = function (machineId) {
    console.log('MaintanceAft for ' + machineId);
    return MachineMaintanceAft.find({'IdMachine': machineId}).exec();
};

operations.getMaintancePrByMachine = function (machineId) {
    console.log('MaintancePr for ' + machineId);
    return MachineMaintancePr.find({'IdMachine': machineId}).exec();
};

operations.getDetail = function (machineId) {
    return Machine.findById(machineId)
        .then(function (machine) {
            var machineObject = machine.toObject();

            if (!machine) {
                return null;
            }

            return operations.getDamageByMachine(machine.IdMachine)
                .then(function (materials) {
                    console.log('adding materials');
                    machineObject.materials = materials;
                    return machineObject;
                })
                .then(function () {
                    return populate(machineObject)
                        .then(function (populatedFash) {
                            console.log('adding MesurmentUnit');
                            return populatedFash;
                        });
                });
        });
}

module.exports = operations;
