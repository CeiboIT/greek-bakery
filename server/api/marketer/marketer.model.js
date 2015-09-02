'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var marketer = new Schema({
	'IDMarketer': { type: String, required: true, unique: true },
	'IDMarketer1': String,
	'IDMarketerCategory': { type: Schema.Types.String, ref: 'MarketerCategory' },
	'CompanyName': String,
	'AccountableSurName': String,
	'AccountableName': String,
	'Country': String,
	'Part': String,
	'City': String,
	'Section': String,
	'Address': String,
	'Telefon1': String,
	'Telefon2': String,
	'Telefon3': String,
	'Fax': String,
	'e-mail': String,
	'Text1': String,
	'Text2': String,
	'Text3': String,
	'No1': Number,
	'No2': Number,
	'No3': Number,
	'No4': Number,
	'Date1': Date,
	'Date2': Date,
	'Memo1': String,
	'YesNo1': Boolean,
	'YesNo2': Boolean,
	'storeControl': Array,
	'sortSupliers': Array,
	'storeSales': Array,
	'salesDates': Array,
	'dromologioPelates': Array
});

marketer.plugin(populatePlugin, {
    IDMarketerCategory: {
    	ref: 'MarketerCategory',
    	foreignKey: 'IDMarketerCategory',
    	localKey: 'IDMarketerCategory',
        singular: true
    },
    storeControl: {
    	ref: 'StoreControl',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: false
    },
    sortSupliers: {
    	ref: 'SortSuplier',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: false
    },
    storeSales: {
    	ref: 'StoreSale',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: false
    },
    salesDates: {
    	ref: 'SalesDate',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: false
    },
    dromologioPelates: {
    	ref: 'DromologioPelates',
    	foreignKey: 'IDMarketer',
    	localKey: 'IDMarketer',
        singular: false
    }
});

module.exports = mongoose.model('Marketer', marketer);
