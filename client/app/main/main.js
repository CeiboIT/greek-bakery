'use strict';

angular.module('bakeryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
      	parent: 'layout',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      });
  });