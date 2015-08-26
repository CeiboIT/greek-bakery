(function () {
    'use strict';

    var BFash = angular.module('bFash', []);

    BFash.config(function ($stateProvider) {
        $stateProvider.state('bFash', {
            parent: 'layout',
            url: '/bFash',
            templateUrl: 'app/bFash/list.html',
            controller: 'bFashController as bFashController'
        });
    });

    BFash.factory('viewBFashItem', function viewItemFactory ($modal, entityService) {
        return function viewItem (item) {
            entityService.getCrudFor('bFash').get(item._id)
                .then(function (response) {
                    $modal.open({
                        templateUrl: 'app/bFash/view.html',
                        controller: function () {
                            var viewController = this;
                            viewController.item = response;
                        },
                        controllerAs: 'viewController'
                    });
                });
        };
    });

    BFash.controller('bFashController',
        function ($scope, viewBFashItem, DTOptionsBuilder, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('bFash');

        controller.dtOptions = DTOptionsBuilder
            .fromFnPromise(function() {
                return service.getAll();
            })
            .withPaginationType('full_numbers')
            .withOption('rowCallback', rowCallback);

        controller.dtColumns = [
            DTColumnBuilder.newColumn('B_FASH_IDStorage').withTitle('Id'),
            DTColumnBuilder.newColumn('B_FASH').withTitle('Fash'),
            DTColumnBuilder.newColumn('B_FASHProcedure').withTitle('Procedure'),
        ];

        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    viewBFashItem(aData);
                });
            });
            return nRow;
        }

    });

}());
