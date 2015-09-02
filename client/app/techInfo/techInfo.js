(function () {
    'use strict';

    var TechInfo = angular.module('techInfo', []);

    TechInfo.config(function ($stateProvider) {
        $stateProvider.state('techInfo', {
            parent: 'layout',
            url: '/techInfo',
            templateUrl: 'app/techInfo/list.html',
            controller: 'TechInfoController as TechInfoController'
        });
    });

    TechInfo.controller('TechInfoController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('techInfo');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/techInfo/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IdTecInf').withTitle('IdTecInf'),
            DTColumnBuilder.newColumn('Refresh').withTitle('Refresh'),
            DTColumnBuilder.newColumn('StorageContitions').withTitle('StorageContitions')
        ];

    });

}());
