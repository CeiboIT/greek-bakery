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
            DTColumnBuilder.newColumn('CFash').withTitle('CFash'),
            DTColumnBuilder.newColumn('Choice').withTitle('Choice'),
            DTColumnBuilder.newColumn('IDCategory.Category').withTitle('Sort category')
        ];

    });

}());
