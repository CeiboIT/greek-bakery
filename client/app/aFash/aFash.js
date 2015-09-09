(function () {
	'use strict';

	var AFash = angular.module('aFash', []);

	AFash.config(function ($stateProvider) {
		$stateProvider.state('aFash', {
			parent: 'layout',
			url: '/aFash',
			templateUrl: 'app/aFash/list.html',
			controller: 'AFashController as AFashController'
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
	};
	
	viewItemController.$inject = ['createViewTable', 'DTColumnBuilder', 'item'];

	AFash.controller('AFashController',
		function (createTable, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('aFash');

		controller.dtOptions = createTable({
			service: service,
			viewTemplateUrl: 'app/aFash/view.html',
			viewController: viewItemController
		});

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('A_FASH_IDStorage').withTitle('A_FASH_IDStorage'),
	        DTColumnBuilder.newColumn('A_FASH').withTitle('A_FASH')
	    ];

	});

}());
