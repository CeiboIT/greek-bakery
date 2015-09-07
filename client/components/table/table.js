(function () {

	'use strict';

	var Table = angular.module('table', []);
	
	Table.config(function () {
		// disable alert mode in dataTables
		$.fn.dataTableExt.sErrMode = function (err) {
			console.log(err);
		};
	});

	var defaultTableOptions = {
        searching: false,
        bLengthChange: false,
        pageLength: 20,
        processing: true
	};

	Table.factory('rowCallback', function ($rootScope) {
		return function (viewItemFn) {
			return function _rowCallback(nRow, aData) {
		        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
		        $('td', nRow).unbind('click');
		        $('td', nRow).bind('click', function() {
		            $rootScope.$apply(function() {
		                viewItemFn(aData);
		            });
		        });
		        return nRow;
	    	};
	    };
	});

	Table.factory('viewItemBuilder', function ($modal) {
		return function viewItem (opts) {
			var templateUrl =  opts.viewTemplateUrl,
			    service = opts.service;
			return function (item) {
				service.get(item._id)
				.then(function (response) {
			    	$modal.open({
			    		size: 'lg',
			    		templateUrl: templateUrl,
			    		controller: function () {
					    	var viewController = this;
					    	viewController.item = response;
				    	},
			    		controllerAs: 'viewController' });
				});
			};
	    };
	});

	Table.factory('createTable', function (DTOptionsBuilder, rowCallback, viewItemBuilder) {
		return function (opts) {
			var response = {};
			angular.extend(defaultTableOptions, opts.tableOptions);

			response = DTOptionsBuilder
				.fromFnPromise(function() {
	        		return opts.service.getAll();
	    		});

			_.forOwn(defaultTableOptions, function (value, key) {
				response.withOption(key, value);
			});

			var viewItemFn = viewItemBuilder(opts);
			response.withOption('rowCallback', rowCallback(viewItemFn));
		    return response;
		};
	});

}());
