(function () {
	'use strict';

	var Plant = angular.module('plant', []);

	Plant.config(function ($stateProvider) {
		$stateProvider.state('plant', {
			parent: 'layout',
			url: '/plant',
			templateUrl: 'app/plant/list.html',
			controller: 'PlantController as plantController'
		});
	});

	Plant.factory('viewItem', function viewItemFactory ($modal, entityService) {
		return function viewItem (item) {
			entityService.getCrudFor('plant').get(item._id)
				.then(function (response) {
			    	$modal.open({
					    templateUrl: 'app/plant/view.html',
					    controller: function () {
					    	var viewController = this;
					    	viewController.item = response;
					    },
					    controllerAs: 'viewController'
				    });
				});
	    };		
	});

	Plant.controller('PlantController', 
		function ($scope, viewItem, DTOptionsBuilder, DTColumnBuilder, entityService) {
		
		var controller = this,
			service = entityService.getCrudFor('plant');
		service.getAll()
			.then(function (plants) {
				controller.plant = plants[0];
			});
	});

}());