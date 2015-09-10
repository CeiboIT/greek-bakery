(function () {
    'use strict';

    var Marketer = angular.module('marketer', []);

    Marketer.config(function ($stateProvider) {
        $stateProvider.state('marketer', {
            parent: 'layout',
            url: '/marketer',
            templateUrl: 'app/marketer/list.html',
            controller: 'MarketerController as MarketerController'
        });
    });

    var viewItemController = function (createViewTable, DTColumnBuilder, item) {
        var controller = this;
        controller.item = item;
        // Options for Fash materials table
        controller.dromoglioPelatesTable = {
            dtOptions: createViewTable({data: item.dromologioPelates}),
            dtColumns: [
                DTColumnBuilder.newColumn('Seira').withTitle('Seira'),
                DTColumnBuilder.newColumn('IDDromologio.Dromologio').withTitle('Dromoglio'),
            ]
        };

        controller.salesDateTable = {
            dtOptions: createViewTable({data: item.salesDates}),
            dtColumns: [
                DTColumnBuilder.newColumn('SalesDate').withTitle('SalesDate'),
                DTColumnBuilder.newColumn('SalesPrint').withTitle('Print')
            ]
        };

        controller.sortSupliersTable = {
            dtOptions: createViewTable({data: item.sortSupliers}),
            dtColumns: [
                DTColumnBuilder.newColumn('IDSort.SortDescr').withTitle('Sort'),
                DTColumnBuilder.newColumn('Basic').withTitle('Basic'),
                DTColumnBuilder.newColumn('Date').withTitle('Date'),
                DTColumnBuilder.newColumn('Price').withTitle('Price')
            ]
        };
        
    };
    
    viewItemController.$inject = ['createViewTable', 'DTColumnBuilder', 'item'];
    
    Marketer.controller('MarketerController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            service = entityService.getCrudFor('marketer');

        controller.dtOptions = createTable({
            service: service,
            viewTemplateUrl: 'app/marketer/view.html',
            viewController: viewItemController
        });

        controller.dtColumns = [
            DTColumnBuilder.newColumn('IDMarketer').withTitle('IDMarketer'),
            DTColumnBuilder.newColumn('CompanyName').withTitle('CompanyName'),
            DTColumnBuilder.newColumn('AccountableSurName').withTitle('AccountableSurName')
        ];

    });

}());
