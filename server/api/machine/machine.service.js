'use strict';

var Machine = require('./machine.model');
var MachineDamage = require('./machineDamage.model');
var MachineMaintanceAft = require('./machineMaintanceAft.model');
var MachineMaintancePr = require('./machineMaintancePr.model');
var IDSection = require('../plant/plantPartsSections.model');
var Maintance = require('./maintance.model');

var operations = {};

function populate (machine) {
    return IDSection.findOne().exec()
            .then(function (section) {
                machine.IDSection = section;
                return machine;
            }, function (error) {
                console.error(error);
            });
}

operations.getDamageByMachine = function (machineId) {
    return MachineDamage.find({'IdMachine': machineId}).exec();
};

operations.getMaintanceAftByMachine = function (machineId) {
    return MachineMaintanceAft.find({'IdMachine': machineId}).exec();
};

operations.getMaintancePrByMachine = function (machineId) {
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
                .then(function (damages) {
                    machineObject.damages = damages;
                    //console.log(machineObject);
                    return machineObject;
                })
                .then(function() {
                    return operations.getMaintanceAftByMachine(machine.IdMachine)
                        .then(function (maintanceAft) {
                            machineObject.maintanceAft = maintanceAft;
                            //console.log(machineObject);
                            return machineObject;
                        })

                        // JOIN MAINTANCEAFT WITH MAINTANCE STRING
                        .then(function (){
                            machineObject.maintanceAft.forEach(function (aft) {
                                //console.log(aft);
                                Maintance.find().exec()
                                    .then(function (maintances) {
                                        maintances.forEach(function (maintance) {
                                            if (maintance.IdMaintance === aft.IdMaintanceAfter) {
                                                aft.IdMaintanceAfter = maintance;
                                            }
                                        })
                                    })
                            })
                        })
                })
                .then(function() {
                    return operations.getMaintancePrByMachine(machine.IdMachine)
                        .then(function (maintancePr) {
                            machineObject.maintancePr = maintancePr;
                            //console.log(machineObject);
                            return machineObject;
                        })

                        // JOIN MAINTANCEPR WITH MAINTANCE STRING
                        .then(function (){
                            machineObject.maintancePr.forEach(function (pr) {
                                //console.log(pr);
                                Maintance.find().exec()
                                    .then(function (maintances) {
                                        maintances.forEach(function (maintance) {
                                            if (maintance.IdMaintance === pr.IdMaintance) {
                                                pr.IdMaintance = maintance;
                                            }
                                        })
                                    })
                            })
                        })
                })
                .then(function () {
                    return populate(machineObject)
                        .then(function (populatedMachine) {
                            return populatedMachine;
                        });
                });
        });
}

module.exports = operations;
