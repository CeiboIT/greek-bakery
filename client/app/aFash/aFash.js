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

	AFash.controller('AFashController',
		function ($scope, createTable, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('aFash');

		controller.dtOptions = createTable({
			service: service,
			viewTemplateUrl: 'app/aFash/view.html'
		});

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('A_FASH_IDStorage').withTitle('A_FASH_IDStorage'),
	        DTColumnBuilder.newColumn('A_FASH').withTitle('A_FASH')
	    ];

	});

}());
