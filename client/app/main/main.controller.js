'use strict';

angular.module('bakeryApp')
    .controller('MainCtrl', function ($state) {
        var main = this;
        main.entities = [
            {
                name: 'A_Fash',
                resource: 'aFash',
                state: 'aFash'
            },
            {
                name: 'Machine',
                resource: 'machine',
                state: 'machine'
            },
        ];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
