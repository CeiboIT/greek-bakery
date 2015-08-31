(function () {
    'use strict';

    var Marketer = angular.module('marketer', []);

    Marketer.config(function ($stateProvider) {
        $stateProvider.state('marketer', {
            parent: 'layout',
            url: '/marketer',
            templateUrl: 'app/marketer/list.html',
            controller: 'marketerController as marketerController'
        });
    });

    Marketer.factory('viewMarketerItem', function viewItemFactory ($modal, entityService) {
        return function viewItem (item) {
            entityService.getCrudFor('marketer').get(item._id)
                .then(function (response) {
                    $modal.open({
                        templateUrl: 'app/marketer/view.html',
                        controller: function () {
                            var viewController = this;
                            viewController.item = response;
                        },
                        controllerAs: 'viewController'
                    });
                });
        };
    });

    Marketer.controller('marketerController',
        function ($scope, viewMarketerItem, DTOptionsBuilder, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('marketer');

        function rowCallback(nRow, aData) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    viewMarketerItem(aData);
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
            DTColumnBuilder.newColumn('IDMarketer').withTitle('Id'),
            DTColumnBuilder.newColumn('CompanyName').withTitle('CompanyName'),
            DTColumnBuilder.newColumn('Country').withTitle('Country'),
        ];

    });

}());
