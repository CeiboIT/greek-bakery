(function () {
    'use strict';

    var Marketer = angular.module('marketer', []);

    Marketer.config(function ($stateProvider) {
        $stateProvider.state('marketer', {
            parent: 'layout',
            url: '/marketer',
            templateUrl: 'app/marketer/list.html',
            controller: 'MarketerController as MarketerController'
        });
    });

    Marketer.controller('MarketerController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('marketer');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/marketer/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDMarketer').withTitle('IDMarketer'),
            DTColumnBuilder.newColumn('CompanyName').withTitle('CompanyName'),
            DTColumnBuilder.newColumn('AccountableSurName').withTitle('AccountableSurName')
        ];

    });

}());
