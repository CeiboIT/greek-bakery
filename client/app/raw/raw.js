(function () {
	'use strict';

	var Raw = angular.module('raw', []);

	Raw.config(function ($stateProvider) {
		$stateProvider.state('raw', {
			parent: 'layout',
			url: '/raw',
			templateUrl: 'app/raw/list.html',
			controller: 'RawController as RawController'
		});
	});

	Raw.controller('RawController',
		function ($scope, createTable, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('raw');

		controller.dtOptions = createTable({
			service: service,
			viewTemplateUrl: 'app/raw/view.html'
		});

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('Raw').withTitle('Raw'),
	        DTColumnBuilder.newColumn('Choice').withTitle('Choice'),
	        DTColumnBuilder.newColumn('IDCategory.Category').withTitle('Sort category')
	    ];
     	
	});

}());
