(function () {
    'use strict';

    var Menu = angular.module('menu', []);

    Menu.config(function ($stateProvider) {
        $stateProvider.state('menu', {
            parent: 'layout',
            url: '/menu',
            templateUrl: 'app/menu/list.html',
            controller: 'MenuController as MenuController'
        });
    });

    Menu.controller('MenuController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('menu');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/menu/view.html'
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDMenu').withTitle('ID'),
            DTColumnBuilder.newColumn('Menu').withTitle('Menu'),
            DTColumnBuilder.newColumn('DateStart').withTitle('DateStart'),
            DTColumnBuilder.newColumn('DateFinish').withTitle('DateFinish'),
        ];

    });

}());
