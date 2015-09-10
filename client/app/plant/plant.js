(function () {
    'use strict';

    var Plant = angular.module('plant', []);

    Plant.config(function ($stateProvider) {
        $stateProvider.state('plant', {
            parent: 'layout',
            url: '/plant',
            templateUrl: 'app/plant/list.html',
            controller: 'PlantController as PlantController'
        });
    });

    Plant.controller('PlantController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('plant');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/plant/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDplant').withTitle('IDplant'),
            DTColumnBuilder.newColumn('PlantDescription').withTitle('Plant Description'),
            DTColumnBuilder.newColumn('EAN').withTitle('EAN')
        ];

    });

}());
