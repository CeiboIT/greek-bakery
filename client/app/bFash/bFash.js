(function () {
    'use strict';

    var BFash = angular.module('bFash', []);

    BFash.config(function ($stateProvider) {
        $stateProvider.state('bFash', {
            parent: 'layout',
            url: '/bFash',
            templateUrl: 'app/bFash/list.html',
            controller: 'BFashController as BFashController'
        });
    });

    var viewItemController = function (createViewTable, DTColumnBuilder, item) {
        var controller = this;
        controller.item = item;
        // Options for Fash materials table
        controller.materialsTable = {
            dtOptions: createViewTable({data: item.materials}),
            dtColumns: [
                DTColumnBuilder.newColumn('IDSort.SortDescr').withTitle('Sort'),
                DTColumnBuilder.newColumn('IDB_FASHQuantity').withTitle('Quantity'),
                DTColumnBuilder.newColumn('IDB_FASHLoose').withTitle('Loose'),
                DTColumnBuilder.newColumn('IDB_FASHRecipe').withTitle('Recipe'),
                DTColumnBuilder.newColumn('IDB_FASHDelete').withTitle('Delete')
            ]
        };
    };
    
    viewItemController.$inject = ['createViewTable', 'DTColumnBuilder', 'item'];

    BFash.controller('BFashController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('bFash');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/bFash/view.html',
            viewController: viewItemController
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('B_FASH_IDStorage').withTitle('ID Storage'),
            DTColumnBuilder.newColumn('B_FASH').withTitle('FASH')
        ];

    });

}());
