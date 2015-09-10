(function () {
    'use strict';

    var Machine = angular.module('machine', []);

    Machine.config(function ($stateProvider) {
        $stateProvider.state('machine', {
            parent: 'layout',
            url: '/machine',
            templateUrl: 'app/machine/list.html',
            controller: 'MachineController as MachineController'
        });
    });


    var viewItemController = function (createViewTable, DTColumnBuilder, item) {
        var controller = this;
        controller.item = item;
        // Options for Damage table
        controller.damageTable = {
            dtOptions: createViewTable({data: item.damage}),
            dtColumns: [
                DTColumnBuilder.newColumn('DamageDate').withTitle('Date'),
                DTColumnBuilder.newColumn('Damage').withTitle('Damage'),
                DTColumnBuilder.newColumn('DamageTechnical').withTitle('Technical'),
                DTColumnBuilder.newColumn('DamageCost').withTitle('Cost'),
                DTColumnBuilder.newColumn('DamageRemarks').withTitle('Remarks')
            ]
        };

        controller.maintanceAftTable = {
            dtOptions: createViewTable({data: item.maintanceAft}),
            dtColumns: [
                DTColumnBuilder.newColumn('IdMaintanceDate').withTitle('Date'),
                DTColumnBuilder.newColumn('IdMaintanceAfter.Maintance').withTitle('Maintance'),
            ]
        };

        controller.maintancePrTable = {
            dtOptions: createViewTable({data: item.maintancePr}),
            dtColumns: [
                DTColumnBuilder.newColumn('IdMaintance.Maintance').withTitle('Maintance'),
                DTColumnBuilder.newColumn('text1').withTitle('Text'),
                DTColumnBuilder.newColumn('MMainFrequency').withTitle('Frecuency')
            ]
        };
    };

    viewItemController.$inject = ['createViewTable', 'DTColumnBuilder', 'item'];

    Machine.controller('MachineController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('machine');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/machine/view.html',
            viewController: viewItemController
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IdMachine').withTitle('IdMachine'),
            DTColumnBuilder.newColumn('Machine').withTitle('Machine'),
            DTColumnBuilder.newColumn('ConstractionDate').withTitle('ConstractionDate')
        ];

    });

}());
