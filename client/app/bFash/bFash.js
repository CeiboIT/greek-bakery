(function () {
    'use strict';

    var BFash = angular.module('bFash', []);

    BFash.config(function ($stateProvider) {
        $stateProvider.state('bFash', {
            parent: 'layout',
            url: '/bFash',
            templateUrl: 'app/bFash/list.html',
            controller: 'BFashController as BFashController'
        });
    });

    BFash.controller('BFashController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('bFash');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/bFash/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('B_FASH_IDStorage').withTitle('B_FASH_IDStorage'),
            DTColumnBuilder.newColumn('B_FASH').withTitle('B_FASH')
        ];

    });

}());
