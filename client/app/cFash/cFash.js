(function () {
    'use strict';

    var CFash = angular.module('cFash', []);

    CFash.config(function ($stateProvider) {
        $stateProvider.state('cFash', {
            parent: 'layout',
            url: '/cFash',
            templateUrl: 'app/cFash/list.html',
            controller: 'CFashController as CFashController'
        });
    });

    CFash.controller('CFashController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('cFash');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/cFash/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('C_FASH_IDStorage').withTitle('C_FASH_IDStorage'),
            DTColumnBuilder.newColumn('C_FASH').withTitle('C_FASH')
        ];

    });

}());
