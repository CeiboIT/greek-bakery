(function () {
    'use strict';

    var Dromologio = angular.module('dromologio', []);

    Dromologio.config(function ($stateProvider) {
        $stateProvider.state('dromologio', {
            parent: 'layout',
            url: '/dromologio',
            templateUrl: 'app/dromologio/list.html',
            controller: 'DromologioController as DromologioController'
        });
    });

    Dromologio.controller('DromologioController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('dromologio');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/dromologio/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDDroml_Pelates').withTitle('IDDroml_Pelates'),
            DTColumnBuilder.newColumn('IDDromologio.Dromologio').withTitle('Dromologio'),
            DTColumnBuilder.newColumn('IDMarketer.CompanyName').withTitle('Marketer: Company Name'),
            DTColumnBuilder.newColumn('IDMarketer.AccountableSurName').withTitle('Marketer: Accountable Surname'),
            DTColumnBuilder.newColumn('Seira').withTitle('Seira')
        ];

    });

}());
