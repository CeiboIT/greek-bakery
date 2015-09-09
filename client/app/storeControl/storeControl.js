(function () {
	'use strict';

	var StoreControl = angular.module('storeControl', []);

	StoreControl.config(function ($stateProvider) {
		$stateProvider.state('storeControl', {
			parent: 'layout',
			url: '/storeControl',
			templateUrl: 'app/storeControl/list.html',
			controller: 'StoreControlController as StoreControlController'
		});
	});

	StoreControl.controller('StoreControlController',
		function ($scope, createTable, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('store/control');

		controller.dtOptions = createTable({
			service: service,
			viewTemplateUrl: 'app/storeControl/view.html'
		});

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('IDStoreControl').withTitle('Id'),
	        DTColumnBuilder.newColumn('IDMarketer.IDMarketer').withTitle('Id marketer'),
	        DTColumnBuilder.newColumn('NoApod').withTitle('NoApod'),
	        DTColumnBuilder.newColumn('Date').withTitle('Date'),
	      	DTColumnBuilder.newColumn('Incam').withTitle('Incam')
	    ];
     	
	});

}());
