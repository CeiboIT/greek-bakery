(function () {
    'use strict';

    var Worker = angular.module('worker', []);

    Worker.config(function ($stateProvider) {
        $stateProvider.state('worker', {
            parent: 'layout',
            url: '/worker',
            templateUrl: 'app/worker/list.html',
            controller: 'WorkerController as WorkerController'
        });
    });

    Worker.controller('WorkerController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('worker');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/worker/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('Worker').withTitle('Worker'),
            DTColumnBuilder.newColumn('Choice').withTitle('Choice'),
            DTColumnBuilder.newColumn('IDCategory.Category').withTitle('Sort category')
        ];

    });

}());
