'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var generalDamage = new Schema({
    'IDGeneralDamage': { type: String, required: true, unique: true },
    'Year': String,
    'Refresh': String,
    'ProductionYearKg': String,
    'CapitalDepreciationEquip': String,
    'PercentagelDepreciationEquip': String,
    'CapitalDepreciationsBuildings': String,
    'PercentageDepreciationsBuildings': String,
    'HireDam': String,
    'EnergyDam': String,
    'ManagmentDam': String,
    'InsuranceDam': String,
    'ConsaltingDam': String,
    'MaintanceDam': String,
    'OverheadRest': String,
    'SalesPacDam': String,
    'StoresDam': String,
    'SalesmenDam': String,
    'CarsDam': String,
    'PromotionDam': String,
    'OverheadSales': String,
    'ServersDam': String,
    'SalesDepreciationCapital': String,
    'SalesDepreciationPercentage': String,
    'Text1': String,
    'Text2': String,
    'Text3': String,
    'No1': String,
    'No2': String,
    'No3': String,
    'Date1': String,
    'Date2': String,
    'Memo1': String,
    'YesNo1': String,
    'YesNo2': String
});

module.exports = mongoose.model('GeneralDamage', generalDamage);
