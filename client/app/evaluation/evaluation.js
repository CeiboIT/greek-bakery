(function () {
    'use strict';

    var Evaluation = angular.module('evaluation', []);

    Evaluation.config(function ($stateProvider) {
        $stateProvider.state('evaluation', {
            parent: 'layout',
            url: '/evaluation',
            templateUrl: 'app/evaluation/list.html',
            controller: 'EvaluationController as EvaluationController'
        });
    });

    Evaluation.controller('EvaluationController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('evaluation');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/evaluation/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDSupEvaluation').withTitle('IDSupEvaluation'),
        ];

    });

}());
