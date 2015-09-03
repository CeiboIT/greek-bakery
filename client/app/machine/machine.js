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

    Machine.controller('MachineController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('machine');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/machine/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IdMachine').withTitle('IdMachine'),
            DTColumnBuilder.newColumn('Machine').withTitle('Machine'),
            DTColumnBuilder.newColumn('ConstractionDate').withTitle('ConstractionDate')
        ];

    });

}());
