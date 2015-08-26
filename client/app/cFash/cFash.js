(function () {
    'use strict';

    var CFash = angular.module('cFash', []);

    CFash.config(function ($stateProvider) {
        $stateProvider.state('cFash', {
            parent: 'layout',
            url: '/cFash',
            templateUrl: 'app/cFash/list.html',
            controller: 'cFashController as cFashController'
        });
    });

    CFash.factory('viewItem', function viewItemFactory ($modal, entityService) {
        return function viewItem (item) {
            entityService.getCrudFor('cFash').get(item._id)
                .then(function (response) {
                    $modal.open({
                        templateUrl: 'app/cFash/view.html',
                        controller: function () {
                            var viewController = this;
                            viewController.item = response;
                        },
                        controllerAs: 'viewController'
                    });
                });
        };
    });

    CFash.controller('cFashController',
        function ($scope, viewItem, DTOptionsBuilder, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('cFash');

        controller.dtOptions = DTOptionsBuilder
            .fromFnPromise(function() {
                return service.getAll();
            })
            .withPaginationType('full_numbers')
            .withOption('rowCallback', rowCallback);

        controller.dtColumns = [
            DTColumnBuilder.newColumn('C_FASH_IDStorage').withTitle('Id'),
            DTColumnBuilder.newColumn('C_FASH').withTitle('Fash'),
            DTColumnBuilder.newColumn('C_FASHProcedure').withTitle('Procedure'),
            DTColumnBuilder.newColumn('C_FASH_IDStorage').withTitle('Id storage'),
        ];

        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    viewItem(aData);
                });
            });
            return nRow;
        }

    });

}());
