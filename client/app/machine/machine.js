(function () {
    'use strict';

    var Machine = angular.module('machine', []);

    Machine.config(function ($stateProvider) {
        $stateProvider.state('machine', {
            parent: 'layout',
            url: '/machine',
            templateUrl: 'app/machine/list.html',
            controller: 'machineController as machineController'
        });
    });

    Machine.factory('viewMachineItem', function viewItemFactory ($modal, entityService) {
        return function viewItem (item) {
            entityService.getCrudFor('machine').get(item._id)
                .then(function (response) {
                    $modal.open({
                        templateUrl: 'app/machine/view.html',
                        controller: function () {
                            var viewController = this;
                            viewController.item = response;
                        },
                        controllerAs: 'viewController'
                    });
                });
        };
    });

    Machine.controller('machineController',
        function ($scope, viewMachineItem, DTOptionsBuilder, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('machine');

        function rowCallback(nRow, aData) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    viewMachineItem(aData);
                });
            });
            return nRow;
        }
        
        controller.dtOptions = DTOptionsBuilder
            .fromFnPromise(function() {
                return service.getAll();
            })
            .withPaginationType('full_numbers')
            .withOption('rowCallback', rowCallback);

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IdMachine').withTitle('Id'),
            DTColumnBuilder.newColumn('Machine').withTitle('Machine'),
            DTColumnBuilder.newColumn('Constractor').withTitle('Constractor'),
            DTColumnBuilder.newColumn('ConstractionDate').withTitle('Constraction Date'),
        ];

    });

}());
