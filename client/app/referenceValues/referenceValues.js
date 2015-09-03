(function () {
    'use strict';

    var ReferenceValues = angular.module('referenceValues', []);

    ReferenceValues.config(function ($stateProvider) {
        $stateProvider.state('referenceValues', {
            parent: 'layout',
            url: '/referenceValues',
            templateUrl: 'app/referenceValues/list.html',
            controller: 'ReferenceValuesController as ReferenceValuesController'
        });
    });

    ReferenceValues.controller('ReferenceValuesController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            adviceService = entityService.getCrudFor('advice'),
            caloriesService = entityService.getCrudFor('calories'),
            GDAService = entityService.getCrudFor('GDA'),
            switchboardService = entityService.getCrudFor('switchboard');

        // Advice table
        controller.dtOptionsAdvice = createTable({
            service: adviceService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsAdvice = [
            DTColumnBuilder.newColumn('IdAdvice').withTitle('IdAdvice'),
            DTColumnBuilder.newColumn('Advice').withTitle('Advice'),
        ];

        // Calories table
        controller.dtOptionsCalories = createTable({
            service: caloriesService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsCalories = [
            DTColumnBuilder.newColumn('IDCal').withTitle('IDCal'),
            DTColumnBuilder.newColumn('Cal').withTitle('Cal'),
        ];

        // GDA table
        controller.dtOptionsGDA = createTable({
            service: GDAService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsGDA = [
            DTColumnBuilder.newColumn('IDGDA').withTitle('IDGDA'),
            DTColumnBuilder.newColumn('Salt').withTitle('Salt'),
            DTColumnBuilder.newColumn('KCal').withTitle('KCal'),
            DTColumnBuilder.newColumn('Proteins').withTitle('Proteins'),
            DTColumnBuilder.newColumn('Carbohydrates').withTitle('Carbohydrates'),
            DTColumnBuilder.newColumn('Sugars').withTitle('Sugars'),
            DTColumnBuilder.newColumn('Fats').withTitle('Fats'),
            DTColumnBuilder.newColumn('SatFats').withTitle('SatFats'),
            DTColumnBuilder.newColumn('Fibres').withTitle('Fibres'),
            DTColumnBuilder.newColumn('Sodium').withTitle('Sodium'),
        ];

        // Switchboard table
        controller.dtOptionsSwitchboard = createTable({
            service: switchboardService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsSwitchboard = [
            DTColumnBuilder.newColumn('SwitchboardID').withTitle('SwitchboardID'),
            DTColumnBuilder.newColumn('Argument').withTitle('Argument'),
            DTColumnBuilder.newColumn('ItemNumber').withTitle('ItemNumber'),
            DTColumnBuilder.newColumn('ItemText').withTitle('ItemText'),
            DTColumnBuilder.newColumn('Command').withTitle('Command'),
        ];

    });

}());
