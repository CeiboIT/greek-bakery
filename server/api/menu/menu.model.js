'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var menu = new Schema({
	'IDMenu': { type: String, required: true, unique: true },
	'Menu': String,
	'DateFinish': Date,
	'DateStart': Date,
    'menuSorts': Array,
    'menuOrders': Array
});

menu.plugin(populatePlugin, {
    menuSorts: {
        ref: 'MenuSorts',
        foreignKey: 'IDMenu',
        localKey: 'IDMenu',
        singular: false
    },
    menuOrders: {
        ref: 'MenuOrders',
        foreignKey: 'IDMenu',
        localKey: 'IDMenu',
        singular: false
    }
});

module.exports = mongoose.model('Menu', menu);
