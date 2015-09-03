(function () {
	'use strict';

	var Store = angular.module('store', []);

	Store.config(function ($stateProvider) {
		$stateProvider.state('store', {
			parent: 'layout',
			url: '/store',
			templateUrl: 'app/store/list.html',
			controller: 'StoreController as StoreController'
		});
	});

	Store.controller('StoreController',
		function ($scope, DTOptionsBuilder, DTColumnBuilder) {

		var controller = this;
		
		controller.dtOptions = DTOptionsBuilder.newOptions()
       		.withOption('ajax', {
		         url: '/api/store',
     		})
     		.withOption('processing', true)
		    .withOption('serverSide', true)
		    .withOption('searching', false)
        	.withOption('bLengthChange', false)
        	.withOption('pageLength', 20)
        	.withDataProp('data');

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('IDStoreSales').withTitle('IDStoreSales'),
	        DTColumnBuilder.newColumn('IDMarketer').withTitle('IDMarketer'),
	        DTColumnBuilder.newColumn('Date').withTitle('Date')
	    ];
     	
	});

}());
