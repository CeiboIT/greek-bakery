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
		controller.materialsTable = {
			dtOptions: createViewTable({data: item.materials}),
			dtColumns: [
				DTColumnBuilder.newColumn('IDSort.SortDescr').withTitle('Sort'),
			]
		};
	};

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
