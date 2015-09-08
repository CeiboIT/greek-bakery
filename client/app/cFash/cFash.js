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

    var viewItemController = function (createViewTable, DTColumnBuilder, item) {
        var controller = this;
        controller.item = item;
        // Options for Fash materials table
        controller.materialsTable = {
            dtOptions: createViewTable({data: item.materials}),
            dtColumns: [
                DTColumnBuilder.newColumn('IDSort.SortDescr').withTitle('Sort'),
                DTColumnBuilder.newColumn('Sxolia').withTitle('Sxolia'),
                DTColumnBuilder.newColumn('IDA_FASHQuantity').withTitle('Quantity'),
                DTColumnBuilder.newColumn('IDA_FASHLoose').withTitle('Loose'),
                DTColumnBuilder.newColumn('IDA_FASHRecipe').withTitle('Recipe'),
                DTColumnBuilder.newColumn('IDA_FASHDelete').withTitle('Delete')
            ]
        };

        controller.materialsYSTable = {
            dtOptions: createViewTable({data: item.materialsYS}),
            dtColumns: [
                DTColumnBuilder.newColumn('IDSort.SortDescr').withTitle('Sort'),
                DTColumnBuilder.newColumn('Sxolia').withTitle('Sxolia'),
                DTColumnBuilder.newColumn('IDA_FASHQuantity').withTitle('Quantity'),
                DTColumnBuilder.newColumn('IDA_FASHLoose').withTitle('Loose'),
                DTColumnBuilder.newColumn('IDA_FASHRecipe').withTitle('Recipe'),
                DTColumnBuilder.newColumn('IDOperation.Operation').withTitle('Operation')
            ]
        };

    };
    
    viewItemController.$inject = ['createViewTable', 'DTColumnBuilder', 'item'];


    CFash.controller('CFashController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('cFash');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/cFash/view.html',
            viewController: viewItemController
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('C_FASH_IDStorage').withTitle('C_FASH_IDStorage'),
            DTColumnBuilder.newColumn('C_FASH').withTitle('C_FASH')
        ];

    });

}());
