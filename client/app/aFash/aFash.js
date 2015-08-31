(function () {
	'use strict';

	var AFash = angular.module('aFash', []);

	AFash.config(function ($stateProvider) {
		$stateProvider.state('aFash', {
			parent: 'layout',
			url: '/aFash',
			templateUrl: 'app/aFash/list.html',
			controller: 'aFashController as aFashController'
		});
	});

	AFash.factory('viewAFashItem', function viewItemFactory ($modal, entityService) {
		return function viewItem (item) {
			entityService.getCrudFor('aFash').get(item._id)
				.then(function (response) {
			    	$modal.open({
					    templateUrl: 'app/aFash/view.html',
					    controller: function () {
					    	var viewController = this;
					    	viewController.item = response;
					    },
					    controllerAs: 'viewController'
				    });
				});
	    };
	});

	AFash.controller('aFashController',
		function ($scope, viewAFashItem, DTOptionsBuilder, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('aFash');

		function rowCallback(nRow, aData) {
	        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
	        $('td', nRow).unbind('click');
	        $('td', nRow).bind('click', function() {
	            $scope.$apply(function() {
	                viewAFashItem(aData);
	            });
	        });
	        return nRow;
	    }

		controller.dtOptions = DTOptionsBuilder
			.fromFnPromise(function() {
	        	return service.getAll();
	    	})
	    	.withPaginationType('full_numbers')
	    	.withOption('rowCallback', rowCallback);

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('A_FASH_IDStorage').withTitle('IdStorage'),
	        DTColumnBuilder.newColumn('A_FASH').withTitle('Fash'),
	        DTColumnBuilder.newColumn('A_FASHProcedure').withTitle('Procedure'),
	    ];

	});

}());
