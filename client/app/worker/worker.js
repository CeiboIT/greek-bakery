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
            DTColumnBuilder.newColumn('IdWorker').withTitle('IdWorker'),
            DTColumnBuilder.newColumn('Name').withTitle('Name'),
            DTColumnBuilder.newColumn('DateBirth').withTitle('DateBirth'),
        ];

    });

}());
