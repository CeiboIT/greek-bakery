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

	Store.factory('viewStoreSaleItem', function ($modal, entityService) {
		return function (item) {
			entityService.getCrudFor('store/sale')
				.get(item._id)
				.then(function (response) {
		    		$modal.open({
		    			templateUrl: 'app/store/view.html',
		    			controller: function () {
				    		var viewController = this;
				    		viewController.item = response;
			    		},
		    			controllerAs: 'viewController' 
		    		});
				});
		};
	});

	Store.controller('StoreController',
		function ($scope, viewStoreSaleItem, entityService, DTOptionsBuilder, 
			DTColumnBuilder) {

		var controller = this;

		function _rowCallback(nRow, aData) {
	        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
	        $('td', nRow).unbind('click');
	        $('td', nRow).bind('click', function() {
	            $scope.$apply(function() {
	                viewStoreSaleItem(aData);
	            });
	        });
	        return nRow;
    	}
		
		controller.dtOptions = DTOptionsBuilder.newOptions()
       		.withOption('ajax', {
		         url: '/api/store/sale',
     		})
     		.withOption('processing', true)
		    .withOption('serverSide', true)
		    .withOption('searching', false)
        	.withOption('bLengthChange', false)
        	.withOption('pageLength', 20)
        	.withOption('rowCallback', _rowCallback)
        	.withDataProp('data');

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('IDStoreSales').withTitle('IDStoreSales'),
	        DTColumnBuilder.newColumn('IDMarketer').withTitle('IDMarketer'),
	        DTColumnBuilder.newColumn('Date').withTitle('Date')
	    ];
	});

}());
