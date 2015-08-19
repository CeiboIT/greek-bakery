'use strict';

angular.module('bakeryApp')
    .controller('MainCtrl', function ($state) {
        var main = this;
        main.entities = [
        {
            name: 'A_Fash',
            resource: 'aFash',
            state: 'aFash'
        }];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
