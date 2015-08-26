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
                name: 'B_Fash',
                resource: 'bFash',
                state: 'bFash'
            },
            {
                name: 'B_Fash',
                resource: 'bFash',
                state: 'bFash'
            }
        ];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
