'use strict';

angular.module('bakeryApp')
    .controller('MainCtrl', function ($state) {
        var main = this;
        main.entities = [
            {
                name: 'A Fash',
                resource: 'aFash',
                state: 'aFash'
            },
            {
                name: 'B Fash',
                resource: 'bFash',
                state: 'bFash'
            },
            {
                name: 'C Fash',
                resource: 'cFash',
                state: 'cFash'
            },
            {
                name: 'Dromologio Pelates',
                resource: 'dromologio',
                state: 'dromologio'
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
                name: 'Store',
                resource: 'store',
                state: 'store'  
            },
            {
                name: 'StoreControl',
                resource: 'storeControl',
                state: 'storeControl'  
            },
            {
                name: 'Tech Info',
                resource: 'techInfo',
                state: 'techInfo'
            },
            {
                name: 'Worker',
                resource: 'worker',
                state: 'worker'
            },
            {
                name: 'Reference Values',
                resource: 'referenceValues',
                state: 'referenceValues'
            }
        ];

        main.viewEntity = function (entity) {
            $state.go(entity.state);
        };

  });
