(function () {
	'use strict';

	var AFash = angular.module('aFash', []);

	AFash.config(function ($stateProvider) {
		$stateProvider.state('aFash', {
			url: '/aFash',
			templateUrl: 'app/aFash/list.html',
			controller: 'aFashController as aFashController'
		});
	});

	AFash.controller('aFashController', function ($q, $scope, entityService) {
		var controller = this,
			service = entityService.getCrudFor('aFash');
			controller.gridOptions = {};

		controller.gridOptions.columnDefs = 
			[{displayName: 'Fash', field: 'A_FASH'}, 
			 {displayName: 'Procedure', field: 'A_FASHProcedure'},
			 {displayName: 'Storeage Id', field: 'A_FASH_IDStorage'},
			 {displayName: 'Yield', field: 'A_FASHYield'},
			 {displayName: 'PW', field: 'A_FASH_PW'},
			 {displayName: 'Scrap', field: 'A_FASHScrap'},
			 {displayName: 'Basic', field: 'A_FASHBasic'},
			 {displayName: 'Delete', field: 'A_FASHDelete'},
			 {displayName: 'Print', field: 'A_FASHPrint'},
			];

		service.getAll()
			.then(function (data) {
				// $scope.gridOptions = {data: data};
				controller.gridOptions.data = data;
			});

		// controller.gridOptions = 
		// { data: [
		//     {
		//         'firstName': 'Cox',
		//         'lastName': 'Carney',
		//         'company': 'Enormo',
		//         'employed': true
		//     },
		//     {
		//         'firstName': 'Lorraine',
		//         'lastName': 'Wise',
		//         'company': 'Comveyer',
		//         'employed': false
		//     },
		//     {
		//         'firstName': 'Nancy',
		//         'lastName': 'Waters',
		//         'company': 'Fuelton',
		//         'employed': false
		//     }
		// ]};

	});

}());