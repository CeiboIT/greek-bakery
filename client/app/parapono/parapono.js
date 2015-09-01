(function () {
    'use strict';

    var Parapono = angular.module('parapono', []);

    Parapono.config(function ($stateProvider) {
        $stateProvider.state('parapono', {
            parent: 'layout',
            url: '/parapono',
            templateUrl: 'app/parapono/list.html',
            controller: 'ParaponoController as ParaponoController'
        });
    });

    Parapono.controller('ParaponoController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('parapono');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/parapono/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('Parapono').withTitle('Parapono')
        ];

    });

}());
