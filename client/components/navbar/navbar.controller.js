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
        title: 'evaluation',
        link: '/evaluation'
      },
      {
        title: 'machine',
        link: 'machine'
      },
      {
        title: 'marketer',
        link: 'marketer'
      },
      {
        title: 'menu',
        link: 'menu'
      },
      {
        title: 'parapono',
        link: 'parapono'
      },
      {
        title: 'plant',
        link: 'plant'
      },
      {
        title: 'raws',
        link: 'raws'
      },
      {
        title: 'techInfo',
        link: 'techInfo'
      },
      {
        title: 'worker',
        link: 'worker'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
