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

	// Raw.factory('viewRawItem', function viewItemFactory ($modal, entityService) {
	// 	return function viewItem (item) {
	// 		entityService.getCrudFor('raw').get(item._id)
	// 			.then(function (response) {
	// 		    	$modal.open({
	// 				    templateUrl: 'app/raw/view.html',
	// 				    controller: function () {
	// 				    	var viewController = this;
	// 				    	viewController.item = response;
	// 				    },
	// 				    controllerAs: 'viewController'
	// 			    });
	// 			});
	//     };
	// });
	
	Raw.controller('RawController',
		function ($scope, createTable, DTColumnBuilder, entityService) {

		var controller = this,
			service = entityService.getCrudFor('raw');

		// function rowCallback(nRow, aData) {
	 //        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
	 //        $('td', nRow).unbind('click');
	 //        $('td', nRow).bind('click', function() {
	 //            $scope.$apply(function() {
	 //                viewRawItem(aData);
	 //            });
	 //        });
	 //        return nRow;
	 //    }

		controller.dtOptions = createTable({
			service: service,
			viewTemplateUrl: 'app/raw/view.html'
		});

		// DTOptionsBuilder
		// 	.fromFnPromise(function() {
	 //        	return service.getAll();
	 //    	})
  //           .withOption('searching', false)
  //           .withOption('bLengthChange', false)
  //           .withOption('pageLength', 20)
	 //    	.withOption('rowCallback', rowCallback);

	    controller.dtColumns = [
	        DTColumnBuilder.newColumn('Raw').withTitle('Raw'),
	        DTColumnBuilder.newColumn('Choice').withTitle('Choice'),
	        DTColumnBuilder.newColumn('IDCategory.Category').withTitle('Sort category')
	    ];
     	
	});

}());
