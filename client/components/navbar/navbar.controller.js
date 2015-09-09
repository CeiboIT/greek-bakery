'use strict';

angular.module('bakeryApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'aFash',
        link: '/aFash'
      },
      {
        title: 'bFash',
        link: '/bFash'
      },
      {
        title: 'cFash',
        link: '/cFash'
      },
      {
        title: 'Evaluation',
        link: '/evaluation'
      },
      {
        title: 'Machine',
        link: 'machine'
      },
      {
        title: 'Marketer',
        link: 'marketer'
      },
      {
        title: 'Menu',
        link: 'menu'
      },
      {
        title: 'Parapono',
        link: 'parapono'
      },
      {
        title: 'Plant',
        link: 'plant'
      },
      {
        title: 'Raw',
        link: 'raw'
      },
      {
        title: 'Reference Values',
        link: 'referenceValues'
      },
      {
        title: 'Tech Info',
        link: 'techInfo'
      },
      {
        title: 'Worker',
        link: 'worker'
      },
      {
        title: 'Store sales',
        link: 'store'
      },
      {
        title: 'Store control',
        link: 'storeControl'
      },
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
