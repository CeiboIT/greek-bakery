'use strict';

angular.module('bakeryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.grid',
  'restangular',
  'restServices',
  'aFash'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider
          .otherwise('/');

      $locationProvider.html5Mode(true);

      $stateProvider.state('layout', {
        abstract: true,
        templateUrl: 'layout/layout.html'
      });
  });
