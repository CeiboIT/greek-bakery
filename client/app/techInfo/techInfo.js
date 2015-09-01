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
            DTColumnBuilder.newColumn('TechInfo').withTitle('TechInfo'),
            DTColumnBuilder.newColumn('Choice').withTitle('Choice'),
            DTColumnBuilder.newColumn('IDCategory.Category').withTitle('Sort category')
        ];

    });

}());
