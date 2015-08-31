'use strict';

angular.module('bakeryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'datatables',
  'restangular',
  'restServices',
  'table',
  'aFash',
  'bFash',
  'cFash',
  'plant',
  'machine',
  'marketer',
  'raw',
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);

        $stateProvider.state('layout', {
            abstract: true,
            templateUrl: 'app/layout/layout.html'
        });
    });
