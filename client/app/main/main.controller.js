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
                name: 'Evaluation',
                resource: 'evaluation',
                state: 'evaluation'
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
/*
            {
                name: 'Menu',
                resource: 'menu',
                state: 'menu'
            },
*/
            {
                name: 'Parapono',
                resource: 'parapono',
                state: 'parapono'
            },
            {
                name: 'Plant',
                resource: 'plant',
                state: 'plant'
            },
            {
                name: 'Raws',
                resource: 'raw',
                state: 'raw'
            },
            {
                name: 'TechInfo',
                resource: 'techInfo',
                state: 'techInfo'
            },
            {
                name: 'Worker',
                resource: 'worker',
                state: 'worker'
            }
        ];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
