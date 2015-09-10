(function () {
    'use strict';

    var ReferenceValues = angular.module('referenceValues', []);

    ReferenceValues.config(function ($stateProvider) {
        $stateProvider.state('referenceValues', {
            parent: 'layout',
            url: '/referenceValues',
            templateUrl: 'app/referenceValues/list.html',
            controller: 'ReferenceValuesController as ReferenceValuesController'
        });
    });

    ReferenceValues.controller('ReferenceValuesController',
        function ($scope, createTable, DTColumnBuilder, entityService) {

        var controller = this,
            adviceService = entityService.getCrudFor('advice'),
            caloriesService = entityService.getCrudFor('calories'),
            GDAService = entityService.getCrudFor('GDA'),
            switchboardService = entityService.getCrudFor('switchboard'),
            labelService = entityService.getCrudFor('label'),
            prodDateService = entityService.getCrudFor('prodDate'),
            prodProcudeursService = entityService.getCrudFor('prodProcudeurs'),
            programService = entityService.getCrudFor('program'),
            WPService = entityService.getCrudFor('WP'),
            yearService = entityService.getCrudFor('year'),
            generalDamageService = entityService.getCrudFor('generalDamage');

    // Advice table
        controller.dtOptionsAdvice = createTable({
            service: adviceService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsAdvice = [
            DTColumnBuilder.newColumn('IdAdvice').withTitle('IdAdvice'),
            DTColumnBuilder.newColumn('Advice').withTitle('Advice'),
        ];

    // Calories table
        controller.dtOptionsCalories = createTable({
            service: caloriesService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsCalories = [
            DTColumnBuilder.newColumn('IDCal').withTitle('IDCal'),
            DTColumnBuilder.newColumn('Cal').withTitle('Cal'),
        ];

    // GDA table
        controller.dtOptionsGDA = createTable({
            service: GDAService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsGDA = [
            DTColumnBuilder.newColumn('IDGDA').withTitle('IDGDA'),
            DTColumnBuilder.newColumn('Salt').withTitle('Salt'),
            DTColumnBuilder.newColumn('KCal').withTitle('KCal'),
            DTColumnBuilder.newColumn('Proteins').withTitle('Proteins'),
            DTColumnBuilder.newColumn('Carbohydrates').withTitle('Carbohydrates'),
            DTColumnBuilder.newColumn('Sugars').withTitle('Sugars'),
            DTColumnBuilder.newColumn('Fats').withTitle('Fats'),
            DTColumnBuilder.newColumn('SatFats').withTitle('SatFats'),
            DTColumnBuilder.newColumn('Fibres').withTitle('Fibres'),
            DTColumnBuilder.newColumn('Sodium').withTitle('Sodium'),
        ];

    // Switchboard table
        controller.dtOptionsSwitchboard = createTable({
            service: switchboardService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsSwitchboard = [
            DTColumnBuilder.newColumn('SwitchboardID').withTitle('SwitchboardID'),
            DTColumnBuilder.newColumn('Argument').withTitle('Argument'),
            DTColumnBuilder.newColumn('ItemNumber').withTitle('ItemNumber'),
            DTColumnBuilder.newColumn('ItemText').withTitle('ItemText'),
            DTColumnBuilder.newColumn('Command').withTitle('Command'),
        ];

    // GeneralDamage table
        controller.dtOptionsGeneralDamage = createTable({
            service: generalDamageService,
            viewTemplateUrl: 'app/referenceValues/view_generalDamage.html'
        });

        controller.dtColumnsGeneralDamage = [
            DTColumnBuilder.newColumn('IDGeneralDamage').withTitle('IDGeneralDamage'),
            DTColumnBuilder.newColumn('ProductionYearKg').withTitle('ProductionYearKg'),
            DTColumnBuilder.newColumn('CapitalDepreciationEquip').withTitle('CapitalDepreciationEquip'),
            DTColumnBuilder.newColumn('CapitalDepreciationsBuildings').withTitle('CapitalDepreciationsBuildings')
        ];

    // Label table
        controller.dtOptionsLabel = createTable({
            service: labelService,
            viewTemplateUrl: 'app/referenceValues/view_label.html'
        });

        controller.dtColumnsLabel = [
            DTColumnBuilder.newColumn('IDLabel').withTitle('IDLabel'),
            DTColumnBuilder.newColumn('SortDescrLabel').withTitle('SortDescrLabel'),
            DTColumnBuilder.newColumn('SubCtegoryLabel').withTitle('SubCtegoryLabel'),
            DTColumnBuilder.newColumn('Compotiton').withTitle('Compotiton'),
            DTColumnBuilder.newColumn('Producer').withTitle('Producer'),
        ];

    // ProdDate table
        controller.dtOptionsProdDate = createTable({
            service: prodDateService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsProdDate = [
            DTColumnBuilder.newColumn('IDProdDate').withTitle('ID ProdDate'),
            DTColumnBuilder.newColumn('Date').withTitle('Date'),
            DTColumnBuilder.newColumn('Print').withTitle('Print'),
            DTColumnBuilder.newColumn('PrDateSxolia').withTitle('PrDate Sxolia'),
        ];

    // ProdProcudeurs table
        controller.dtOptionsProdProcudeurs = createTable({
            service: prodProcudeursService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsProdProcudeurs = [
            DTColumnBuilder.newColumn('IdProdProcudeurs').withTitle('ID ProdProcudeurs'),
            DTColumnBuilder.newColumn('ProdProcudeurs').withTitle('ProdProcudeurs'),
            DTColumnBuilder.newColumn('ProdProcudeursCateg').withTitle('ProdProcudeursCateg'),
        ];

    // Program table
        controller.dtOptionsProgram = createTable({
            service: programService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsProgram = [
            DTColumnBuilder.newColumn('IDProgram').withTitle('ID Program'),
            DTColumnBuilder.newColumn('Date').withTitle('Date'),
            DTColumnBuilder.newColumn('Print').withTitle('Print'),
        ];

    // WP table
        controller.dtOptionsWP = createTable({
            service: WPService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsWP = [
            DTColumnBuilder.newColumn('IDWP').withTitle('ID WP'),
            DTColumnBuilder.newColumn('WP').withTitle('WP'),
            DTColumnBuilder.newColumn('IDSection').withTitle('ID Section'),
        ];

    // Year table
        controller.dtOptionsYear = createTable({
            service: yearService,
            //viewTemplateUrl: 'app/referenceValues/view.html'
        });

        controller.dtColumnsYear = [
            DTColumnBuilder.newColumn('IDYear').withTitle('ID Year'),
            DTColumnBuilder.newColumn('Date').withTitle('Date'),
        ];

    });

}());
