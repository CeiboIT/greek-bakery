'use strict';

var mongoose = require('mongoose');
var populatePlugin = require('mongoose-power-populate')(mongoose);
var Schema = mongoose.Schema;

var menuCustomFind = new Schema({
	'IDMenuCustFind': { type: String, required: true, unique: true },
	'MenuCustFind': String,
    'menuOrders': Array
});

menu.plugin(populatePlugin, {
    menuOrders: {
        ref: 'MenuOrders',
        foreignKey: 'IDMenuCustFind',
        localKey: 'IDMenuCustFind',
        singular: false
    }
});

module.exports = mongoose.model('MenuCustomFind', menuCustomFind);
