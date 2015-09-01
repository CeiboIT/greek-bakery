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
                name: 'C_Fash',
                resource: 'cFash',
                state: 'cFash'
            },
            {
                name: 'Plant',
                resource: 'plant',
                state: 'plant'
            },
            {
                name: 'Machine',
                resource: 'machine',
                state: 'machine'
            },
            {
                name: 'Marketer',
                resource: 'marketer',
                state: 'marketer'
            },
            {
                name: 'Raws',
                resource: 'raw',
                state: 'raw'
            },
            {
                name: 'Parapono',
                resource: 'parapono',
                state: 'parapono'
            }
        ];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
